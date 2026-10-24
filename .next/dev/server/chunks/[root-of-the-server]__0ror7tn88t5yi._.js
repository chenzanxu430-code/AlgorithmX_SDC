module.exports = [
(()=>{"use strict";return[
"[project]/app/api/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2d$analysis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai-analysis.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rule-engine.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                code: 'INVALID_JSON',
                message: '请求体必须是合法的 JSON。'
            }
        }, {
            status: 400
        });
    }
    if (!isRecord(body)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                code: 'VALIDATION_ERROR',
                message: '请求体必须是 JSON 对象。'
            }
        }, {
            status: 400
        });
    }
    const fieldErrors = {};
    if (typeof body.currentRole !== 'string' || body.currentRole.trim() === '') {
        fieldErrors.currentRole = [
            'currentRole 不能为空。'
        ];
    }
    if (!isNonEmptyStringArray(body.dailyTasks)) {
        fieldErrors.dailyTasks = [
            'dailyTasks 必须是非空字符串数组，且至少包含一项非空任务。'
        ];
    }
    if (!isNonEmptyStringArray(body.existingSkills)) {
        fieldErrors.existingSkills = [
            'existingSkills 必须是非空字符串数组，且至少包含一项技能。'
        ];
    }
    if (typeof body.weeklyStudyHours !== 'number' || !Number.isFinite(body.weeklyStudyHours) || body.weeklyStudyHours <= 0) {
        fieldErrors.weeklyStudyHours = [
            'weeklyStudyHours 必须是大于 0 的数字。'
        ];
    }
    if (Object.keys(fieldErrors).length > 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: {
                code: 'VALIDATION_ERROR',
                message: '请求参数校验失败，请检查提交内容。',
                fieldErrors
            }
        }, {
            status: 400
        });
    }
    const input = {
        currentRole: body.currentRole.trim(),
        dailyTasks: body.dailyTasks.map((task)=>task.trim()).filter(Boolean),
        existingSkills: body.existingSkills.map((skill)=>skill.trim()).filter(Boolean),
        experienceYears: typeof body.experienceYears === 'number' && Number.isFinite(body.experienceYears) ? body.experienceYears : 0,
        interests: Array.isArray(body.interests) ? body.interests.filter((item)=>typeof item === 'string').map((item)=>item.trim()).filter(Boolean) : [],
        weeklyStudyHours: body.weeklyStudyHours,
        scenario: body.scenario === 'fast' ? 'fast' : 'slow',
        targetDirections: readStringArray(body.targetDirections),
        workPreferences: readStringArray(body.workPreferences),
        growthPriorities: readStringArray(body.growthPriorities)
    };
    const ruleResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["analyzeWithRules"])(input);
    let result = ruleResult;
    try {
        const enhanced = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2d$analysis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enhanceAnalysisWithAi"])(input, ruleResult);
        if (enhanced) {
            result = enhanced;
        }
    } catch (error) {
        console.warn('[analyze] AI enhancement failed; using rule-based result.', error instanceof Error ? error.message : error);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
        status: 200,
        headers: {
            'X-Analysis-Engine': result === ruleResult ? 'rules' : 'ai'
        }
    });
}
function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function isNonEmptyStringArray(value) {
    return Array.isArray(value) && value.length > 0 && value.every((item)=>typeof item === 'string') && value.some((item)=>item.trim().length > 0);
}
function readStringArray(value) {
    return Array.isArray(value) ? value.filter((item)=>typeof item === 'string').map((item)=>item.trim()).filter(Boolean) : [];
}
}),
"[project]/lib/ai-analysis.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enhanceAnalysisWithAi",
    ()=>enhanceAnalysisWithAi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z .array>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/result-insights.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rule-engine.ts [app-route] (ecmascript)");
;
;
;
;
/** Sentinel the model returns when it has no evidence for a field. */ const INSUFFICIENT = '依据不足';
const DEFAULT_BASE_URL = 'https://api.openai.com/v1';
const DEFAULT_MODEL = 'gpt-4o-mini';
const DEFAULT_TIMEOUT_MS = 12_000;
const AiExtractedSkillSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(60),
    evidence: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(240)
});
const AiRoleReasonsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(80),
    reasons: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(240)).min(1).max(2)
});
const AiAnalysisSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    extractedSkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(AiExtractedSkillSchema).min(1).max(30),
    roleReasons: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(AiRoleReasonsSchema).min(1).max(10),
    learningOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$array$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().min(1).max(60)).max(30)
});
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
async function enhanceAnalysisWithAi(input, ruleResult) {
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
        const expectedOrder = ruleResult.learningPlan.map((step)=>step.skillGap);
        if (!isSameStringSet(aiOutput.learningOrder, expectedOrder)) {
            console.warn('[analyze] AI learning order does not match rule-derived gaps; using rule-based result.');
            return null;
        }
        const reasonsByTitle = new Map(aiOutput.roleReasons.map((role)=>[
                role.title,
                role.reasons
            ]));
        if (ruleResult.recommendedRoles.some((role)=>!reasonsByTitle.has(role.title))) {
            console.warn('[analyze] AI reasons do not cover every role; using rule-based result.');
            return null;
        }
        const baselineEvidence = new Map(ruleResult.extractedSkills.map((skill)=>[
                skill.name,
                skill.evidence
            ]));
        // Scores, gaps and resources stay exactly as the rule engine produced them.
        const extractedSkills = ruleResult.extractedSkills.map((skill)=>{
            const aiSkill = aiOutput.extractedSkills.find((item)=>item.name === skill.name);
            if (!aiSkill || aiSkill.evidence === INSUFFICIENT) {
                return skill;
            }
            return {
                name: skill.name,
                evidence: aiSkill.evidence
            };
        });
        const stepsBySkill = new Map(ruleResult.learningPlan.map((step)=>[
                step.skillGap,
                step
            ]));
        const reorderedPlan = [];
        for (const skill of aiOutput.learningOrder){
            const step = stepsBySkill.get(skill);
            if (!step) {
                return null;
            }
            reorderedPlan.push(step);
        }
        const recommendedRoles = ruleResult.recommendedRoles.map((role)=>{
            const sourceReasons = role.reasons.filter((reason)=>reason.startsWith('需求依据：'));
            const baselineReasons = role.reasons.filter((reason)=>!reason.startsWith('需求依据：'));
            const aiReasons = (reasonsByTitle.get(role.title) ?? []).filter((reason)=>reason !== INSUFFICIENT);
            return {
                ...role,
                reasons: [
                    ...aiReasons.length > 0 ? aiReasons : baselineReasons,
                    ...sourceReasons
                ]
            };
        });
        // AI 只改了顺序，周区间需要按新顺序重排，避免出现「第 10 周」排在「第 1 周」前面
        const learningPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assignSchedule"])(reorderedPlan, input.weeklyStudyHours);
        const totalWeeks = learningPlan.length > 0 ? learningPlan[learningPlan.length - 1].weekEnd : 0;
        return {
            ...ruleResult,
            extractedSkills,
            recommendedRoles,
            learningPlan,
            metrics: ruleResult.metrics ? {
                ...ruleResult.metrics,
                totalWeeks
            } : ruleResult.metrics
        };
    } catch (error) {
        console.warn('[analyze] AI enhancement failed; using rule-based result.', error instanceof Error ? error.message : error);
        return null;
    }
}
async function requestAiAnalysis(input, ruleResult) {
    const apiKey = process.env.AI_API_KEY;
    if (!apiKey) {
        return null;
    }
    const baseUrl = (process.env.AI_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, '');
    const model = process.env.AI_MODEL || DEFAULT_MODEL;
    const timeoutMs = getTimeoutMs();
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), timeoutMs);
    try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model,
                temperature: 0.2,
                messages: [
                    {
                        role: 'system',
                        content: SYSTEM_PROMPT
                    },
                    {
                        role: 'user',
                        content: buildUserPrompt(input, ruleResult)
                    }
                ],
                response_format: {
                    type: 'json_object'
                }
            }),
            signal: controller.signal
        });
        if (!response.ok) {
            console.warn(`[analyze] AI request returned HTTP ${response.status}; using rule-based result.`);
            return null;
        }
        const payload = await response.json();
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
    } finally{
        clearTimeout(timeout);
    }
}
function buildUserPrompt(input, ruleResult) {
    const payload = {
        profile: {
            currentRole: input.currentRole,
            dailyTasks: input.dailyTasks,
            existingSkills: input.existingSkills,
            experienceYears: input.experienceYears,
            interests: input.interests,
            weeklyStudyHours: input.weeklyStudyHours,
            scenario: input.scenario
        },
        skillDictionary: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SKILL_DICTIONARY"].map((skill)=>({
                name: skill.name,
                keywords: skill.keywords,
                priority: skill.priority,
                dataAnalysis: Boolean(skill.dataAnalysis)
            })),
        jobLibrary: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JOB_LIBRARY"],
        resourceLibrary: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RESOURCE_LIBRARY"],
        ruleBaseline: {
            extractedSkills: ruleResult.extractedSkills,
            recommendedRoles: ruleResult.recommendedRoles.map((role)=>({
                    title: role.title,
                    matchScore: role.matchScore,
                    matchedSkills: role.matchedSkills,
                    missingSkills: role.missingSkills
                })),
            learningOrder: ruleResult.learningPlan.map((step)=>step.skillGap)
        }
    };
    return `输入数据（JSON）：\n${JSON.stringify(payload, null, 2)}\n\n请只返回符合系统要求的 JSON 对象。`;
}
function isSemanticallyValid(output, ruleResult) {
    const knownSkills = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rule$2d$engine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SKILL_DICTIONARY"].map((skill)=>skill.name));
    const extractedNames = output.extractedSkills.map((skill)=>skill.name);
    const baselineNames = ruleResult.extractedSkills.map((skill)=>skill.name);
    if (new Set(extractedNames).size !== extractedNames.length) {
        return false;
    }
    if (extractedNames.some((name)=>!knownSkills.has(name))) {
        return false;
    }
    // The model may refine evidence, but it must not add or drop skills.
    if (!isSameStringSet(extractedNames, baselineNames)) {
        return false;
    }
    if (output.extractedSkills.some((skill)=>hasUnsupportedClaim(skill.evidence))) {
        return false;
    }
    const expectedTitles = ruleResult.recommendedRoles.map((role)=>role.title).sort();
    const actualTitles = output.roleReasons.map((role)=>role.title).sort();
    if (expectedTitles.length !== actualTitles.length || expectedTitles.some((title, index)=>title !== actualTitles[index])) {
        return false;
    }
    return output.roleReasons.every((role)=>new Set(role.reasons).size === role.reasons.length && role.reasons.every((reason)=>!hasUnsupportedClaim(reason)));
}
function hasUnsupportedClaim(value) {
    if (value === INSUFFICIENT) {
        return false;
    }
    return /https?:\/\//i.test(value) || /[0-9]+(\.[0-9]+)?%/.test(value);
}
function isSameStringSet(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    const leftSet = new Set(left);
    const rightSet = new Set(right);
    if (leftSet.size !== rightSet.size) {
        return false;
    }
    for (const value of leftSet){
        if (!rightSet.has(value)) {
            return false;
        }
    }
    return true;
}
function extractMessageContent(payload) {
    if (typeof payload !== 'object' || payload === null) {
        return null;
    }
    const choices = payload.choices;
    if (!Array.isArray(choices) || choices.length === 0) {
        return null;
    }
    const first = choices[0];
    if (typeof first !== 'object' || first === null) {
        return null;
    }
    const message = first.message;
    if (typeof message === 'object' && message !== null) {
        const content = message.content;
        if (typeof content === 'string') {
            return content;
        }
    }
    const text = first.text;
    return typeof text === 'string' ? text : null;
}
function parseJsonObject(content) {
    const trimmed = content.trim();
    const withoutFence = trimmed.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    try {
        return JSON.parse(withoutFence);
    } catch  {
        const start = withoutFence.indexOf('{');
        const end = withoutFence.lastIndexOf('}');
        if (start < 0 || end <= start) {
            return null;
        }
        try {
            return JSON.parse(withoutFence.slice(start, end + 1));
        } catch  {
            return null;
        }
    }
}
function getTimeoutMs() {
    const value = Number(process.env.AI_TIMEOUT_MS);
    if (!Number.isFinite(value) || value <= 0) {
        return DEFAULT_TIMEOUT_MS;
    }
    return Math.min(30_000, Math.max(2_000, Math.round(value)));
}
let warnedMissingKey = false;
function warnMissingKeyOnce() {
    if (warnedMissingKey) {
        return;
    }
    warnedMissingKey = true;
    console.info('[analyze] AI_API_KEY is not configured; using rule-based result.');
}
}),
"[project]/lib/result-insights.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PHASES",
    ()=>PHASES,
    "PRIORITY_META",
    ()=>PRIORITY_META,
    "SKILL_CATEGORY_LABEL",
    ()=>SKILL_CATEGORY_LABEL,
    "SKILL_CATEGORY_ORDER",
    ()=>SKILL_CATEGORY_ORDER,
    "TASK_CHANGE_LABEL",
    ()=>TASK_CHANGE_LABEL,
    "assignSchedule",
    ()=>assignSchedule,
    "classifySkillCategory",
    ()=>classifySkillCategory,
    "classifyTaskChange",
    ()=>classifyTaskChange,
    "enrichResult",
    ()=>enrichResult,
    "parseResource",
    ()=>parseResource
]);
const SKILL_CATEGORY_LABEL = {
    data: '数据与工具',
    collaboration: '沟通与协作',
    process: '业务与流程',
    content: '内容与创意',
    general: '通用能力'
};
const SKILL_CATEGORY_ORDER = [
    'data',
    'collaboration',
    'process',
    'content',
    'general'
];
const TASK_CHANGE_LABEL = {
    automated: '可自动化替代',
    augmented: 'AI 增强',
    unchanged: '变化较小'
};
const PRIORITY_META = {
    high: {
        label: '高优先级',
        icon: '↑'
    },
    medium: {
        label: '中优先级',
        icon: '−'
    },
    low: {
        label: '低优先级',
        icon: '✔'
    }
};
const PHASES = [
    '起步',
    '进阶',
    '巩固'
];
/* =========================================================
 * 纯函数：分类与分档
 * ======================================================= */ const CATEGORY_RULES = [
    {
        category: 'data',
        words: [
            'excel',
            'sql',
            'python',
            '数据',
            '统计',
            '可视化',
            'office',
            'erp',
            'crm',
            'bi',
            '编程',
            '数据库',
            '系统',
            '设备',
            '工具'
        ]
    },
    {
        category: 'collaboration',
        words: [
            '沟通',
            '客户',
            '谈判',
            '协作',
            '讲授',
            '面试',
            '投诉',
            '情绪',
            '团队',
            '表达'
        ]
    },
    {
        category: 'process',
        words: [
            '流程',
            '管理',
            '项目',
            '运营',
            '库存',
            '质量',
            '财务',
            '核算',
            '税务',
            '成本',
            '门店',
            '仓储',
            '对接'
        ]
    },
    {
        category: 'content',
        words: [
            '内容',
            '文案',
            '设计',
            '创作',
            '社媒',
            '审美',
            '素材',
            '策划',
            '写作'
        ]
    }
];
/** 个别技能名会误命中关键词，先做精确归类 */ const EXACT_CATEGORY = {
    时间管理: 'general',
    文档写作: 'general',
    供应商对接: 'general',
    '学习新工具的能力': 'general'
};
function classifySkillCategory(skill) {
    if (EXACT_CATEGORY[skill]) {
        return EXACT_CATEGORY[skill];
    }
    const text = skill.toLowerCase();
    const hit = CATEGORY_RULES.find((rule)=>rule.words.some((word)=>text.includes(word)));
    return hit ? hit.category : 'general';
}
function classifyTaskChange(aiImpact, humanJudgment) {
    if (aiImpact >= 70 && humanJudgment < 55) {
        return 'automated';
    }
    if (aiImpact >= 45) {
        return 'augmented';
    }
    return 'unchanged';
}
function parseResource(resource) {
    if (resource.provider) {
        return {
            title: resource.name,
            provider: resource.provider,
            publishedAt: resource.publishedAt ?? ''
        };
    }
    const match = resource.name.match(/^(.*?)\s*·\s*(.*?)（(\d{4}-\d{2}-\d{2})）$/);
    if (match) {
        return {
            title: match[1],
            provider: match[2],
            publishedAt: match[3]
        };
    }
    return {
        title: resource.name,
        provider: '',
        publishedAt: ''
    };
}
function assignSchedule(steps, weeklyStudyHours) {
    const hoursPerWeek = Math.max(1, weeklyStudyHours || 1);
    let cursor = 1;
    const scheduled = steps.map((step)=>{
        const weeks = Math.max(1, Math.ceil(step.estimatedHours / hoursPerWeek));
        const weekStart = cursor;
        const weekEnd = cursor + weeks - 1;
        cursor = weekEnd + 1;
        return {
            ...step,
            weekStart,
            weekEnd
        };
    });
    const totalWeeks = Math.max(1, cursor - 1);
    const firstCut = Math.ceil(totalWeeks / 3);
    const secondCut = Math.ceil(totalWeeks * 2 / 3);
    return scheduled.map((step)=>({
            ...step,
            phase: step.weekStart <= firstCut ? '起步' : step.weekEnd <= secondCut ? '进阶' : '巩固'
        }));
}
const DEFAULT_METHODOLOGY = {
    matchFormula: '匹配分 = 技能重合率 × 100 + 兴趣命中（每项 +2，最多 4）+ 经验适配（最多 3）+ 岗位方向（+2），合计最多加 8 分，仅用于排序。',
    priorityRule: '技能优先级取词典基准值；被 2 个以上推荐岗位需要时上调一级；fast 情景下数据类技能再上调一级。',
    durationRule: '学习时长取固定资源库的预计小时数；预计周数 = 总时长 ÷ 每周可学习时间（向上取整）。'
};
function enrichResult(result, weeklyStudyHours) {
    const tasks = result.taskChanges.map((task)=>({
            ...task,
            changeType: task.changeType ?? classifyTaskChange(task.aiImpact, task.humanJudgment)
        }));
    const taskDistribution = {
        automated: tasks.filter((task)=>task.changeType === 'automated').length,
        augmented: tasks.filter((task)=>task.changeType === 'augmented').length,
        unchanged: tasks.filter((task)=>task.changeType === 'unchanged').length
    };
    const roles = result.recommendedRoles.map((role)=>{
        const requiredCount = role.matchedSkills.length + role.missingSkills.length;
        const interestHitCount = role.interestMatches?.length ?? parseInterestHitCount(role.reasons);
        return {
            ...role,
            requiredCount,
            hitRate: requiredCount === 0 ? 0 : Math.round(role.matchedSkills.length / requiredCount * 100),
            interestHitCount
        };
    });
    const gaps = result.skillGaps.map((gap)=>({
            ...gap,
            category: gap.category ?? classifySkillCategory(gap.skill),
            neededBy: gap.neededBy ?? roles.filter((role)=>role.matchedSkills.includes(gap.skill) || role.missingSkills.includes(gap.skill)).length
        }));
    const orderedGaps = [
        ...gaps
    ].sort((a, b)=>PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || (a.status === b.status ? 0 : a.status === 'gap' ? -1 : 1));
    const plan = assignSchedule(result.learningPlan, weeklyStudyHours);
    const planGroups = PHASES.map((phase)=>({
            phase,
            steps: plan.filter((step)=>step.phase === phase)
        })).filter((group)=>group.steps.length > 0);
    const categoryTotals = new Map();
    result.extractedSkills.forEach((skill)=>{
        const category = classifySkillCategory(skill.name);
        categoryTotals.set(category, (categoryTotals.get(category) ?? 0) + 1);
    });
    const categoryCounts = SKILL_CATEGORY_ORDER.filter((category)=>categoryTotals.has(category)).map((category)=>({
            category,
            label: SKILL_CATEGORY_LABEL[category],
            count: categoryTotals.get(category) ?? 0
        }));
    const totalHours = plan.reduce((sum, step)=>sum + step.estimatedHours, 0);
    const totalWeeks = plan.length > 0 ? plan[plan.length - 1].weekEnd : 0;
    const gapCount = orderedGaps.filter((gap)=>gap.status === 'gap').length;
    const metrics = result.metrics ?? {
        skillCount: result.extractedSkills.length,
        gapCount,
        strengthCount: orderedGaps.length - gapCount,
        totalHours,
        totalWeeks,
        highRiskTaskCount: taskDistribution.automated
    };
    const methodology = result.methodology ?? {
        ...DEFAULT_METHODOLOGY,
        sources: collectSources(result)
    };
    return {
        raw: result,
        tasks,
        taskDistribution,
        skills: result.extractedSkills,
        categoryCounts,
        roles,
        gaps: orderedGaps,
        plan,
        planGroups,
        sdgs: result.sdgLinks,
        metrics,
        methodology,
        scenarioNote: result.scenarioNote
    };
}
const PRIORITY_RANK = {
    high: 0,
    medium: 1,
    low: 2
};
function parseInterestHitCount(reasons) {
    for (const reason of reasons){
        const match = reason.match(/兴趣方向命中\s*(\d+)\s*项/);
        if (match) {
            return Number(match[1]);
        }
    }
    return 0;
}
/** 旧数据没有结构化来源清单时，从前后的文本里回收 */ function collectSources(result) {
    const sources = new Map();
    result.taskChanges.forEach((task)=>{
        const key = task.source.url || task.source.name;
        if (!sources.has(key)) {
            sources.set(key, {
                name: task.source.name,
                date: task.source.date,
                url: task.source.url,
                usedFor: '任务变化评估'
            });
        }
    });
    result.recommendedRoles.forEach((role)=>{
        role.reasons.forEach((reason)=>{
            const match = reason.match(/^需求依据：(.+?)（(\d{4}-\d{2}-\d{2})）/);
            if (!match) return;
            const key = `${match[1]}|${match[2]}`;
            if (!sources.has(key)) {
                sources.set(key, {
                    name: match[1],
                    date: match[2],
                    url: '',
                    usedFor: '岗位需求依据'
                });
            }
        });
    });
    return Array.from(sources.values());
}
}),
"[project]/lib/rule-engine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOB_LIBRARY",
    ()=>JOB_LIBRARY,
    "RESOURCE_LIBRARY",
    ()=>RESOURCE_LIBRARY,
    "SKILL_DICTIONARY",
    ()=>SKILL_DICTIONARY,
    "analyzeWithRules",
    ()=>analyzeWithRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/result-insights.ts [app-route] (ecmascript)");
;
const SKILL_DICTIONARY = [
    {
        name: '数据分析',
        keywords: [
            '数据分析',
            '分析',
            '报表',
            '指标',
            '复盘',
            '监测'
        ],
        priority: 'high',
        dataAnalysis: true
    },
    {
        name: 'Excel',
        keywords: [
            'excel',
            '表格',
            '数据透视',
            'office',
            '办公软件'
        ],
        priority: 'medium',
        dataAnalysis: true
    },
    {
        name: 'SQL',
        keywords: [
            'sql',
            '数据库',
            '查询'
        ],
        priority: 'high',
        dataAnalysis: true
    },
    {
        name: 'Python',
        keywords: [
            'python',
            '编程',
            '代码'
        ],
        priority: 'medium',
        dataAnalysis: true
    },
    {
        name: '数据可视化',
        keywords: [
            '可视化',
            '看板',
            '图表',
            'bi',
            'power bi',
            'powerbi'
        ],
        priority: 'medium',
        dataAnalysis: true
    },
    {
        name: '商业分析',
        keywords: [
            '商业分析',
            '商业模式',
            '策略分析'
        ],
        priority: 'medium',
        dataAnalysis: true
    },
    {
        name: '用户增长',
        keywords: [
            '增长',
            '拉新',
            '留存',
            '转化',
            '活动',
            '投放',
            'a/b'
        ],
        priority: 'high'
    },
    {
        name: '内容策划',
        keywords: [
            '内容',
            '文案',
            '详情页',
            '选题',
            '脚本',
            '短视频'
        ],
        priority: 'medium'
    },
    {
        name: '用户沟通',
        keywords: [
            '客户',
            '咨询',
            '客服',
            '售后',
            '沟通'
        ],
        priority: 'medium'
    },
    {
        name: '项目管理',
        keywords: [
            '项目管理',
            '项目',
            '排期',
            '协调',
            '跨团队',
            '推进',
            '流程',
            '归档',
            '会议',
            '差旅',
            '审批'
        ],
        priority: 'medium'
    },
    {
        name: 'AI 工具应用',
        keywords: [
            'ai',
            '人工智能',
            'chatgpt',
            '提示词',
            '大模型'
        ],
        priority: 'high'
    },
    {
        name: '电商运营',
        keywords: [
            '电商',
            '店铺',
            '商品',
            '订单',
            '上架'
        ],
        priority: 'medium'
    },
    {
        name: '市场洞察',
        keywords: [
            '竞品',
            '市场调研',
            '市场',
            '调研',
            '趋势'
        ],
        priority: 'low'
    },
    {
        name: '自动化',
        keywords: [
            '自动化',
            'rpa',
            '流程自动化'
        ],
        priority: 'medium'
    }
];
const SKILL_BY_NAME = new Map(SKILL_DICTIONARY.map((skill)=>[
        skill.name,
        skill
    ]));
const JOB_LIBRARY = [
    {
        id: 'growth-operations-analyst',
        title: '增长运营分析师',
        requiredSkills: [
            '数据分析',
            'Excel',
            '用户增长',
            'SQL'
        ],
        relatedInterests: [
            '数据分析',
            '商业分析',
            '产品与用户'
        ],
        idealExperienceYears: 3,
        roleKeywords: [
            '运营',
            '增长',
            '客服',
            '客户',
            '数据'
        ],
        sourceName: 'WEF《Future of Jobs Report 2025》',
        sourceDate: '2025-01-07',
        sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'
    },
    {
        id: 'ai-content-operations',
        title: 'AI 内容运营专员',
        requiredSkills: [
            '内容策划',
            'AI 工具应用',
            '用户沟通',
            '数据分析'
        ],
        relatedInterests: [
            '内容创作',
            '人工智能',
            '产品与用户'
        ],
        idealExperienceYears: 2,
        roleKeywords: [
            '内容',
            '文案',
            '新媒体',
            '运营'
        ],
        sourceName: 'Microsoft《Work Trend Index 2025》',
        sourceDate: '2025-04-23',
        sourceUrl: 'https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born'
    },
    {
        id: 'ecommerce-data-operations',
        title: '电商数据运营',
        requiredSkills: [
            '电商运营',
            '数据分析',
            '数据可视化',
            'SQL'
        ],
        relatedInterests: [
            '数据分析',
            '商业分析',
            '自动化'
        ],
        idealExperienceYears: 3,
        roleKeywords: [
            '电商',
            '店铺',
            '运营'
        ],
        sourceName: 'McKinsey《The State of AI》',
        sourceDate: '2024-05-30',
        sourceUrl: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai'
    },
    {
        id: 'user-insights-assistant',
        title: '用户洞察助理',
        requiredSkills: [
            '市场洞察',
            '用户沟通',
            '数据分析',
            '内容策划'
        ],
        relatedInterests: [
            '产品与用户',
            '数据分析',
            '内容创作'
        ],
        idealExperienceYears: 2,
        roleKeywords: [
            '客服',
            '客户',
            '用户',
            '调研',
            '行政',
            '助理'
        ],
        sourceName: 'OECD《Employment Outlook 2025》',
        sourceDate: '2025-07-08',
        sourceUrl: 'https://www.oecd.org/employment-outlook/'
    },
    {
        id: 'automation-workflow-specialist',
        title: '自动化流程专员',
        requiredSkills: [
            '自动化',
            'Python',
            'SQL',
            '项目管理'
        ],
        relatedInterests: [
            '自动化',
            '人工智能',
            '项目管理'
        ],
        idealExperienceYears: 4,
        roleKeywords: [
            '行政',
            '助理',
            '流程',
            '文员',
            '文秘',
            '运营'
        ],
        sourceName: 'WEF《Future of Jobs Report 2025》',
        sourceDate: '2025-01-07',
        sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'
    }
];
const RESOURCE_LIBRARY = [
    {
        id: 'data-analysis-basics',
        title: '数据分析基础',
        provider: 'Google Data Analytics',
        url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
        estimatedHours: 20,
        skills: [
            '数据分析'
        ],
        sourceName: 'Google Data Analytics',
        sourceDate: '2025-06-01',
        sourceUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics'
    },
    {
        id: 'sql-tutorial',
        title: 'SQL Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/sql/',
        estimatedHours: 18,
        skills: [
            'SQL'
        ],
        sourceName: 'W3Schools',
        sourceDate: '2025-06-01',
        sourceUrl: 'https://www.w3schools.com/sql/'
    },
    {
        id: 'excel-power-query',
        title: 'Excel 数据透视与 Power Query',
        provider: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/zh-cn/training/',
        estimatedHours: 10,
        skills: [
            'Excel'
        ],
        sourceName: 'Microsoft Learn',
        sourceDate: '2025-05-01',
        sourceUrl: 'https://learn.microsoft.com/zh-cn/training/'
    },
    {
        id: 'growth-experiments',
        title: '增长实验与 A/B 测试',
        provider: 'Google Skillshop',
        url: 'https://skillshop.withgoogle.com/',
        estimatedHours: 16,
        skills: [
            '用户增长'
        ],
        sourceName: 'Google Skillshop',
        sourceDate: '2025-04-01',
        sourceUrl: 'https://skillshop.withgoogle.com/'
    },
    {
        id: 'python-kaggle',
        title: 'Python 入门',
        provider: 'Kaggle Learn',
        url: 'https://www.kaggle.com/learn/python',
        estimatedHours: 24,
        skills: [
            'Python'
        ],
        sourceName: 'Kaggle Learn',
        sourceDate: '2025-03-01',
        sourceUrl: 'https://www.kaggle.com/learn/python'
    },
    {
        id: 'power-bi',
        title: 'Power BI 数据可视化',
        provider: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/zh-cn/power-bi/',
        estimatedHours: 6,
        skills: [
            '数据可视化'
        ],
        sourceName: 'Microsoft Learn',
        sourceDate: '2025-05-01',
        sourceUrl: 'https://learn.microsoft.com/zh-cn/power-bi/'
    },
    {
        id: 'ai-prompting',
        title: 'Prompt Engineering 与 AI 工作流',
        provider: 'OpenAI Cookbook',
        url: 'https://cookbook.openai.com/',
        estimatedHours: 8,
        skills: [
            'AI 工具应用'
        ],
        sourceName: 'OpenAI Cookbook',
        sourceDate: '2025-02-01',
        sourceUrl: 'https://cookbook.openai.com/'
    },
    {
        id: 'content-marketing',
        title: '内容营销与转化文案',
        provider: 'HubSpot Academy',
        url: 'https://academy.hubspot.com/',
        estimatedHours: 10,
        skills: [
            '内容策划'
        ],
        sourceName: 'HubSpot Academy',
        sourceDate: '2025-01-15',
        sourceUrl: 'https://academy.hubspot.com/'
    },
    {
        id: 'workplace-communication',
        title: '职场沟通与客户关系',
        provider: 'Coursera',
        url: 'https://www.coursera.org/learn/communication',
        estimatedHours: 8,
        skills: [
            '用户沟通'
        ],
        sourceName: 'Coursera',
        sourceDate: '2024-12-01',
        sourceUrl: 'https://www.coursera.org/learn/communication'
    },
    {
        id: 'project-management',
        title: '项目管理基础',
        provider: 'PMI',
        url: 'https://www.pmi.org/learning/training-development',
        estimatedHours: 12,
        skills: [
            '项目管理'
        ],
        sourceName: 'PMI',
        sourceDate: '2024-11-01',
        sourceUrl: 'https://www.pmi.org/learning/training-development'
    },
    {
        id: 'ecommerce-operations',
        title: '电商运营基础',
        provider: 'Shopify Learn',
        url: 'https://learn.shopify.com/',
        estimatedHours: 10,
        skills: [
            '电商运营'
        ],
        sourceName: 'Shopify Learn',
        sourceDate: '2025-01-10',
        sourceUrl: 'https://learn.shopify.com/'
    },
    {
        id: 'market-research',
        title: '市场调研与竞品分析',
        provider: 'Coursera',
        url: 'https://www.coursera.org/learn/market-research',
        estimatedHours: 8,
        skills: [
            '市场洞察'
        ],
        sourceName: 'Coursera',
        sourceDate: '2024-10-01',
        sourceUrl: 'https://www.coursera.org/learn/market-research'
    },
    {
        id: 'power-automate',
        title: 'Power Automate 流程自动化',
        provider: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/zh-cn/training/powerplatform/power-automate/',
        estimatedHours: 10,
        skills: [
            '自动化'
        ],
        sourceName: 'Microsoft Learn',
        sourceDate: '2025-05-01',
        sourceUrl: 'https://learn.microsoft.com/zh-cn/training/powerplatform/power-automate/'
    },
    {
        id: 'business-analysis',
        title: '商业分析基础',
        provider: 'Coursera',
        url: 'https://www.coursera.org/learn/business-analysis',
        estimatedHours: 8,
        skills: [
            '商业分析'
        ],
        sourceName: 'Coursera',
        sourceDate: '2024-10-01',
        sourceUrl: 'https://www.coursera.org/learn/business-analysis'
    }
];
const TASK_SOURCE = {
    name: 'WEF《Future of Jobs Report 2025》',
    date: '2025-01-07',
    url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/'
};
const SDG_LINKS = [
    {
        goal: 'SDG 4 优质教育',
        reason: '用可执行的学习计划帮助在职人群持续获得数字技能。'
    },
    {
        goal: 'SDG 8 体面工作和经济增长',
        reason: '把重复任务释放出的时间转向更高价值的增长与内容工作。'
    },
    {
        goal: 'SDG 10 减少不平等',
        reason: '降低非技术岗位进入数据与 AI 相关岗位的门槛。'
    }
];
const PRIORITY_SORT = {
    high: 0,
    medium: 1,
    low: 2
};
const PRIORITY_VALUE = {
    low: 0,
    medium: 1,
    high: 2
};
const PRIORITY_BY_VALUE = [
    'low',
    'medium',
    'high'
];
const AUTOMATION_KEYWORDS = [
    '报表',
    '整理',
    '汇总',
    '录入',
    '监测',
    '统计',
    '排版',
    '清洗',
    '核对',
    '批量'
];
const JUDGMENT_KEYWORDS = [
    '沟通',
    '协调',
    '谈判',
    '决策',
    '策略',
    '售后',
    '投诉',
    '管理',
    '评审',
    '审批'
];
const CONTENT_KEYWORDS = [
    '文案',
    '内容',
    '详情页',
    '选题',
    '创意',
    '脚本'
];
function analyzeWithRules(input) {
    const extractedSkills = extractSkills(input.dailyTasks, input.existingSkills);
    const taskChanges = buildTaskChanges(input.dailyTasks, input.scenario);
    const recommendedRoles = buildJobMatches(extractedSkills, input);
    const skillGaps = buildSkillGaps(extractedSkills, recommendedRoles, input.scenario);
    const learningPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["assignSchedule"])(buildLearningPlan(skillGaps, input), input.weeklyStudyHours);
    const totalHours = learningPlan.reduce((sum, step)=>sum + step.estimatedHours, 0);
    const totalWeeks = learningPlan.length > 0 ? learningPlan[learningPlan.length - 1].weekEnd ?? 0 : 0;
    const gapCount = skillGaps.filter((gap)=>gap.status === 'gap').length;
    return {
        extractedSkills,
        taskChanges,
        recommendedRoles,
        skillGaps,
        learningPlan,
        sdgLinks: SDG_LINKS,
        scenarioNote: buildScenarioNote(input, totalWeeks),
        metrics: {
            skillCount: extractedSkills.length,
            gapCount,
            strengthCount: skillGaps.length - gapCount,
            totalHours,
            totalWeeks,
            highRiskTaskCount: taskChanges.filter((task)=>task.changeType === 'automated').length
        },
        methodology: buildMethodology(recommendedRoles, taskChanges)
    };
}
function extractSkills(tasks, existingSkills) {
    const cleanTasks = tasks.map((task)=>task.trim()).filter(Boolean);
    const cleanSkills = existingSkills.map((skill)=>skill.trim()).filter(Boolean);
    const extracted = [];
    for (const rule of SKILL_DICTIONARY){
        const evidence = new Set();
        for (const task of cleanTasks){
            if (rule.keywords.some((keyword)=>matchesKeyword(task, keyword))) {
                evidence.add(`任务「${shorten(task)}」`);
            }
        }
        for (const skill of cleanSkills){
            if (rule.keywords.some((keyword)=>matchesKeyword(skill, keyword))) {
                evidence.add(`自评技能「${shorten(skill)}」`);
            }
        }
        if (evidence.size > 0) {
            extracted.push({
                name: rule.name,
                evidence: [
                    ...evidence
                ].slice(0, 2).join('；')
            });
        }
    }
    return extracted;
}
function buildTaskChanges(tasks, scenario) {
    return tasks.map((task)=>{
        const text = task.trim();
        let aiImpact = 45;
        let humanJudgment = 55;
        if (containsAny(text, AUTOMATION_KEYWORDS)) {
            aiImpact += 35;
            humanJudgment -= 15;
        }
        if (containsAny(text, JUDGMENT_KEYWORDS)) {
            aiImpact -= 10;
            humanJudgment += 30;
        }
        if (containsAny(text, CONTENT_KEYWORDS)) {
            aiImpact += 15;
            humanJudgment += 5;
        }
        if (scenario === 'fast') {
            aiImpact += 8;
        }
        const ai = clampScore(aiImpact);
        const human = clampScore(humanJudgment);
        return {
            task: text,
            aiImpact: ai,
            humanJudgment: human,
            changeType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifyTaskChange"])(ai, human),
            source: TASK_SOURCE
        };
    });
}
function buildJobMatches(extractedSkills, input) {
    const extractedNames = new Set(extractedSkills.map((skill)=>skill.name));
    const normalizedInterests = input.interests.map(normalize).filter(Boolean);
    const currentRole = normalize(input.currentRole);
    const ranked = JOB_LIBRARY.map((job, index)=>{
        const matchedSkills = job.requiredSkills.filter((skill)=>extractedNames.has(skill));
        const missingSkills = job.requiredSkills.filter((skill)=>!extractedNames.has(skill));
        const interestMatches = job.relatedInterests.filter((related)=>{
            const target = normalize(related);
            return normalizedInterests.some((interest)=>interest === target || interest.includes(target) || target.includes(interest));
        });
        const overlapRatio = job.requiredSkills.length === 0 ? 0 : matchedSkills.length / job.requiredSkills.length;
        // Adjustments stay small so the skill-overlap ratio keeps dominating the score.
        const interestAdjustment = Math.min(4, interestMatches.length * 2);
        const experienceFit = Math.max(0, 1 - Math.abs(input.experienceYears - job.idealExperienceYears) / 6);
        const experienceAdjustment = Math.round(experienceFit * 3);
        const roleAdjustment = job.roleKeywords.some((keyword)=>currentRole.includes(normalize(keyword))) ? 2 : 0;
        const adjustment = Math.min(8, interestAdjustment + experienceAdjustment + roleAdjustment);
        const matchScore = clampScore(Math.round(overlapRatio * 100 + adjustment));
        const reasons = [
            `核心技能命中 ${matchedSkills.length}/${job.requiredSkills.length} 项${matchedSkills.length > 0 ? `：${matchedSkills.join('、')}` : ''}。`,
            interestMatches.length > 0 ? `兴趣方向命中 ${interestMatches.length} 项：${interestMatches.join('、')}。` : '兴趣方向暂无重合，匹配分主要来自技能重合。',
            buildExperienceReason(input, job, roleAdjustment > 0),
            missingSkills.length > 0 ? `待补足：${missingSkills.join('、')}。` : '岗位所需技能已全部覆盖。',
            `需求依据：${job.sourceName}（${job.sourceDate}）。`
        ];
        return {
            role: {
                title: job.title,
                matchScore,
                reasons,
                matchedSkills,
                missingSkills,
                interestMatches,
                experienceFit: Math.round(experienceFit * 100)
            },
            matchedCount: matchedSkills.length,
            interestCount: interestMatches.length,
            index
        };
    });
    ranked.sort((a, b)=>b.role.matchScore - a.role.matchScore || b.matchedCount - a.matchedCount || b.interestCount - a.interestCount || a.role.missingSkills.length - b.role.missingSkills.length || a.index - b.index);
    return ranked.map((item)=>item.role);
}
function buildExperienceReason(input, job, roleMatched) {
    const gap = input.experienceYears - job.idealExperienceYears;
    const fit = Math.abs(gap) <= 1 ? '经验年限与岗位通常要求接近' : gap > 0 ? '经验年限高于该岗位通常要求' : '经验年限低于该岗位通常要求';
    return `${input.experienceYears} 年经验，${fit}（岗位参考 ${job.idealExperienceYears} 年）${roleMatched ? `；当前岗位「${input.currentRole}」方向接近` : ''}。`;
}
function buildSkillGaps(extractedSkills, roles, scenario) {
    const missingJobCount = new Map();
    for (const role of roles){
        for (const skill of role.missingSkills){
            missingJobCount.set(skill, (missingJobCount.get(skill) ?? 0) + 1);
        }
    }
    // 技能被多少个推荐岗位需要（含已匹配与待补）
    const neededBy = (skill)=>roles.filter((role)=>role.matchedSkills.includes(skill) || role.missingSkills.includes(skill)).length;
    const gaps = extractedSkills.map((skill)=>({
            skill: skill.name,
            status: 'strength',
            priority: adjustedPriority(skill.name, 'strength', 0, scenario),
            category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifySkillCategory"])(skill.name),
            neededBy: neededBy(skill.name)
        }));
    for (const [skill, count] of missingJobCount){
        gaps.push({
            skill,
            status: 'gap',
            priority: adjustedPriority(skill, 'gap', count, scenario),
            category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifySkillCategory"])(skill),
            neededBy: neededBy(skill)
        });
    }
    gaps.sort((a, b)=>PRIORITY_SORT[a.priority] - PRIORITY_SORT[b.priority] || (a.status === b.status ? 0 : a.status === 'gap' ? -1 : 1));
    return gaps;
}
function buildLearningPlan(skillGaps, input) {
    const weeklyHours = Math.max(1, input.weeklyStudyHours);
    const gaps = skillGaps.filter((skill)=>skill.status === 'gap');
    const hoursOf = (skill)=>RESOURCE_LIBRARY.find((item)=>item.skills.includes(skill))?.estimatedHours ?? 0;
    // Low weekly bandwidth favours short wins first; higher bandwidth favours the
    // bigger courses while the learner still has time for them.
    const preferShortFirst = weeklyHours <= 5;
    const ordered = [
        ...gaps
    ].sort((a, b)=>{
        if (input.scenario === 'fast') {
            const aDataAnalysis = isDataAnalysisSkill(a.skill) ? 0 : 1;
            const bDataAnalysis = isDataAnalysisSkill(b.skill) ? 0 : 1;
            if (aDataAnalysis !== bDataAnalysis) {
                return aDataAnalysis - bDataAnalysis;
            }
        }
        const priorityDelta = PRIORITY_SORT[a.priority] - PRIORITY_SORT[b.priority];
        if (priorityDelta !== 0) {
            return priorityDelta;
        }
        const hoursDelta = hoursOf(a.skill) - hoursOf(b.skill);
        return preferShortFirst ? hoursDelta : -hoursDelta;
    });
    const steps = [];
    for (const gap of ordered){
        const resource = RESOURCE_LIBRARY.find((item)=>item.skills.includes(gap.skill));
        if (!resource) {
            continue;
        }
        steps.push({
            step: `完成「${resource.title}」，补足${gap.skill}`,
            skillGap: gap.skill,
            estimatedHours: resource.estimatedHours,
            resource: {
                name: resource.title,
                url: resource.sourceUrl,
                provider: resource.sourceName,
                publishedAt: resource.sourceDate
            }
        });
    }
    return steps;
}
function buildScenarioNote(input, totalWeeks) {
    const pacing = totalWeeks > 0 ? `按每周 ${input.weeklyStudyHours} 小时排期，全部步骤约需 ${totalWeeks} 周。` : '';
    if (input.scenario === 'fast') {
        return `当前为「AI 变化较快」情景：数据分析类技能优先级已上调，相关学习步骤已前置。${pacing}岗位匹配分仅用于排序；此结果是估计，不是预测。`;
    }
    return `当前为「AI 变化较缓」情景：按常规优先级安排学习步骤。${pacing}岗位匹配分仅用于排序；此结果是估计，不是预测。`;
}
function buildMethodology(roles, tasks) {
    const sources = new Map();
    tasks.forEach((task)=>{
        const key = task.source.url || task.source.name;
        if (!sources.has(key)) {
            sources.set(key, {
                name: task.source.name,
                date: task.source.date,
                url: task.source.url,
                usedFor: '任务变化评估'
            });
        }
    });
    roles.forEach((role)=>{
        const job = JOB_LIBRARY.find((item)=>item.title === role.title);
        if (!job) return;
        const key = job.sourceUrl || job.sourceName;
        if (!sources.has(key)) {
            sources.set(key, {
                name: job.sourceName,
                date: job.sourceDate,
                url: job.sourceUrl,
                usedFor: '岗位需求依据'
            });
        }
    });
    return {
        matchFormula: '匹配分 = 技能重合率 × 100 + 兴趣命中（每项 +2，最多 4）+ 经验适配（最多 3）+ 岗位方向（+2），合计最多加 8 分，仅用于排序。',
        priorityRule: '技能优先级取词典基准值；被 2 个以上推荐岗位需要时上调一级；fast 情景下数据类技能再上调一级。',
        durationRule: '学习时长取固定资源库的预计小时数；预计周数 = 总时长 ÷ 每周可学习时间（向上取整）。',
        sources: Array.from(sources.values())
    };
}
function adjustedPriority(skillName, status, missingJobCount, scenario) {
    const rule = SKILL_BY_NAME.get(skillName);
    let value = PRIORITY_VALUE[rule?.priority ?? 'medium'];
    if (status === 'gap' && missingJobCount >= 2) {
        value += 1;
    }
    if (scenario === 'fast' && rule?.dataAnalysis) {
        value += 1;
    }
    return PRIORITY_BY_VALUE[Math.min(2, value)];
}
function isDataAnalysisSkill(skillName) {
    return SKILL_BY_NAME.get(skillName)?.dataAnalysis === true;
}
function containsAny(text, keywords) {
    return keywords.some((keyword)=>matchesKeyword(text, keyword));
}
function matchesKeyword(text, keyword) {
    const haystack = text.toLowerCase();
    const needle = keyword.toLowerCase();
    if (/[\u4e00-\u9fff]/.test(needle)) {
        return haystack.includes(needle);
    }
    const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, 'i').test(haystack);
}
function shorten(text, maxLength = 60) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}
function normalize(value) {
    return value.trim().toLowerCase();
}
function clampScore(value) {
    return Math.max(0, Math.min(100, Math.round(value)));
}
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ror7tn88t5yi._.js.map