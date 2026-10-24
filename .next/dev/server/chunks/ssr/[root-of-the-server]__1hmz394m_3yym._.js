module.exports = [
(()=>{"use strict";return[
"[project]/components/i18n/LanguageProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/terms.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const STORAGE_KEY = 'asn.lang';
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function readStoredLang() {
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored === 'en' || stored === 'zh' ? stored : null;
    } catch  {
        return null;
    }
}
function LanguageProvider({ children }) {
    // Server render and the first client paint use Chinese; a stored preference
    // is applied right after hydration so the markup stays deterministic.
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('zh');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = readStoredLang();
        if (stored) {
            setLangState(stored);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch  {
        // Language persistence is a nice-to-have; ignore private-mode failures.
        }
    }, [
        lang
    ]);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>setLangState(next), []);
    const toggleLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setLangState((prev)=>prev === 'zh' ? 'en' : 'zh'), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            lang,
            setLang,
            toggleLang,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionaries"][lang],
            tr: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTranslator"])(lang)
        }), [
        lang,
        setLang,
        toggleLang
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/i18n/LanguageProvider.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
function useI18n() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!value) {
        throw new Error('useI18n must be used inside <LanguageProvider>.');
    }
    return value;
}
}),
"[project]/lib/i18n/dict.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/i18n/terms.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
]})(),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1hmz394m_3yym._.js.map