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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sdg-mapping.ts [app-route] (ecmascript)");
;
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
            sdgLinks: role.sdgLinks?.length ? role.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRoleSdgLinks"])(role.title),
            requiredCount,
            hitRate: requiredCount === 0 ? 0 : Math.round(role.matchedSkills.length / requiredCount * 100),
            interestHitCount
        };
    });
    const gaps = result.skillGaps.map((gap)=>({
            ...gap,
            sdgLinks: gap.sdgLinks?.length ? gap.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(gap.skill),
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
        skills: result.extractedSkills.map((skill)=>({
                ...skill,
                sdgLinks: skill.sdgLinks?.length ? skill.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(skill.name)
            })),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sdg-mapping.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$workforce$2d$trends$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/workforce-trends.ts [app-route] (ecmascript)");
;
;
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
        methodology: buildMethodology(recommendedRoles, taskChanges),
        trendSnapshot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$workforce$2d$trends$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getWorkforceTrendSnapshot"])()
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
                ].slice(0, 2).join('；'),
                sdgLinks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(rule.name)
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
                experienceFit: Math.round(experienceFit * 100),
                sdgLinks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRoleSdgLinks"])(job.title)
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
            neededBy: neededBy(skill.name),
            sdgLinks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(skill.name)
        }));
    for (const [skill, count] of missingJobCount){
        gaps.push({
            skill,
            status: 'gap',
            priority: adjustedPriority(skill, 'gap', count, scenario),
            category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifySkillCategory"])(skill),
            neededBy: neededBy(skill),
            sdgLinks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(skill)
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
"[project]/lib/sdg-mapping.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRoleSdgLinks",
    ()=>getRoleSdgLinks,
    "getSkillSdgLinks",
    ()=>getSkillSdgLinks
]);
const SKILL_LINKS = {
    数据分析: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '将数据转化为证据，支持创新、流程改进和更有依据的业务决策。',
            reasonEn: 'Turns data into evidence for innovation, process improvement and informed decisions.'
        }
    ],
    Excel: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '提升日常数据处理效率，帮助团队把时间投入更有价值的工作。',
            reasonEn: 'Improves everyday data work so teams can spend time on higher-value tasks.'
        }
    ],
    SQL: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '帮助可靠地获取和整理数据，为数字化服务与创新提供基础。',
            reasonEn: 'Enables reliable access to data that underpins digital services and innovation.'
        }
    ],
    Python: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '支持自动化和数据应用，助力改进数字化流程与服务。',
            reasonEn: 'Supports automation and data applications that improve digital processes and services.'
        }
    ],
    数据可视化: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '让关键数据更易理解，帮助团队评估创新项目并改进服务。',
            reasonEn: 'Makes key data easier to understand when evaluating innovation and improving services.'
        }
    ],
    商业分析: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '以证据支持资源配置和可持续的业务改进。',
            reasonEn: 'Uses evidence to guide resource allocation and sustainable business improvement.'
        }
    ],
    用户增长: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '通过衡量用户价值和业务成效，支持更负责任的增长决策。',
            reasonEn: 'Measures user and business outcomes to support more responsible growth decisions.'
        }
    ],
    内容策划: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '清晰、准确地呈现产品与服务信息，帮助受众作出知情选择。',
            reasonEn: 'Presents product and service information clearly so audiences can make informed choices.'
        }
    ],
    用户沟通: [
        {
            goal: 'SDG 10 减少不平等',
            reason: '以清晰、尊重且易获取的沟通帮助不同背景的用户获得支持。',
            reasonEn: 'Clear, respectful and accessible communication helps people from different backgrounds get support.'
        }
    ],
    项目管理: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '协调资源与交付，帮助创新项目更可靠地落地。',
            reasonEn: 'Coordinates resources and delivery so innovation projects can be implemented reliably.'
        }
    ],
    'AI 工具应用': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '将 AI 用于合适的工作场景，支持创新并改善数字化工作流程。',
            reasonEn: 'Applies AI to suitable work tasks to support innovation and improve digital workflows.'
        }
    ],
    电商运营: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '借助库存、订单与需求信息，支持更审慎的商品运营和资源使用。',
            reasonEn: 'Uses inventory, order and demand information to support more thoughtful retail operations and resource use.'
        }
    ],
    市场洞察: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '理解真实需求，帮助改进产品供给并减少与需求不匹配的资源投入。',
            reasonEn: 'Understanding real demand can improve product offerings and reduce mismatched resource use.'
        }
    ],
    自动化: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '减少重复性流程，为员工转向更高价值的任务创造空间。',
            reasonEn: 'Reduces repetitive processes and creates room for people to focus on higher-value work.'
        }
    ],
    '跨团队协作': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '促进跨职能知识共享，支持创新工作的协同落地。',
            reasonEn: 'Enables cross-functional knowledge sharing and collaborative delivery of innovation.'
        }
    ],
    '基础 SQL': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '建立结构化数据查询能力，为数字化分析与服务打好基础。',
            reasonEn: 'Builds structured data-query skills that underpin digital analysis and services.'
        }
    ],
    'A/B 测试': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '通过可验证的实验比较方案，支持持续、负责任的产品改进。',
            reasonEn: 'Compares options through evidence-based experiments for continuous, responsible product improvement.'
        }
    ],
    提示词工程: [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '帮助团队更可控地使用生成式 AI，探索适合实际工作的创新应用。',
            reasonEn: 'Helps teams use generative AI more deliberately and explore practical innovation.'
        }
    ],
    内容效果评估: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '评估内容是否真正回应受众需求，减少低效或误导性传播。',
            reasonEn: 'Checks whether content serves audience needs and reduces ineffective or misleading communication.'
        }
    ],
    指标体系建设: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '用清晰指标追踪工作成效，为持续改进和可持续增长提供依据。',
            reasonEn: 'Clear metrics inform continuous improvement and sustainable growth.'
        }
    ],
    'SQL 进阶': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '提升复杂数据处理能力，支持更可靠的数字化分析与创新。',
            reasonEn: 'Advanced data handling supports more reliable digital analysis and innovation.'
        }
    ]
};
const ROLE_LINKS = {
    增长运营分析师: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '以数据评估增长质量和资源投入，支持更可持续的业务决策。',
            reasonEn: 'Uses data to assess growth quality and resource use for more sustainable business decisions.'
        }
    ],
    'AI 内容运营专员': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '探索负责任的 AI 内容工作流，推动数字化内容生产与创新。',
            reasonEn: 'Explores responsible AI content workflows and advances digital production and innovation.'
        },
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '通过内容审核与效果评估，促进准确、适度且有用的信息传播。',
            reasonEn: 'Review and evaluation can promote accurate, useful and proportionate communication.'
        }
    ],
    电商数据运营: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '结合销售、库存和需求数据，帮助优化商品运营及资源使用。',
            reasonEn: 'Combines sales, inventory and demand data to improve retail operations and resource use.'
        }
    ],
    用户洞察助理: [
        {
            goal: 'SDG 10 减少不平等',
            reason: '将不同用户的反馈纳入产品改进，帮助服务更好地回应多元需求。',
            reasonEn: 'Brings diverse user feedback into product improvement so services can respond to varied needs.'
        }
    ],
    自动化流程专员: [
        {
            goal: 'SDG 8 体面工作和经济增长',
            reason: '改善重复性流程，释放时间用于判断、服务和其他更高价值的工作。',
            reasonEn: 'Improves repetitive processes, freeing time for judgement, service and other higher-value work.'
        },
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '设计和维护数字化工作流程，支持创新能力与组织韧性。',
            reasonEn: 'Designs and maintains digital workflows that support innovation and organizational resilience.'
        }
    ],
    'AI 辅助内容运营': [
        {
            goal: 'SDG 9 产业、创新和基础设施',
            reason: '探索负责任的 AI 内容工作流，推动数字化内容生产与创新。',
            reasonEn: 'Explores responsible AI content workflows and advances digital production and innovation.'
        }
    ],
    电商数据产品运营: [
        {
            goal: 'SDG 12 负责任消费和生产',
            reason: '将运营数据转化为产品改进，支持更贴近需求的商品与服务。',
            reasonEn: 'Turns operational data into product improvements that better match real demand.'
        }
    ]
};
const DEFAULT_SKILL_LINKS = [
    {
        goal: 'SDG 4 优质教育',
        reason: '持续发展这项能力有助于终身学习和适应不断变化的工作要求。',
        reasonEn: 'Continuing to develop this skill supports lifelong learning and adapting to changing work.'
    }
];
const DEFAULT_ROLE_LINKS = [
    {
        goal: 'SDG 8 体面工作和经济增长',
        reason: '该职业路径可通过提升技能、工作质量或服务价值，为体面工作和可持续生计作出贡献。',
        reasonEn: 'This career path can support decent work and sustainable livelihoods through skills, work quality or service value.'
    }
];
function getSkillSdgLinks(skill) {
    return SKILL_LINKS[skill] ?? DEFAULT_SKILL_LINKS;
}
function getRoleSdgLinks(role) {
    return ROLE_LINKS[role] ?? DEFAULT_ROLE_LINKS;
}
}),
"[project]/lib/workforce-trends.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWorkforceTrendSnapshot",
    ()=>getWorkforceTrendSnapshot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/workforce-trends-v3.json.[json].cjs [app-route] (ecmascript)");
;
const ROLE_LABELS = {
    ecommerce_operations_executive: {
        en: 'E-commerce Operations Executive',
        zh: '电商运营专员'
    },
    data_operations_analyst: {
        en: 'Data Operations Analyst',
        zh: '数据运营分析师'
    },
    ai_content_operations_specialist: {
        en: 'AI Content Operations Specialist',
        zh: 'AI 内容运营专员'
    }
};
const SKILL_LABELS_ZH = {
    ecommerce_operations: '电商运营',
    marketplace_management: '平台运营',
    order_management: '订单管理',
    inventory_coordination: '库存协同',
    excel_google_sheets: 'Excel / Google 表格',
    reporting: '报表',
    customer_service: '客户服务',
    basic_marketing: '基础营销',
    communication: '沟通表达',
    process_coordination: '流程协调',
    product_data_quality: '商品数据质量',
    sql: 'SQL',
    data_analysis: '数据分析',
    data_quality: '数据质量',
    data_visualization: '数据可视化',
    dashboarding: '仪表盘',
    statistics: '统计学',
    basic_python: 'Python 基础',
    business_analysis: '商业分析',
    data_pipelines_etl: '数据管道与 ETL',
    seo: '搜索引擎优化',
    copywriting: '文案写作',
    ai_content_tools: 'AI 内容工具',
    ai_evaluation: 'AI 输出评估',
    brand_safety: '品牌安全',
    workflow_automation: '工作流自动化',
    content_analytics: '内容分析',
    content_operations: '内容运营',
    prompt_engineering: '提示词工程',
    marketing_analytics: '营销分析'
};
function getWorkforceTrendSnapshot() {
    const periodA = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].comparison_summary.period_a;
    const periodB = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].comparison_summary.period_b;
    return {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.data_version,
        lastUpdated: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.last_updated,
        country: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.country,
        targetPopulation: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.target_population,
        jobFamily: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.job_family,
        sourceFamily: periodA.source_family,
        currentPeriod: periodA.label,
        previousPeriod: periodB.label,
        methodology: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.methodology,
        limitations: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].meta.limitations,
        paths: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].transition_tracks.map((track)=>{
            const currentRole = ROLE_LABELS[track.from_role_id];
            const targetRole = ROLE_LABELS[track.to_role_id];
            const roleComparisons = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$workforce$2d$trends$2d$v3$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].period_comparisons.filter((comparison)=>comparison.role_id === track.to_role_id);
            const comparisons = roleComparisons.map((comparison)=>{
                const changePp = Math.round((comparison.period_a.rate - comparison.period_b.rate) * 100);
                const trend = comparison.trend === 'changing' || comparison.trend === 'insufficient' ? comparison.trend : changePp > 0 ? 'up' : changePp < 0 ? 'down' : 'insufficient';
                return {
                    skillId: comparison.skill_id,
                    skillNameEn: comparison.skill_name_en,
                    skillNameZh: SKILL_LABELS_ZH[comparison.skill_id] ?? comparison.skill_name_en,
                    currentRate: comparison.period_a.rate,
                    previousRate: comparison.period_b.rate,
                    changePp,
                    trend
                };
            }).sort((left, right)=>Math.abs(right.changePp) - Math.abs(left.changePp) || left.skillNameEn.localeCompare(right.skillNameEn));
            return {
                trackId: track.track_id,
                fromRoleEn: currentRole.en,
                fromRoleZh: currentRole.zh,
                toRoleEn: targetRole.en,
                toRoleZh: targetRole.zh,
                currentSampleSize: roleComparisons[0].period_a.sample_size,
                previousSampleSize: roleComparisons[0].period_b.sample_size,
                transitionFitScore: track.transition_fit_score,
                scoreChange: track.score_change,
                skills: comparisons
            };
        })
    };
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
"[project]/data/workforce-trends-v3.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"meta\":{\"domain\":\"Domain 1: Future-Ready Workforce\",\"job_family\":\"E-commerce operations\",\"country\":\"Malaysia\",\"target_population\":\"Final-year students and early-career workers, 0-3 years\",\"data_version\":\"v3\",\"status\":\"final\",\"production_ready\":true,\"intended_use\":\"Production dataset for the Domain 1 Future-Ready Workforce prototype.\",\"last_updated\":\"2026-10-23\",\"methodology\":\"v3 retains Period A and uses 19 dated JobStreet Malaysia postings for Period B. Direct HTTP requests to JobStreet returned 403, so every selected actual job page was rendered in Chrome and manually reviewed on 2026-10-23. Period B uses 2026-08-02 to 2026-09-26. The data-role sample now has five exact and two adjacent titles, matching Period A.\",\"limitations\":[\"Posting-derived signal records in trend_signals remain cross-sectional v2 prevalence records and do not establish time trends.\",\"The Period B JobStreet samples are small and purposive: 7 current-role, 7 data-role and 5 AI-content postings.\",\"All three Period B comparison compositions now match Period A: current role 6 exact + 1 senior, data role 5 exact + 2 adjacent, and AI content 5 adjacent.\",\"The data-role comparisons are rebuilt with 7 Period B postings, but every trend remains initial-scale and provisional.\",\"WEF evidence is global and forecast-based; DOSM evidence is national labour-market context rather than occupational skill demand.\",\"One v2 job posting remains undated and is excluded from comparisons; 15 course sources also lack a reliable original publication date.\",\"Six-week pathways provide a foundation and portfolio, not professional proficiency.\",\"Transition fit and scenario scores are documented assumptions, not forecasts or individual assessments.\",\"Direct HTTP requests to JobStreet returned HTTP 403; selected pages were manually reviewed in rendered browser sessions and recorded as manual_browser_review.\"],\"known_issues\":[],\"executive_summary_en\":\"v3 uses 19 manually reviewed JobStreet Malaysia postings for Period B. The data-role sample now contains 7 postings with 5 exact + 2 adjacent titles, matching Period A, and all 12 data-role comparisons were rebuilt. Initial data-role changes include lower SQL, Excel, data-analysis, visualization and dashboard prevalence, higher statistics prevalence, and changing Python and ETL signals. The current-role and AI-content compositions also match Period A. All findings remain initial-scale and provisional, while duplicate-role, reference and source-family checks pass.\",\"previous_version\":\"v2\",\"periods\":[{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"role\":\"baseline\",\"source_family\":\"JobStreet Malaysia\",\"posting_count\":22},{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"role\":\"comparison\",\"source_family\":\"JobStreet Malaysia\",\"posting_count\":19}],\"period_notes\":[\"Period A retains the dated v2 JobStreet baseline from 2026-09-27 to 2026-10-22.\",\"The preferred 2026-08-01 to 2026-09-20 window lacked enough JobStreet postings, so Period B uses the closest earlier eight-week window, 2026-08-02 to 2026-09-26, entirely before Period A.\",\"The v2 undated AI posting src_021 is retained with period_id \\\"unassigned\\\" and excluded from comparisons.\"],\"source_change_reason_en\":null,\"comparison_quality\":\"same_source_two_period\",\"production_ready_scope\":\"profiles_and_partial_trends\"},\"source_registry\":[{\"source_id\":\"src_001\",\"source_type\":\"job_posting\",\"source_name\":\"E-Commerce Operation Executive (Store) - Beauty Industry\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95341826\",\"published_date\":\"2026-10-20\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / beauty retail\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed three days ago when checked. Explicitly covers product listings, Shopee/Lazada/TikTok, orders, stock, reports, customer service, campaigns and process improvement.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_002\",\"source_type\":\"job_posting\",\"source_name\":\"ECommerce Operation Executive | Hybrid work | Fresh Grads Are Welcome\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95089690\",\"published_date\":\"2026-10-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / travel retail\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed sixteen days ago when checked. Explicitly covers SKUs, bulk uploads, product listings, pricing, promotions, platform familiarity and product-data quality checks.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_003\",\"source_type\":\"job_posting\",\"source_name\":\"E-Commerce Executive (Shopee, Lazada & TikTok Shop)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95320636\",\"published_date\":\"2026-10-17\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed six days ago when checked. Explicitly covers marketplace operations, listings, pricing, promotions, orders, customer service, inventory visibility, Excel and reports.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_004\",\"source_type\":\"job_posting\",\"source_name\":\"Malaysia E-commerce Executive - Marketplace\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95406816\",\"published_date\":\"2026-10-22\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / sportswear\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed one day ago when checked. Explicitly covers marketplace execution, product listing, pricing, campaigns, inventory coordination, fulfilment, reports and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_005\",\"source_type\":\"job_posting\",\"source_name\":\"Senior E-commerce Operation Executive - Marketplace\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94903261\",\"published_date\":\"2026-09-28\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / brand operations\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed twenty-four days ago when checked. Explicitly covers marketplace seller-centre operations, inventory planning, dashboards, Excel, reporting, business analysis and stakeholder communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"senior\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_006\",\"source_type\":\"job_posting\",\"source_name\":\"E-commerce Operations Executive (3-Month Contract, Remote)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94898186\",\"published_date\":\"2026-09-27\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / consumer electronics\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed twenty-six days ago when checked. Explicitly covers catalogue setup, TikTok Shop, Shopee/Lazada, product and pricing database work in Excel/Google Sheets, inventory and customer-facing operations.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_007\",\"source_type\":\"job_posting\",\"source_name\":\"ECommerce Platform Operation Executive | up to RM 4k | Hybrid\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95089537\",\"published_date\":\"2026-10-09\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Digital commerce platform operations\",\"role_id\":\"ecommerce_operations_executive\",\"notes\":\"Listed sixteen days ago when checked. Explicitly covers platform operations, reporting, quality assurance, process management, Excel, SKU and platform-data checks.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_008\",\"source_type\":\"job_posting\",\"source_name\":\"Data Analyst (Fresh Graduate)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95141055\",\"published_date\":\"2026-10-09\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Digital marketplace / used-car commerce\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed fourteen days ago when checked. Fresh-graduate role explicitly covering SQL, BigQuery, Python, dashboards, reporting, statistics, visualization, data accuracy and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_009\",\"source_type\":\"job_posting\",\"source_name\":\"E-commerce Data Analyst\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95075393\",\"published_date\":\"2026-10-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / consumer products\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed sixteen days ago when checked. Fresh-graduate role explicitly covering SQL, Excel, Google Analytics, dashboards, visualization, KPIs, reports and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_010\",\"source_type\":\"job_posting\",\"source_name\":\"E-commerce Product Data Executive\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95069066\",\"published_date\":\"2026-10-06\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce marketplace\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed sixteen days ago when checked. Explicitly covers supplier datasets, Excel cleaning and validation, product-data quality, automation, bulk uploads and ad hoc reporting.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_011\",\"source_type\":\"job_posting\",\"source_name\":\"Ecommerce Analyst\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95232689\",\"published_date\":\"2026-10-14\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed nine days ago when checked. Explicitly covers Excel, SQL, visualization, statistical analysis, reports and communication. The posting asks for 5+ years, so it does not establish entry-level demand.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_012\",\"source_type\":\"job_posting\",\"source_name\":\"Operations Data Analyst\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94958533\",\"published_date\":\"2026-10-01\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce / outdoor products retail\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed twenty-two days ago when checked. Explicitly covers Excel/Google Sheets, BI tools, dashboards, data cleaning, data accuracy, reports and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_013\",\"source_type\":\"job_posting\",\"source_name\":\"Associate, Data Analyst (Tableau - Order Monitoring)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95357853\",\"published_date\":\"2026-10-20\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Adjacent healthcare / order operations\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed three days ago when checked. Explicitly covers order monitoring, Tableau, dashboards, reports, analytical skills and stakeholder communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"exact\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_014\",\"source_type\":\"job_posting\",\"source_name\":\"Reporting Analyst (Retail)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95278146\",\"published_date\":\"2026-10-15\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Adjacent retail operations\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Listed seven days ago when checked. Explicitly covers Excel, Power BI, dashboards, reporting, data accuracy, visualization and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_015\",\"source_type\":\"job_posting\",\"source_name\":\"Senior AI-Generated Content (AIGC) Specialist\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95148219\",\"published_date\":\"2026-10-16\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"AI content production\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed seven days ago when checked. Senior posting explicitly covering generative AI tools, prompt engineering, AI workflows and AI-output quality testing.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"senior\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_016\",\"source_type\":\"job_posting\",\"source_name\":\"AI Short Video Content Creative / Copywriter\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94971390\",\"published_date\":\"2026-10-01\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"AI-assisted content marketing\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed twenty-two days ago when checked. Entry-compatible adjacent title explicitly covering copywriting, ChatGPT/Claude/Perplexity, content quality and content performance.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_017\",\"source_type\":\"job_posting\",\"source_name\":\"Digital & AI Marketing Specialist\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95064547\",\"published_date\":\"2026-10-06\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"AI-assisted digital marketing\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed seventeen days ago when checked. Adjacent title explicitly covering generative AI, SEO/GEO, content optimization, marketing automation, analytics and human oversight.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_018\",\"source_type\":\"job_posting\",\"source_name\":\"Senior SEO and Content Specialist\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95296571\",\"published_date\":\"2026-10-16\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"SEO and AI search content\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed seven days ago when checked. Senior adjacent title explicitly covering SEO, GEO/AEO, content writing, AI search visibility, quality control and workflow automation.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"senior\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_019\",\"source_type\":\"job_posting\",\"source_name\":\"Trust & Safety New Associate (English)\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95440057\",\"published_date\":\"2026-10-22\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Trust and safety / responsible AI services\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed seven hours ago when checked; fresh graduates welcome. Explicitly covers AI testing and evaluation, prompt strategies, content safety, policy and governance.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_020\",\"source_type\":\"job_posting\",\"source_name\":\"AI Model Reinforcement Mandarin Speaking Graduate\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95214600\",\"published_date\":\"2026-10-13\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Safety model operations\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed ten days ago when checked. Graduate role explicitly covering content operations, AI data, model-evaluation standards, quality review, ChatGPT/Claude/Gemini and Mandarin communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_021\",\"source_type\":\"job_posting\",\"source_name\":\"Search Operations Specialist - Model Data\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/88246428\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Search model data and labelling\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed more than 30 days ago when checked. Explicitly covers LLM quality assurance, labelling, research, content creation, editorial review, analytical writing and stakeholder communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":\"The source displayed only a relative age label when checked; no reliable publication date was available.\",\"role_match_type\":\"adjacent\",\"date_scope_note\":\"Undated v2 posting retained but excluded from Period A/Period B comparisons.\",\"period_id\":\"unassigned\",\"excluded_from_comparison\":true},{\"source_id\":\"src_022\",\"source_type\":\"job_posting\",\"source_name\":\"Content Review Analyst\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94997680\",\"published_date\":\"2026-10-02\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Content moderation and data classification\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed twenty-one days ago when checked. Entry-compatible role explicitly covering content review, rating, classification, annotation, policy compliance and workflow tools.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"adjacent\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_023\",\"source_type\":\"job_posting\",\"source_name\":\"Senior Content Strategist/Copywriter\",\"publisher\":\"Jobstreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95351697\",\"published_date\":\"2026-10-20\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Digital content strategy\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Listed three days ago when checked; asks for 3+ years of copywriting. Adjacent title explicitly covering SEO, copywriting, content performance, conversion and communication.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":null,\"updated_date\":null,\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP requests returned 403; the recorded source content was reviewed manually in a browser.\",\"date_note\":null,\"role_match_type\":\"senior\",\"period_id\":\"period_a\",\"period_label\":\"2026-09-27 to 2026-10-22\"},{\"source_id\":\"src_024\",\"source_type\":\"report\",\"source_name\":\"The Future of Jobs Report 2025\",\"publisher\":\"World Economic Forum\",\"source_url\":\"https://www.weforum.org/publications/the-future-of-jobs-report-2025/\",\"published_date\":\"2025-01-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Cross-industry\",\"role_id\":\"cross_role\",\"notes\":\"Employer survey covering more than 1,000 employers, 22 industry clusters and 55 economies. Used for AI and big-data skill demand, skill change, reskilling and workforce-transition context.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":null},{\"source_id\":\"src_025\",\"source_type\":\"official_statistics\",\"source_name\":\"Labour Force Statistics, August 2026\",\"publisher\":\"Department of Statistics Malaysia\",\"source_url\":\"https://www.dosm.gov.my/portal-main/release-content/labour-force-statistics-aug2026\",\"published_date\":\"2026-10-09\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Labour market\",\"role_id\":\"cross_role\",\"notes\":\"Official monthly release. Used only for current Malaysian labour-market context and not as evidence that a specific skill is in demand.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":null},{\"source_id\":\"src_026\",\"source_type\":\"report\",\"source_name\":\"Malaysia Digital Economy Blueprint\",\"publisher\":\"MyDigital, Government of Malaysia\",\"source_url\":\"https://www.mydigital.gov.my/wp-content/uploads/2023/08/Malaysia-Digital-Economy-Blueprint_ENG.pdf\",\"published_date\":\"2021-02-24\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Digital economy\",\"role_id\":\"cross_role\",\"notes\":\"Official blueprint PDF opened directly. Search-visible passage used for digital literacy, high-paying jobs and digital-economy context; it does not specify either target occupation.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":null},{\"source_id\":\"src_027\",\"source_type\":\"course\",\"source_name\":\"SQL for Data Science\",\"publisher\":\"University of California, Davis via Coursera\",\"source_url\":\"https://www.coursera.org/learn/sql-for-data-science\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Course page opened; approximately 20 hours at 10 hours per week for 2 weeks. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_028\",\"source_type\":\"course\",\"source_name\":\"Basic Statistics\",\"publisher\":\"University of Amsterdam via Coursera\",\"source_url\":\"https://www.coursera.org/learn/basic-statistics\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Course page opened; approximately 20 hours at 10 hours per week for 2 weeks. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_029\",\"source_type\":\"course\",\"source_name\":\"Scientific Computing with Python\",\"publisher\":\"freeCodeCamp\",\"source_url\":\"https://www.freecodecamp.org/learn/scientific-computing-with-python/\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Course page opened; free self-paced Python curriculum. No reliable total completion time or publication date was displayed.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_030\",\"source_type\":\"course\",\"source_name\":\"Free Training Videos\",\"publisher\":\"Tableau\",\"source_url\":\"https://www.tableau.com/learn/training\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Page opened; lists free Desktop, Cloud/Server and Prep videos. Public listing totals 67 minutes across the three series.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_031\",\"source_type\":\"course\",\"source_name\":\"ETL and Data Pipelines with Shell, Airflow and Kafka\",\"publisher\":\"IBM via Coursera\",\"source_url\":\"https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Course page opened; approximately 20 hours at 10 hours per week for 2 weeks. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_032\",\"source_type\":\"course\",\"source_name\":\"Business Analysis Fundamentals\",\"publisher\":\"Microsoft via Coursera\",\"source_url\":\"https://www.coursera.org/learn/business-analysis-fundamentals\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Course page opened; approximately 20 hours at 10 hours per week for 2 weeks. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_033\",\"source_type\":\"course\",\"source_name\":\"SEO Starter Guide\",\"publisher\":\"Google Search Central\",\"source_url\":\"https://developers.google.com/search/docs/fundamentals/seo-starter-guide\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Free official guide opened. No reliable course duration is displayed.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":\"2025-12-18\",\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The page displayed a 2025-12-18 update date, but no reliable original publication date.\"},{\"source_id\":\"src_034\",\"source_type\":\"course\",\"source_name\":\"SEO Copywriting for Digital Marketing Success\",\"publisher\":\"Skillshare via Coursera\",\"source_url\":\"https://www.coursera.org/learn/seo-copywriting-for-digital-marketing-success\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course page opened; states 6 hours and beginner level. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_035\",\"source_type\":\"course\",\"source_name\":\"Google AI Essentials\",\"publisher\":\"Google via Coursera\",\"source_url\":\"https://www.coursera.org/specializations/ai-essentials-google\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course page opened; states 4 hours to complete and covers AI tools, prompting, responsible use and output evaluation.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_036\",\"source_type\":\"course\",\"source_name\":\"Prompt Engineering for ChatGPT\",\"publisher\":\"Vanderbilt University via Coursera\",\"source_url\":\"https://www.coursera.org/learn/prompt-engineering\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course page opened; approximately 20 hours at 10 hours per week for 2 weeks. Audit-style access is available.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_037\",\"source_type\":\"course\",\"source_name\":\"Evaluating Large Language Model Outputs: A Practical Guide\",\"publisher\":\"Coursera\",\"source_url\":\"https://www.coursera.org/learn/evaluating-large-language-model-outputs-a-practical-guide\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course page opened; states 2 hours and covers human and automated LLM evaluation.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_038\",\"source_type\":\"course\",\"source_name\":\"AI Governance for Everyone\",\"publisher\":\"Edureka via Coursera\",\"source_url\":\"https://www.coursera.org/learn/ai-governance-everyone\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course page opened; states 6 hours, beginner level and recently updated in May 2026.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_039\",\"source_type\":\"course\",\"source_name\":\"Jumpstart (AI Builder Path)\",\"publisher\":\"Zapier Academy\",\"source_url\":\"https://learn.zapier.com/courses/zapier-academy-published-preview/sections/4d02bf0a-d3bc-4a7a-a352-76735464d7a5\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Course URL opened and redirected into Zapier Academy's AI Builder Path. Public catalog describes the introductory course as approximately 20 minutes; page is dynamically rendered, so duration is flagged for recheck.\",\"needs_verification\":false,\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The source page did not display a reliable publication date when checked.\"},{\"source_id\":\"src_040\",\"source_type\":\"course\",\"source_name\":\"Content Marketing Certification Course\",\"publisher\":\"HubSpot Academy\",\"source_url\":\"https://academy.hubspot.com/courses/content-marketing\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"ai_content_operations_specialist\",\"notes\":\"Verified as a free 14-lesson course with 54 videos, 11 quizzes, and a displayed duration of 8 hours 23 minutes. A HubSpot account is required for the course.\",\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The course page did not display a reliable publication date when checked.\",\"needs_verification\":false},{\"source_id\":\"src_041\",\"source_type\":\"course\",\"source_name\":\"SQLBolt interactive SQL lessons\",\"publisher\":\"SQLBolt\",\"source_url\":\"https://sqlbolt.com/\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"country\":\"Global\",\"industry\":\"Learning resource\",\"role_id\":\"data_operations_analyst\",\"notes\":\"Free interactive SQL lessons verified as an accessible replacement for the challenged Kaggle SQL page.\",\"access_status\":\"verified\",\"verified_http_status\":200,\"updated_date\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Automated HTTP GET returned HTTP 200 during the build review.\",\"date_note\":\"The course page did not display a reliable publication date when checked.\",\"needs_verification\":false},{\"source_id\":\"src_059\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-commerce Operations Executive(3-Month Contract, Remote)\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94898186\",\"published_date\":\"2026-09-26\",\"listing_timestamp_utc\":\"2026-09-26T15:52:35Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Consumer electronics and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce operations, TikTok Shop/Shopee/Lazada, inventory, Excel/Google Sheets, product listings and product-information accuracy.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"This is primarily an e-commerce operations role\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Manage product listings, pricing and inventory on TikTok Shop\"},{\"skill_id\":\"inventory_coordination\",\"quote_en\":\"Maintain and update product prices and inventory\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Maintain a master product and pricing database using Excel/Google Sheets\"},{\"skill_id\":\"product_data_quality\",\"quote_en\":\"Ensure product information and pricing are accurate across all online channels\"}],\"company\":\"Gadget communication pte ltd\"},{\"source_id\":\"src_060\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-Commerce Executive (Remote)\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94880686\",\"published_date\":\"2026-09-25\",\"listing_timestamp_utc\":\"2026-09-25T06:24:29Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Consumer electronics and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce operations, marketplace management, inventory and stock health, reporting, campaigns, communication and listing accuracy.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"Min 1 years of experience in e-commerce operations\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Working knowledge of at least one major marketplace seller centre\"},{\"skill_id\":\"inventory_coordination\",\"quote_en\":\"Maintain listing health, including stock status\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Report weekly on pricing position versus competitors\"},{\"skill_id\":\"communication\",\"quote_en\":\"clear written communication\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"including bulk repricing around campaigns\"},{\"skill_id\":\"product_data_quality\",\"quote_en\":\"keep our pricing and product listings accurate\"}],\"company\":\"Mister Mobile Trading Pte Ltd\"},{\"source_id\":\"src_061\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-Commerce Executive\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94856208\",\"published_date\":\"2026-09-24\",\"listing_timestamp_utc\":\"2026-09-24T06:49:45Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Healthcare retail and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Shah Alam, Selangor\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce platform operations, Shopee/Lazada/TikTok Shop, orders, inventory, reports, customer inquiries, campaigns and product-information accuracy.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"Manage daily operations of e-commerce platforms\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Shopee, Lazada, TikTok Shop\"},{\"skill_id\":\"order_management\",\"quote_en\":\"Monitor orders, inventory levels\"},{\"skill_id\":\"inventory_coordination\",\"quote_en\":\"Monitor orders, inventory levels\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Prepare regular sales and performance reports\"},{\"skill_id\":\"customer_service\",\"quote_en\":\"Respond to customer inquiries\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"Plan and execute online campaigns, promotions, vouchers, and sales events\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"Coordinate with warehouse, logistics, customer service, marketing, and finance teams\"},{\"skill_id\":\"product_data_quality\",\"quote_en\":\"Ensure product information, pricing, promotions, and brand presentation are accurate\"}],\"company\":\"KPJ Healthshoppe Sdn Bhd\"},{\"source_id\":\"src_062\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-Commerce Executive\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94852034\",\"published_date\":\"2026-09-24\",\"listing_timestamp_utc\":\"2026-09-24T04:45:18Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Retail and marketplace operations\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur City Centre, Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers marketplace operations, order processing and fulfilment, Excel/Google Sheets, reporting, customer inquiries, campaigns, communication and process coordination.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"oversee the day-to-day backend operations across our multi-brand marketplace stores\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Shopee, Lazada, TikTok Shop, and Shopify\"},{\"skill_id\":\"order_management\",\"quote_en\":\"Process incoming orders daily\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficiency in Microsoft Excel / Google Sheets\"},{\"skill_id\":\"reporting\",\"quote_en\":\"prepare comprehensive performance reports\"},{\"skill_id\":\"customer_service\",\"quote_en\":\"handle customer inquiries\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"Execute campaign setups\"},{\"skill_id\":\"communication\",\"quote_en\":\"Clear verbal and written communication skills\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"coordinate with the fulfillment team\"}],\"company\":\"Cheerful Marketing Sdn Bhd\"},{\"source_id\":\"src_063\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-Commerce Executive\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94827044\",\"published_date\":\"2026-09-23\",\"listing_timestamp_utc\":\"2026-09-23T05:52:11Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Multi-channel retail\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Masai, Johor\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce platforms, Shopee/Lazada/TikTok, order flow, Excel/Google Sheets, campaign planning, stakeholder coordination and operational execution.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"Support execution across other e-commerce platforms\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Strong understanding of marketplace platforms\"},{\"skill_id\":\"order_management\",\"quote_en\":\"order placed to delivery\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficient in Excel/Google Sheets\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"Campaign Planning & Commercial Execution\"},{\"skill_id\":\"communication\",\"quote_en\":\"Coordinate with internal stakeholders\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"coordination between consumer from order placed to delivery\"}],\"company\":\"AGENSI PEKERJAAN TRUST RECRUIT SDN. BHD.\"},{\"source_id\":\"src_064\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"E-Commerce Specialist\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94848475\",\"published_date\":\"2026-09-24\",\"listing_timestamp_utc\":\"2026-09-24T03:07:53Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Sporting goods retail\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce specialist work, commercial data analysis in Excel/Google Sheets, marketing and merchandising, communication and cross-team coordination.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"hands-on experience in e-commerce\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Microsoft Excel / Google Sheets\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"marketing, merchandising, and sales initiatives\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent verbal and written communication skills\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"coordinating closely with operations and supply chain teams\"}],\"company\":\"DECATHLON MALAYSIA SDN. BHD.\"},{\"source_id\":\"src_065\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"senior\",\"source_name\":\"Senior E-Commerce Executive / Assistant Manager (Marketplace & Affiliate)\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94846114\",\"published_date\":\"2026-09-24\",\"listing_timestamp_utc\":\"2026-09-24T02:12:08Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Fashion e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Klang/Port Klang\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Senior comparator explicitly covering e-commerce operations, marketplace operations, stock coordination, dashboards, campaigns and team leadership.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"2+ years in e-commerce operations\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Marketplace Operations: Run daily operations on TikTok Shop, Shopee and Lazada\"},{\"skill_id\":\"inventory_coordination\",\"quote_en\":\"working with the design, stock and live teams\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Direct dashboard access\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"Experience running marketplace campaigns\"}],\"company\":\"TalentSpark Recruitment Agency\"},{\"source_id\":\"src_066\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94501100\",\"published_date\":\"2026-08-04\",\"listing_timestamp_utc\":\"2026-08-04T01:56:43Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Data and analytics services\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, Excel, data analysis, data quality, visualization, dashboards, reporting, communication, Python and data pipelines.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Foundational knowledge of SQL\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Foundational knowledge of SQL, Excel\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"Prepare reports and perform data analysis\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"Support the validation and upkeep of data accuracy\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"data visualization platforms such as Power BI or Tableau\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"building and maintaining dashboards\"},{\"skill_id\":\"reporting\",\"quote_en\":\"report generation\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication skills\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Exposure to Python for data analysis\"},{\"skill_id\":\"data_pipelines_etl\",\"quote_en\":\"data pipelines\"}],\"company\":\"SEAhub Asia\"},{\"source_id\":\"src_067\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/93924502\",\"published_date\":\"2026-08-11\",\"listing_timestamp_utc\":\"2026-08-11T09:50:31Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Business services\",\"role_id\":\"data_operations_analyst\",\"location\":\"Petaling, Selangor\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers data analysis, charts and dashboards, statistical methods, reporting and data-pipeline requirements.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"data_analysis\",\"quote_en\":\"present data analysis results\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"Use charts, graphs, and dashboards\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"create charts, graphs, and dashboards\"},{\"skill_id\":\"statistics\",\"quote_en\":\"statistical methods\"},{\"skill_id\":\"reporting\",\"quote_en\":\"regular and ad hoc reports\"},{\"skill_id\":\"data_pipelines_etl\",\"quote_en\":\"build a data pipeline\"}],\"company\":\"Like Bug Sdn. Bhd.\"},{\"source_id\":\"src_068\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94385741\",\"published_date\":\"2026-09-02\",\"listing_timestamp_utc\":\"2026-09-02T08:36:38Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Commodity market intelligence\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur City Centre, Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers analytical research, data quality, reports and stakeholder communication in a commodities information role.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"data_analysis\",\"quote_en\":\"write original analytical articles\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"ensure database completeness and data quality\"},{\"skill_id\":\"reporting\",\"quote_en\":\"write daily commentaries, weekly reports, monthly reports\"},{\"skill_id\":\"communication\",\"quote_en\":\"Communication skills: Good cross-team collaboration and client communication abilities\"}],\"company\":\"Shanghai Ganglian E-Commerce Holdings Co., Ltd.\"},{\"source_id\":\"src_069\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"Professional, BI Analyst (TCF)\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/93876682\",\"published_date\":\"2026-08-10\",\"listing_timestamp_utc\":\"2026-08-10T03:30:00Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Customer experience services\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur City Centre, Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, BI analysis, data quality, visualization, dashboards, statistics, reporting, communication and Python/R.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Strong SQL\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"BI, data analyst, or reporting role\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"Maintain data quality and reconciliation checks\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"standards for data modelling, naming, security, and visualization\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"Design, build, and maintain dashboards\"},{\"skill_id\":\"statistics\",\"quote_en\":\"statistical analysis\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Build and maintain reporting\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent communication skills\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Python or R for analysis and automation\"}],\"company\":\"Concentrix\"},{\"source_id\":\"src_070\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"Master Data Steward\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94517327\",\"published_date\":\"2026-09-09\",\"listing_timestamp_utc\":\"2026-09-09T05:06:09Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Consumer goods and master data\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Adjacent master-data role explicitly covering data quality, reporting solutions, stakeholder communication and governance.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"data_quality\",\"quote_en\":\"drive Master Data governance, data quality\"},{\"skill_id\":\"reporting\",\"quote_en\":\"reporting, and automation solutions\"},{\"skill_id\":\"communication\",\"quote_en\":\"Support communication, training material updates\"}],\"company\":\"Danone\"},{\"source_id\":\"src_071\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"Content Quality and Evaluation Specialist Graduate (SMO) - 2027 Start\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/95190814\",\"published_date\":\"2026-09-09\",\"listing_timestamp_utc\":\"2026-09-09T09:55:26Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Technology and social media\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Graduate AI-content role explicitly covering generative AI tools, LLM evaluation, content moderation, content operations and data-quality workflows.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"hands-on experience with mainstream LLM products (ChatGPT, Claude, Gemini, etc.)\"},{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"Review and adjudicate data outputs against quality standards\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"content moderation\"},{\"skill_id\":\"content_operations\",\"quote_en\":\"content operations\"}],\"company\":\"TikTok\"},{\"source_id\":\"src_072\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"AI Model Data Operation Graduate (TikTok ADSO) - 2027 Start\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94504929\",\"published_date\":\"2026-09-08\",\"listing_timestamp_utc\":\"2026-09-08T21:42:03Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Technology and social media\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Graduate AI-model data role explicitly covering generative AI products, evaluation, content moderation, content operations and communication.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"Deep experience with mainstream foundation-model products such as ChatGPT, Claude, Gemini, or Doubao\"},{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"Review and judge data outputs against quality standards\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"content moderation\"},{\"skill_id\":\"content_operations\",\"quote_en\":\"content operations\"},{\"skill_id\":\"communication\",\"quote_en\":\"communication skills\"}],\"company\":\"TikTok\"},{\"source_id\":\"src_073\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"AI Quality Specialist, Customer Support - Trust & Safety\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94709609\",\"published_date\":\"2026-09-17\",\"listing_timestamp_utc\":\"2026-09-17T18:30:42Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Technology and social media\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"AI quality role explicitly covering AI evaluation, trust and safety, automation awareness and stakeholder communication.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"examine and evaluate the AI capabilities and accuracy\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"Trust and Safety\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication, training and presentation skills\"}],\"company\":\"TikTok\"},{\"source_id\":\"src_074\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"Trust & Safety New Associate – English Support | Fresh Grads Welcome\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94400016\",\"published_date\":\"2026-09-03\",\"listing_timestamp_utc\":\"2026-09-03T04:30:00Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Professional services and responsible AI\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur City Centre, Kuala Lumpur\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Trust-and-safety role explicitly covering generative AI, AI evaluation, content moderation, prompt strategies and communication.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"including generative AI\"},{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"evaluate, and challenge AI systems\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"Trust and Safety (Content Moderation and Responsible AI)\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent comprehension, communication\"},{\"skill_id\":\"prompt_engineering\",\"quote_en\":\"Develop and execute prompt strategies\"}],\"company\":\"Accenture Malaysia\"},{\"source_id\":\"src_075\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"adjacent\",\"source_name\":\"Copywriter\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94335957\",\"published_date\":\"2026-08-26\",\"listing_timestamp_utc\":\"2026-08-26T04:46:05Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Financial services and fintech\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Malaysia\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Adjacent copywriting role explicitly covering copywriting, daily AI tools, AI-assisted copy review and communication.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"copywriting\",\"quote_en\":\"Reviewing and editing of copywriting (be it from humans or AI)\"},{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"using AI tools daily\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong collaboration and communication skills\"}],\"company\":\"FUNDNEL TECHNOLOGIES SDN. BHD.\",\"company_aliases\":[\"Alta AI\",\"Alta Exchange\"]},{\"source_id\":\"src_076\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"DATA ANALYST\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94872226\",\"published_date\":\"2026-09-25\",\"listing_timestamp_utc\":\"2026-09-25T02:01:48Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Manufacturing and pharmaceutical operations\",\"role_id\":\"data_operations_analyst\",\"location\":\"Seberang Jaya, Penang\",\"company\":\"Sunshine Circuit (Penang) Sdn Bhd\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers data collection, analysis, reporting, documentation, Excel, dashboards, BI/data visualization, statistics and communication.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"data_analysis\",\"quote_en\":\"Strong data collection, analysis, reporting, and documentation skills\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"ensure accuracy and timeliness\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Strong data collection, analysis, reporting, and documentation skills\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficient in Microsoft Excel\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"Experience in dashboard/reporting tools\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"BI or data visualization skills\"},{\"skill_id\":\"statistics\",\"quote_en\":\"Statistics, Data Analytics\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication, coordination, and teamwork skills\"}]},{\"source_id\":\"src_077\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst\",\"publisher\":\"JobStreet Malaysia\",\"source_url\":\"https://my.jobstreet.com/job/94855546\",\"published_date\":\"2026-09-24\",\"listing_timestamp_utc\":\"2026-09-24T07:33:04Z\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Trading and inventory operations\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuching, Sarawak\",\"company\":\"Liansin Trading\",\"access_status\":\"manual_browser_review\",\"verified_http_status\":403,\"rendered_browser_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers data analysis, reporting, statistical analysis, Excel, Power BI/Tableau, dashboards, data accuracy, stakeholder communication and business decision support.\",\"verification_method\":\"manual_browser_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Direct HTTP access to JobStreet returned 403; the actual public job page was rendered in Chrome and manually reviewed on 2026-10-23.\",\"date_note\":\"Exact calendar date comes from JobStreet listing metadata; the displayed relative age was not used in the comparison.\",\"skill_mentions\":[{\"skill_id\":\"data_analysis\",\"quote_en\":\"Collect, compile, analyze, and interpret company data\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"Monitor data accuracy\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Data Analysis & Reporting\"},{\"skill_id\":\"statistics\",\"quote_en\":\"Perform statistical analysis\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficiency in Microsoft Excel\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"Create dashboards and data visualizations using Excel, Power BI, or related tools\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"Create dashboards and data visualizations using Excel, Power BI, or related tools\"},{\"skill_id\":\"communication\",\"quote_en\":\"Good communication skills in English and Bahasa Malaysia\"}]}],\"excluded_sources\":[{\"source_id\":\"src_042\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Ecommerce Executive\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4452922078/\",\"published_date\":\"2026-08-17\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce services\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers Ecommerce operations, marketplaces, order management, inventory management and marketing strategies.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"managing Ecommerce operations\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"optimizing storefronts on websites and marketplaces\"},{\"skill_id\":\"order_management\",\"quote_en\":\"order management\"},{\"skill_id\":\"inventory_coordination\",\"quote_en\":\"inventory management\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"marketing strategies\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_043\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"E-commerce Executive\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4461653405/\",\"published_date\":\"2026-09-03\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Cashback and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers full-link e-commerce operations, Shopee/Lazada/TikTok Shop, order tracking, Excel, business reports, customer inquiries, marketing campaigns, communication and cross-department collaboration.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"full-link e-commerce operation capabilities\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"manage platform product libraries\"},{\"skill_id\":\"order_management\",\"quote_en\":\"order tracking\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficient in Excel\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Prepare daily, weekly and monthly business data reports\"},{\"skill_id\":\"customer_service\",\"quote_en\":\"Respond to daily user inquiries\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"Design and launch customised cashback marketing campaigns\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent communication skills\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"Cross-Department Collaboration\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_044\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Online Business Executive (Based in Elmina East, Shah Alam)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4452331381/\",\"published_date\":\"2026-08-12\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Pet retail and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Selangor, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce operations, marketplace operations, SKU listing accuracy, marketplace reports, marketing promotions, stakeholder communication and Excel.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"Experience in e-commerce operations\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Marketplace Operations & Portfolio Management\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficient in Microsoft Excel\"},{\"skill_id\":\"reporting\",\"quote_en\":\"dashboards/reports\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"marketing-initiated promotions\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong stakeholder management and communication skills\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"coordination with account managers\"},{\"skill_id\":\"product_data_quality\",\"quote_en\":\"listing accuracy\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_045\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"E-commerce Growth Specialist\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4455719121/\",\"published_date\":\"2026-08-18\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Consumer electronics and e-commerce\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers e-commerce growth, marketplace operations, campaign coordination and reporting.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"Drive E-commerce Growth & GMV\"},{\"skill_id\":\"marketplace_management\",\"quote_en\":\"Work closely with Marketplace Operations\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Build clear reporting\"},{\"skill_id\":\"basic_marketing\",\"quote_en\":\"creating high-impact campaigns\"},{\"skill_id\":\"process_coordination\",\"quote_en\":\"Coordinate campaign execution across Marketplace, Marketing, Sales and Customer Operations\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_046\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"eCommerce & CRO Specialist\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4459159485/\",\"published_date\":\"2026-08-26\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce agency services\",\"role_id\":\"ecommerce_operations_executive\",\"location\":\"Kelang, Selangor, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly identifies eCommerce brand work and CRO; the public description provides limited additional skill detail.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ecommerce_operations\",\"quote_en\":\"eCommerce brands in Malaysia and Southeast Asia\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_047\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst, Business Intelligence - SPX Express\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4443124511/\",\"published_date\":\"2026-08-04\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce logistics\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, Excel, data analysis, reporting automation and Python.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Proficiency in Excel and SQL is a must\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficiency in Excel and SQL is a must\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"data analysis related work\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Automate reporting processes\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Knowledge in Python\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_048\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4448527615/\",\"published_date\":\"2026-08-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Data and analytics services\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, Excel, data analysis, validation, visualization tools, dashboards, report generation, communication, Python and data pipelines.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Foundational knowledge of SQL\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Foundational knowledge of SQL, Excel\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"Prepare reports and perform data analysis\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"validation and upkeep of data accuracy\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"data visualization platforms such as Power BI or Tableau\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"building and maintaining dashboards\"},{\"skill_id\":\"reporting\",\"quote_en\":\"report generation\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication skills\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Exposure to Python for data analysis\"},{\"skill_id\":\"data_pipelines_etl\",\"quote_en\":\"data pipelines\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_049\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Operations Data Analyst (Subang)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4449001733/\",\"published_date\":\"2026-08-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Facilities and operations services\",\"role_id\":\"data_operations_analyst\",\"location\":\"Shah Alam, Selangor, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers Excel analysis, data cleansing, statistics, numerical analysis and communication.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Intermediate excel skills\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"Excel data analysis\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"data cleansing\"},{\"skill_id\":\"statistics\",\"quote_en\":\"Statistics, Applied Mathematics\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong interpersonal and communication skills\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_050\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst, Business Intelligence - Retail & Fulfillment\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4452196313/\",\"published_date\":\"2026-08-19\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"E-commerce\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, data analysis, data integrity, dashboards, statistical analysis, reporting, communication, Python and data pipelines.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":\"The public LinkedIn listing date is 2026-08-19 and agrees with the structured discovery index. The page later displayed a re-promotion-style relative label; the exact listing date is used.\",\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Advanced proficiency in SQL\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"analyzing large datasets\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"Ensure data integrity and accuracy\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"dashboards\"},{\"skill_id\":\"statistics\",\"quote_en\":\"Statistical Analysis\"},{\"skill_id\":\"reporting\",\"quote_en\":\"performance monitoring and reporting\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication & collaboration skills\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Knowledge in R or Python\"},{\"skill_id\":\"data_pipelines_etl\",\"quote_en\":\"data pipelines\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_051\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"exact\",\"source_name\":\"Data Analyst Executive\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4466032270/\",\"published_date\":\"2026-09-11\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Retail\",\"role_id\":\"data_operations_analyst\",\"location\":\"Seri Kembangan, Selangor, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers Excel, sales and inventory data analysis, stock accuracy, reporting and communication.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":\"The public LinkedIn listing datetime is 2026-09-11. The discovery index recorded 2026-09-14. Both dates are inside Period B; 2026-09-11 is used.\",\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Proficiency in Microsoft Excel\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"analyzing sales and inventory data\"},{\"skill_id\":\"data_quality\",\"quote_en\":\"stock accuracy\"},{\"skill_id\":\"reporting\",\"quote_en\":\"Data analysis and reporting\"},{\"skill_id\":\"communication\",\"quote_en\":\"Effective communication\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_052\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Customer Service Data & Insights Analyst\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4461659993/\",\"published_date\":\"2026-09-03\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Customer-service technology\",\"role_id\":\"data_operations_analyst\",\"location\":\"Greater Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL/Google Sheets, analytics, BI tools, dashboards, reporting, communication, Python and business analysis.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"Strong SQL and Excel/Google Sheets skills\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Strong SQL and Excel/Google Sheets skills\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"Data Analytics, Business Analytics\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"BI tools such as Power BI, Tableau or Looker\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"Build dashboards\"},{\"skill_id\":\"reporting\",\"quote_en\":\"producing reports and dashboards\"},{\"skill_id\":\"communication\",\"quote_en\":\"communicate insights clearly\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Experience with Python\"},{\"skill_id\":\"business_analysis\",\"quote_en\":\"ad-hoc business analysis\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_053\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Business Intelligence (Operations)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4464354412/\",\"published_date\":\"2026-09-07\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Fintech and payments\",\"role_id\":\"data_operations_analyst\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers SQL, Excel, data analysis, visualization, dashboards, statistics, reporting, communication, Python/R and extract-clean-transform work.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"sql\",\"quote_en\":\"SQL\"},{\"skill_id\":\"excel_google_sheets\",\"quote_en\":\"Excel and SQL\"},{\"skill_id\":\"data_analysis\",\"quote_en\":\"Data Analytics\"},{\"skill_id\":\"data_visualization\",\"quote_en\":\"visualize complex data\"},{\"skill_id\":\"dashboarding\",\"quote_en\":\"dashboards\"},{\"skill_id\":\"statistics\",\"quote_en\":\"Statistics\"},{\"skill_id\":\"reporting\",\"quote_en\":\"optimize dashboards and reports\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong communication\"},{\"skill_id\":\"basic_python\",\"quote_en\":\"Python or R\"},{\"skill_id\":\"data_pipelines_etl\",\"quote_en\":\"Extract, clean, transform\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_054\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Online Content Operations Specialist\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4455715250/\",\"published_date\":\"2026-08-18\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Consumer electronics and e-commerce\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers content operations, product listings, content audits, SEO basics, brand compliance, content performance analysis and communication.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"seo\",\"quote_en\":\"Basic understanding of SEO\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"Ensure content complies with relevant platform policies and brand requirements\"},{\"skill_id\":\"content_analytics\",\"quote_en\":\"Analyse which listings, posts, products, and content formats generate stronger exposure and customer engagement\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong coordination and communication skills\"},{\"skill_id\":\"content_operations\",\"quote_en\":\"Content Operations Specialist\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_055\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"ST45 - AI Social Media Executive (Chinese & English)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4455345106/\",\"published_date\":\"2026-08-17\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Fintech and trading\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers AI content tools, AI-powered content workflows, content performance, communication, social media content operations and a prompt library.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"Utilise AI tools such as ChatGPT, Kling, Runway, Midjourney\"},{\"skill_id\":\"workflow_automation\",\"quote_en\":\"Support the optimisation of AI-powered content production workflows\"},{\"skill_id\":\"content_analytics\",\"quote_en\":\"Track and analyse content performance\"},{\"skill_id\":\"communication\",\"quote_en\":\"communicate and collaborate effectively with international teams\"},{\"skill_id\":\"content_operations\",\"quote_en\":\"day-to-day operations and content publishing\"},{\"skill_id\":\"prompt_engineering\",\"quote_en\":\"structured library of AI prompts\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_056\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Copywriter\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4461246953/\",\"published_date\":\"2026-08-31\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Financial services\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers copywriting, daily AI tools, reviewing and editing AI copy, hybrid human/AI workflows and communication.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"copywriting\",\"quote_en\":\"Copywriter\"},{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"using AI tools daily\"},{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"Reviewing and editing of copywriting (be it from humans or AI)\"},{\"skill_id\":\"workflow_automation\",\"quote_en\":\"Hybrid human/AI copywriting workflows\"},{\"skill_id\":\"communication\",\"quote_en\":\"Strong collaboration and communication skills\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_057\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Trust & Safety Associate (Turkish Speaker)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4453236994/\",\"published_date\":\"2026-09-18\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Professional services and responsible AI\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers generative AI, AI system evaluation, trust and safety, communication and prompt strategies.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"ai_content_tools\",\"quote_en\":\"generative AI\"},{\"skill_id\":\"ai_evaluation\",\"quote_en\":\"systematically test, evaluate, and challenge AI systems\"},{\"skill_id\":\"brand_safety\",\"quote_en\":\"Trust and Safety (Content Moderation and Responsible AI)\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent comprehension, communication\"},{\"skill_id\":\"prompt_engineering\",\"quote_en\":\"Develop and execute prompt strategies\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"},{\"source_id\":\"src_058\",\"source_type\":\"job_posting\",\"period_id\":\"period_b\",\"period_label\":\"2026-08-01 to 2026-09-20\",\"role_match_type\":\"adjacent\",\"source_name\":\"Trust & Safety New Associate (Indonesian)\",\"publisher\":\"LinkedIn Jobs Malaysia\",\"source_url\":\"https://www.linkedin.com/jobs/view/4453260010/\",\"published_date\":\"2026-09-18\",\"checked_date\":\"2026-10-23\",\"country\":\"Malaysia\",\"industry\":\"Professional services and responsible AI\",\"role_id\":\"ai_content_operations_specialist\",\"location\":\"Kuala Lumpur, Malaysia\",\"access_status\":\"verified\",\"verified_http_status\":200,\"needs_verification\":false,\"notes\":\"Explicitly covers trust-and-safety content moderation and communication; this variant does not explicitly describe AI output evaluation.\",\"verification_method\":\"direct_public_page_review\",\"verification_checked_date\":\"2026-10-23\",\"verification_note\":\"Public LinkedIn job page loaded with the recorded title, company, location and description on 2026-10-23.\",\"date_note\":null,\"source_change_reason_en\":\"JobStreet Malaysia automated page access returned HTTP 403. The replacement source is a public LinkedIn Jobs Malaysia posting with a readable title, company, location, publication date and job description.\",\"skill_mentions\":[{\"skill_id\":\"brand_safety\",\"quote_en\":\"Trust and Safety\"},{\"skill_id\":\"communication\",\"quote_en\":\"Excellent comprehension, communication\"}],\"reason_en\":\"Replaced to preserve the same-source JobStreet comparison.\"}],\"role_profiles\":[{\"role_id\":\"ecommerce_operations_executive\",\"role_name_en\":\"E-commerce Operations Executive\",\"role_type\":\"current\",\"core_skills\":[\"ecommerce_operations\",\"marketplace_management\",\"order_management\",\"inventory_coordination\",\"excel_google_sheets\",\"reporting\",\"customer_service\",\"basic_marketing\",\"communication\",\"process_coordination\",\"product_data_quality\"],\"emerging_skills\":[],\"recommended_skills\":[],\"unsupported_skills\":[],\"evidence_record_ids\":[\"sig_001\",\"sig_002\",\"sig_003\",\"sig_004\",\"sig_005\",\"sig_006\",\"sig_007\",\"sig_008\",\"sig_009\",\"sig_010\",\"sig_011\"],\"summary_en\":\"The current role centres on daily platform execution, product listing and delisting, pricing and promotions, order and inventory coordination, recurring reporting, customer issues, and cross-team process work. The strongest transferable assets in the reviewed sample are Excel, reporting, communication, product-data accuracy, and marketplace operations experience.\",\"skill_evidence\":[{\"skill_id\":\"ecommerce_operations\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_001\"],\"rationale_en\":\"E-commerce operations work was explicitly described in all 7 reviewed current-role postings.\"},{\"skill_id\":\"marketplace_management\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_002\"],\"rationale_en\":\"Marketplace management was explicitly described in all 7 reviewed current-role postings.\"},{\"skill_id\":\"order_management\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_003\"],\"rationale_en\":\"Order management was explicitly described in 4 of 7 reviewed current-role postings.\"},{\"skill_id\":\"inventory_coordination\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_004\"],\"rationale_en\":\"Inventory coordination was explicitly described in 6 of 7 reviewed current-role postings.\"},{\"skill_id\":\"excel_google_sheets\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_005\"],\"rationale_en\":\"Excel or Google Sheets was explicitly described in 4 of 7 reviewed current-role postings.\"},{\"skill_id\":\"reporting\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_006\"],\"rationale_en\":\"Reporting was explicitly described in 5 of 7 reviewed current-role postings.\"},{\"skill_id\":\"customer_service\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_007\"],\"rationale_en\":\"Customer service work was explicitly described in 4 of 7 reviewed current-role postings.\"},{\"skill_id\":\"basic_marketing\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_008\"],\"rationale_en\":\"Basic marketing work was explicitly described in 5 of 7 reviewed current-role postings.\"},{\"skill_id\":\"communication\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_009\"],\"rationale_en\":\"Communication was explicitly described in 5 of 7 reviewed current-role postings.\"},{\"skill_id\":\"process_coordination\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_010\"],\"rationale_en\":\"Process coordination was explicitly described in 4 of 7 reviewed current-role postings.\"},{\"skill_id\":\"product_data_quality\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_011\"],\"rationale_en\":\"Product-data quality was explicitly described in 6 of 7 reviewed current-role postings.\"}]},{\"role_id\":\"data_operations_analyst\",\"role_name_en\":\"Data Operations Analyst\",\"role_type\":\"target\",\"core_skills\":[\"sql\",\"excel_google_sheets\",\"data_analysis\",\"data_quality\",\"data_visualization\",\"dashboarding\",\"statistics\",\"reporting\",\"communication\"],\"emerging_skills\":[],\"recommended_skills\":[\"basic_python\"],\"unsupported_skills\":[\"business_analysis\",\"data_pipelines_etl\"],\"evidence_record_ids\":[\"sig_012\",\"sig_013\",\"sig_014\",\"sig_015\",\"sig_016\",\"sig_017\",\"sig_018\",\"sig_019\",\"sig_020\",\"sig_021\",\"sig_022\",\"sig_023\"],\"summary_en\":\"The reviewed data roles emphasise SQL, Excel, data quality, reporting, dashboards, statistics, and communication. Python, business analysis, and ETL remain useful pathway topics, but their low or absent posting counts prevent them from being labelled core market requirements in this sample.\",\"skill_evidence\":[{\"skill_id\":\"sql\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_012\"],\"rationale_en\":\"SQL was explicitly named in 3 of 7 reviewed data-track postings, meeting the core threshold.\"},{\"skill_id\":\"excel_google_sheets\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_013\"],\"rationale_en\":\"Excel or Google Sheets was explicitly named in 5 of 7 reviewed data-track postings.\"},{\"skill_id\":\"data_analysis\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_014\"],\"rationale_en\":\"Analytical work was explicitly described in all 7 reviewed data-track postings.\"},{\"skill_id\":\"data_quality\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_015\"],\"rationale_en\":\"Data quality or validation work was explicitly described in 6 of 7 reviewed data-track postings.\"},{\"skill_id\":\"data_visualization\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_016\"],\"rationale_en\":\"Visualization was explicitly described in 6 of 7 reviewed data-track postings.\"},{\"skill_id\":\"dashboarding\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_017\"],\"rationale_en\":\"Dashboard creation was explicitly described in 6 of 7 reviewed data-track postings.\"},{\"skill_id\":\"statistics\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_018\"],\"rationale_en\":\"Statistics was explicitly named in 3 of 7 reviewed data-track postings, meeting the core threshold.\"},{\"skill_id\":\"reporting\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_020\"],\"rationale_en\":\"Reporting was explicitly described in all 7 reviewed data-track postings.\"},{\"skill_id\":\"communication\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_023\"],\"rationale_en\":\"Communication was explicitly described in 6 of 7 reviewed data-track postings.\"},{\"skill_id\":\"basic_python\",\"status\":\"recommended\",\"evidence_record_ids\":[\"sig_019\"],\"rationale_en\":\"Python appeared explicitly in only 1 of 7 postings, so it is recommended for the pathway but not classified as a core market requirement.\"},{\"skill_id\":\"business_analysis\",\"status\":\"insufficient\",\"evidence_record_ids\":[\"sig_021\"],\"rationale_en\":\"No reviewed data-track posting explicitly mentioned business analysis; it remains a pathway learning target, not a supported core skill.\"},{\"skill_id\":\"data_pipelines_etl\",\"status\":\"insufficient\",\"evidence_record_ids\":[\"sig_022\"],\"rationale_en\":\"No reviewed data-track posting explicitly mentioned data pipelines or ETL; it remains a pathway learning target, not a supported core skill.\"}]},{\"role_id\":\"ai_content_operations_specialist\",\"role_name_en\":\"AI Content Operations Specialist\",\"role_type\":\"target\",\"core_skills\":[\"seo\",\"copywriting\",\"ai_content_tools\",\"ai_evaluation\",\"brand_safety\",\"workflow_automation\",\"content_analytics\",\"communication\"],\"emerging_skills\":[],\"recommended_skills\":[\"content_operations\",\"prompt_engineering\",\"marketing_analytics\"],\"unsupported_skills\":[],\"evidence_record_ids\":[\"sig_024\",\"sig_025\",\"sig_026\",\"sig_027\",\"sig_028\",\"sig_029\",\"sig_030\",\"sig_031\",\"sig_032\",\"sig_033\",\"sig_034\"],\"summary_en\":\"AI content operations titles are fragmented across generative content, SEO, content review, model evaluation, and trust-and-safety work. The most consistent evidence-backed requirements are AI content tools, output evaluation, communication, content analytics, copywriting, SEO, brand safety, and workflow automation. Lower-frequency topics remain pathway recommendations rather than core requirements.\",\"skill_evidence\":[{\"skill_id\":\"seo\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_025\"],\"rationale_en\":\"SEO was explicitly named in 3 of 9 reviewed AI-content-track postings, meeting the core threshold.\"},{\"skill_id\":\"copywriting\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_026\"],\"rationale_en\":\"Copywriting was explicitly described in 4 of 9 reviewed AI-content-track postings.\"},{\"skill_id\":\"ai_content_tools\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_027\"],\"rationale_en\":\"Generative AI content tools were explicitly described in 6 of 9 reviewed AI-content-track postings.\"},{\"skill_id\":\"ai_evaluation\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_029\"],\"rationale_en\":\"AI output evaluation or quality review was explicitly described in 8 of 9 reviewed AI-content-track postings.\"},{\"skill_id\":\"brand_safety\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_030\"],\"rationale_en\":\"Brand safety or trust-and-safety work was explicitly described in 3 of 9 reviewed AI-content-track postings, meeting the core threshold.\"},{\"skill_id\":\"workflow_automation\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_031\"],\"rationale_en\":\"Workflow automation was explicitly described in 3 of 9 reviewed AI-content-track postings, meeting the core threshold.\"},{\"skill_id\":\"content_analytics\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_032\"],\"rationale_en\":\"Content performance analysis was explicitly described in 5 of 9 reviewed AI-content-track postings.\"},{\"skill_id\":\"communication\",\"status\":\"core\",\"evidence_record_ids\":[\"sig_034\"],\"rationale_en\":\"Communication was explicitly described in 8 of 9 reviewed AI-content-track postings.\"},{\"skill_id\":\"content_operations\",\"status\":\"recommended\",\"evidence_record_ids\":[\"sig_024\"],\"rationale_en\":\"Content operations appeared explicitly in only 1 of 9 postings, so it is a useful pathway skill but not a supported core requirement.\"},{\"skill_id\":\"prompt_engineering\",\"status\":\"recommended\",\"evidence_record_ids\":[\"sig_028\"],\"rationale_en\":\"Prompt engineering appeared explicitly in only 2 of 9 postings, so it is recommended but not classified as a core requirement.\"},{\"skill_id\":\"marketing_analytics\",\"status\":\"recommended\",\"evidence_record_ids\":[\"sig_033\"],\"rationale_en\":\"Marketing analytics appeared explicitly in only 1 of 9 postings, so it is recommended for the pathway but not treated as core.\"}]}],\"transition_tracks\":[{\"track_id\":\"ecommerce_to_data_operations\",\"from_role_id\":\"ecommerce_operations_executive\",\"to_role_id\":\"data_operations_analyst\",\"to_role_name_en\":\"Data Operations Analyst\",\"transition_fit_score\":60,\"skill_gap_score\":40,\"fit_score_type\":\"weighted_team_inference\",\"score_method\":{\"formula\":\"0.50 * target_core_coverage + 0.20 * transferable_skill_coverage + 0.15 * scenario_demand + 0.10 * evidence_strength + 0.05 * resource_availability\",\"inputs\":{\"target_core_coverage\":0.5,\"transferable_skill_coverage\":0.708,\"scenario_demand\":0.735,\"evidence_strength\":0.55,\"resource_availability\":0.92},\"note\":\"Target-core coverage remains three full matches plus half credit for three partial matches across nine evidence-backed core skills. Evidence strength reflects the initial-scale 7-versus-7 composition-matched JobStreet sample.\"},\"matched_skills\":[\"excel_google_sheets\",\"reporting\",\"communication\"],\"partially_transferable_skills\":[\"data_analysis\",\"data_quality\",\"dashboarding\"],\"missing_skills\":[\"sql\",\"data_visualization\",\"statistics\"],\"recommended_gap_skills\":[\"basic_python\",\"data_pipelines_etl\",\"business_analysis\"],\"estimated_weeks\":6,\"scenario_demand\":{\"automation_first\":0.82,\"human_centered_ai\":0.65},\"sdg_ids\":[8,9],\"evidence_record_ids\":[\"sig_012\",\"sig_013\",\"sig_014\",\"sig_015\",\"sig_016\",\"sig_017\",\"sig_018\",\"sig_019\",\"sig_020\",\"sig_021\",\"sig_022\",\"sig_023\",\"cmp_012\",\"cmp_013\",\"cmp_014\",\"cmp_015\",\"cmp_016\",\"cmp_017\",\"cmp_018\",\"cmp_019\",\"cmp_020\",\"cmp_021\",\"cmp_022\",\"cmp_023\"],\"rationale_en\":\"The v3 data-operations fit score is 60, down 3 from v2. Skill transfer is unchanged; the change records lower evidence strength for an initial-scale two-period sample.\",\"scoring_status\":\"team_inference_assumption\",\"v2_transition_fit_score\":63,\"v2_skill_gap_score\":37,\"v2_fit_score\":63,\"v3_fit_score\":60,\"score_change\":-3,\"v3_score_reason_en\":\"The data-role Period B sample is now composition-matched at 7 versus 7, but it is initial-scale. Evidence strength is reduced from 0.82 to 0.55, producing a v3 score of 60 under the unchanged v2 weighting method.\",\"period_comparison_ids\":[\"cmp_012\",\"cmp_013\",\"cmp_014\",\"cmp_015\",\"cmp_016\",\"cmp_017\",\"cmp_018\",\"cmp_019\",\"cmp_020\",\"cmp_021\",\"cmp_022\",\"cmp_023\"]},{\"track_id\":\"ecommerce_to_ai_content_operations\",\"from_role_id\":\"ecommerce_operations_executive\",\"to_role_id\":\"ai_content_operations_specialist\",\"to_role_name_en\":\"AI Content Operations Specialist\",\"transition_fit_score\":46,\"skill_gap_score\":54,\"fit_score_type\":\"weighted_team_inference\",\"score_method\":{\"formula\":\"0.50 * target_core_coverage + 0.20 * transferable_skill_coverage + 0.15 * scenario_demand + 0.10 * evidence_strength + 0.05 * resource_availability\",\"inputs\":{\"target_core_coverage\":0.25,\"transferable_skill_coverage\":0.64,\"scenario_demand\":0.73,\"evidence_strength\":0.55,\"resource_availability\":0.94},\"note\":\"Target-core coverage remains communication as a direct match and copywriting and content analytics as half-credit partial matches across eight evidence-backed core skills. Evidence strength is reduced for the initial-scale 5-versus-5 adjacent-title JobStreet sample.\"},\"matched_skills\":[\"communication\"],\"partially_transferable_skills\":[\"copywriting\",\"content_analytics\"],\"missing_skills\":[\"seo\",\"ai_content_tools\",\"ai_evaluation\",\"brand_safety\",\"workflow_automation\"],\"recommended_gap_skills\":[\"content_operations\",\"prompt_engineering\",\"marketing_analytics\"],\"estimated_weeks\":6,\"scenario_demand\":{\"automation_first\":0.66,\"human_centered_ai\":0.8},\"sdg_ids\":[8,9,12],\"evidence_record_ids\":[\"sig_024\",\"sig_025\",\"sig_026\",\"sig_027\",\"sig_028\",\"sig_029\",\"sig_030\",\"sig_031\",\"sig_032\",\"sig_033\",\"sig_034\",\"cmp_024\",\"cmp_025\",\"cmp_026\",\"cmp_027\",\"cmp_028\",\"cmp_029\",\"cmp_030\",\"cmp_031\",\"cmp_032\",\"cmp_033\",\"cmp_034\"],\"rationale_en\":\"The v3 fit score is 46, down 3 from v2 because the initial-scale AI-content evidence strength is lower. Skill transfer remains unchanged; the result is a team inference, not a forecast.\",\"scoring_status\":\"team_inference_assumption\",\"v2_transition_fit_score\":49,\"v2_skill_gap_score\":51,\"v2_fit_score\":49,\"v3_fit_score\":46,\"score_change\":-3,\"v3_score_reason_en\":\"The target-core and transferable-skill inputs are unchanged, but evidence strength is reduced from 0.81 to 0.55 because the Period B adjacent-title AI-content sample is initial-scale (5 versus 5). This produces 46 under the v2 weighting method and is labelled an assumption.\",\"period_comparison_ids\":[\"cmp_024\",\"cmp_025\",\"cmp_026\",\"cmp_027\",\"cmp_028\",\"cmp_029\",\"cmp_030\",\"cmp_031\",\"cmp_032\",\"cmp_033\",\"cmp_034\"]}],\"trend_signals\":[{\"record_id\":\"sig_001\",\"trend_id\":\"sig_001\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"ecommerce_operations\",\"skill_name_en\":\"E-commerce operations\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":7,\"rate\":1},\"previous_prevalence\":null,\"trend_note_en\":\"7 of 7 reviewed postings explicitly mention e-commerce operations. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},{\"record_id\":\"sig_002\",\"trend_id\":\"sig_002\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"marketplace_management\",\"skill_name_en\":\"Marketplace management\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":7,\"rate\":1},\"previous_prevalence\":null,\"trend_note_en\":\"7 of 7 reviewed postings explicitly mention marketplace management. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},{\"record_id\":\"sig_003\",\"trend_id\":\"sig_003\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"order_management\",\"skill_name_en\":\"Order management\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714},\"previous_prevalence\":null,\"trend_note_en\":\"4 of 7 reviewed postings explicitly mention order management. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_006\"]},{\"record_id\":\"sig_004\",\"trend_id\":\"sig_004\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"inventory_coordination\",\"skill_name_en\":\"Inventory coordination\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention inventory coordination. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},{\"record_id\":\"sig_005\",\"trend_id\":\"sig_005\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"excel_google_sheets\",\"skill_name_en\":\"Excel and Google Sheets\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714},\"previous_prevalence\":null,\"trend_note_en\":\"4 of 7 reviewed postings explicitly mention excel and google sheets. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_003\",\"src_005\",\"src_006\",\"src_007\"]},{\"record_id\":\"sig_006\",\"trend_id\":\"sig_006\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"reporting\",\"skill_name_en\":\"Reporting\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143},\"previous_prevalence\":null,\"trend_note_en\":\"5 of 7 reviewed postings explicitly mention reporting. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_005\",\"src_007\"]},{\"record_id\":\"sig_007\",\"trend_id\":\"sig_007\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"customer_service\",\"skill_name_en\":\"Customer service\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714},\"previous_prevalence\":null,\"trend_note_en\":\"4 of 7 reviewed postings explicitly mention customer service. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_006\"]},{\"record_id\":\"sig_008\",\"trend_id\":\"sig_008\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"basic_marketing\",\"skill_name_en\":\"Basic marketing\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143},\"previous_prevalence\":null,\"trend_note_en\":\"5 of 7 reviewed postings explicitly mention basic marketing. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\"]},{\"record_id\":\"sig_009\",\"trend_id\":\"sig_009\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143},\"previous_prevalence\":null,\"trend_note_en\":\"5 of 7 reviewed postings explicitly mention communication. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_005\",\"src_007\"]},{\"record_id\":\"sig_010\",\"trend_id\":\"sig_010\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"process_coordination\",\"skill_name_en\":\"Process coordination\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714},\"previous_prevalence\":null,\"trend_note_en\":\"4 of 7 reviewed postings explicitly mention process coordination. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_003\",\"src_004\",\"src_007\"]},{\"record_id\":\"sig_011\",\"trend_id\":\"sig_011\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"product_data_quality\",\"skill_name_en\":\"Product-data quality\",\"scope\":\"Malaysia / Digital commerce / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention product-data quality. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_006\",\"src_007\"]},{\"record_id\":\"sig_012\",\"trend_id\":\"sig_012\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"sql\",\"skill_name_en\":\"SQL\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286},\"previous_prevalence\":null,\"trend_note_en\":\"3 of 7 reviewed postings explicitly mention sql. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_011\"]},{\"record_id\":\"sig_013\",\"trend_id\":\"sig_013\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"excel_google_sheets\",\"skill_name_en\":\"Excel and Google Sheets\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143},\"previous_prevalence\":null,\"trend_note_en\":\"5 of 7 reviewed postings explicitly mention excel and google sheets. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_014\"]},{\"record_id\":\"sig_014\",\"trend_id\":\"sig_014\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_analysis\",\"skill_name_en\":\"Data analysis\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":7,\"rate\":1},\"previous_prevalence\":null,\"trend_note_en\":\"7 of 7 reviewed postings explicitly mention data analysis. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_015\",\"trend_id\":\"sig_015\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_quality\",\"skill_name_en\":\"Data quality\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention data quality. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_016\",\"trend_id\":\"sig_016\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_visualization\",\"skill_name_en\":\"Data visualization\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention data visualization. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_017\",\"trend_id\":\"sig_017\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"dashboarding\",\"skill_name_en\":\"Dashboarding\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention dashboarding. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_018\",\"trend_id\":\"sig_018\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"statistics\",\"skill_name_en\":\"Statistics\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286},\"previous_prevalence\":null,\"trend_note_en\":\"3 of 7 reviewed postings explicitly mention statistics. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_011\"]},{\"record_id\":\"sig_019\",\"trend_id\":\"sig_019\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"basic_python\",\"skill_name_en\":\"Basic Python\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":1,\"rate\":0.1429},\"previous_prevalence\":null,\"trend_note_en\":\"1 of 7 reviewed postings explicitly mention basic python. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_020\",\"trend_id\":\"sig_020\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"reporting\",\"skill_name_en\":\"Reporting\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":7,\"rate\":1},\"previous_prevalence\":null,\"trend_note_en\":\"7 of 7 reviewed postings explicitly mention reporting. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_021\",\"trend_id\":\"sig_021\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"business_analysis\",\"skill_name_en\":\"Business analysis\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"insufficient\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":0,\"rate\":0},\"previous_prevalence\":null,\"trend_note_en\":\"No explicit mention was found in 7 reviewed postings. This is cross-sectional absence in a small purposive sample, not evidence of a market-wide decline.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_022\",\"trend_id\":\"sig_022\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_pipelines_etl\",\"skill_name_en\":\"Data pipelines and ETL\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"insufficient\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":0,\"rate\":0},\"previous_prevalence\":null,\"trend_note_en\":\"No explicit mention was found in 7 reviewed postings. This is cross-sectional absence in a small purposive sample, not evidence of a market-wide decline.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_023\",\"trend_id\":\"sig_023\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"scope\":\"Malaysia / E-commerce plus adjacent retail operations / 0-3 years\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 7 reviewed postings explicitly mention communication. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_008\",\"src_009\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},{\"record_id\":\"sig_024\",\"trend_id\":\"sig_024\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_operations\",\"skill_name_en\":\"Content operations\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":1,\"rate\":0.1111},\"previous_prevalence\":null,\"trend_note_en\":\"1 of 9 reviewed postings explicitly mention content operations. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_016\",\"src_017\",\"src_018\",\"src_019\",\"src_020\",\"src_021\",\"src_022\",\"src_023\"]},{\"record_id\":\"sig_025\",\"trend_id\":\"sig_025\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"seo\",\"skill_name_en\":\"Search engine optimization\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":3,\"rate\":0.3333},\"previous_prevalence\":null,\"trend_note_en\":\"3 of 9 reviewed postings explicitly mention search engine optimization. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_017\",\"src_018\",\"src_023\"]},{\"record_id\":\"sig_026\",\"trend_id\":\"sig_026\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"copywriting\",\"skill_name_en\":\"Copywriting\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":4,\"rate\":0.4444},\"previous_prevalence\":null,\"trend_note_en\":\"4 of 9 reviewed postings explicitly mention copywriting. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_016\",\"src_018\",\"src_021\",\"src_023\"]},{\"record_id\":\"sig_027\",\"trend_id\":\"sig_027\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"ai_content_tools\",\"skill_name_en\":\"AI content tools\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":6,\"rate\":0.6667},\"previous_prevalence\":null,\"trend_note_en\":\"6 of 9 reviewed postings explicitly mention ai content tools. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_016\",\"src_017\",\"src_018\",\"src_019\",\"src_020\"]},{\"record_id\":\"sig_028\",\"trend_id\":\"sig_028\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"prompt_engineering\",\"skill_name_en\":\"Prompt engineering\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":2,\"rate\":0.2222},\"previous_prevalence\":null,\"trend_note_en\":\"2 of 9 reviewed postings explicitly mention prompt engineering. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_019\"]},{\"record_id\":\"sig_029\",\"trend_id\":\"sig_029\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"ai_evaluation\",\"skill_name_en\":\"AI output evaluation\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":8,\"rate\":0.8889},\"previous_prevalence\":null,\"trend_note_en\":\"8 of 9 reviewed postings explicitly mention ai output evaluation. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_016\",\"src_017\",\"src_018\",\"src_019\",\"src_020\",\"src_021\",\"src_022\"]},{\"record_id\":\"sig_030\",\"trend_id\":\"sig_030\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"brand_safety\",\"skill_name_en\":\"Brand safety\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":3,\"rate\":0.3333},\"previous_prevalence\":null,\"trend_note_en\":\"3 of 9 reviewed postings explicitly mention brand safety. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_019\",\"src_020\",\"src_022\"]},{\"record_id\":\"sig_031\",\"trend_id\":\"sig_031\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"workflow_automation\",\"skill_name_en\":\"Workflow automation\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":3,\"rate\":0.3333},\"previous_prevalence\":null,\"trend_note_en\":\"3 of 9 reviewed postings explicitly mention workflow automation. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_017\",\"src_018\"]},{\"record_id\":\"sig_032\",\"trend_id\":\"sig_032\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_analytics\",\"skill_name_en\":\"Content analytics\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":5,\"rate\":0.5556},\"previous_prevalence\":null,\"trend_note_en\":\"5 of 9 reviewed postings explicitly mention content analytics. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_016\",\"src_017\",\"src_018\",\"src_021\",\"src_023\"]},{\"record_id\":\"sig_033\",\"trend_id\":\"sig_033\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"marketing_analytics\",\"skill_name_en\":\"Marketing analytics\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":1,\"rate\":0.1111},\"previous_prevalence\":null,\"trend_note_en\":\"1 of 9 reviewed postings explicitly mention marketing analytics. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_017\"]},{\"record_id\":\"sig_034\",\"trend_id\":\"sig_034\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"scope\":\"Malaysia / AI content, marketing and trust & safety / Entry- to early-career\",\"trend\":\"insufficient\",\"evidence_type\":\"direct_job_posting\",\"trend_basis\":\"cross_sectional_prevalence\",\"sample_window\":\"One purposive posting sample checked on 2026-10-23\",\"current_prevalence\":{\"sample_size\":9,\"mention_count\":8,\"rate\":0.8889},\"previous_prevalence\":null,\"trend_note_en\":\"8 of 9 reviewed postings explicitly mention communication. This is current prevalence within one sample window, not a directional trend.\",\"source_ids\":[\"src_015\",\"src_016\",\"src_017\",\"src_018\",\"src_019\",\"src_020\",\"src_021\",\"src_023\"]},{\"record_id\":\"sig_035\",\"trend_id\":\"sig_035\",\"role_id\":\"cross_role\",\"skill_id\":\"ai_data_literacy\",\"skill_name_en\":\"AI and big-data skills\",\"scope\":\"Global\",\"trend\":\"up\",\"evidence_type\":\"direct_report\",\"trend_basis\":\"report_forecast\",\"sample_window\":\"WEF employer survey horizon 2025-2030\",\"current_prevalence\":{\"sample_size\":0,\"mention_count\":0,\"rate\":0},\"previous_prevalence\":null,\"prevalence_applicable\":false,\"trend_note_en\":\"The WEF Future of Jobs Report 2025 states that AI and big data rank first among its fastest-growing skills for 2025-2030. This is a global employer-survey forecast, not a Malaysia posting count.\",\"source_ids\":[\"src_024\"]},{\"record_id\":\"sig_036\",\"trend_id\":\"sig_036\",\"role_id\":\"cross_role\",\"skill_id\":\"technology_literacy\",\"skill_name_en\":\"Technology literacy\",\"scope\":\"Global\",\"trend\":\"up\",\"evidence_type\":\"direct_report\",\"trend_basis\":\"report_forecast\",\"sample_window\":\"WEF employer survey horizon 2025-2030\",\"current_prevalence\":{\"sample_size\":0,\"mention_count\":0,\"rate\":0},\"previous_prevalence\":null,\"prevalence_applicable\":false,\"trend_note_en\":\"The WEF Future of Jobs Report 2025 identifies technological literacy among the top three fastest-growing skills for 2025-2030. The evidence is global and forecast-based.\",\"source_ids\":[\"src_024\"]},{\"record_id\":\"sig_037\",\"trend_id\":\"sig_037\",\"role_id\":\"cross_role\",\"skill_id\":\"reskilling_participation\",\"skill_name_en\":\"Reskilling participation\",\"scope\":\"Global\",\"trend\":\"up\",\"evidence_type\":\"direct_report\",\"trend_basis\":\"two_period_change\",\"sample_window\":\"WEF 2023 and 2025 report editions\",\"current_prevalence\":{\"sample_size\":100,\"mention_count\":50,\"rate\":0.5},\"previous_prevalence\":{\"sample_size\":100,\"mention_count\":41,\"rate\":0.41},\"trend_note_en\":\"The WEF report states that 50% of workers had completed training, reskilling, or upskilling measures, compared with 41% in its 2023 edition. The figures are a report-based two-period comparison, not a Malaysian posting series.\",\"source_ids\":[\"src_024\"]},{\"record_id\":\"sig_038\",\"trend_id\":\"sig_038\",\"role_id\":\"cross_role\",\"skill_id\":\"digital_literacy\",\"skill_name_en\":\"Digital literacy\",\"scope\":\"Malaysia\",\"trend\":\"up\",\"evidence_type\":\"direct_report\",\"trend_basis\":\"report_forecast\",\"sample_window\":\"Malaysia Digital Economy Blueprint strategic horizon\",\"current_prevalence\":{\"sample_size\":0,\"mention_count\":0,\"rate\":0},\"previous_prevalence\":null,\"prevalence_applicable\":false,\"trend_note_en\":\"The Malaysia Digital Economy Blueprint identifies digital literacy as part of the country's digital-economy transition. This is policy-report evidence and does not quantify local employer demand for either target role.\",\"source_ids\":[\"src_026\"]},{\"record_id\":\"sig_039\",\"trend_id\":\"sig_039\",\"role_id\":\"cross_role\",\"skill_id\":null,\"skill_name_en\":\"National unemployment rate\",\"scope\":\"Malaysia\",\"trend\":\"down\",\"evidence_type\":\"official_statistics\",\"trend_basis\":\"official_statistics\",\"sample_window\":\"July 2026 and August 2026\",\"current_prevalence\":{\"sample_size\":17390000,\"mention_count\":511600,\"rate\":0.0294},\"previous_prevalence\":{\"sample_size\":17370000,\"mention_count\":520300,\"rate\":0.03},\"prevalence_applicable\":false,\"trend_note_en\":\"DOSM reports that the national unemployment rate eased to 2.9% in August 2026 from 3.0% in July, with 511,600 unemployed persons. These prevalence fields represent official labour-market counts, not skill mentions or occupational demand.\",\"source_ids\":[\"src_025\"]}],\"period_comparisons\":[{\"comparison_id\":\"cmp_001\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"ecommerce_operations\",\"skill_name_en\":\"E-commerce operations\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"7 of 7 Period A postings and 7 of 7 Period B JobStreet postings explicitly mention E-commerce operations; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_002\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"marketplace_management\",\"skill_name_en\":\"Marketplace management\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.1429,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"7 of 7 Period A postings and 6 of 7 Period B JobStreet postings explicitly mention Marketplace management; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_003\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"order_management\",\"skill_name_en\":\"Order management\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.1428,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 7 Period A postings and 3 of 7 Period B JobStreet postings explicitly mention Order management; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_004\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"inventory_coordination\",\"skill_name_en\":\"Inventory coordination\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.2857,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Inventory coordination; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_005\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"excel_google_sheets\",\"skill_name_en\":\"Excel and Google Sheets\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Excel and Google Sheets; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_006\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"reporting\",\"skill_name_en\":\"Reporting\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.1429,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"5 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Reporting; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_007\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"customer_service\",\"skill_name_en\":\"Customer service\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":2,\"rate\":0.2857,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.2857,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 7 Period A postings and 2 of 7 Period B JobStreet postings explicitly mention Customer service; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_008\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"basic_marketing\",\"skill_name_en\":\"Basic marketing\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":0.1428,\"trend\":\"up\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"5 of 7 Period A postings and 6 of 7 Period B JobStreet postings explicitly mention Basic marketing; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_009\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.1429,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"5 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Communication; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_010\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"process_coordination\",\"skill_name_en\":\"Process coordination\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Process coordination; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_011\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"product_data_quality\",\"skill_name_en\":\"Product-data quality\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_001\",\"src_002\",\"src_003\",\"src_004\",\"src_005\",\"src_006\",\"src_007\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286,\"source_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\"]},\"rate_change\":-0.4285,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 3 of 7 Period B JobStreet postings explicitly mention Product-data quality; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 6 exact and 1 senior title.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_012\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"sql\",\"skill_name_en\":\"SQL\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":2,\"rate\":0.2857,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":-0.1429,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"3 of 7 Period A postings and 2 of 7 Period B JobStreet postings explicitly mention SQL; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_013\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"excel_google_sheets\",\"skill_name_en\":\"Excel and Google Sheets\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":-0.2857,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"5 of 7 Period A postings and 3 of 7 Period B JobStreet postings explicitly mention Excel and Google Sheets; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_014\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_analysis\",\"skill_name_en\":\"Data analysis\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":-0.1429,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"7 of 7 Period A postings and 6 of 7 Period B JobStreet postings explicitly mention Data analysis; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_015\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_quality\",\"skill_name_en\":\"Data quality\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 6 of 7 Period B JobStreet postings explicitly mention Data quality; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_016\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_visualization\",\"skill_name_en\":\"Data visualization\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":-0.1428,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 5 of 7 Period B JobStreet postings explicitly mention Data visualization; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_017\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"dashboarding\",\"skill_name_en\":\"Dashboarding\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":5,\"rate\":0.7143,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":-0.1428,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 5 of 7 Period B JobStreet postings explicitly mention Dashboarding; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_018\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"statistics\",\"skill_name_en\":\"Statistics\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":3,\"rate\":0.4286,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":4,\"rate\":0.5714,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0.1428,\"trend\":\"up\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"3 of 7 Period A postings and 4 of 7 Period B JobStreet postings explicitly mention Statistics; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_019\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"reporting\",\"skill_name_en\":\"Reporting\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":7,\"rate\":1,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"7 of 7 Period A postings and 7 of 7 Period B JobStreet postings explicitly mention Reporting; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_020\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":6,\"rate\":0.8571,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"6 of 7 Period A postings and 6 of 7 Period B JobStreet postings explicitly mention Communication; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_021\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"basic_python\",\"skill_name_en\":\"Basic Python\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":1,\"rate\":0.1429,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":2,\"rate\":0.2857,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0.1428,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 7 Period A postings and 2 of 7 Period B JobStreet postings explicitly mention Basic Python; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_022\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"business_analysis\",\"skill_name_en\":\"Business analysis\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"0 of 7 Period A postings and 0 of 7 Period B JobStreet postings explicitly mention Business analysis; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_023\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_pipelines_etl\",\"skill_name_en\":\"Data pipelines and ETL\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_008\",\"src_009\",\"src_010\",\"src_011\",\"src_012\",\"src_013\",\"src_014\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":7,\"mention_count\":2,\"rate\":0.2857,\"source_ids\":[\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_076\",\"src_077\"]},\"rate_change\":0.2857,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"0 of 7 Period A postings and 2 of 7 Period B JobStreet postings explicitly mention Data pipelines and ETL; rates are compared directly.\",\"limitations_en\":\"Both seven-posting samples contain 5 exact and 2 adjacent titles.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_024\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"seo\",\"skill_name_en\":\"Search engine optimization\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":-0.2,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 0 of 5 Period B JobStreet postings explicitly mention Search engine optimization; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_025\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"copywriting\",\"skill_name_en\":\"Copywriting\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 1 of 5 Period B JobStreet postings explicitly mention Copywriting; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_026\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"ai_content_tools\",\"skill_name_en\":\"AI content tools\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 5 Period A postings and 4 of 5 Period B JobStreet postings explicitly mention AI content tools; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_027\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"ai_evaluation\",\"skill_name_en\":\"AI output evaluation\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":5,\"rate\":1,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":-0.2,\"trend\":\"down\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"5 of 5 Period A postings and 4 of 5 Period B JobStreet postings explicitly mention AI output evaluation; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_028\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"brand_safety\",\"skill_name_en\":\"Brand safety\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":3,\"rate\":0.6,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0.2,\"trend\":\"up\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"3 of 5 Period A postings and 4 of 5 Period B JobStreet postings explicitly mention Brand safety; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_029\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"workflow_automation\",\"skill_name_en\":\"Workflow automation\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":-0.2,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 0 of 5 Period B JobStreet postings explicitly mention Workflow automation; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_030\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_analytics\",\"skill_name_en\":\"Content analytics\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":2,\"rate\":0.4,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":-0.4,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"2 of 5 Period A postings and 0 of 5 Period B JobStreet postings explicitly mention Content analytics; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_031\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"communication\",\"skill_name_en\":\"Communication\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":4,\"rate\":0.8,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"4 of 5 Period A postings and 4 of 5 Period B JobStreet postings explicitly mention Communication; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_032\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_operations\",\"skill_name_en\":\"Content operations\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":2,\"rate\":0.4,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0.2,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 2 of 5 Period B JobStreet postings explicitly mention Content operations; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_033\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"prompt_engineering\",\"skill_name_en\":\"Prompt engineering\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":0,\"trend\":\"insufficient\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 1 of 5 Period B JobStreet postings explicitly mention Prompt engineering; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false},{\"comparison_id\":\"cmp_034\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"marketing_analytics\",\"skill_name_en\":\"Marketing analytics\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":1,\"rate\":0.2,\"source_ids\":[\"src_016\",\"src_017\",\"src_019\",\"src_020\",\"src_022\"]},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"sample_size\":5,\"mention_count\":0,\"rate\":0,\"source_ids\":[\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"]},\"rate_change\":-0.2,\"trend\":\"changing\",\"signal_strength\":\"initial\",\"trend_basis\":\"two_period_change\",\"composition_mismatch\":false,\"comparison_status\":\"valid\",\"rationale_en\":\"1 of 5 Period A postings and 0 of 5 Period B JobStreet postings explicitly mention Marketing analytics; rates are compared directly.\",\"limitations_en\":\"Both five-posting samples contain adjacent titles only; senior AI-content titles are excluded.\",\"needs_verification\":false}],\"comparison_summary\":{\"previous_version\":\"v2\",\"current_version\":\"v3\",\"period_a\":{\"period_id\":\"period_a\",\"label\":\"2026-09-27 to 2026-10-22\",\"source_family\":\"JobStreet Malaysia\",\"posting_count\":22},\"period_b\":{\"period_id\":\"period_b\",\"label\":\"2026-08-02 to 2026-09-26\",\"source_family\":\"JobStreet Malaysia\",\"posting_count\":19},\"postings_per_role_per_period\":{\"ecommerce_operations_executive\":{\"period_a\":7,\"period_b\":7},\"data_operations_analyst\":{\"period_a\":7,\"period_b\":7},\"ai_content_operations_specialist\":{\"period_a\":8,\"period_b\":5}},\"comparison_samples\":{\"ecommerce_operations_executive\":{\"period_a\":7,\"period_b\":7},\"data_operations_analyst\":{\"period_a\":7,\"period_b\":7},\"ai_content_operations_specialist\":{\"period_a\":5,\"period_b\":5,\"excluded_period_a_source_ids\":[\"src_015\",\"src_018\",\"src_021\",\"src_023\"]}},\"title_composition\":{\"ecommerce_operations_executive\":{\"period_a\":{\"exact\":6,\"adjacent\":0,\"senior\":1},\"period_b\":{\"exact\":6,\"adjacent\":0,\"senior\":1},\"composition_mismatch\":false},\"data_operations_analyst\":{\"period_a\":{\"exact\":5,\"adjacent\":2,\"senior\":0},\"period_b\":{\"exact\":5,\"adjacent\":2,\"senior\":0},\"composition_mismatch\":false},\"ai_content_operations_specialist\":{\"period_a\":{\"exact\":0,\"adjacent\":5,\"senior\":0},\"period_b\":{\"exact\":0,\"adjacent\":5,\"senior\":0},\"composition_mismatch\":false}},\"role_rank_changes\":[{\"role_id\":\"data_operations_analyst\",\"period_a_rank\":1,\"period_b_rank\":1,\"rank_change\":0,\"v2_fit_score\":63,\"v3_fit_score\":60,\"score_change\":-3},{\"role_id\":\"ai_content_operations_specialist\",\"period_a_rank\":2,\"period_b_rank\":2,\"rank_change\":0,\"v2_fit_score\":49,\"v3_fit_score\":46,\"score_change\":-3}],\"skill_priority_changes\":[{\"comparison_id\":\"cmp_002\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"marketplace_management\",\"direction\":\"down\",\"rate_change\":-0.1429,\"note_en\":\"7/7 to 6/7 explicit mentions.\"},{\"comparison_id\":\"cmp_003\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"order_management\",\"direction\":\"down\",\"rate_change\":-0.1428,\"note_en\":\"4/7 to 3/7 explicit mentions.\"},{\"comparison_id\":\"cmp_004\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"inventory_coordination\",\"direction\":\"down\",\"rate_change\":-0.2857,\"note_en\":\"6/7 to 4/7 explicit mentions.\"},{\"comparison_id\":\"cmp_006\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"reporting\",\"direction\":\"down\",\"rate_change\":-0.1429,\"note_en\":\"5/7 to 4/7 explicit mentions.\"},{\"comparison_id\":\"cmp_007\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"customer_service\",\"direction\":\"down\",\"rate_change\":-0.2857,\"note_en\":\"4/7 to 2/7 explicit mentions.\"},{\"comparison_id\":\"cmp_008\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"basic_marketing\",\"direction\":\"up\",\"rate_change\":0.1428,\"note_en\":\"5/7 to 6/7 explicit mentions.\"},{\"comparison_id\":\"cmp_009\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"communication\",\"direction\":\"down\",\"rate_change\":-0.1429,\"note_en\":\"5/7 to 4/7 explicit mentions.\"},{\"comparison_id\":\"cmp_011\",\"role_id\":\"ecommerce_operations_executive\",\"skill_id\":\"product_data_quality\",\"direction\":\"down\",\"rate_change\":-0.4285,\"note_en\":\"6/7 to 3/7 explicit mentions.\"},{\"comparison_id\":\"cmp_012\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"sql\",\"direction\":\"down\",\"rate_change\":-0.1429,\"note_en\":\"3/7 to 2/7 explicit mentions.\"},{\"comparison_id\":\"cmp_013\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"excel_google_sheets\",\"direction\":\"down\",\"rate_change\":-0.2857,\"note_en\":\"5/7 to 3/7 explicit mentions.\"},{\"comparison_id\":\"cmp_014\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_analysis\",\"direction\":\"down\",\"rate_change\":-0.1429,\"note_en\":\"7/7 to 6/7 explicit mentions.\"},{\"comparison_id\":\"cmp_016\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_visualization\",\"direction\":\"down\",\"rate_change\":-0.1428,\"note_en\":\"6/7 to 5/7 explicit mentions.\"},{\"comparison_id\":\"cmp_017\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"dashboarding\",\"direction\":\"down\",\"rate_change\":-0.1428,\"note_en\":\"6/7 to 5/7 explicit mentions.\"},{\"comparison_id\":\"cmp_018\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"statistics\",\"direction\":\"up\",\"rate_change\":0.1428,\"note_en\":\"3/7 to 4/7 explicit mentions.\"},{\"comparison_id\":\"cmp_021\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"basic_python\",\"direction\":\"changing\",\"rate_change\":0.1428,\"note_en\":\"1/7 to 2/7 explicit mentions.\"},{\"comparison_id\":\"cmp_023\",\"role_id\":\"data_operations_analyst\",\"skill_id\":\"data_pipelines_etl\",\"direction\":\"changing\",\"rate_change\":0.2857,\"note_en\":\"0/7 to 2/7 explicit mentions.\"},{\"comparison_id\":\"cmp_024\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"seo\",\"direction\":\"changing\",\"rate_change\":-0.2,\"note_en\":\"1/5 to 0/5 explicit mentions.\"},{\"comparison_id\":\"cmp_027\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"ai_evaluation\",\"direction\":\"down\",\"rate_change\":-0.2,\"note_en\":\"5/5 to 4/5 explicit mentions.\"},{\"comparison_id\":\"cmp_028\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"brand_safety\",\"direction\":\"up\",\"rate_change\":0.2,\"note_en\":\"3/5 to 4/5 explicit mentions.\"},{\"comparison_id\":\"cmp_029\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"workflow_automation\",\"direction\":\"changing\",\"rate_change\":-0.2,\"note_en\":\"1/5 to 0/5 explicit mentions.\"},{\"comparison_id\":\"cmp_030\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_analytics\",\"direction\":\"changing\",\"rate_change\":-0.4,\"note_en\":\"2/5 to 0/5 explicit mentions.\"},{\"comparison_id\":\"cmp_032\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"content_operations\",\"direction\":\"changing\",\"rate_change\":0.2,\"note_en\":\"1/5 to 2/5 explicit mentions.\"},{\"comparison_id\":\"cmp_034\",\"role_id\":\"ai_content_operations_specialist\",\"skill_id\":\"marketing_analytics\",\"direction\":\"changing\",\"rate_change\":-0.2,\"note_en\":\"1/5 to 0/5 explicit mentions.\"}],\"trend_readiness\":{\"ecommerce_operations_executive\":true,\"data_operations_analyst\":true,\"ai_content_operations_specialist\":true},\"confirmed_changes\":[],\"insufficient_comparisons\":[\"cmp_001\",\"cmp_005\",\"cmp_010\",\"cmp_015\",\"cmp_019\",\"cmp_020\",\"cmp_022\",\"cmp_025\",\"cmp_026\",\"cmp_031\",\"cmp_033\"],\"composition_mismatches\":[],\"warnings\":[\"All Period B comparison evidence is JobStreet Malaysia.\",\"All three role compositions now match their Period A comparison samples.\",\"All samples contain 5-7 postings per role and are initial-scale, not confirmed forecasts.\",\"JobStreet direct HTTP access returned 403; selected pages were manually reviewed in rendered browser sessions.\"],\"backend_readiness_note\":\"Backend may use v3 because every role has at least five dated JobStreet Period B postings, all comparison compositions match, and validation passes. Treat initial-scale trends and all score changes as provisional.\"},\"new_skills\":[],\"reskilling_pathway\":[{\"track_id\":\"ecommerce_to_data_operations\",\"total_weeks\":6,\"weekly_hours\":6,\"steps\":[{\"week\":1,\"focus_skill_ids\":[\"sql\",\"data_quality\"],\"action_en\":\"Complete SQL fundamentals, then answer 10 operational questions using product, order and inventory tables.\",\"resource_ids\":[\"res_001\"],\"evidence_record_ids\":[\"sig_012\",\"sig_015\"],\"deliverable\":\"A documented SQL workbook with 20 queries and data-quality checks.\"},{\"week\":2,\"focus_skill_ids\":[\"statistics\",\"data_analysis\"],\"action_en\":\"Learn descriptive statistics and apply them to conversion, order-value and cancellation data.\",\"resource_ids\":[\"res_002\"],\"evidence_record_ids\":[\"sig_014\",\"sig_018\"],\"deliverable\":\"A short statistical analysis memo with limitations.\"},{\"week\":3,\"focus_skill_ids\":[\"basic_python\"],\"action_en\":\"Use Python to clean a CSV export, validate missing values and produce a repeatable summary.\",\"resource_ids\":[\"res_003\"],\"evidence_record_ids\":[\"sig_019\"],\"deliverable\":\"A small Python data-cleaning notebook or script.\"},{\"week\":4,\"focus_skill_ids\":[\"data_visualization\",\"dashboarding\"],\"action_en\":\"Build a one-page dashboard covering sales, traffic, stock risk and listing quality.\",\"resource_ids\":[\"res_004\"],\"evidence_record_ids\":[\"sig_016\",\"sig_017\"],\"deliverable\":\"A public dashboard with three charts and written insights.\"},{\"week\":5,\"focus_skill_ids\":[\"data_pipelines_etl\",\"data_quality\"],\"action_en\":\"Create a small extract-transform-load flow that ingests two CSV files and rejects invalid records.\",\"resource_ids\":[\"res_005\"],\"evidence_record_ids\":[\"sig_015\",\"sig_022\"],\"deliverable\":\"A runnable ETL mini-project with a data-quality log.\"},{\"week\":6,\"focus_skill_ids\":[\"business_analysis\",\"reporting\",\"communication\"],\"action_en\":\"Frame the portfolio as a business problem, quantify the recommendation and present it in five slides.\",\"resource_ids\":[\"res_006\",\"res_004\"],\"evidence_record_ids\":[\"sig_020\",\"sig_021\",\"sig_023\"],\"deliverable\":\"A five-slide case study and a two-minute interview explanation.\"}]},{\"track_id\":\"ecommerce_to_ai_content_operations\",\"total_weeks\":6,\"weekly_hours\":6,\"steps\":[{\"week\":1,\"focus_skill_ids\":[\"seo\",\"content_operations\"],\"action_en\":\"Audit 20 product or landing pages for search intent, titles, internal links and missing information.\",\"resource_ids\":[\"res_007\"],\"evidence_record_ids\":[\"sig_024\",\"sig_025\"],\"deliverable\":\"An SEO content audit with prioritised fixes.\"},{\"week\":2,\"focus_skill_ids\":[\"copywriting\",\"prompt_engineering\"],\"action_en\":\"Rewrite product and campaign copy using a documented prompt and editorial QA checklist.\",\"resource_ids\":[\"res_008\",\"res_010\"],\"evidence_record_ids\":[\"sig_026\",\"sig_028\"],\"deliverable\":\"A before-and-after copy portfolio with prompt log.\"},{\"week\":3,\"focus_skill_ids\":[\"ai_content_tools\",\"ai_evaluation\"],\"action_en\":\"Create 20 AI-assisted content outputs, score them against a rubric and record failure modes.\",\"resource_ids\":[\"res_009\",\"res_011\"],\"evidence_record_ids\":[\"sig_027\",\"sig_029\"],\"deliverable\":\"An AI output evaluation sheet and failure-mode summary.\"},{\"week\":4,\"focus_skill_ids\":[\"brand_safety\",\"workflow_automation\"],\"action_en\":\"Build a content safety checklist and one low-risk automation for brief intake or review routing.\",\"resource_ids\":[\"res_012\",\"res_013\"],\"evidence_record_ids\":[\"sig_030\",\"sig_031\"],\"deliverable\":\"A safety rubric and documented automation workflow.\"},{\"week\":5,\"focus_skill_ids\":[\"content_analytics\",\"marketing_analytics\"],\"action_en\":\"Define a small content scorecard and analyse reach, engagement, conversion and rework rate.\",\"resource_ids\":[],\"evidence_record_ids\":[\"sig_032\",\"sig_033\"],\"deliverable\":\"A content performance scorecard with one decision recommendation.\",\"resource_note\":\"Use a project-based scorecard built from public or synthetic content data: define reach, engagement, conversion, and rework measures, calculate them in a spreadsheet, and write one decision recommendation. No single verified course is registered for both analytics topics.\"},{\"week\":6,\"focus_skill_ids\":[\"ai_evaluation\",\"brand_safety\",\"communication\"],\"action_en\":\"Package the work as an operations case study covering brief, generation, evaluation, safety and results.\",\"resource_ids\":[\"res_011\",\"res_012\"],\"evidence_record_ids\":[\"sig_029\",\"sig_030\",\"sig_034\"],\"deliverable\":\"A portfolio case study and a five-minute walkthrough.\"}]}],\"learning_resources\":[{\"resource_id\":\"res_001\",\"skill_id\":\"sql\",\"title\":\"SQL for Data Science\",\"provider\":\"University of California, Davis via Coursera\",\"url\":\"https://www.coursera.org/learn/sql-for-data-science\",\"cost_type\":\"paid\",\"duration_hours\":20,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"SQLBolt interactive SQL lessons\",\"provider\":\"SQLBolt\",\"url\":\"https://sqlbolt.com/\",\"cost_type\":\"free\",\"duration_hours\":null,\"access_note\":\"Free interactive SQL lessons. No account is required for the core lesson sequence.\",\"verified_http_status\":200,\"source_id\":\"src_041\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":\"The source does not state a reliable completion time; use the outline to plan study time.\",\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_027\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_002\",\"skill_id\":\"statistics\",\"title\":\"Basic Statistics\",\"provider\":\"University of Amsterdam via Coursera\",\"url\":\"https://www.coursera.org/learn/basic-statistics\",\"cost_type\":\"paid\",\"duration_hours\":20,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"Intro to Statistics\",\"provider\":\"Udacity\",\"url\":\"https://www.udacity.com/course/intro-to-statistics--st101\",\"cost_type\":\"free\",\"duration_hours\":null,\"access_note\":\"Free course with 44 lessons covering probability, distributions, inference, regression, and correlation. A Udacity account may be required.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":\"The source does not state a reliable completion time; use the outline to plan study time.\",\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_028\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_003\",\"skill_id\":\"basic_python\",\"title\":\"Scientific Computing with Python\",\"provider\":\"freeCodeCamp\",\"url\":\"https://www.freecodecamp.org/learn/scientific-computing-with-python/\",\"cost_type\":\"free\",\"duration_hours\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Free hands-on course from freeCodeCamp. A freeCodeCamp account may be required.\",\"free_alternative\":null,\"needs_verification\":false,\"source_id\":\"src_029\",\"updated_date\":null,\"duration_note\":\"No reliable completion time is stated; use the lesson outline to plan self-paced study.\",\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_004\",\"skill_id\":\"data_visualization\",\"title\":\"Free Training Videos\",\"provider\":\"Tableau\",\"url\":\"https://www.tableau.com/learn/training\",\"cost_type\":\"free\",\"duration_hours\":1.1,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Free training videos from Tableau. Viewing does not require a paid course subscription.\",\"free_alternative\":null,\"needs_verification\":false,\"source_id\":\"src_030\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_005\",\"skill_id\":\"data_pipelines_etl\",\"title\":\"ETL and Data Pipelines with Shell, Airflow and Kafka\",\"provider\":\"IBM via Coursera\",\"url\":\"https://www.coursera.org/learn/etl-and-data-pipelines-shell-airflow-kafka\",\"cost_type\":\"paid\",\"duration_hours\":20,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"Data Engineering Zoomcamp\",\"provider\":\"DataTalksClub\",\"url\":\"https://github.com/DataTalksClub/data-engineering-zoomcamp\",\"cost_type\":\"free\",\"duration_hours\":null,\"access_note\":\"Free 9-week course with recorded lectures and projects covering Docker, SQL, Spark, Kafka, Airflow, dbt, and analytics engineering.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":\"The source does not state a reliable completion time; use the outline to plan study time.\",\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_031\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_006\",\"skill_id\":\"business_analysis\",\"title\":\"Business Analysis Fundamentals\",\"provider\":\"Microsoft via Coursera\",\"url\":\"https://www.coursera.org/learn/business-analysis-fundamentals\",\"cost_type\":\"paid\",\"duration_hours\":20,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"Business Analysis Fundamentals\",\"provider\":\"Alison\",\"url\":\"https://alison.com/course/business-analysis-fundamentals\",\"cost_type\":\"free\",\"duration_hours\":4,\"access_note\":\"Free online course. Course access is free; an optional certificate may have a fee.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_032\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_007\",\"skill_id\":\"seo\",\"title\":\"SEO Starter Guide\",\"provider\":\"Google Search Central\",\"url\":\"https://developers.google.com/search/docs/fundamentals/seo-starter-guide\",\"cost_type\":\"free\",\"duration_hours\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Free official documentation. No certificate or graded assignment is offered.\",\"free_alternative\":null,\"needs_verification\":false,\"source_id\":\"src_033\",\"updated_date\":\"2025-12-18\",\"duration_note\":\"No reliable completion time is stated; use the lesson outline to plan self-paced study.\",\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_008\",\"skill_id\":\"copywriting\",\"title\":\"SEO Copywriting for Digital Marketing Success\",\"provider\":\"Skillshare via Coursera\",\"url\":\"https://www.coursera.org/learn/seo-copywriting-for-digital-marketing-success\",\"cost_type\":\"paid\",\"duration_hours\":6,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"Content Marketing Certification Course\",\"provider\":\"HubSpot Academy\",\"url\":\"https://academy.hubspot.com/courses/content-marketing\",\"cost_type\":\"free\",\"duration_hours\":8.38,\"access_note\":\"Free 14-lesson HubSpot Academy course with a displayed duration of 8 hours 23 minutes. A HubSpot account is required.\",\"verified_http_status\":200,\"source_id\":\"src_040\",\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_034\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_009\",\"skill_id\":\"ai_content_tools\",\"title\":\"Google AI Essentials\",\"provider\":\"Google via Coursera\",\"url\":\"https://www.coursera.org/specializations/ai-essentials-google\",\"cost_type\":\"paid\",\"duration_hours\":4,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Verified on Coursera: the U.S./Canada page states US$49 per month after the initial 7-day free trial. Prices and trial eligibility vary by country and account.\",\"free_alternative\":{\"title\":\"Beginner: Introduction to Generative AI\",\"provider\":\"Google Skills\",\"url\":\"https://www.skills.google/paths/118\",\"cost_type\":\"free\",\"duration_hours\":4.25,\"access_note\":\"Free four-activity learning path. A Google account is required; optional hands-on labs may require credits or a billing account.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_035\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_010\",\"skill_id\":\"prompt_engineering\",\"title\":\"Prompt Engineering for ChatGPT\",\"provider\":\"Vanderbilt University via Coursera\",\"url\":\"https://www.coursera.org/learn/prompt-engineering\",\"cost_type\":\"paid\",\"duration_hours\":20,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Corrected title after checking the Coursera page. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"ChatGPT Prompt Engineering for Developers\",\"provider\":\"DeepLearning.AI and OpenAI\",\"url\":\"https://www.deeplearning.ai/courses/chatgpt-prompt-eng\",\"cost_type\":\"free\",\"duration_hours\":1.67,\"access_note\":\"Free to learn, with 9 video lessons and 7 code examples. A DeepLearning.AI account may be required.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_036\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_011\",\"skill_id\":\"ai_evaluation\",\"title\":\"Evaluating Large Language Model Outputs: A Practical Guide\",\"provider\":\"Coursera\",\"url\":\"https://www.coursera.org/learn/evaluating-large-language-model-outputs-a-practical-guide\",\"cost_type\":\"paid\",\"duration_hours\":2,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"Evaluating and Debugging Generative AI\",\"provider\":\"DeepLearning.AI\",\"url\":\"https://www.deeplearning.ai/courses/evaluating-debugging-generative-ai\",\"cost_type\":\"free\",\"duration_hours\":1,\"access_note\":\"Free to learn, with 7 video lessons and 5 code examples covering evaluation and debugging workflows. A DeepLearning.AI account may be required.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_037\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_012\",\"skill_id\":\"brand_safety\",\"title\":\"AI Governance for Everyone\",\"provider\":\"Edureka via Coursera\",\"url\":\"https://www.coursera.org/learn/ai-governance-everyone\",\"cost_type\":\"paid\",\"duration_hours\":6,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Coursera page verified. Eligible learners may start with a 7-day free trial, and limited no-certificate access may vary by course, country, and account; continued full access is paid.\",\"free_alternative\":{\"title\":\"AI Governance and Ethics\",\"provider\":\"Alison\",\"url\":\"https://alison.com/course/ai-governance-and-ethics\",\"cost_type\":\"free\",\"duration_hours\":4,\"access_note\":\"Free online course covering governance, risk, compliance, fairness, and responsible AI. An optional certificate may have a fee.\",\"verified_http_status\":200,\"source_id\":null,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"duration_note\":null,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\",\"needs_verification\":false,\"access_status\":\"verified\"},\"needs_verification\":false,\"source_id\":\"src_038\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"},{\"resource_id\":\"res_013\",\"skill_id\":\"workflow_automation\",\"title\":\"Jumpstart (AI Builder Path)\",\"provider\":\"Zapier Academy\",\"url\":\"https://learn.zapier.com/courses/zapier-academy-published-preview/sections/4d02bf0a-d3bc-4a7a-a352-76735464d7a5\",\"cost_type\":\"free\",\"duration_hours\":0.33,\"published_date\":\"unknown\",\"checked_date\":\"2026-10-23\",\"access_note\":\"Corrected to the current page title. Jumpstart is the first course in the AI Builder Path; it is free with a Zapier account and takes about 20 minutes.\",\"free_alternative\":null,\"needs_verification\":false,\"source_id\":\"src_039\",\"updated_date\":null,\"duration_note\":null,\"access_status\":\"verified\",\"verified_http_status\":200,\"verification_method\":\"automated_http_get\",\"verification_checked_date\":\"2026-10-23\"}],\"sdg_mapping\":[{\"mapping_id\":\"sdg_001\",\"skill_id\":null,\"target_type\":\"role\",\"target_id\":\"data_operations_analyst\",\"sdg_id\":8,\"sdg_name\":\"Decent Work and Economic Growth\",\"rationale_en\":\"Evidence-backed data operations skills create a route from e-commerce operations into higher-skill digital work for early-career candidates.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_008\",\"src_011\",\"src_024\",\"src_025\"]},{\"mapping_id\":\"sdg_002\",\"skill_id\":null,\"target_type\":\"role\",\"target_id\":\"data_operations_analyst\",\"sdg_id\":9,\"sdg_name\":\"Industry, Innovation and Infrastructure\",\"rationale_en\":\"SQL, data quality, visualization, and dashboards support the digital information infrastructure used by commerce and retail operations.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_008\",\"src_009\",\"src_012\",\"src_024\"]},{\"mapping_id\":\"sdg_003\",\"skill_id\":null,\"target_type\":\"role\",\"target_id\":\"ai_content_operations_specialist\",\"sdg_id\":8,\"sdg_name\":\"Decent Work and Economic Growth\",\"rationale_en\":\"AI content operations provide a transition route for early-career workers whose existing strengths are communication, product content, and campaign execution.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_015\",\"src_019\",\"src_024\"]},{\"mapping_id\":\"sdg_004\",\"skill_id\":null,\"target_type\":\"role\",\"target_id\":\"ai_content_operations_specialist\",\"sdg_id\":9,\"sdg_name\":\"Industry, Innovation and Infrastructure\",\"rationale_en\":\"AI output evaluation and content-tool operation support reliable adoption of generative-AI workflows in digital organisations.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_015\",\"src_018\",\"src_024\"]},{\"mapping_id\":\"sdg_005\",\"skill_id\":null,\"target_type\":\"role\",\"target_id\":\"ai_content_operations_specialist\",\"sdg_id\":12,\"sdg_name\":\"Responsible Consumption and Production\",\"rationale_en\":\"Accurate and compliant product content reduces misleading consumer information and unnecessary content rework.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_019\",\"src_022\",\"src_026\"]},{\"mapping_id\":\"sdg_006\",\"skill_id\":\"sql\",\"target_type\":\"skill\",\"target_id\":\"sql\",\"sdg_id\":8,\"sdg_name\":\"Decent Work and Economic Growth\",\"rationale_en\":\"SQL enables early-career workers to qualify for evidence-backed data operations tasks and move beyond manual spreadsheet-only workflows.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_008\",\"src_011\",\"src_024\"]},{\"mapping_id\":\"sdg_007\",\"skill_id\":\"sql\",\"target_type\":\"skill\",\"target_id\":\"sql\",\"sdg_id\":9,\"sdg_name\":\"Industry, Innovation and Infrastructure\",\"rationale_en\":\"SQL provides the query layer needed to operate and improve organisational data systems.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_008\",\"src_009\",\"src_024\"]},{\"mapping_id\":\"sdg_008\",\"skill_id\":\"data_visualization\",\"target_type\":\"skill\",\"target_id\":\"data_visualization\",\"sdg_id\":9,\"sdg_name\":\"Industry, Innovation and Infrastructure\",\"rationale_en\":\"Data visualization turns operational data into usable monitoring information and supports evidence-based digital infrastructure decisions.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_009\",\"src_012\",\"src_013\",\"src_024\"]},{\"mapping_id\":\"sdg_009\",\"skill_id\":\"ai_evaluation\",\"target_type\":\"skill\",\"target_id\":\"ai_evaluation\",\"sdg_id\":9,\"sdg_name\":\"Industry, Innovation and Infrastructure\",\"rationale_en\":\"AI evaluation skills support more reliable and accountable deployment of generative-AI systems.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_015\",\"src_019\",\"src_024\"]},{\"mapping_id\":\"sdg_010\",\"skill_id\":\"ai_evaluation\",\"target_type\":\"skill\",\"target_id\":\"ai_evaluation\",\"sdg_id\":16,\"sdg_name\":\"Peace, Justice and Strong Institutions\",\"rationale_en\":\"Routine evaluation and human review create traceable checks on automated content and model outputs.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_019\",\"src_020\",\"src_022\",\"src_024\"]},{\"mapping_id\":\"sdg_011\",\"skill_id\":\"brand_safety\",\"target_type\":\"skill\",\"target_id\":\"brand_safety\",\"sdg_id\":12,\"sdg_name\":\"Responsible Consumption and Production\",\"rationale_en\":\"Brand-safety review reduces harmful, misleading, or non-compliant product and marketing content.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_019\",\"src_020\",\"src_022\",\"src_026\"]},{\"mapping_id\":\"sdg_012\",\"skill_id\":\"brand_safety\",\"target_type\":\"skill\",\"target_id\":\"brand_safety\",\"sdg_id\":16,\"sdg_name\":\"Peace, Justice and Strong Institutions\",\"rationale_en\":\"Brand-safety controls provide a documented accountability mechanism for trust-and-safety decisions in digital content.\",\"evidence_type\":\"team_inference\",\"source_ids\":[\"src_019\",\"src_020\",\"src_022\",\"src_024\"]}],\"scenario_adjustments\":[{\"scenario_id\":\"automation_first\",\"scenario_name\":\"Automation-first\",\"description\":\"A scenario in which Malaysian digital-commerce employers prioritise automated reporting, data workflows, content generation and cost reduction.\",\"role_demand\":{\"data_operations_analyst\":0.82,\"ai_content_operations_specialist\":0.66},\"priority_skills\":[\"sql\",\"dashboarding\",\"basic_python\",\"data_pipelines_etl\",\"workflow_automation\",\"ai_evaluation\"],\"evidence_record_ids\":[\"sig_012\",\"sig_017\",\"sig_019\",\"sig_022\",\"sig_029\",\"sig_031\"],\"assumption\":\"This is a scenario assumption, not a forecast.\",\"rationale_en\":\"In an automation-first scenario, roles that can standardize and automate order, product, inventory, and content processes become more valuable, with data operations demand exceeding pure content-production demand.\"},{\"scenario_id\":\"human_centered_ai\",\"scenario_name\":\"Human-centered AI\",\"description\":\"A scenario in which employers emphasise human review, content quality, brand safety, explainability and responsible AI deployment.\",\"role_demand\":{\"data_operations_analyst\":0.65,\"ai_content_operations_specialist\":0.8},\"priority_skills\":[\"ai_evaluation\",\"brand_safety\",\"prompt_engineering\",\"content_analytics\",\"marketing_analytics\",\"communication\"],\"evidence_record_ids\":[\"sig_028\",\"sig_029\",\"sig_030\",\"sig_032\",\"sig_033\",\"sig_034\"],\"assumption\":\"This is a scenario assumption, not a forecast.\",\"rationale_en\":\"In a human-centered AI scenario, organizations need people who can define quality standards, review generated content, identify safety risks, and explain analytical results, which relatively benefits AI content operations and evaluation roles.\"}],\"quality_checks\":{\"total_sources\":60,\"total_trend_records\":39,\"total_role_profiles\":3,\"total_transition_tracks\":2,\"total_learning_resources\":13,\"total_sdg_mappings\":12,\"signals_per_role\":{\"ecommerce_operations_executive\":11,\"data_operations_analyst\":12,\"ai_content_operations_specialist\":11,\"cross_role\":5},\"missing_urls\":0,\"missing_dates\":16,\"unverified_source_references\":0,\"broken_source_references\":0,\"broken_resource_references\":0,\"duplicate_role_skill_assignments\":0,\"relative_dates_in_sources\":0,\"unverified_direct_evidence_records\":0,\"role_profiles_with_skill_evidence\":3,\"learning_resources_with_required_fields\":13,\"learning_alternatives_with_required_fields\":9,\"warnings\":[\"All 19 Period B comparison postings are JobStreet Malaysia records reviewed as rendered pages.\",\"All three comparison title compositions match Period A.\",\"Five- to seven-posting samples are initial-scale observations, not forecasts.\",\"Direct JobStreet HTTP requests returned 403; rendered browser review is recorded explicitly.\"],\"total_period_comparisons\":34,\"period_b_postings_per_role\":{\"ecommerce_operations_executive\":7,\"data_operations_analyst\":7,\"ai_content_operations_specialist\":5},\"total_excluded_sources\":17,\"all_registered_postings_per_role\":{\"ecommerce_operations_executive\":14,\"data_operations_analyst\":14,\"ai_content_operations_specialist\":14},\"comparison_postings_per_role\":{\"ecommerce_operations_executive\":14,\"data_operations_analyst\":14,\"ai_content_operations_specialist\":10},\"period_b_sources_by_role\":{\"ecommerce_operations_executive\":7,\"data_operations_analyst\":7,\"ai_content_operations_specialist\":5},\"period_b_postings_by_role\":{\"ecommerce_operations_executive\":7,\"data_operations_analyst\":7,\"ai_content_operations_specialist\":5}},\"validation_report\":{\"is_valid\":true,\"errors\":[],\"warnings\":[\"All Period B comparison evidence is JobStreet Malaysia.\",\"All three role title compositions match their Period A comparison samples.\",\"The data-role sample now contains seven Period B postings and all 12 comparisons were rebuilt.\",\"All samples are initial-scale and contain 5-7 postings.\",\"Direct HTTP requests to JobStreet returned 403; selected pages were manually reviewed in rendered browser sessions.\"],\"counts\":{\"source_registry\":60,\"excluded_sources\":17,\"period_b_sources\":19,\"period_comparisons\":34,\"trend_signals\":39,\"role_profiles\":3,\"transition_tracks\":2,\"learning_resources\":13,\"sdg_mapping\":12,\"unverified_sources\":3,\"data_gaps\":10,\"change_log\":20},\"checks\":{\"periods_defined\":true,\"period_a_samples_present\":true,\"period_b_samples_present\":true,\"rates_not_raw_counts\":true,\"source_references_valid\":true,\"resource_references_valid\":true,\"no_unverified_direct_evidence\":true,\"no_fabricated_dates\":true,\"no_mixed_title_comparison_without_disclosure\":true,\"all_small_samples_labelled_initial\":true,\"comparison_summary_present\":true,\"change_log_present\":true,\"period_b_sources_are_jobstreet\":true,\"period_b_dates_inside_window\":true,\"period_b_role_composition_recorded\":true,\"no_linkedin_sources_in_period_b_comparisons\":true,\"no_linkedin_sources_in_period_b\":true,\"comparison_rates_recalculated\":true,\"all_comparison_rates_recalculated\":true,\"all_period_ids_valid\":true,\"src_021_excluded_from_comparisons\":true,\"comparison_summary_counts_match_arrays\":true,\"data_role_composition_matches\":true,\"data_role_period_b_sample_size_is_7\":true,\"data_role_exact_count_is_5\":true,\"data_role_adjacent_count_is_2\":true,\"data_role_trend_readiness_correct\":true}},\"unverified_sources\":[{\"source_name\":\"Khan Academy SQL course page\",\"source_url\":\"https://www.khanacademy.org/computing/computer-programming/sql\",\"checked_date\":\"2026-10-23\",\"reason\":\"Excluded after the page returned a client challenge instead of readable course content.\"},{\"source_name\":\"Microsoft Power BI business-user learning path\",\"source_url\":\"https://learn.microsoft.com/en-us/training/paths/get-started-with-microsoft-power-bi-for-business-users/\",\"checked_date\":\"2026-10-23\",\"reason\":\"Excluded after the URL returned a 404 page.\"},{\"source_name\":\"Semrush SEO Fundamentals\",\"source_url\":\"https://www.semrush.com/academy/courses/seo-fundamentals/\",\"checked_date\":\"2026-10-23\",\"reason\":\"Excluded after the URL returned a 404 page.\"}],\"data_gaps\":[{\"gap_id\":\"gap_001\",\"scope\":\"Malaysia / e-commerce operations\",\"description_en\":\"No representative longitudinal Malaysian vacancy series was available for the current, data, or AI-content role clusters.\",\"needed_verification_en\":\"Collect at least two comparable time periods for the same role definitions before making directional local skill claims.\"},{\"gap_id\":\"gap_002\",\"scope\":\"Malaysia / skills\",\"description_en\":\"DOSM provides national labour-market context but does not identify demand for either target occupation or their specific skills.\",\"needed_verification_en\":\"Use an occupation-level Malaysian survey or employer panel with skill fields.\"},{\"gap_id\":\"gap_003\",\"scope\":\"Global / WEF\",\"description_en\":\"WEF skill-growth findings are global employer-survey forecasts and are not Malaysia-specific vacancy counts.\",\"needed_verification_en\":\"Separate global forecast evidence from local observed demand in any frontend interpretation.\"},{\"gap_id\":\"gap_004\",\"scope\":\"Malaysia / target roles\",\"description_en\":\"Several reviewed AI-content postings use adjacent, senior, or specialist titles rather than exact AI Content Operations Specialist titles.\",\"needed_verification_en\":\"Collect exact-title postings across multiple months before estimating role-specific vacancy demand.\"},{\"gap_id\":\"gap_005\",\"scope\":\"Learning resources\",\"description_en\":\"No single verified course is registered for both content analytics and marketing analytics.\",\"needed_verification_en\":\"Keep the project-based pathway step or add separately verified analytics resources.\"},{\"gap_id\":\"gap_007\",\"scope\":\"Malaysia / AI-content exact titles\",\"description_en\":\"No exact AI Content Operations Specialist title was found in the selected JobStreet windows; the comparison uses five adjacent titles in each period.\",\"needed_verification_en\":\"Recover or collect exact-title AI content operations postings across both periods.\"},{\"gap_id\":\"gap_008\",\"scope\":\"Malaysia / Period A undated source\",\"description_en\":\"The v2 AI-content posting src_021 has no reliable calendar date and is assigned to unassigned rather than either period.\",\"needed_verification_en\":\"Recover the original publication date before using src_021 in a two-period comparison.\"},{\"gap_id\":\"gap_009\",\"scope\":\"Malaysia / JobStreet sample size\",\"description_en\":\"The final JobStreet comparison samples contain 7 current-role, 7 data-role and 5 AI-content postings.\",\"needed_verification_en\":\"Expand to at least 15 composition-matched postings per role before making stronger claims.\"},{\"gap_id\":\"gap_010\",\"scope\":\"Malaysia / AI-content skills\",\"description_en\":\"The five JobStreet AI-content postings contained no explicit workflow-automation, content-analytics, SEO or marketing-analytics mentions under the adopted counting rules.\",\"needed_verification_en\":\"Review a larger adjacent-title AI-content sample before changing the v2 skill profile.\"},{\"gap_id\":\"gap_011\",\"scope\":\"Malaysia / JobStreet access\",\"description_en\":\"Direct HTTP requests to JobStreet returned HTTP 403 even though rendered pages were manually reviewed.\",\"needed_verification_en\":\"Preserve manual-review notes and rendered-page evidence for any future refresh.\"}],\"change_log\":[{\"change_id\":\"chg_001\",\"category\":\"trend_reclassification\",\"record_ids\":[\"sig_001\",\"sig_002\",\"sig_003\",\"sig_004\",\"sig_005\",\"sig_006\",\"sig_007\",\"sig_008\",\"sig_009\",\"sig_010\",\"sig_011\",\"sig_012\",\"sig_013\",\"sig_014\",\"sig_015\",\"sig_016\",\"sig_017\",\"sig_018\",\"sig_019\",\"sig_020\",\"sig_021\",\"sig_022\",\"sig_023\",\"sig_024\",\"sig_025\",\"sig_026\",\"sig_027\",\"sig_028\",\"sig_029\",\"sig_030\",\"sig_031\",\"sig_032\",\"sig_033\",\"sig_034\"],\"summary_en\":\"All 34 posting-derived signals are now treated as cross-sectional prevalence and have trend status 'insufficient'.\",\"reason_en\":\"A single purposive sample cannot establish a time direction. The current counts remain visible through current_prevalence and trend_note_en.\"},{\"change_id\":\"chg_002\",\"category\":\"new_evidence\",\"record_ids\":[\"sig_035\",\"sig_036\",\"sig_037\",\"sig_038\",\"sig_039\"],\"summary_en\":\"Added five report-backed or official-statistics-backed macro records using WEF, the Malaysia Digital Economy Blueprint, and DOSM.\",\"reason_en\":\"The input registered these sources but did not use them as trend records. The new signals keep global, national, and role-specific scopes separate.\"},{\"change_id\":\"chg_003\",\"category\":\"role_skill_reclassification\",\"record_ids\":[\"data_operations_analyst\"],\"summary_en\":\"Moved basic Python to recommended, and business analysis and data pipelines/ETL to insufficient, removing duplicate assignments.\",\"reason_en\":\"Python had one explicit posting mention, while business analysis and ETL had none. Only target skills with at least three mentions remain core.\"},{\"change_id\":\"chg_004\",\"category\":\"role_skill_reclassification\",\"record_ids\":[\"ai_content_operations_specialist\"],\"summary_en\":\"Moved content operations, prompt engineering, and marketing analytics to recommended and removed core/emerging duplicates.\",\"reason_en\":\"The three skills had one, two, and one explicit posting mentions respectively. AI evaluation, brand safety, and workflow automation now each have one status.\"},{\"change_id\":\"chg_005\",\"category\":\"score_change\",\"record_ids\":[\"ecommerce_to_data_operations\",\"ecommerce_to_ai_content_operations\"],\"summary_en\":\"Recalculated transition fit from 57 to 63 for data operations and from 50 to 49 for AI content operations.\",\"reason_en\":\"The revised scores use the v1 weighting method but exclude recommended and unsupported target skills from core coverage; every input and inference is recorded in score_method.\"},{\"change_id\":\"chg_006\",\"category\":\"source_quality\",\"record_ids\":[\"src_021\",\"src_033\",\"src_040\"],\"summary_en\":\"Replaced the relative job date with unknown, verified the SEO guide and HubSpot course, and removed HubSpot from the excluded-source list.\",\"reason_en\":\"The SEO guide loaded with a 2025-12-18 update date, and the HubSpot course loaded as a free 8h23m resource. The relative job date was not converted into an unsupported calendar date.\"},{\"change_id\":\"chg_007\",\"category\":\"learning_resource_repair\",\"record_ids\":[\"res_007\",\"res_008\"],\"summary_en\":\"Aligned SEO resource verification and date fields, added a duration plan, and replaced the unverified HubSpot free alternative with the verified registered course.\",\"reason_en\":\"The resource and source records now agree, and the copywriting paid resource has a live free alternative.\"},{\"change_id\":\"chg_008\",\"category\":\"sdg_remapping\",\"record_ids\":[\"sdg_001\",\"sdg_002\",\"sdg_003\",\"sdg_004\",\"sdg_005\",\"sdg_006\",\"sdg_007\",\"sdg_008\",\"sdg_009\",\"sdg_010\",\"sdg_011\",\"sdg_012\"],\"summary_en\":\"Replaced track-level-only SDG entries with role and skill mappings, including SQL, data visualization, AI evaluation, and brand safety.\",\"reason_en\":\"Each mapping now has an explicit target, a specific rationale, and source references.\"},{\"change_id\":\"chg_009\",\"category\":\"validation\",\"record_ids\":[\"quality_checks\",\"validation_report\"],\"summary_en\":\"Recalculated source, trend, posting, signal, reference, and missing-date counts from the v2 arrays.\",\"reason_en\":\"The v1 hand-written counts conflicted with the records and the quality metadata.\"},{\"change_id\":\"chg_010\",\"category\":\"source_quality\",\"record_ids\":[\"src_026\",\"src_029\",\"src_033\",\"src_036\",\"src_039\",\"src_041\"],\"summary_en\":\"Replaced the Blueprint mirror with the verified mydigital.gov.my PDF, aligned course names, and recorded publication and update dates separately.\",\"reason_en\":\"The official URL returned HTTP 200 with application/pdf on 2026-10-23, and the replacement SQL and Python resources avoid the Kaggle browser challenge.\"},{\"change_id\":\"chg_011\",\"category\":\"production_readiness\",\"record_ids\":[\"res_001\",\"res_003\",\"res_007\",\"res_008\"],\"summary_en\":\"Completed free-alternative audit dates, replaced challenged Kaggle pages, and made v2 production metadata reproducible.\",\"reason_en\":\"Every learning resource and paid alternative now carries publication, check, access, and verification fields, while the build emits identical canonical and mirror files.\"},{\"change_id\":\"chg_012\",\"category\":\"period_b_source_replacement\",\"record_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\",\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\"],\"summary_en\":\"Replaced all 17 LinkedIn Period B sources with 17 manually reviewed JobStreet Malaysia job pages.\",\"reason_en\":\"The revised dataset requires the same source family in both periods; replaced records are preserved in excluded_sources.\"},{\"change_id\":\"chg_013\",\"category\":\"posting_counts\",\"record_ids\":[\"src_059\",\"src_060\",\"src_061\",\"src_062\",\"src_063\",\"src_064\",\"src_065\",\"src_066\",\"src_067\",\"src_068\",\"src_069\",\"src_070\",\"src_071\",\"src_072\",\"src_073\",\"src_074\",\"src_075\",\"src_076\",\"src_077\"],\"summary_en\":\"Added 7 current-role, 7 data-role and 5 AI-content JobStreet postings dated 2026-08-02 through 2026-09-26.\",\"reason_en\":\"The preferred window had too few dated JobStreet postings, so the closest earlier eight-week window was used; two exact data titles were added in the final pass.\"},{\"change_id\":\"chg_014\",\"category\":\"new_skills\",\"record_ids\":[],\"summary_en\":\"No new skill IDs were added; every counted skill maps to the existing taxonomy.\",\"reason_en\":\"The JobStreet descriptions used existing skill terms or did not provide explicit evidence for additional skills.\"},{\"change_id\":\"chg_015\",\"category\":\"trend_direction\",\"record_ids\":[\"cmp_001\",\"cmp_002\",\"cmp_003\",\"cmp_004\",\"cmp_005\",\"cmp_006\",\"cmp_007\",\"cmp_008\",\"cmp_009\",\"cmp_010\",\"cmp_011\",\"cmp_012\",\"cmp_013\",\"cmp_014\",\"cmp_015\",\"cmp_016\",\"cmp_017\",\"cmp_018\",\"cmp_019\",\"cmp_020\",\"cmp_021\",\"cmp_022\",\"cmp_023\",\"cmp_024\",\"cmp_025\",\"cmp_026\",\"cmp_027\",\"cmp_028\",\"cmp_029\",\"cmp_030\",\"cmp_031\",\"cmp_032\",\"cmp_033\",\"cmp_034\"],\"summary_en\":\"Rebuilt all 34 comparisons and recorded every directional or changing result in comparison_summary.skill_priority_changes.\",\"reason_en\":\"Rates were recalculated from explicit JobStreet text using the fixed two-period rules.\"},{\"change_id\":\"chg_016\",\"category\":\"insufficient_comparisons\",\"record_ids\":[\"cmp_001\",\"cmp_005\",\"cmp_010\",\"cmp_015\",\"cmp_019\",\"cmp_020\",\"cmp_022\",\"cmp_025\",\"cmp_026\",\"cmp_031\",\"cmp_033\"],\"summary_en\":\"Kept 11 comparisons insufficient because their rates did not cross a directional threshold; no comparison remains insufficient because of composition mismatch.\",\"reason_en\":\"All three role compositions now match Period A, and all 12 data-role comparisons were rebuilt with seven postings.\"},{\"change_id\":\"chg_017\",\"category\":\"score_change\",\"record_ids\":[\"ecommerce_to_data_operations\",\"ecommerce_to_ai_content_operations\"],\"summary_en\":\"Recalculated data-operations from 63 to 60 and AI-content operations from 49 to 46.\",\"reason_en\":\"Both composition-matched target samples are initial-scale; evidence strength is reduced under the unchanged v2 weighting method.\"},{\"change_id\":\"chg_018\",\"category\":\"data_gaps\",\"record_ids\":[\"gap_001\",\"gap_002\",\"gap_003\",\"gap_004\",\"gap_005\",\"gap_007\",\"gap_008\",\"gap_009\",\"gap_010\",\"gap_011\"],\"summary_en\":\"Updated remaining evidence gaps after resolving the data-role title-composition gap.\",\"reason_en\":\"Exact AI-content title availability, undated src_021, sample size and manual JobStreet access remain unresolved.\"},{\"change_id\":\"chg_019\",\"category\":\"validation\",\"record_ids\":[\"validation_report\",\"quality_checks\",\"period_comparisons\"],\"summary_en\":\"Recomputed validation for JobStreet source family, date windows, compositions, rates, period IDs, src_021 exclusion and array counts.\",\"reason_en\":\"The revised dataset received a complete structural and evidence-rule check.\"},{\"change_id\":\"chg_020\",\"category\":\"data_role_evidence_expansion\",\"record_ids\":[\"src_076\",\"src_077\",\"cmp_012\",\"cmp_013\",\"cmp_014\",\"cmp_015\",\"cmp_016\",\"cmp_017\",\"cmp_018\",\"cmp_019\",\"cmp_020\",\"cmp_021\",\"cmp_022\",\"cmp_023\"],\"summary_en\":\"Added 2 exact JobStreet Data Operations Analyst postings in Period B, matched the 5 exact + 2 adjacent composition, and rebuilt all 12 data-role comparisons.\",\"reason_en\":\"The two additional pages were manually reviewed and their explicit skill mentions were added to the existing taxonomy.\"}],\"README_UPDATE_EN\":\"Backend must use v3.json only when meta.production_ready is true. v2.json is the previous-period baseline. v1.json is historical only. Do not use LinkedIn Period B sources in production comparisons.\"}");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__16kww8z8a16l-._.js.map