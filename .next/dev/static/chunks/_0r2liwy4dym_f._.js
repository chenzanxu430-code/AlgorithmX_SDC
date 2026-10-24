(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/terms.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const STORAGE_KEY = 'asn.lang';
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function readStoredLang() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored === 'en' || stored === 'zh' ? stored : null;
    } catch  {
        return null;
    }
}
function LanguageProvider({ children }) {
    _s();
    // Server render and the first client paint use Chinese; a stored preference
    // is applied right after hydration so the markup stays deterministic.
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('zh');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const stored = readStoredLang();
            if (stored) {
                setLangState(stored);
            }
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
            try {
                window.localStorage.setItem(STORAGE_KEY, lang);
            } catch  {
            // Language persistence is a nice-to-have; ignore private-mode failures.
            }
        }
    }["LanguageProvider.useEffect"], [
        lang
    ]);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLang]": (next)=>setLangState(next)
    }["LanguageProvider.useCallback[setLang]"], []);
    const toggleLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[toggleLang]": ()=>setLangState({
                "LanguageProvider.useCallback[toggleLang]": (prev)=>prev === 'zh' ? 'en' : 'zh'
            }["LanguageProvider.useCallback[toggleLang]"])
    }["LanguageProvider.useCallback[toggleLang]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                lang,
                setLang,
                toggleLang,
                t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dictionaries"][lang],
                tr: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTranslator"])(lang)
            })
    }["LanguageProvider.useMemo[value]"], [
        lang,
        setLang,
        toggleLang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/i18n/LanguageProvider.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "gNfN+O2/crWS9fMtem4K6gjoA2c=");
_c = LanguageProvider;
function useI18n() {
    _s1();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!value) {
        throw new Error('useI18n must be used inside <LanguageProvider>.');
    }
    return value;
}
_s1(useI18n, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/dict.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI copy for the whole prototype, in Chinese and English.
 *
 * `en` must keep the same shape as `zh`; the type `Dict` is derived from `zh`,
 * so a missing or misspelled key fails `npm run typecheck`.
 */ __turbopack_context__.s([
    "LANGS",
    ()=>LANGS,
    "dictionaries",
    ()=>dictionaries,
    "fmt",
    ()=>fmt
]);
const LANGS = [
    'zh',
    'en'
];
const zh = {
    meta: {
        appName: 'AI 技能转型导航',
        appTagline: '面向职场人士的 AI 技能转型导航',
        switchLang: '切换语言',
        langZh: '中文',
        langEn: 'EN',
        home: '返回首页',
        startTest: '进入测试',
        print: '打印 / 另存 PDF',
        retry: '重试',
        back: '返回'
    },
    landing: {
        eyebrow: 'AI 技能转型导航',
        title: '看清手上的技能，找到下一步方向',
        lead: '填写岗位、任务与学习投入，几分钟内得到技能画像、任务变化判断、相邻岗位推荐与可执行的学习计划。',
        primaryCta: '进入测试',
        secondaryCta: '查看上次结果',
        primaryNote: '个性化建议结合马来西亚近期招聘广告技能趋势；招聘样本不代表预测',
        featuresTitle: '报告里有什么',
        features: [
            {
                title: '技能画像',
                desc: '把日常任务和自评技能映射成标准技能名，每条都标注证据来源。'
            },
            {
                title: '任务变化',
                desc: '逐条给出 AI 影响与人类判断的比例，并附趋势来源与发布日期。'
            },
            {
                title: '相邻岗位',
                desc: '5 个可达方向，含匹配分、已匹配技能与待补技能，说明为什么推荐。'
            },
            {
                title: '学习计划',
                desc: '按每周可学习时间排周次，每一步都有资源、机构与预计时长。'
            }
        ],
        stepsTitle: '三步填写个性化档案',
        steps: [
            {
                title: '填写档案',
                desc: '描述当前岗位、日常任务和工作经验。'
            },
            {
                title: '兴趣与能力',
                desc: '选择感兴趣的方向和已有技能。'
            },
            {
                title: '设定提升期望',
                desc: '选择期待的发展方向、工作方式和学习节奏。'
            }
        ],
        footnote: '所有匹配分只用于排序，不代表录用概率；报告中的比例与周次均为估计值，不是预测。',
        previewTitle: '报告包含 8 个区块',
        previewList: [
            '技能画像',
            '任务变化',
            '相邻岗位',
            '技能差距',
            '学习计划',
            'SDG 关联',
            '招聘趋势',
            '方法与来源'
        ]
    },
    survey: {
        title: '先描述你的工作现状',
        lead: '填写岗位、任务与学习投入，用于生成技能画像和转型建议。带 * 的为必填项。',
        progress: '第 {step}/3 步',
        progressLabel: '档案填写进度',
        stepLabels: [
            '填写档案',
            '兴趣与能力',
            '提升期望'
        ],
        stepTitles: [
            '先描述你的工作现状',
            '兴趣与现有能力',
            '你期待怎样提升'
        ],
        stepLeads: [
            '填写当前岗位、日常任务与工作经验，帮助建立你的职业档案。',
            '选择你感兴趣的工作方向和已经具备的能力，可多选，也可补充自己的技能。',
            '选择未来工作的期待与成长重点，帮助建议更贴近你的目标。以下均可多选。'
        ],
        fields: {
            currentRole: '当前岗位',
            currentRolePlaceholder: '请选择最符合的一项',
            currentRoleOptions: [
                {
                    value: '客服专员',
                    label: '客服与客户支持'
                },
                {
                    value: '行政助理',
                    label: '行政与办公室支持'
                },
                {
                    value: '运营专员',
                    label: '运营与业务支持'
                },
                {
                    value: '销售代表',
                    label: '销售与商务拓展'
                },
                {
                    value: '市场专员',
                    label: '市场营销与内容传播'
                },
                {
                    value: '人力资源专员',
                    label: '人力资源与招聘'
                },
                {
                    value: '财务会计',
                    label: '财务与会计'
                },
                {
                    value: '教师',
                    label: '教育与培训'
                },
                {
                    value: '医护人员',
                    label: '医疗与健康服务'
                },
                {
                    value: '视觉设计师',
                    label: '设计与创意'
                },
                {
                    value: '程序员',
                    label: '软件开发与信息技术'
                },
                {
                    value: '数据分析师',
                    label: '数据分析与研究'
                },
                {
                    value: '零售店长 / 电商店主',
                    label: '零售、餐饮与门店经营'
                },
                {
                    value: '物流仓储专员',
                    label: '物流、仓储与供应链'
                },
                {
                    value: '生产制造技术员',
                    label: '工程、生产与制造'
                },
                {
                    value: '项目 / 产品管理',
                    label: '产品与项目管理'
                },
                {
                    value: '管理 / 团队负责人',
                    label: '管理与团队负责人'
                },
                {
                    value: '专业服务 / 公共服务',
                    label: '专业服务与公共服务'
                },
                {
                    value: '自由职业 / 灵活就业',
                    label: '自由职业与灵活就业'
                },
                {
                    value: '学生 / 暂无当前岗位',
                    label: '学生 / 暂无当前岗位'
                },
                {
                    value: '其他 / 暂不确定',
                    label: '其他 / 暂不确定'
                }
            ],
            tasks: '日常任务',
            addTask: '+ 添加任务',
            taskPlaceholder: '例如：整理每周销售报表',
            taskPlaceholderMore: '继续添加任务…',
            tasksHint: '可添加多项，最多 {max} 项。',
            skills: '已有技能',
            skillPlaceholder: '补充其他技能，例如：Excel',
            addSkill: '添加',
            skillsHint: '选择符合自己的技能，可多选；也可以补充未列出的技能，最多 {max} 项。',
            skillsAdded: '已添加 {count} 项。',
            skillOptions: [
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
                '自主学习'
            ],
            removeSkill: '移除技能 {skill}',
            experience: '工作经验年数',
            yearUnit: '年',
            interests: '兴趣',
            interestsHint: '选择你愿意投入时间的领域，可多选。',
            targetDirections: '希望发展的方向',
            targetDirectionsHint: '可以选择多个方向，也可以暂时不确定。',
            targetDirectionOptions: [
                {
                    value: '深耕当前岗位',
                    label: '提升当前岗位竞争力'
                },
                {
                    value: '转向相邻岗位',
                    label: '转向相关或相邻岗位'
                },
                {
                    value: '人工智能与数字化',
                    label: '人工智能与数字化应用'
                },
                {
                    value: '数据分析与商业洞察',
                    label: '数据分析与商业洞察'
                },
                {
                    value: '产品与项目管理',
                    label: '产品与项目管理'
                },
                {
                    value: '管理与团队带领',
                    label: '管理与团队带领'
                },
                {
                    value: '专业技能深化',
                    label: '深化专业技能，成为领域专家'
                },
                {
                    value: '自主创业与自由职业',
                    label: '自主创业与自由职业'
                },
                {
                    value: '尚未确定',
                    label: '还不确定，先了解可能性'
                }
            ],
            workPreferences: '期待的工作方式',
            workPreferencesHint: '选择对你比较重要的工作条件，可多选。',
            workPreferenceOptions: [
                {
                    value: '稳定与保障',
                    label: '稳定、有保障'
                },
                {
                    value: '弹性与自主',
                    label: '时间灵活、自主安排'
                },
                {
                    value: '远程或混合办公',
                    label: '远程或混合办公'
                },
                {
                    value: '收入提升',
                    label: '获得更好的收入回报'
                },
                {
                    value: '工作生活平衡',
                    label: '更好的工作与生活平衡'
                },
                {
                    value: '团队协作',
                    label: '团队协作、与人共事'
                },
                {
                    value: '独立专注',
                    label: '独立专注、减少频繁沟通'
                },
                {
                    value: '有创造空间',
                    label: '有创造和自主决策空间'
                },
                {
                    value: '社会价值',
                    label: '工作有社会价值和意义'
                }
            ],
            growthPriorities: '最希望获得的提升',
            growthPrioritiesHint: '选择你最看重的变化，可多选。',
            growthPriorityOptions: [
                {
                    value: '提升工作效率',
                    label: '提升工作效率，减少重复劳动'
                },
                {
                    value: '提升专业能力',
                    label: '提升专业能力与工作质量'
                },
                {
                    value: '增强就业竞争力',
                    label: '增强就业竞争力与抗风险能力'
                },
                {
                    value: '拓展职业选择',
                    label: '拓展职业选择或实现转型'
                },
                {
                    value: '争取晋升机会',
                    label: '争取晋升或承担更多职责'
                },
                {
                    value: '提升收入水平',
                    label: '提升收入水平'
                },
                {
                    value: '掌握AI工具',
                    label: '学会使用 AI 与数字工具'
                },
                {
                    value: '建立持续学习习惯',
                    label: '建立持续学习与成长习惯'
                },
                {
                    value: '探索兴趣方向',
                    label: '找到更符合兴趣的工作方向'
                }
            ],
            hours: '每周可学习时间',
            hoursValue: '{hours} 小时 / 周',
            hoursMin: '1 小时',
            hoursMax: '40 小时',
            scenario: '情景选择',
            scenarioSlow: 'AI 变化较缓',
            scenarioSlowDesc: '按 12 个月节奏规划，偏稳健。',
            scenarioFast: 'AI 变化较快',
            scenarioFastDesc: '按 6 个月节奏规划，优先补关键短板。',
            removeTask: '删除',
            taskLabel: '日常任务 {n}'
        },
        actions: {
            previous: '上一步',
            next: '下一步',
            submit: '生成转型建议',
            submitting: '正在分析你的档案…',
            submittingNote: '正在分析你的档案，请稍候…',
            submitHint: '提交后将调用分析接口，并跳转到结果页。'
        },
        errors: {
            currentRole: '请选择一项当前岗位。',
            dailyTasks: '请至少填写一项日常任务。',
            existingSkills: '请至少添加一项已有技能。',
            experienceYears: '请输入 0–50 之间的整数。',
            draftFailed: '暂时无法保存填写进度，请检查浏览器的会话存储设置后重试。',
            saveFailed: '结果已生成，但无法保存到当前会话，请重试。',
            requestFailed: '分析失败，请稍后重试。'
        }
    },
    result: {
        title: '转型建议报告',
        lead: '根据你填写的个人档案生成个性化转型建议，并结合近期招聘广告趋势样本；所有分数与工时均为估算值。',
        sampleBadge: '趋势数据暂不可用',
        rerun: '重新测评',
        scenario: {
            title: '情景',
            desc: '切换后会重新分析岗位顺序与学习优先级，原结果会保留到新结果返回。',
            slow: 'AI 变化较缓',
            fast: 'AI 变化较快',
            shortSlow: '慢',
            shortFast: '快',
            current: '当前：{name}',
            unknown: '当前情景未知',
            switching: '正在按「{name}」重新分析你的档案…',
            failed: '切换到「{name}」失败',
            legacy: '此结果来自旧版本，未保存原始档案，暂时无法切换情景。',
            reFill: '重新填写',
            saveWarning: '情景结果已更新，但未能保存到当前会话。'
        },
        sections: {
            skills: '技能画像',
            tasks: '任务变化',
            roles: '相邻岗位',
            gaps: '技能差距',
            plan: '学习计划',
            sdg: 'SDG 关联',
            trends: '招聘趋势与转型路径',
            note: '结果说明'
        },
        trends: {
            loading: '正在加载近期招聘趋势…',
            loadError: '招聘趋势暂时无法加载，请稍后重试。',
            badge: '招聘趋势 {version}',
            updated: '数据更新于 {date}',
            largestSignal: '变化较大的技能：{skill}（{change}）',
            noChange: '当前对比窗口未见明显变化。',
            samplePair: '样本量：近期 {current} 条 · 对比期 {previous} 条',
            homeCaveat: '马来西亚 JobStreet 招聘广告技能提及率；小样本、初步信号，不代表预测或 AI 自动化概率。',
            scope: '范围：{country} · {family} · 目标群体：{population}',
            periods: '近期：{current} · 对比期：{previous}',
            sourceMethod: '数据来源：{source}。以两期招聘广告技能提及率进行比较；每个方向均显示样本量。',
            sampleWarning: '样本量小且为目的性抽样，所有变化都是初步、暂定信号。招聘广告技能提及率不等同于技能需求预测或 AI 自动化概率。',
            pathScore: '团队推断适配分：{score}/100（较上一版 {change} 分）',
            pathScoreNote: '该分数是团队方法假设，不是个人匹配度、录用概率或预测。',
            skill: '技能',
            currentRate: '近期提及率',
            previousRate: '对比期提及率',
            change: '变化',
            up: '上升',
            down: '下降',
            changing: '变化信号',
            insufficient: '证据不足',
            fit: '转型假设',
            limitations: '数据局限',
            loadFailure: '趋势数据加载失败，当前无法显示招聘趋势。'
        },
        skills: {
            count: '{n} 项',
            neededBy: '被 {n} 个方向需要'
        },
        tasks: {
            count: '{n} 项任务',
            aiImpact: 'AI 影响',
            humanJudgment: '人类判断',
            filterHigh: '只看高风险',
            empty: '当前没有符合筛选条件的任务。',
            automated: '可自动化替代',
            augmented: 'AI 增强',
            unchanged: '变化较小'
        },
        roles: {
            count: '{n} 个方向',
            score: '匹配度',
            expand: '展开全部 {n} 个',
            collapse: '收起',
            matchedTitle: '已匹配技能',
            missingTitle: '待补技能',
            basis: '需求依据：',
            coreHit: '核心技能命中 {hit}/{total} 项：{skills}。',
            coreHitNone: '核心技能暂未命中任何一项。',
            interestHit: '兴趣方向命中：{skills}。',
            interestNone: '兴趣方向暂无重合。',
            fillGap: '待补：{skills}。',
            noGap: '所需技能已全部具备。',
            experience: {
                close: '{years} 年经验，经验年限与岗位通常要求接近（岗位参考 {ideal} 年）。',
                higher: '{years} 年经验，经验年限高于该岗位通常要求（岗位参考 {ideal} 年）。',
                lower: '{years} 年经验，经验年限低于该岗位通常要求（岗位参考 {ideal} 年）。',
                roleSuffix: '当前岗位「{name}」方向接近。'
            },
            scoreNote: '匹配分 = 技能重合度 + 兴趣 / 经验 / 岗位方向的小幅调整，仅用于排序，不代表录用概率。'
        },
        gaps: {
            count: '{n} 项待补',
            gap: '待补差距',
            strength: '现成优势',
            high: '优先项',
            medium: '中优先项',
            low: '低优先项',
            sortNote: '按优先级从高到低排列；现有优势 {n} 项。',
            empty: '暂无技能差距数据。'
        },
        plan: {
            hours: '合计 {n} 小时',
            stepTitle: '完成「{resource}」，补足 {skill}',
            stepTitleNoResource: '补足 {skill}',
            hoursValue: '{n} 小时',
            weekRange: '第 {a}–{b} 周',
            totals: '总时长 {hours} 小时 · 按每周 {perWeek} 小时约需 {weeks} 周',
            phase: {
                起步: '起步',
                进阶: '进阶',
                巩固: '巩固'
            },
            empty: '暂无学习步骤。'
        },
        sdg: {
            count: '{n} 项目标',
            roleContribution: '职业路径如何贡献',
            skillContribution: '关联目标与能力贡献',
            contributionNote: '这些是可能的贡献方向，实际影响取决于岗位实践与组织环境。'
        },
        note: {
            estimateLabel: '估计性质',
            methodologyLabel: '方法与来源',
            scenario: '当前为「{name}」情景：按每周 {perWeek} 小时排期，全部步骤约需 {weeks} 周。岗位匹配分仅用于排序；此结果是估计，不是预测。',
            matchFormula: '匹配分 = 技能重合率 × 100 + 兴趣命中（每项 +2，最多 4）+ 经验适配（最多 3）+ 岗位方向（+2），合计最多加 8 分，仅用于排序。',
            priorityRule: '技能优先级取词典基准值；被 2 个以上推荐岗位需要时上调一级；fast 情景下数据类技能再上调一级。',
            durationRule: '学习时长取固定资源库的预计小时数；预计周数 = 总时长 ÷ 每周可学习时间（向上取整）。',
            usedForTask: '任务变化评估',
            usedForRole: '岗位需求依据'
        },
        change: {
            scenarioLabel: '已切换到「{name}」：',
            rolesAndPlan: '岗位顺序和学习优先级已发生变化。',
            rolesOnly: '岗位顺序已发生变化。',
            planOnly: '学习优先级已发生变化。',
            none: '本次岗位顺序与学习优先级未变化。',
            topRole: '当前首位岗位：{name}',
            firstStep: '首个学习步骤：{name}',
            keepSources: '来源与日期保持不变。'
        },
        empty: {
            title: '还没有可展示的分析结果',
            desc: '请先填写岗位、任务与学习投入，生成结果后再回到这里。',
            cta: '去填写信息'
        },
        loading: '正在加载分析结果…'
    }
};
const en = {
    meta: {
        appName: 'AI Skill Navigator',
        appTagline: 'Career navigation for the AI transition',
        switchLang: 'Switch language',
        langZh: '中文',
        langEn: 'EN',
        home: 'Home',
        startTest: 'Start assessment',
        print: 'Print / Save as PDF',
        retry: 'Retry',
        back: 'Back'
    },
    landing: {
        eyebrow: 'AI Skill Navigator',
        title: 'See the skills you already have. Find the next step.',
        lead: 'Share your role, tasks and study time. In a couple of minutes you get a skill profile, task-by-task AI impact, adjacent roles and a learning plan you can follow.',
        primaryCta: 'Start assessment',
        secondaryCta: 'View last report',
        primaryNote: 'Personalized guidance is paired with recent Malaysian job-posting trends; postings are not forecasts.',
        featuresTitle: 'What the report covers',
        features: [
            {
                title: 'Skill profile',
                desc: 'Maps your tasks and self-declared skills to standard skill names, each with its evidence.'
            },
            {
                title: 'Task impact',
                desc: 'Shows how much of each task AI can take over versus how much still needs human judgement, with dated sources.'
            },
            {
                title: 'Adjacent roles',
                desc: 'Five reachable directions with match score, transferable skills and the gaps to close.'
            },
            {
                title: 'Learning plan',
                desc: 'Sequenced by your weekly study hours, with a resource, provider and estimated hours per step.'
            }
        ],
        stepsTitle: 'Three steps to your profile',
        steps: [
            {
                title: 'Describe your work',
                desc: 'Start with your role, daily tasks and experience.'
            },
            {
                title: 'Interests & skills',
                desc: 'Choose your interests and the skills you already have.'
            },
            {
                title: 'Set growth expectations',
                desc: 'Choose your goals, work preferences and learning pace.'
            }
        ],
        footnote: 'Match scores rank directions only — they are not hiring probabilities. All ratios and week counts are estimates, not predictions.',
        previewTitle: 'The report has 8 sections',
        previewList: [
            'Skill profile',
            'Task impact',
            'Adjacent roles',
            'Skill gaps',
            'Learning plan',
            'SDG alignment',
            'Hiring trends',
            'Method & sources'
        ]
    },
    survey: {
        title: 'Tell us about your current work',
        lead: 'Your role, tasks and study time drive the skill profile and transition advice. Fields marked * are required.',
        progress: 'Step {step} of 3',
        progressLabel: 'Profile completion progress',
        stepLabels: [
            'Your profile',
            'Interests & skills',
            'Growth goals'
        ],
        stepTitles: [
            'Tell us about your current work',
            'Your interests and skills',
            'How would you like to grow?'
        ],
        stepLeads: [
            'Share your current role, daily tasks and experience to build your work profile.',
            'Choose the areas that interest you and the skills you already have. You can select multiple options and add your own skills.',
            'Choose the goals and work conditions that matter to you. You can select multiple options.'
        ],
        fields: {
            currentRole: 'Current role',
            currentRolePlaceholder: 'Choose the closest match',
            currentRoleOptions: [
                {
                    value: '客服专员',
                    label: 'Customer service and support'
                },
                {
                    value: '行政助理',
                    label: 'Administration and office support'
                },
                {
                    value: '运营专员',
                    label: 'Operations and business support'
                },
                {
                    value: '销售代表',
                    label: 'Sales and business development'
                },
                {
                    value: '市场专员',
                    label: 'Marketing and communications'
                },
                {
                    value: '人力资源专员',
                    label: 'Human resources and recruiting'
                },
                {
                    value: '财务会计',
                    label: 'Finance and accounting'
                },
                {
                    value: '教师',
                    label: 'Education and training'
                },
                {
                    value: '医护人员',
                    label: 'Healthcare and health services'
                },
                {
                    value: '视觉设计师',
                    label: 'Design and creative work'
                },
                {
                    value: '程序员',
                    label: 'Software development and IT'
                },
                {
                    value: '数据分析师',
                    label: 'Data analysis and research'
                },
                {
                    value: '零售店长 / 电商店主',
                    label: 'Retail, food service and store management'
                },
                {
                    value: '物流仓储专员',
                    label: 'Logistics, warehousing and supply chain'
                },
                {
                    value: '生产制造技术员',
                    label: 'Engineering, production and manufacturing'
                },
                {
                    value: '项目 / 产品管理',
                    label: 'Product and project management'
                },
                {
                    value: '管理 / 团队负责人',
                    label: 'Management and team leadership'
                },
                {
                    value: '专业服务 / 公共服务',
                    label: 'Professional and public services'
                },
                {
                    value: '自由职业 / 灵活就业',
                    label: 'Freelance and flexible work'
                },
                {
                    value: '学生 / 暂无当前岗位',
                    label: 'Student / no current role'
                },
                {
                    value: '其他 / 暂不确定',
                    label: 'Other / not sure yet'
                }
            ],
            tasks: 'Daily tasks',
            addTask: '+ Add task',
            taskPlaceholder: 'e.g. Compile the weekly sales report',
            taskPlaceholderMore: 'Add another task…',
            tasksHint: 'Add as many as you need, up to {max}.',
            skills: 'Existing skills',
            skillPlaceholder: 'Add another skill, e.g. Excel',
            addSkill: 'Add',
            skillsHint: 'Select all the skills you have, or add one not listed. Up to {max}.',
            skillsAdded: '{count} added.',
            skillOptions: [
                'Communication',
                'Excel',
                'Data analysis',
                'Office software',
                'Writing & documentation',
                'Project management',
                'Customer service',
                'Sales communication',
                'Content planning',
                'Social media',
                'Design tools',
                'Programming basics',
                'AI tools',
                'Process management',
                'Teamwork',
                'Teaching & training',
                'Finance basics',
                'Data visualisation',
                'SQL',
                'Problem solving',
                'Time management',
                'Self-directed learning'
            ],
            removeSkill: 'Remove skill {skill}',
            experience: 'Years of experience',
            yearUnit: 'yrs',
            interests: 'Interests',
            interestsHint: 'Choose the areas you would be happy to spend time exploring.',
            targetDirections: 'Directions you would like to explore',
            targetDirectionsHint: 'Choose any that interest you, or leave this blank if you are unsure.',
            targetDirectionOptions: [
                {
                    value: '深耕当前岗位',
                    label: 'Grow in my current role'
                },
                {
                    value: '转向相邻岗位',
                    label: 'Move into a related role'
                },
                {
                    value: '人工智能与数字化',
                    label: 'AI and digital applications'
                },
                {
                    value: '数据分析与商业洞察',
                    label: 'Data analysis and business insights'
                },
                {
                    value: '产品与项目管理',
                    label: 'Product and project management'
                },
                {
                    value: '管理与团队带领',
                    label: 'Management and team leadership'
                },
                {
                    value: '专业技能深化',
                    label: 'Deepen expertise in my field'
                },
                {
                    value: '自主创业与自由职业',
                    label: 'Entrepreneurship and freelance work'
                },
                {
                    value: '尚未确定',
                    label: 'Not sure yet; explore the options'
                }
            ],
            workPreferences: 'What matters in your future work?',
            workPreferencesHint: 'Select the work conditions that matter most to you.',
            workPreferenceOptions: [
                {
                    value: '稳定与保障',
                    label: 'Stability and security'
                },
                {
                    value: '弹性与自主',
                    label: 'Flexible hours and autonomy'
                },
                {
                    value: '远程或混合办公',
                    label: 'Remote or hybrid work'
                },
                {
                    value: '收入提升',
                    label: 'Better compensation'
                },
                {
                    value: '工作生活平衡',
                    label: 'Work-life balance'
                },
                {
                    value: '团队协作',
                    label: 'Collaborative teamwork'
                },
                {
                    value: '独立专注',
                    label: 'Independent, focused work'
                },
                {
                    value: '有创造空间',
                    label: 'Creative freedom and ownership'
                },
                {
                    value: '社会价值',
                    label: 'Meaningful social impact'
                }
            ],
            growthPriorities: 'What would you most like to improve?',
            growthPrioritiesHint: 'Choose the outcomes that matter most to you.',
            growthPriorityOptions: [
                {
                    value: '提升工作效率',
                    label: 'Work more efficiently and reduce repetitive work'
                },
                {
                    value: '提升专业能力',
                    label: 'Improve professional skills and work quality'
                },
                {
                    value: '增强就业竞争力',
                    label: 'Improve employability and resilience'
                },
                {
                    value: '拓展职业选择',
                    label: 'Expand career options or change careers'
                },
                {
                    value: '争取晋升机会',
                    label: 'Prepare for promotion or more responsibility'
                },
                {
                    value: '提升收入水平',
                    label: 'Increase my income'
                },
                {
                    value: '掌握AI工具',
                    label: 'Learn to use AI and digital tools'
                },
                {
                    value: '建立持续学习习惯',
                    label: 'Build consistent learning habits'
                },
                {
                    value: '探索兴趣方向',
                    label: 'Find work that better fits my interests'
                }
            ],
            hours: 'Weekly study time',
            hoursValue: '{hours} hours / week',
            hoursMin: '1 hour',
            hoursMax: '40 hours',
            scenario: 'Scenario',
            scenarioSlow: 'AI changes slowly',
            scenarioSlowDesc: 'Plan on a 12-month horizon, steadier pace.',
            scenarioFast: 'AI changes fast',
            scenarioFastDesc: 'Plan on a 6-month horizon, close the critical gaps first.',
            removeTask: 'Delete',
            taskLabel: 'Task {n}'
        },
        actions: {
            previous: 'Previous',
            next: 'Next',
            submit: 'Generate recommendations',
            submitting: 'Analysing your profile…',
            submittingNote: 'Analysing your profile, one moment…',
            submitHint: 'Submitting calls the analysis API and opens the report page.'
        },
        errors: {
            currentRole: 'Please select your current role.',
            dailyTasks: 'Please add at least one daily task.',
            existingSkills: 'Please add at least one existing skill.',
            experienceYears: 'Enter a whole number between 0 and 50.',
            draftFailed: 'Your progress could not be saved. Check your browser session storage settings and try again.',
            saveFailed: 'The result was generated but could not be stored in this session. Please retry.',
            requestFailed: 'Analysis failed. Please try again later.'
        }
    },
    result: {
        title: 'Transition report',
        lead: 'Personalized transition guidance from your profile, paired with recent job-posting trend samples. All scores and hours are estimates.',
        sampleBadge: 'Trend data unavailable',
        rerun: 'Run again',
        scenario: {
            title: 'Scenario',
            desc: 'Switching re-analyses role order and learning priority; the current result stays until the new one arrives.',
            slow: 'AI changes slowly',
            fast: 'AI changes fast',
            shortSlow: 'Slow',
            shortFast: 'Fast',
            current: 'Current: {name}',
            unknown: 'Current scenario unknown',
            switching: 'Re-analysing your profile for “{name}”…',
            failed: 'Switching to “{name}” failed',
            legacy: 'This result came from an older version without the original profile, so the scenario cannot be switched.',
            reFill: 'Fill it in again',
            saveWarning: 'The scenario result was updated but could not be saved to this session.'
        },
        sections: {
            skills: 'Skill profile',
            tasks: 'Task impact',
            roles: 'Adjacent roles',
            gaps: 'Skill gaps',
            plan: 'Learning plan',
            sdg: 'SDG alignment',
            trends: 'Hiring trends & transition paths',
            note: 'About this result'
        },
        trends: {
            loading: 'Loading recent hiring trends…',
            loadError: 'Hiring trends are temporarily unavailable. Please try again later.',
            badge: 'Hiring trends {version}',
            updated: 'Updated {date}',
            largestSignal: 'Largest skill change: {skill} ({change})',
            noChange: 'No clear change in this comparison window.',
            samplePair: 'Sample: recent {current} postings · comparison {previous} postings',
            homeCaveat: 'Skill mentions in Malaysian JobStreet postings; small, preliminary samples—not forecasts or AI automation probabilities.',
            scope: 'Scope: {country} · {family} · target group: {population}',
            periods: 'Recent: {current} · comparison: {previous}',
            sourceMethod: 'Source: {source}. Skill mention rates are compared across two periods, with sample sizes shown for each direction.',
            sampleWarning: 'Samples are small and purposively selected; all changes are preliminary signals. Job-ad skill mentions are not skill-demand forecasts or AI automation probabilities.',
            pathScore: 'Team-inference fit score: {score}/100 ({change} points vs previous version)',
            pathScoreNote: 'This is a team-method assumption, not a personal match, hiring probability or forecast.',
            skill: 'Skill',
            currentRate: 'Recent mentions',
            previousRate: 'Comparison mentions',
            change: 'Change',
            up: 'Up',
            down: 'Down',
            changing: 'Changing signal',
            insufficient: 'Insufficient evidence',
            fit: 'Transition hypothesis',
            limitations: 'Data limitations',
            loadFailure: 'Trend data could not be loaded; hiring trends are unavailable.'
        },
        skills: {
            count: '{n} skills',
            neededBy: 'Required by {n} directions'
        },
        tasks: {
            count: '{n} tasks',
            aiImpact: 'AI impact',
            humanJudgment: 'Human judgement',
            filterHigh: 'High risk only',
            empty: 'No tasks match the current filter.',
            automated: 'Automatable',
            augmented: 'AI-augmented',
            unchanged: 'Largely unchanged'
        },
        roles: {
            count: '{n} directions',
            score: 'match',
            expand: 'Show all {n}',
            collapse: 'Collapse',
            matchedTitle: 'Matched skills',
            missingTitle: 'Skills to close',
            basis: 'Demand basis: ',
            coreHit: 'Core skills matched {hit}/{total}: {skills}.',
            coreHitNone: 'None of the core skills matched yet.',
            interestHit: 'Interest match: {skills}.',
            interestNone: 'No overlap with your interests.',
            fillGap: 'To close: {skills}.',
            noGap: 'All required skills are already covered.',
            experience: {
                close: '{years} years of experience — close to the {ideal} years this direction usually asks for.',
                higher: '{years} years of experience — above the {ideal} years this direction usually asks for.',
                lower: '{years} years of experience — below the {ideal} years this direction usually asks for.',
                roleSuffix: 'Your current role “{name}” already points this way.'
            },
            scoreNote: 'Match score = skill overlap plus small adjustments for interests, experience and role direction. It ranks directions only and is not a hiring probability.'
        },
        gaps: {
            count: '{n} to close',
            gap: 'Gap to close',
            strength: 'Current strength',
            high: 'Top priority',
            medium: 'Medium priority',
            low: 'Low priority',
            sortNote: 'Sorted by priority, high to low. {n} current strengths.',
            empty: 'No skill gap data.'
        },
        plan: {
            hours: '{n} hours total',
            stepTitle: 'Complete “{resource}” to close {skill}',
            stepTitleNoResource: 'Close {skill}',
            hoursValue: '{n} hours',
            weekRange: 'Weeks {a}–{b}',
            totals: '{hours} hours total · about {weeks} weeks at {perWeek} hours / week',
            phase: {
                起步: 'Foundation',
                进阶: 'Advanced',
                巩固: 'Consolidate'
            },
            empty: 'No learning steps.'
        },
        sdg: {
            count: '{n} goals',
            roleContribution: 'Career path contributions',
            skillContribution: 'Skill contribution',
            contributionNote: 'These are potential contribution pathways; actual impact depends on how the work is carried out and the organizational context.'
        },
        note: {
            estimateLabel: 'Estimate, not a forecast',
            methodologyLabel: 'Method & sources',
            scenario: 'Current scenario: “{name}”. Scheduled at {perWeek} hours per week, the full plan takes about {weeks} weeks. Match scores rank directions only — these results are estimates, not predictions.',
            matchFormula: 'Match score = skill overlap × 100 + interest hits (+2 each, max 4) + experience fit (max 3) + role direction (+2), capped at 8 extra points. Ranking only.',
            priorityRule: 'Skill priority starts from the dictionary baseline, is raised one level when two or more recommended roles need it, and raised again for data skills in the fast scenario.',
            durationRule: 'Hours come from the curated resource library; expected weeks = total hours ÷ weekly study hours, rounded up.',
            usedForTask: 'Task impact assessment',
            usedForRole: 'Role demand evidence'
        },
        change: {
            scenarioLabel: 'Switched to “{name}”: ',
            rolesAndPlan: 'role order and learning priority both changed.',
            rolesOnly: 'role order changed.',
            planOnly: 'learning priority changed.',
            none: 'role order and learning priority are unchanged.',
            topRole: 'Top direction: {name}',
            firstStep: 'First learning step: {name}',
            keepSources: 'Sources and dates are unchanged.'
        },
        empty: {
            title: 'No report to show yet',
            desc: 'Fill in your role, tasks and study time first, then come back to this page.',
            cta: 'Go to the form'
        },
        loading: 'Loading the analysis…'
    }
};
const dictionaries = {
    zh,
    en
};
function fmt(template, vars = {}) {
    return template.replace(/\{(\w+)\}/g, (match, key)=>key in vars ? String(vars[key]) : match);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/terms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Data-term translation maps.
 *
 * The analysis API returns Chinese skill / role / resource names (they come from
 * the curation libraries). The English UI translates them through these maps so
 * the report stays readable in both languages while the data layer stays single-source.
 *
 * Unknown values fall through unchanged — a new library entry never breaks the UI.
 */ __turbopack_context__.s([
    "createTranslator",
    ()=>createTranslator
]);
const SKILL_EN = {
    沟通表达: 'Communication',
    数据分析: 'Data analysis',
    Excel: 'Excel',
    SQL: 'SQL',
    Python: 'Python',
    数据可视化: 'Data visualisation',
    商业分析: 'Business analysis',
    'Office 办公软件': 'Office software',
    文档写作: 'Writing & documentation',
    项目管理: 'Project management',
    客户服务: 'Customer service',
    销售沟通: 'Sales communication',
    内容策划: 'Content planning',
    社交媒体运营: 'Social media',
    设计工具: 'Design tools',
    编程基础: 'Programming basics',
    'AI 工具应用': 'AI tools',
    流程管理: 'Process management',
    团队协作: 'Teamwork',
    教学培训: 'Teaching & training',
    财务基础: 'Finance basics',
    问题解决: 'Problem solving',
    时间管理: 'Time management',
    自我学习: 'Self-directed learning',
    用户增长: 'User growth',
    用户沟通: 'Customer communication',
    电商运营: 'E-commerce operations',
    市场洞察: 'Market insight',
    自动化: 'Automation'
};
const ROLE_EN = {
    增长运营分析师: 'Growth Operations Analyst',
    'AI 内容运营专员': 'AI Content Operations Specialist',
    电商数据运营: 'E-commerce Data Operations',
    用户洞察助理: 'User Insights Assistant',
    自动化流程专员: 'Workflow Automation Specialist'
};
const INTEREST_EN = {
    数据分析: 'Data analysis',
    人工智能: 'Artificial intelligence',
    产品与用户: 'Product & users',
    内容创作: 'Content creation',
    项目管理: 'Project management',
    自动化: 'Automation',
    教育培训: 'Education & training',
    商业分析: 'Business analysis'
};
const RESOURCE_EN = {
    数据分析基础: 'Data Analytics Foundations',
    'SQL Tutorial': 'SQL Tutorial',
    'Excel 数据透视与 Power Query': 'Excel PivotTables & Power Query',
    '增长实验与 A/B 测试': 'Growth Experiments & A/B Testing',
    'Python 入门': 'Python for Beginners',
    'Power BI 数据可视化': 'Power BI Visualisation',
    'Prompt Engineering 与 AI 工作流': 'Prompt Engineering & AI Workflows',
    内容营销与转化文案: 'Content Marketing & Conversion Copy',
    职场沟通与客户关系: 'Workplace Communication & Client Relations',
    项目管理基础: 'Project Management Foundations',
    电商运营基础: 'E-commerce Operations Foundations',
    市场调研与竞品分析: 'Market Research & Competitor Analysis',
    'Power Automate 流程自动化': 'Power Automate Workflow Automation',
    商业分析基础: 'Business Analysis Foundations'
};
const PROVIDER_EN = {
    'Google Data Analytics': 'Google Data Analytics',
    W3Schools: 'W3Schools',
    'Microsoft Learn': 'Microsoft Learn',
    'Google Skillshop': 'Google Skillshop',
    'Kaggle Learn': 'Kaggle Learn',
    'OpenAI Cookbook': 'OpenAI Cookbook',
    'HubSpot Academy': 'HubSpot Academy',
    Coursera: 'Coursera',
    PMI: 'PMI',
    'Shopify Learn': 'Shopify Learn'
};
const SOURCE_EN = {
    'WEF《Future of Jobs Report 2025》': 'WEF, Future of Jobs Report 2025',
    'Microsoft《Work Trend Index 2025》': 'Microsoft, Work Trend Index 2025',
    'McKinsey《The State of AI》': 'McKinsey, The State of AI',
    'OECD《Employment Outlook 2025》': 'OECD, Employment Outlook 2025'
};
const SDG_EN = {
    'SDG 4 优质教育': 'SDG 4 Quality education',
    'SDG 8 体面工作和经济增长': 'SDG 8 Decent work and economic growth',
    'SDG 9 产业、创新和基础设施': 'SDG 9 Industry, innovation and infrastructure',
    'SDG 10 减少不平等': 'SDG 10 Reduced inequalities',
    'SDG 12 负责任消费和生产': 'SDG 12 Responsible consumption and production'
};
const SDG_REASON_EN = {
    'SDG 4 优质教育': 'Actionable learning plans help people in work keep acquiring digital skills.',
    'SDG 8 体面工作和经济增长': 'Time freed up by automating repetitive tasks goes into higher-value growth and content work.',
    'SDG 10 减少不平等': 'Lowers the barrier for non-technical roles to move into data and AI-adjacent jobs.'
};
const CATEGORY_EN = {
    data: 'Data & tools',
    collaboration: 'Communication',
    process: 'Business & process',
    content: 'Content & creative',
    general: 'General'
};
const USED_FOR_EN = {
    任务变化评估: 'Task impact assessment',
    岗位需求依据: 'Role demand evidence'
};
const TERM_MAPS = {
    skill: SKILL_EN,
    role: ROLE_EN,
    interest: INTEREST_EN,
    resource: RESOURCE_EN,
    provider: PROVIDER_EN,
    source: SOURCE_EN,
    sdg: SDG_EN,
    sdgReason: SDG_REASON_EN,
    category: CATEGORY_EN,
    usedFor: USED_FOR_EN
};
function createTranslator(lang) {
    const term = (kind, value)=>lang === 'en' ? TERM_MAPS[kind][value] ?? value : value;
    return {
        lang,
        term,
        terms: (kind, values)=>values.map((value)=>term(kind, value)),
        join: (values)=>values.join(lang === 'en' ? ', ' : '、')
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeRenderTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            renderTree: activeRenderTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        renderTree: activeRenderTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                renderTree: oldEntry.renderTree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Browser variant of `./client-boundary-params`. In the browser the params and
// searchParams are created at render time rather than dynamically tracked.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createClientParams: null,
    createClientSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createClientParams: function() {
        return _paramsbrowser.createRenderParamsFromClient;
    },
    createClientSearchParams: function() {
        return _searchparamsbrowser.createRenderSearchParamsFromClient;
    }
});
const _paramsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
const _searchparamsbrowser = __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    const clientSearchParams = (0, _clientboundaryparams.createClientSearchParams)(searchParams);
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        params: clientParams,
        searchParams: clientSearchParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _clientboundaryparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/client-boundary-params.browser.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    const clientParams = (0, _clientboundaryparams.createClientParams)(params);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        ...slots,
        params: clientParams
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return _impl.InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return _impl.PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return _impl.RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return _impl.SlotMarker;
    }
});
const _impl = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/instant-validation/impl.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationBoundaryContext: null,
    PlaceValidationBoundaryBelowThisLevel: null,
    RenderValidationBoundaryAtThisLevel: null,
    SlotMarker: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationBoundaryContext: function() {
        return InstantValidationBoundaryContext;
    },
    PlaceValidationBoundaryBelowThisLevel: function() {
        return PlaceValidationBoundaryBelowThisLevel;
    },
    RenderValidationBoundaryAtThisLevel: function() {
        return RenderValidationBoundaryAtThisLevel;
    },
    SlotMarker: function() {
        return SlotMarker;
    }
});
const InstantValidationBoundaryContext = null;
const PlaceValidationBoundaryBelowThisLevel = null;
const RenderValidationBoundaryAtThisLevel = null;
const SlotMarker = null;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _boundary = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/instant-validation/boundary.js [app-client] (ecmascript)");
const _createsegmentkey = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/create-segment-key.browser.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _rendertree = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/render-tree.js [app-client] (ecmascript)");
/**
 * Resolve the root scroll padding used by the viewport check.
 *
 * Computed lengths serialize as pixels, but percentages remain relative to
 * the scrollport. Preserve the existing behavior for values that still
 * contain unresolved CSS math.
 */ function getScrollPaddingTopInPixels(htmlElement, viewportHeight) {
    const scrollPaddingTop = getComputedStyle(htmlElement).scrollPaddingTop;
    const value = Number.parseFloat(scrollPaddingTop);
    if (!Number.isFinite(value) || value < 0) {
        return 0;
    }
    if (scrollPaddingTop.endsWith('px')) {
        return value;
    }
    if (scrollPaddingTop.endsWith('%')) {
        return value / 100 * viewportHeight;
    }
    return 0;
}
/**
 * Check where the top corner of the HTMLElement is relative to the usable
 * viewport.
 *
 * Scroll padding is resolved lazily so an empty Fragment does not trigger a
 * computed style read. The caller caches the value for the second check.
 */ function getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        return 0;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= getScrollPaddingTop() && elementTop <= viewportHeight ? 1 : 2;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0] ?? null;
}
/**
 * Uses Fragment refs for scrolling.
 * Does not focus the first host descendant.
 */ function InnerScrollHandler(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { scrollRef: scrollHandlerRef, renderTree } = props;
        const scrollRef = scrollHandlerRef.forceScroll ? scrollHandlerRef.scrollRef : renderTree.data.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = scrollHandlerRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
            if (instance === null) {
                // A missing hash target is still a handled scroll intent. Do not
                // fall back to the route Fragment or leave the intent pending.
                scrollRef.current = false;
                scrollHandlerRef.onlyHashChange = false;
                scrollHandlerRef.hashFragment = null;
                return;
            }
        } else {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        let didHandleScroll = false;
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            const htmlElement = document.documentElement;
            let viewportHeight = null;
            let initialTargetState = null;
            let scrollPaddingTop = null;
            const getScrollPaddingTop = ()=>{
                if (scrollPaddingTop === null) {
                    // Reuse the style and layout update from the geometry read.
                    scrollPaddingTop = getScrollPaddingTopInPixels(htmlElement, viewportHeight);
                }
                return scrollPaddingTop;
            };
            if (!hashFragment) {
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                viewportHeight = htmlElement.clientHeight;
                initialTargetState = getScrollTargetState(instance, viewportHeight, getScrollPaddingTop);
                // An empty Fragment is not a scroll target. In particular, avoid
                // React's sibling fallback and leave the scroll signal available
                // for another changed segment.
                if (initialTargetState === 0) {
                    return;
                }
            }
            didHandleScroll = true;
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            // This handler intentionally leaves focus untouched; resetting focus on
            // navigation is deferred.
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // If the element's top edge is already in the viewport, exit early.
            if (initialTargetState === 1) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (getScrollTargetState(instance, viewportHeight, getScrollPaddingTop) === 2) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: scrollHandlerRef.onlyHashChange
        });
        if (!didHandleScroll) {
            return;
        }
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        scrollHandlerRef.onlyHashChange = false;
        scrollHandlerRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
function ScrollHandler({ children, renderTree }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error('invariant global layout router not mounted');
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollHandler, {
        scrollRef: context.scrollRef,
        renderTree: renderTree,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, renderTree, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw new Error('invariant global layout router not mounted');
    }
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = renderTree.data.prefetchRsc !== null ? renderTree.data.prefetchRsc : renderTree.data.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(renderTree.data.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _rendertree.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentRenderTree: renderTree,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same render tree.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentRenderTree: parentContext.parentRenderTree,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw new Error('invariant expected layout router to be mounted');
    }
    const { parentTree, parentRenderTree, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the render tree for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React. In the browser it
    // represents the identity of the UI tree. Whenever the state key changes,
    // the tree is recreated and the state is reset. In the App Router model,
    // search params do not cause state to be lost, so two segments with the same
    // segment path but different search params should have the same state key.
    // On the server, the key describes the segment's structure instead, so it
    // stays the same when unknown params become known during HTML resume.
    //
    // Whether the data can be reused is tracked separately, by the segment
    // cache's vary paths.
    const activeTree = parentTree[1][parallelRouterKey];
    const activeRenderTree = parentRenderTree.slots?.get(parallelRouterKey);
    if (activeTree === undefined || activeRenderTree === undefined) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createsegmentkey.createSegmentKey)(activeSegment);
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeRenderTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const renderTree = bfcacheEntry.renderTree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollHandler, {
            renderTree: renderTree,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        renderTree: renderTree,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    proxiedPromise.status = 'fulfilled';
    proxiedPromise.value = underlyingParams;
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    proxiedPromise.status = 'fulfilled';
    proxiedPromise.value = underlyingSearchParams;
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
            warnOnce('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
]);})()

//# sourceMappingURL=_0r2liwy4dym_f._.js.map