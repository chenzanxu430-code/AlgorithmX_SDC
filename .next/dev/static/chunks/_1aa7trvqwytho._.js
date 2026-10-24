(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/survey/SurveyFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurveyFlow",
    ()=>SurveyFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/SiteHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyze-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const DRAFT_KEY = 'ai-nav:v1:survey-draft';
const STEP_PATHS = [
    '/survey',
    '/survey/step-2',
    '/survey/step-3'
];
const INTEREST_OPTIONS = [
    '数据分析',
    '人工智能',
    '产品与用户',
    '内容创作',
    '项目管理',
    '自动化',
    '教育培训',
    '商业分析'
];
const SKILL_OPTIONS = [
    '沟通表达',
    'Excel',
    '数据分析',
    'Office 办公软件',
    '文档写作',
    '项目管理',
    '客户服务',
    '销售沟通',
    '内容策划',
    '社交媒体运营',
    '设计工具',
    '编程基础',
    'AI 工具应用',
    '流程管理',
    '团队协作',
    '教学培训',
    '财务基础',
    '数据可视化',
    'SQL',
    '问题解决',
    '时间管理',
    '自我学习'
];
const SCENARIO_VALUES = [
    'slow',
    'fast'
];
const MAX_SKILLS = 30;
const MAX_TASKS = 20;
const inputClass = 'w-full rounded-lg border border-[color:var(--line)] bg-white/90 px-3 py-2 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--ink-muted)] transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.16)]';
function isStringArray(value) {
    return Array.isArray(value) && value.every((item)=>typeof item === 'string');
}
function isSurveyDraft(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const draft = value;
    return typeof draft.currentRole === 'string' && isStringArray(draft.tasks) && isStringArray(draft.skills) && typeof draft.experienceYears === 'string' && isStringArray(draft.interests) && typeof draft.weeklyStudyHours === 'number' && (draft.scenario === 'slow' || draft.scenario === 'fast') && isStringArray(draft.targetDirections) && isStringArray(draft.workPreferences) && isStringArray(draft.growthPriorities);
}
function ChoiceGrid({ options, selected, onToggle, maxSelections }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-2 sm:grid-cols-2",
        children: options.map((option)=>{
            const checked = selected.includes(option.value);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: `flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${checked ? 'border-[color:var(--accent)] bg-[rgba(37,99,235,0.06)] text-[color:var(--accent-strong)] ring-1 ring-[color:var(--accent)]' : 'border-[color:var(--line)] bg-white/60 text-[color:var(--ink-body)] hover:border-[color:var(--accent-2)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        value: option.value,
                        checked: checked,
                        disabled: maxSelections !== undefined && selected.length >= maxSelections && !checked,
                        onChange: ()=>onToggle(option.value),
                        className: "accent-[color:var(--accent)]"
                    }, void 0, false, {
                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this),
                    option.label
                ]
            }, option.value, true, {
                fileName: "[project]/app/survey/SurveyFlow.tsx",
                lineNumber: 120,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/survey/SurveyFlow.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c = ChoiceGrid;
function SurveyFlow({ step }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t, tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentRole, setCurrentRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ''
    ]);
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [skillInput, setSkillInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [experienceYears, setExperienceYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('3');
    const [interests, setInterests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [weeklyStudyHours, setWeeklyStudyHours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [scenario, setScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('slow');
    const [targetDirections, setTargetDirections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [workPreferences, setWorkPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [growthPriorities, setGrowthPriorities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [storageError, setStorageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draftLoaded, setDraftLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurveyFlow.useEffect": ()=>{
            try {
                const raw = window.sessionStorage.getItem(DRAFT_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (isSurveyDraft(parsed)) {
                        setCurrentRole(parsed.currentRole);
                        setTasks(parsed.tasks.length ? parsed.tasks : [
                            ''
                        ]);
                        setSkills(parsed.skills);
                        setExperienceYears(parsed.experienceYears);
                        setInterests(parsed.interests);
                        setWeeklyStudyHours(parsed.weeklyStudyHours);
                        setScenario(parsed.scenario);
                        setTargetDirections(parsed.targetDirections);
                        setWorkPreferences(parsed.workPreferences);
                        setGrowthPriorities(parsed.growthPriorities);
                    } else {
                        window.sessionStorage.removeItem(DRAFT_KEY);
                    }
                }
            } catch  {
                setStorageError(true);
            } finally{
                setDraftLoaded(true);
            }
        }
    }["SurveyFlow.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SurveyFlow.useEffect": ()=>{
            if (!draftLoaded || storageError) {
                return;
            }
            const draft = {
                currentRole,
                tasks,
                skills,
                experienceYears,
                interests,
                weeklyStudyHours,
                scenario,
                targetDirections,
                workPreferences,
                growthPriorities
            };
            try {
                window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
            } catch  {
                setStorageError(true);
            }
        }
    }["SurveyFlow.useEffect"], [
        currentRole,
        tasks,
        skills,
        experienceYears,
        interests,
        weeklyStudyHours,
        scenario,
        targetDirections,
        workPreferences,
        growthPriorities,
        draftLoaded,
        storageError
    ]);
    const toggleChoice = (value, selected, setSelected)=>{
        setSelected(selected.includes(value) ? selected.filter((item)=>item !== value) : [
            ...selected,
            value
        ]);
    };
    const addTask = ()=>{
        if (tasks.length < MAX_TASKS) {
            setTasks((previous)=>[
                    ...previous,
                    ''
                ]);
        }
    };
    const updateTask = (index, value)=>{
        setTasks((previous)=>previous.map((task, itemIndex)=>itemIndex === index ? value : task));
    };
    const removeTask = (index)=>{
        setTasks((previous)=>previous.length === 1 ? [
                ''
            ] : previous.filter((_, itemIndex)=>itemIndex !== index));
    };
    const addSkill = ()=>{
        const value = skillInput.trim().replace(/[，,]+$/g, '').trim();
        if (!value) {
            setSkillInput('');
            return;
        }
        if (!skills.some((skill)=>skill.toLowerCase() === value.toLowerCase()) && skills.length < MAX_SKILLS) {
            setSkills((previous)=>[
                    ...previous,
                    value
                ]);
        }
        setSkillInput('');
    };
    const handleSkillKeyDown = (event)=>{
        if (event.nativeEvent.isComposing) {
            return;
        }
        if (event.key === 'Enter' || event.key === ',' || event.key === '，') {
            event.preventDefault();
            addSkill();
        }
    };
    const validate = (validateAll)=>{
        const nextErrors = {};
        const years = Number(experienceYears);
        if ((step === 1 || validateAll) && !currentRole.trim()) {
            nextErrors.currentRole = t.survey.errors.currentRole;
        }
        if ((step === 1 || validateAll) && tasks.every((task)=>!task.trim())) {
            nextErrors.dailyTasks = t.survey.errors.dailyTasks;
        }
        if ((step === 2 || validateAll) && skills.length === 0) {
            nextErrors.existingSkills = t.survey.errors.existingSkills;
        }
        if ((step === 1 || validateAll) && (experienceYears.trim() === '' || !Number.isInteger(years) || years < 0 || years > 50)) {
            nextErrors.experienceYears = t.survey.errors.experienceYears;
        }
        setErrors(nextErrors);
        return nextErrors;
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (isSubmitting || !draftLoaded || storageError) {
            return;
        }
        const nextErrors = validate(step === 3);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }
        setSubmitError(null);
        if (step < 3) {
            router.push(step === 1 ? STEP_PATHS[1] : STEP_PATHS[2]);
            return;
        }
        if (nextErrors.currentRole || nextErrors.dailyTasks || nextErrors.experienceYears) {
            router.push(STEP_PATHS[0]);
            return;
        }
        if (nextErrors.existingSkills) {
            router.push(STEP_PATHS[1]);
            return;
        }
        const payload = {
            currentRole: currentRole.trim(),
            dailyTasks: tasks.map((task)=>task.trim()).filter(Boolean),
            existingSkills: skills,
            experienceYears: Number(experienceYears),
            interests,
            weeklyStudyHours,
            scenario,
            targetDirections,
            workPreferences,
            growthPriorities
        };
        setIsSubmitting(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAnalysis"])(payload);
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAnalysisSession"])({
                    result,
                    input: payload,
                    savedAt: new Date().toISOString()
                });
                window.sessionStorage.removeItem(DRAFT_KEY);
            } catch  {
                setSubmitError({
                    message: t.survey.errors.saveFailed,
                    details: []
                });
                return;
            }
            router.push('/result');
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisRequestError"]) {
                setSubmitError({
                    message: error.message,
                    details: error.details
                });
            } else {
                setSubmitError({
                    message: t.survey.errors.requestFailed,
                    details: []
                });
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    const isCurrentStep = (candidate)=>candidate === step;
    const canNavigate = draftLoaded && !storageError && !isSubmitting;
    const stepTitle = t.survey.stepTitles[step - 1];
    const stepLead = t.survey.stepLeads[step - 1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/app/survey/SurveyFlow.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "mx-auto w-full max-w-3xl px-4 py-8 sm:py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.progress, {
                                    step
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-3xl",
                                children: stepTitle
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-[color:var(--ink-body)]",
                                children: stepLead
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": t.survey.progressLabel,
                                className: "mt-5 grid grid-cols-3 gap-2",
                                children: t.survey.stepLabels.map((label, index)=>{
                                    const stepNumber = index + 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: STEP_PATHS[index],
                                        "aria-current": isCurrentStep(stepNumber) ? 'step' : undefined,
                                        "aria-disabled": !canNavigate || stepNumber > step,
                                        tabIndex: canNavigate && stepNumber <= step ? undefined : -1,
                                        onClick: (event)=>{
                                            if (!canNavigate || stepNumber > step) {
                                                event.preventDefault();
                                            }
                                        },
                                        className: `rounded-lg px-2 py-2 text-center text-xs font-medium transition sm:text-sm ${isCurrentStep(stepNumber) ? 'bg-[color:var(--accent)] text-white' : stepNumber < step ? 'bg-[rgba(37,99,235,0.10)] text-[color:var(--accent-strong)]' : 'bg-white/70 text-[color:var(--ink-muted)]'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-1 hidden sm:inline",
                                                children: [
                                                    stepNumber,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this),
                                            label
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[color:var(--line-soft)]",
                                role: "progressbar",
                                "aria-label": t.survey.progressLabel,
                                "aria-valuemin": 1,
                                "aria-valuemax": 3,
                                "aria-valuenow": step,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-[color:var(--accent)] transition-all",
                                    style: {
                                        width: `${step / 3 * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/survey/SurveyFlow.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        ref: formRef,
                        noValidate: true,
                        "aria-busy": isSubmitting || !draftLoaded,
                        onSubmit: handleSubmit,
                        className: "glass space-y-7 p-5 sm:p-7",
                        children: [
                            storageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "alert",
                                className: "rounded-lg border border-[rgba(220,75,62,0.25)] bg-[rgba(220,75,62,0.06)] p-3 text-sm text-[color:var(--coral)]",
                                children: t.survey.errors.draftFailed
                            }, void 0, false, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 434,
                                columnNumber: 13
                            }, this),
                            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "currentRole",
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: [
                                                    t.survey.fields.currentRole,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[color:var(--coral)]",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "currentRole",
                                                value: currentRole,
                                                onChange: (event)=>setCurrentRole(event.target.value),
                                                "aria-invalid": Boolean(errors.currentRole),
                                                "aria-describedby": errors.currentRole ? 'currentRole-error' : undefined,
                                                className: `${inputClass} ${errors.currentRole ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: t.survey.fields.currentRolePlaceholder
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 19
                                                    }, this),
                                                    t.survey.fields.currentRoleOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: option.value,
                                                            children: option.label
                                                        }, option.value, false, {
                                                            fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, this),
                                            errors.currentRole && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "currentRole-error",
                                                className: "text-xs text-[color:var(--coral)]",
                                                children: errors.currentRole
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 464,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "task-0",
                                                        className: "block text-sm font-medium text-[color:var(--ink)]",
                                                        children: [
                                                            t.survey.fields.tasks,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[color:var(--coral)]",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: addTask,
                                                        disabled: tasks.length >= MAX_TASKS,
                                                        className: "rounded-lg px-2 py-1 text-sm font-medium text-[color:var(--accent)] transition hover:bg-[rgba(37,99,235,0.08)] disabled:cursor-not-allowed disabled:text-[color:var(--ink-muted)]",
                                                        children: t.survey.fields.addTask
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: tasks.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                id: `task-${index}`,
                                                                type: "text",
                                                                value: task,
                                                                onChange: (event)=>updateTask(index, event.target.value),
                                                                placeholder: index === 0 ? t.survey.fields.taskPlaceholder : t.survey.fields.taskPlaceholderMore,
                                                                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.fields.taskLabel, {
                                                                    n: index + 1
                                                                }),
                                                                className: inputClass
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeTask(index),
                                                                disabled: tasks.length === 1,
                                                                "aria-label": `${t.survey.fields.removeTask} ${index + 1}`,
                                                                className: "shrink-0 rounded-lg px-2 py-1 text-sm text-[color:var(--ink-muted)] transition hover:bg-[rgba(15,42,74,0.06)] disabled:opacity-40",
                                                                children: t.survey.fields.removeTask
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 500,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 484,
                                                columnNumber: 17
                                            }, this),
                                            errors.dailyTasks ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--coral)]",
                                                children: errors.dailyTasks
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 513,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.fields.tasksHint, {
                                                    max: MAX_TASKS
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-2 sm:max-w-[14rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "experienceYears",
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.experience
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "experienceYears",
                                                        type: "number",
                                                        min: 0,
                                                        max: 50,
                                                        step: 1,
                                                        inputMode: "numeric",
                                                        value: experienceYears,
                                                        onChange: (event)=>setExperienceYears(event.target.value),
                                                        "aria-invalid": Boolean(errors.experienceYears),
                                                        "aria-describedby": errors.experienceYears ? 'experienceYears-error' : undefined,
                                                        className: `${inputClass} ${errors.experienceYears ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 text-sm text-[color:var(--ink-muted)]",
                                                        children: t.survey.fields.yearUnit
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            errors.experienceYears && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "experienceYears-error",
                                                className: "text-xs text-[color:var(--coral)]",
                                                children: errors.experienceYears
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 544,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.interests
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: t.survey.fields.interestsHint
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 558,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: INTEREST_OPTIONS.map((interest)=>{
                                                    const selected = interests.includes(interest);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-pressed": selected,
                                                        onClick: ()=>toggleChoice(interest, interests, setInterests),
                                                        className: `rounded-full border px-3 py-1.5 text-sm transition ${selected ? 'border-[color:var(--accent)] bg-[color:var(--accent)] text-white shadow-[0_6px_16px_rgba(37,99,235,0.24)]' : 'border-[color:var(--line)] bg-white/80 text-[color:var(--ink-body)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'}`,
                                                        children: tr.term('interest', interest)
                                                    }, interest, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 559,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: [
                                                    t.survey.fields.skills,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[color:var(--coral)]",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.fields.skillsHint, {
                                                    max: MAX_SKILLS
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGrid, {
                                                options: SKILL_OPTIONS.map((value, index)=>({
                                                        value,
                                                        label: t.survey.fields.skillOptions[index]
                                                    })),
                                                selected: skills,
                                                maxSelections: MAX_SKILLS,
                                                onToggle: (value)=>toggleChoice(value, skills, setSkills)
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "skillInput",
                                                        type: "text",
                                                        value: skillInput,
                                                        onChange: (event)=>setSkillInput(event.target.value),
                                                        onKeyDown: handleSkillKeyDown,
                                                        placeholder: t.survey.fields.skillPlaceholder,
                                                        "aria-invalid": Boolean(errors.existingSkills),
                                                        "aria-describedby": errors.existingSkills ? 'existingSkills-error' : undefined,
                                                        className: `${inputClass} ${errors.existingSkills ? 'border-[color:var(--coral)] focus:border-[color:var(--coral)] focus:ring-[rgba(220,75,62,0.16)]' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: addSkill,
                                                        className: "shrink-0 rounded-lg border border-[color:var(--line)] bg-white/90 px-3 py-2 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                                        children: t.survey.fields.addSkill
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 599,
                                                columnNumber: 17
                                            }, this),
                                            errors.existingSkills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                id: "existingSkills-error",
                                                className: "text-xs text-[color:var(--coral)]",
                                                children: errors.existingSkills
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 620,
                                                columnNumber: 19
                                            }, this),
                                            skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-wrap gap-2 pt-1",
                                                children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "inline-flex items-center gap-1 rounded-full border border-[rgba(37,99,235,0.18)] bg-[rgba(37,99,235,0.07)] py-1 pl-3 pr-2 text-sm text-[color:var(--accent-strong)]",
                                                        children: [
                                                            tr.term('skill', skill),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setSkills((previous)=>previous.filter((item)=>item !== skill)),
                                                                "aria-label": (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.fields.removeSkill, {
                                                                    skill
                                                                }),
                                                                className: "rounded-full px-1 text-[color:var(--accent)] transition hover:bg-[rgba(37,99,235,0.14)]",
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, skill, true, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 553,
                                columnNumber: 13
                            }, this),
                            step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.targetDirections
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: t.survey.fields.targetDirectionsHint
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGrid, {
                                                options: t.survey.fields.targetDirectionOptions,
                                                selected: targetDirections,
                                                onToggle: (value)=>toggleChoice(value, targetDirections, setTargetDirections)
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.workPreferences
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 665,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: t.survey.fields.workPreferencesHint
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGrid, {
                                                options: t.survey.fields.workPreferenceOptions,
                                                selected: workPreferences,
                                                onToggle: (value)=>toggleChoice(value, workPreferences, setWorkPreferences)
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.growthPriorities
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 679,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[color:var(--ink-muted)]",
                                                children: t.survey.fields.growthPrioritiesHint
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceGrid, {
                                                options: t.survey.fields.growthPriorityOptions,
                                                selected: growthPriorities,
                                                onToggle: (value)=>toggleChoice(value, growthPriorities, setGrowthPriorities)
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 685,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 678,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "weeklyStudyHours",
                                                        className: "text-sm font-medium text-[color:var(--ink)]",
                                                        children: t.survey.fields.hours
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-[color:var(--accent)]",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.survey.fields.hoursValue, {
                                                            hours: weeklyStudyHours
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "weeklyStudyHours",
                                                type: "range",
                                                min: 1,
                                                max: 40,
                                                step: 1,
                                                value: weeklyStudyHours,
                                                onChange: (event)=>setWeeklyStudyHours(Number(event.target.value)),
                                                className: "w-full cursor-pointer accent-[color:var(--accent)]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[11px] text-[color:var(--ink-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.survey.fields.hoursMin
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: t.survey.fields.hoursMax
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                className: "block text-sm font-medium text-[color:var(--ink)]",
                                                children: t.survey.fields.scenario
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-2 sm:grid-cols-2",
                                                children: SCENARIO_VALUES.map((value)=>{
                                                    const selected = scenario === value;
                                                    const title = value === 'slow' ? t.survey.fields.scenarioSlow : t.survey.fields.scenarioFast;
                                                    const desc = value === 'slow' ? t.survey.fields.scenarioSlowDesc : t.survey.fields.scenarioFastDesc;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${selected ? 'border-[color:var(--accent)] bg-[rgba(37,99,235,0.06)] ring-1 ring-[color:var(--accent)]' : 'border-[color:var(--line)] bg-white/60 hover:border-[color:var(--accent-2)]'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "radio",
                                                                name: "scenario",
                                                                value: value,
                                                                checked: selected,
                                                                onChange: ()=>setScenario(value),
                                                                className: "mt-1 accent-[color:var(--accent)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block text-sm font-medium text-[color:var(--ink)]",
                                                                        children: title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-xs leading-5 text-[color:var(--ink-muted)]",
                                                                        children: desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                        lineNumber: 753,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, value, true, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 733,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 721,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-[color:var(--line-soft)] pt-5",
                                children: [
                                    isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "status",
                                        "aria-live": "polite",
                                        className: "mb-4 flex items-center gap-2 rounded-lg border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.07)] px-3 py-2.5 text-sm text-[color:var(--accent-strong)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.25)] border-t-[color:var(--accent)]",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, this),
                                            t.survey.actions.submittingNote
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this),
                                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "alert",
                                        className: "mb-4 rounded-lg border border-[rgba(220,75,62,0.25)] bg-[rgba(220,75,62,0.06)] p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-[color:var(--coral)]",
                                                children: submitError.message
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 784,
                                                columnNumber: 17
                                            }, this),
                                            submitError.details.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-1 list-disc space-y-0.5 pl-5 text-xs text-[color:var(--coral)]",
                                                children: submitError.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: detail
                                                    }, detail, false, {
                                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>formRef.current?.requestSubmit(),
                                                disabled: isSubmitting,
                                                className: "mt-3 rounded-md border border-[rgba(220,75,62,0.35)] bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--coral)] transition hover:bg-[rgba(220,75,62,0.08)] disabled:cursor-not-allowed disabled:opacity-60",
                                                children: t.meta.retry
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 792,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 780,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-between",
                                        children: [
                                            step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "inline-flex items-center justify-center rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                                children: t.meta.back
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>router.push(STEP_PATHS[step - 2]),
                                                disabled: !canNavigate,
                                                className: "rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] disabled:cursor-not-allowed disabled:opacity-50",
                                                children: t.survey.actions.previous
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 811,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: !canNavigate,
                                                className: "flex items-center justify-center gap-2 rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] transition hover:bg-[color:var(--accent-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70",
                                                children: step === 3 ? isSubmitting ? t.survey.actions.submitting : t.survey.actions.submit : t.survey.actions.next
                                            }, void 0, false, {
                                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                                lineNumber: 820,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 802,
                                        columnNumber: 13
                                    }, this),
                                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-center text-xs text-[color:var(--ink-muted)]",
                                        children: t.survey.actions.submitHint
                                    }, void 0, false, {
                                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                                        lineNumber: 833,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/survey/SurveyFlow.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/survey/SurveyFlow.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/survey/SurveyFlow.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/survey/SurveyFlow.tsx",
        lineNumber: 371,
        columnNumber: 5
    }, this);
}
_s(SurveyFlow, "zRU+XyuFIYo0zzBM3xWdmOsYLfE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c1 = SurveyFlow;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChoiceGrid");
__turbopack_context__.k.register(_c1, "SurveyFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/i18n/LanguageToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageToggle",
    ()=>LanguageToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LanguageToggle({ className = '' }) {
    _s();
    const { lang, setLang, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": t.meta.switchLang,
        className: `inline-flex items-center rounded-full border border-[rgba(15,42,74,0.10)] bg-white/70 p-0.5 text-[11px] font-semibold backdrop-blur ${className}`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGS"].map((option)=>{
            const active = lang === option;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLang(option),
                "aria-pressed": active,
                "aria-label": option === 'zh' ? '中文' : 'English',
                className: `rounded-full px-2.5 py-1 transition ${active ? 'bg-[color:var(--accent)] text-white shadow-[0_2px_8px_rgba(37,99,235,0.28)]' : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'}`,
                children: t.meta[option === 'zh' ? 'langZh' : 'langEn']
            }, option, false, {
                fileName: "[project]/components/i18n/LanguageToggle.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/i18n/LanguageToggle.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(LanguageToggle, "/3d7gxyxBCFIeval70exn5hfvp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Logo({ compact = false }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "group inline-flex min-w-0 items-center gap-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "logo-mark",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 36 36",
                    width: "32",
                    height: "32",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "brand-mark-gradient",
                                x1: "6",
                                y1: "28",
                                x2: "29",
                                y2: "7",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        stopColor: "#06b6d4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Logo.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: ".55",
                                        stopColor: "#2563eb"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Logo.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "1",
                                        stopColor: "#7c3aed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site/Logo.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site/Logo.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "m6.5 24.5 7-7 5 4 11-12m-6 .5h6v6",
                            stroke: "url(#brand-mark-gradient)",
                            strokeWidth: "2.3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "6.5",
                            cy: "24.5",
                            r: "2",
                            fill: "#06b6d4"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "13.5",
                            cy: "17.5",
                            r: "2",
                            fill: "#168cdb"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "18.5",
                            cy: "21.5",
                            r: "2",
                            fill: "#365fe6"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "29.5",
                            cy: "9.5",
                            r: "2",
                            fill: "#7c3aed"
                        }, void 0, false, {
                            fileName: "[project]/components/site/Logo.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/Logo.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block truncate text-[13px] font-semibold leading-tight text-[color:var(--ink)]",
                        children: t.meta.appName
                    }, void 0, false, {
                        fileName: "[project]/components/site/Logo.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    compact ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0.5 block truncate text-[10px] leading-tight text-[color:var(--ink-muted)]",
                        children: t.meta.appTagline
                    }, void 0, false, {
                        fileName: "[project]/components/site/Logo.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site/Logo.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site/Logo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Logo, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/site/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function SiteHeader({ showHome = true, children }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "no-print sticky top-0 z-30 border-b border-white/50 bg-white/55 backdrop-blur-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                    fileName: "[project]/components/site/SiteHeader.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        children,
                        showHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                            children: t.meta.home
                        }, void 0, false, {
                            fileName: "[project]/components/site/SiteHeader.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageToggle"], {}, void 0, false, {
                            fileName: "[project]/components/site/SiteHeader.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site/SiteHeader.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site/SiteHeader.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site/SiteHeader.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analyze-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalysisRequestError",
    ()=>AnalysisRequestError,
    "requestAnalysis",
    ()=>requestAnalysis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
;
const fieldLabels = {
    currentRole: '当前岗位',
    dailyTasks: '日常任务',
    existingSkills: '已有技能',
    weeklyStudyHours: '每周学习时间'
};
class AnalysisRequestError extends Error {
    details;
    constructor(message, details = []){
        super(message);
        this.name = 'AnalysisRequestError';
        this.details = details;
    }
}
async function requestAnalysis(input) {
    let response;
    try {
        response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
    } catch  {
        throw new AnalysisRequestError('无法连接分析服务，请检查网络后重试。');
    }
    const data = await response.json().catch(()=>null);
    if (!response.ok) {
        throw buildApiError(data);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnalyzeResponse"])(data)) {
        throw new AnalysisRequestError('分析服务返回的数据格式不正确，请稍后重试。');
    }
    return data;
}
function buildApiError(data) {
    if (typeof data !== 'object' || data === null) {
        return new AnalysisRequestError('生成失败，请稍后重试。');
    }
    const error = data.error;
    if (typeof error !== 'object' || error === null) {
        return new AnalysisRequestError('生成失败，请稍后重试。');
    }
    const messageValue = error.message;
    const message = typeof messageValue === 'string' ? messageValue : '生成失败，请稍后重试。';
    const fieldErrors = error.fieldErrors;
    const details = [];
    if (typeof fieldErrors === 'object' && fieldErrors !== null) {
        for (const [field, messages] of Object.entries(fieldErrors)){
            if (!Array.isArray(messages)) {
                continue;
            }
            const label = fieldLabels[field] ?? field;
            for (const item of messages){
                if (typeof item === 'string') {
                    details.push(`${label}：${item}`);
                }
            }
        }
    }
    return new AnalysisRequestError(message, details);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAnalysisSession",
    ()=>isAnalysisSession,
    "isAnalyzeRequest",
    ()=>isAnalyzeRequest,
    "isAnalyzeResponse",
    ()=>isAnalyzeResponse,
    "loadAnalysisSession",
    ()=>loadAnalysisSession,
    "saveAnalysisSession",
    ()=>saveAnalysisSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
;
const SESSION_STORAGE_KEY = 'ai-nav:v2:analysis-session';
const LEGACY_RESULT_STORAGE_KEY = 'ai-nav:v1:analysis-result';
function saveAnalysisSession(session) {
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    window.sessionStorage.removeItem(LEGACY_RESULT_STORAGE_KEY);
}
function loadAnalysisSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (isAnalysisSession(parsed)) {
                return parsed;
            }
            window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
        return loadLegacySession();
    } catch  {
        return null;
    }
}
function loadLegacySession() {
    let raw;
    try {
        raw = window.sessionStorage.getItem(LEGACY_RESULT_STORAGE_KEY);
    } catch  {
        return null;
    }
    if (!raw) {
        return null;
    }
    try {
        const parsed = JSON.parse(raw);
        if (!isAnalyzeResponse(parsed)) {
            return null;
        }
        return {
            result: parsed,
            input: null,
            savedAt: ''
        };
    } catch  {
        return null;
    }
}
function isAnalysisSession(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const candidate = value;
    return isAnalyzeResponse(candidate.result) && (candidate.input === null || isAnalyzeRequest(candidate.input)) && typeof candidate.savedAt === 'string';
}
function isAnalyzeRequest(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const candidate = value;
    return typeof candidate.currentRole === 'string' && candidate.currentRole.trim() !== '' && Array.isArray(candidate.dailyTasks) && candidate.dailyTasks.length > 0 && candidate.dailyTasks.every((item)=>typeof item === 'string') && Array.isArray(candidate.existingSkills) && candidate.existingSkills.every((item)=>typeof item === 'string') && typeof candidate.experienceYears === 'number' && Number.isFinite(candidate.experienceYears) && Array.isArray(candidate.interests) && candidate.interests.every((item)=>typeof item === 'string') && (candidate.targetDirections === undefined || Array.isArray(candidate.targetDirections) && candidate.targetDirections.every((item)=>typeof item === 'string')) && (candidate.workPreferences === undefined || Array.isArray(candidate.workPreferences) && candidate.workPreferences.every((item)=>typeof item === 'string')) && (candidate.growthPriorities === undefined || Array.isArray(candidate.growthPriorities) && candidate.growthPriorities.every((item)=>typeof item === 'string')) && typeof candidate.weeklyStudyHours === 'number' && Number.isFinite(candidate.weeklyStudyHours) && candidate.weeklyStudyHours > 0 && (candidate.scenario === 'slow' || candidate.scenario === 'fast');
}
function isAnalyzeResponse(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const candidate = value;
    return Array.isArray(candidate.extractedSkills) && Array.isArray(candidate.taskChanges) && Array.isArray(candidate.recommendedRoles) && Array.isArray(candidate.skillGaps) && Array.isArray(candidate.learningPlan) && Array.isArray(candidate.sdgLinks) && typeof candidate.scenarioNote === 'string' && (candidate.trendSnapshot === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWorkforceTrendSnapshot"])(candidate.trendSnapshot));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contract for the prototype's single analysis endpoint.
 *
 * POST /api/analyze
 * Request: AnalyzeRequest
 * Success: 200 AnalyzeResponse
 * Failure: 400 | 500 ApiError
 *
 * Type-only module: no runtime logic, no mock data.
 */ /** Transition pace. `slow` = 12-month horizon, `fast` = 6-month horizon. */ __turbopack_context__.s([
    "isWorkforceTrendSnapshot",
    ()=>isWorkforceTrendSnapshot
]);
function isWorkforceTrendSnapshot(value) {
    if (!isRecord(value)) {
        return false;
    }
    return typeof value.version === 'string' && typeof value.lastUpdated === 'string' && typeof value.country === 'string' && typeof value.targetPopulation === 'string' && typeof value.jobFamily === 'string' && typeof value.sourceFamily === 'string' && typeof value.currentPeriod === 'string' && typeof value.previousPeriod === 'string' && typeof value.methodology === 'string' && Array.isArray(value.limitations) && value.limitations.every((limitation)=>typeof limitation === 'string') && Array.isArray(value.paths) && value.paths.every(isWorkforceTrendPath);
}
function isWorkforceTrendPath(value) {
    return isRecord(value) && typeof value.trackId === 'string' && typeof value.fromRoleEn === 'string' && typeof value.fromRoleZh === 'string' && typeof value.toRoleEn === 'string' && typeof value.toRoleZh === 'string' && isFiniteNumber(value.currentSampleSize) && isFiniteNumber(value.previousSampleSize) && isFiniteNumber(value.transitionFitScore) && isFiniteNumber(value.scoreChange) && Array.isArray(value.skills) && value.skills.every((skill)=>isRecord(skill) && typeof skill.skillId === 'string' && typeof skill.skillNameEn === 'string' && typeof skill.skillNameZh === 'string' && isFiniteNumber(skill.currentRate) && isFiniteNumber(skill.previousRate) && isFiniteNumber(skill.changePp) && typeof skill.trend === 'string');
}
function isRecord(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function isFiniteNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1aa7trvqwytho._.js.map