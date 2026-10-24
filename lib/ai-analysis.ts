import 'server-only';
import { z } from 'zod';
import { assignSchedule } from './result-insights';
import { JOB_LIBRARY, RESOURCE_LIBRARY, SKILL_DICTIONARY } from './rule-engine';
import type { AnalyzeRequest, AnalyzeResponse, LearningPlanStep } from './types';

/** Sentinel the model returns when it has no evidence for a field. */
const INSUFFICIENT = '依据不足';

const DEFAULT_BASE_URL = 'https://api.openai.com/v1';
const DEFAULT_MODEL = 'gpt-4o-mini';
const DEFAULT_TIMEOUT_MS = 12_000;

const AiExtractedSkillSchema = z.object({
  name: z.string().trim().min(1).max(60),
  evidence: z.string().trim().min(1).max(240),
});

const AiRoleReasonsSchema = z.object({
  title: z.string().trim().min(1).max(80),
  reasons: z.array(z.string().trim().min(1).max(240)).min(1).max(2),
});

const AiAnalysisSchema = z.object({
  extractedSkills: z.array(AiExtractedSkillSchema).min(1).max(30),
  roleReasons: z.array(AiRoleReasonsSchema).min(1).max(10),
  learningOrder: z.array(z.string().trim().min(1).max(60)).max(30),
});

type AiAnalysis = z.infer<typeof AiAnalysisSchema>;

const SYSTEM_PROMPT = `你是「职场人士 AI 技能转型导航」原型中的结构化分析助手。

规则引擎已经算好技能集合、岗位分数、技能差距和学习步骤，你不要改动它们。你只能完成以下三件事：
1. 为 ruleBaseline.extractedSkills 中的每个技能补写更具体、更贴合原话的证据。
2. 为 ruleBaseline.recommendedRoles 中的每个岗位写 1–2 句迁移理由。
3. 根据 profile.weeklyStudyHours，把 ruleBaseline.learningOrder 中的学习步骤重新排出顺序。

硬性约束：
- 只能引用输入 JSON 中的 profile、jobLibrary、resourceLibrary 和 skillDictionary。
- 不得编造岗位名称、课程名称、课程链接、趋势数据或统计数字。
- 不得输出新的岗位、课程、链接、分数、百分比或统计数字。
- 不得增加、删除或改名 extractedSkills 中的技能，技能名称必须与 ruleBaseline.extractedSkills 完全一致。
- 不得修改 matchScore、matchedSkills、missingSkills、taskChanges、skillGaps、sdgLinks、scenarioNote。
- 不得输出或修改 changeType、interestMatches、experienceFit、category、neededBy、weekStart/weekEnd/phase、metrics、methodology 等派生字段，它们由系统计算。
- learningOrder 只能使用 ruleBaseline.learningOrder 中出现过的技能，不能增加或删除。
- 如果某个字段找不到依据，就把该字段的值原样写成字符串 "依据不足"，系统会保留规则结果。
- 只返回一个 JSON 对象，不要 markdown 代码块，不要解释文字。

返回 JSON 结构：
{
  "extractedSkills": [{ "name": "与基线一致的技能名", "evidence": "来自 profile 的依据" }],
  "roleReasons": [{ "title": "岗位名称", "reasons": ["1–2 句迁移理由"] }],
  "learningOrder": ["技能名"]
}

字段要求：
- extractedSkills 的 name 必须与 ruleBaseline.extractedSkills 一一对应，不能重复。
- roleReasons 必须覆盖 ruleBaseline.recommendedRoles 的全部 title，每个岗位 1–2 条理由。
- learningOrder 必须与 ruleBaseline.learningOrder 是同一组技能，只调整顺序；每周学习时间少时优先安排耗时短的步骤，每周学习时间多时可以优先安排核心课程。`;

export async function enhanceAnalysisWithAi(
  input: AnalyzeRequest,
  ruleResult: AnalyzeResponse,
): Promise<AnalyzeResponse | null> {
  if (!process.env.AI_API_KEY) {
    warnMissingKeyOnce();
    return null;
  }

  // The model may only reword existing skills, so an empty baseline has nothing to enhance.
  if (ruleResult.extractedSkills.length === 0) {
    return null;
  }

  try {
    const aiOutput = await requestAiAnalysis(input, ruleResult);
    if (!aiOutput) {
      return null;
    }

    if (!isSemanticallyValid(aiOutput, ruleResult)) {
      console.warn('[analyze] AI output failed semantic validation; using rule-based result.');
      return null;
    }

    const expectedOrder = ruleResult.learningPlan.map((step) => step.skillGap);
    if (!isSameStringSet(aiOutput.learningOrder, expectedOrder)) {
      console.warn(
        '[analyze] AI learning order does not match rule-derived gaps; using rule-based result.',
      );
      return null;
    }

    const reasonsByTitle = new Map(
      aiOutput.roleReasons.map((role) => [role.title, role.reasons] as const),
    );
    if (ruleResult.recommendedRoles.some((role) => !reasonsByTitle.has(role.title))) {
      console.warn('[analyze] AI reasons do not cover every role; using rule-based result.');
      return null;
    }

    const baselineEvidence = new Map(
      ruleResult.extractedSkills.map((skill) => [skill.name, skill.evidence] as const),
    );

    // Scores, gaps and resources stay exactly as the rule engine produced them.
    const extractedSkills = ruleResult.extractedSkills.map((skill) => {
      const aiSkill = aiOutput.extractedSkills.find((item) => item.name === skill.name);
      if (!aiSkill || aiSkill.evidence === INSUFFICIENT) {
        return skill;
      }
      return { name: skill.name, evidence: aiSkill.evidence };
    });

    const stepsBySkill = new Map(
      ruleResult.learningPlan.map((step) => [step.skillGap, step] as const),
    );
    const reorderedPlan: LearningPlanStep[] = [];

    for (const skill of aiOutput.learningOrder) {
      const step = stepsBySkill.get(skill);
      if (!step) {
        return null;
      }
      reorderedPlan.push(step);
    }

    const recommendedRoles = ruleResult.recommendedRoles.map((role) => {
      const sourceReasons = role.reasons.filter((reason) => reason.startsWith('需求依据：'));
      const baselineReasons = role.reasons.filter((reason) => !reason.startsWith('需求依据：'));
      const aiReasons = (reasonsByTitle.get(role.title) ?? []).filter(
        (reason) => reason !== INSUFFICIENT,
      );

      return {
        ...role,
        reasons: [...(aiReasons.length > 0 ? aiReasons : baselineReasons), ...sourceReasons],
      };
    });

    // AI 只改了顺序，周区间需要按新顺序重排，避免出现「第 10 周」排在「第 1 周」前面
    const learningPlan = assignSchedule(reorderedPlan, input.weeklyStudyHours);
    const totalWeeks = learningPlan.length > 0 ? learningPlan[learningPlan.length - 1].weekEnd : 0;

    return {
      ...ruleResult,
      extractedSkills,
      recommendedRoles,
      learningPlan,
      metrics: ruleResult.metrics ? { ...ruleResult.metrics, totalWeeks } : ruleResult.metrics,
    };
  } catch (error) {
    console.warn(
      '[analyze] AI enhancement failed; using rule-based result.',
      error instanceof Error ? error.message : error,
    );
    return null;
  }
}

async function requestAiAnalysis(
  input: AnalyzeRequest,
  ruleResult: AnalyzeResponse,
): Promise<AiAnalysis | null> {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    return null;
  }

  const baseUrl = (process.env.AI_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const timeoutMs = getTimeoutMs();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: buildUserPrompt(input, ruleResult) },
        ],
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.warn(`[analyze] AI request returned HTTP ${response.status}; using rule-based result.`);
      return null;
    }

    const payload: unknown = await response.json();
    const content = extractMessageContent(payload);
    if (!content) {
      return null;
    }

    const parsed = parseJsonObject(content);
    if (!parsed) {
      console.warn('[analyze] AI response was not valid JSON; using rule-based result.');
      return null;
    }

    const validated = AiAnalysisSchema.safeParse(parsed);
    if (!validated.success) {
      console.warn('[analyze] AI response failed Zod validation; using rule-based result.');
      return null;
    }

    return validated.data;
  } finally {
    clearTimeout(timeout);
  }
}

function buildUserPrompt(input: AnalyzeRequest, ruleResult: AnalyzeResponse): string {
  const payload = {
    profile: {
      currentRole: input.currentRole,
      dailyTasks: input.dailyTasks,
      existingSkills: input.existingSkills,
      experienceYears: input.experienceYears,
      interests: input.interests,
      weeklyStudyHours: input.weeklyStudyHours,
      scenario: input.scenario,
    },
    skillDictionary: SKILL_DICTIONARY.map((skill) => ({
      name: skill.name,
      keywords: skill.keywords,
      priority: skill.priority,
      dataAnalysis: Boolean(skill.dataAnalysis),
    })),
    jobLibrary: JOB_LIBRARY,
    resourceLibrary: RESOURCE_LIBRARY,
    ruleBaseline: {
      extractedSkills: ruleResult.extractedSkills,
      recommendedRoles: ruleResult.recommendedRoles.map((role) => ({
        title: role.title,
        matchScore: role.matchScore,
        matchedSkills: role.matchedSkills,
        missingSkills: role.missingSkills,
      })),
      learningOrder: ruleResult.learningPlan.map((step) => step.skillGap),
    },
  };

  return `输入数据（JSON）：\n${JSON.stringify(payload, null, 2)}\n\n请只返回符合系统要求的 JSON 对象。`;
}

function isSemanticallyValid(output: AiAnalysis, ruleResult: AnalyzeResponse): boolean {
  const knownSkills = new Set(SKILL_DICTIONARY.map((skill) => skill.name));
  const extractedNames = output.extractedSkills.map((skill) => skill.name);
  const baselineNames = ruleResult.extractedSkills.map((skill) => skill.name);

  if (new Set(extractedNames).size !== extractedNames.length) {
    return false;
  }
  if (extractedNames.some((name) => !knownSkills.has(name))) {
    return false;
  }
  // The model may refine evidence, but it must not add or drop skills.
  if (!isSameStringSet(extractedNames, baselineNames)) {
    return false;
  }
  if (output.extractedSkills.some((skill) => hasUnsupportedClaim(skill.evidence))) {
    return false;
  }

  const expectedTitles = ruleResult.recommendedRoles.map((role) => role.title).sort();
  const actualTitles = output.roleReasons.map((role) => role.title).sort();

  if (
    expectedTitles.length !== actualTitles.length ||
    expectedTitles.some((title, index) => title !== actualTitles[index])
  ) {
    return false;
  }

  return output.roleReasons.every(
    (role) =>
      new Set(role.reasons).size === role.reasons.length &&
      role.reasons.every((reason) => !hasUnsupportedClaim(reason)),
  );
}

function hasUnsupportedClaim(value: string): boolean {
  if (value === INSUFFICIENT) {
    return false;
  }

  return /https?:\/\//i.test(value) || /[0-9]+(\.[0-9]+)?%/.test(value);
}

function isSameStringSet(left: string[], right: string[]): boolean {
  if (left.length !== right.length) {
    return false;
  }

  const leftSet = new Set(left);
  const rightSet = new Set(right);

  if (leftSet.size !== rightSet.size) {
    return false;
  }

  for (const value of leftSet) {
    if (!rightSet.has(value)) {
      return false;
    }
  }

  return true;
}

function extractMessageContent(payload: unknown): string | null {
  if (typeof payload !== 'object' || payload === null) {
    return null;
  }

  const choices = (payload as { choices?: unknown }).choices;
  if (!Array.isArray(choices) || choices.length === 0) {
    return null;
  }

  const first = choices[0];
  if (typeof first !== 'object' || first === null) {
    return null;
  }

  const message = (first as { message?: unknown }).message;
  if (typeof message === 'object' && message !== null) {
    const content = (message as { content?: unknown }).content;
    if (typeof content === 'string') {
      return content;
    }
  }

  const text = (first as { text?: unknown }).text;
  return typeof text === 'string' ? text : null;
}

function parseJsonObject(content: string): unknown {
  const trimmed = content.trim();
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '')
    .trim();

  try {
    return JSON.parse(withoutFence);
  } catch {
    const start = withoutFence.indexOf('{');
    const end = withoutFence.lastIndexOf('}');
    if (start < 0 || end <= start) {
      return null;
    }
    try {
      return JSON.parse(withoutFence.slice(start, end + 1));
    } catch {
      return null;
    }
  }
}

function getTimeoutMs(): number {
  const value = Number(process.env.AI_TIMEOUT_MS);
  if (!Number.isFinite(value) || value <= 0) {
    return DEFAULT_TIMEOUT_MS;
  }
  return Math.min(30_000, Math.max(2_000, Math.round(value)));
}

let warnedMissingKey = false;

function warnMissingKeyOnce(): void {
  if (warnedMissingKey) {
    return;
  }
  warnedMissingKey = true;
  console.info('[analyze] AI_API_KEY is not configured; using rule-based result.');
}
