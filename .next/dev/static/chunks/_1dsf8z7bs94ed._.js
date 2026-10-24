(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/result/ResultPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultPageClient",
    ()=>ResultPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ResultDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/ResultDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ScenarioSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/ScenarioSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyze-client.ts [app-client] (ecmascript)");
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
function ResultPageClient() {
    _s();
    const switchingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingScenario, setPendingScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [switchError, setSwitchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failedScenario, setFailedScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [changeNote, setChangeNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saveWarning, setSaveWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultPageClient.useEffect": ()=>{
            setSession((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAnalysisSession"])());
            setIsLoading(false);
        }
    }["ResultPageClient.useEffect"], []);
    async function switchScenario(nextScenario) {
        const previousSession = session;
        if (!previousSession?.input || switchingRef.current) {
            return;
        }
        if (nextScenario === previousSession.input.scenario) {
            return;
        }
        const input = previousSession.input;
        switchingRef.current = true;
        setIsSwitching(true);
        setPendingScenario(nextScenario);
        setSwitchError(null);
        setFailedScenario(null);
        setChangeNote(null);
        setSaveWarning(null);
        try {
            const nextResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestAnalysis"])({
                ...input,
                scenario: nextScenario
            });
            const mergedResult = preserveTaskSources(previousSession.result, nextResult);
            const nextSession = {
                result: mergedResult,
                input: {
                    ...input,
                    scenario: nextScenario
                },
                savedAt: new Date().toISOString()
            };
            setSession(nextSession);
            setChangeNote(buildChangeNote(previousSession.result, mergedResult, nextScenario));
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAnalysisSession"])(nextSession);
            } catch  {
                setSaveWarning('情景结果已更新，但未能保存到当前会话。');
            }
        } catch (error) {
            const message = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisRequestError"] ? error.message : '情景切换失败，请稍后重试。';
            const details = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisRequestError"] ? error.details : [];
            setSwitchError({
                message,
                details,
                target: nextScenario
            });
            setFailedScenario(nextScenario);
        } finally{
            switchingRef.current = false;
            setIsSwitching(false);
            setPendingScenario(null);
        }
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto w-full max-w-3xl px-4 py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-slate-600",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-sm text-slate-500",
                        role: "status",
                        "aria-live": "polite",
                        children: "正在加载分析结果…"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/result/ResultPageClient.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/result/ResultPageClient.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto w-full max-w-3xl px-4 py-16 sm:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-blue-700",
                        children: "AI 技能转型导航"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-2 text-2xl font-semibold tracking-tight",
                        children: "还没有可展示的分析结果"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600",
                        children: "请先填写岗位、任务与学习投入，生成结果后再回到这里。"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800",
                        children: "去填写信息"
                    }, void 0, false, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/result/ResultPageClient.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/result/ResultPageClient.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ResultDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResultDashboard"], {
        result: session.result,
        weeklyStudyHours: session.input?.weeklyStudyHours ?? 8,
        toolbar: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ScenarioSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScenarioSwitcher"], {
            currentScenario: session.input?.scenario ?? null,
            isSwitching: isSwitching,
            pendingScenario: pendingScenario,
            error: switchError,
            changeNote: changeNote,
            saveWarning: saveWarning,
            legacy: !session.input,
            onSelect: switchScenario,
            onRetry: ()=>{
                if (failedScenario) {
                    void switchScenario(failedScenario);
                }
            }
        }, void 0, false, {
            fileName: "[project]/app/result/ResultPageClient.tsx",
            lineNumber: 128,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/result/ResultPageClient.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(ResultPageClient, "5nqwZS4M/UUv1fJBBzF3aj9ROHc=");
_c = ResultPageClient;
function preserveTaskSources(previous, next) {
    const previousSources = new Map(previous.taskChanges.map((item)=>[
            item.task,
            item.source
        ]));
    return {
        ...next,
        taskChanges: next.taskChanges.map((item)=>({
                ...item,
                source: previousSources.get(item.task) ?? item.source
            }))
    };
}
function buildChangeNote(previous, next, scenario) {
    const rolesChanged = previous.recommendedRoles.map((role)=>role.title).join('|') !== next.recommendedRoles.map((role)=>role.title).join('|');
    const planChanged = previous.learningPlan.map((step)=>step.skillGap).join('|') !== next.learningPlan.map((step)=>step.skillGap).join('|');
    let summary;
    if (rolesChanged && planChanged) {
        summary = '岗位顺序和学习优先级已发生变化。';
    } else if (rolesChanged) {
        summary = '岗位顺序已发生变化。';
    } else if (planChanged) {
        summary = '学习优先级已发生变化。';
    } else {
        summary = '本次岗位顺序与学习优先级未变化。';
    }
    const topRole = next.recommendedRoles[0]?.title;
    const firstStep = next.learningPlan[0]?.skillGap;
    const details = [
        topRole ? `当前首位岗位：${topRole}` : '',
        firstStep ? `首个学习步骤：${firstStep}` : ''
    ].filter(Boolean).join('；');
    const label = scenario === 'fast' ? 'AI 变化较快' : 'AI 变化较缓';
    return `已切换到「${label}」：${summary}${details ? `${details}。` : ''}来源与日期保持不变。`;
}
var _c;
__turbopack_context__.k.register(_c, "ResultPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/result/MethodologyCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MethodologyCard",
    ()=>MethodologyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function MethodologyCard({ scenarioNote, methodology }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "method",
        className: "glass section-anchor print-break p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-semibold text-[#0f241d]",
                        children: "情景说明与方法"
                    }, void 0, false, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge badge-neutral",
                        children: "估计性质 · 非预测"
                    }, void 0, false, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/MethodologyCard.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "glass-sub px-3.5 py-3 text-sm leading-6 text-[#43554c]",
                children: scenarioNote
            }, void 0, false, {
                fileName: "[project]/components/result/MethodologyCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "group mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "cursor-pointer select-none text-sm font-medium text-[#0e7c57]",
                        children: "查看方法与口径"
                    }, void 0, false, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-2 text-xs leading-6 text-[#43554c]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#0f241d]",
                                        children: "匹配分："
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    methodology.matchFormula
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/MethodologyCard.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#0f241d]",
                                        children: "技能优先级："
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    methodology.priorityRule
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/MethodologyCard.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#0f241d]",
                                        children: "学习时长："
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    methodology.durationRule
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/MethodologyCard.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/MethodologyCard.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#788b82]",
                        children: "来源清单"
                    }, void 0, false, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1.5",
                        children: methodology.sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs text-[#43554c]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge badge-neutral",
                                        children: source.usedFor
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    source.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: source.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "font-medium text-[#0e7c57] underline-offset-2 hover:underline",
                                        children: [
                                            source.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: " ↗"
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/MethodologyCard.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[#0f241d]",
                                        children: source.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tnum text-[#788b82]",
                                        children: source.date
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/MethodologyCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${source.name}-${source.date}-${source.usedFor}`, true, {
                                fileName: "[project]/components/result/MethodologyCard.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/result/MethodologyCard.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/MethodologyCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/MethodologyCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MethodologyCard;
var _c;
__turbopack_context__.k.register(_c, "MethodologyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/result/ReportSummary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportSummary",
    ()=>ReportSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ReportSummary({ metrics, topRole, conclusion }) {
    const tiles = [
        {
            label: '已识别技能',
            value: String(metrics.skillCount),
            unit: '项'
        },
        {
            label: '待补技能',
            value: String(metrics.gapCount),
            unit: '项'
        },
        {
            label: '最匹配方向',
            value: topRole ? topRole.title : '暂无',
            unit: topRole ? `${topRole.matchScore} 分` : '',
            small: true
        },
        {
            label: '学习总量',
            value: String(metrics.totalHours),
            unit: '小时'
        },
        {
            label: '预计周数',
            value: String(metrics.totalWeeks),
            unit: '周'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "summary",
        className: "glass section-anchor p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0e7c57]",
                                children: "Executive Summary"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ReportSummary.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 text-base font-semibold text-[#0f241d]",
                                children: "报告摘要"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ReportSummary.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ReportSummary.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "badge badge-neutral",
                        children: "仅用于演示 · 非预测"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ReportSummary.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ReportSummary.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
                children: tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-sub px-3.5 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-[#788b82]",
                                children: tile.label
                            }, void 0, false, {
                                fileName: "[project]/components/result/ReportSummary.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 font-semibold tracking-tight text-[#0f241d] tnum ${tile.small ? 'text-sm leading-6' : 'text-2xl'}`,
                                children: [
                                    tile.value,
                                    tile.unit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-[11px] font-normal text-[#788b82]",
                                        children: tile.unit
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ReportSummary.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ReportSummary.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tile.label, true, {
                        fileName: "[project]/components/result/ReportSummary.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/result/ReportSummary.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 rounded-xl border border-[rgba(14,124,87,0.16)] bg-[rgba(14,124,87,0.06)] px-3.5 py-2.5 text-sm leading-6 text-[#2b4a3d]",
                children: conclusion
            }, void 0, false, {
                fileName: "[project]/components/result/ReportSummary.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ReportSummary.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ReportSummary;
var _c;
__turbopack_context__.k.register(_c, "ReportSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/result/ResultDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultDashboard",
    ()=>ResultDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$MethodologyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/MethodologyCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ReportSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/ReportSummary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$SectionNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/SectionNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/result-insights.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SECTIONS = [
    {
        id: 'summary',
        label: '摘要'
    },
    {
        id: 'skills',
        label: '技能画像'
    },
    {
        id: 'tasks',
        label: '任务变化'
    },
    {
        id: 'roles',
        label: '岗位方向'
    },
    {
        id: 'gaps',
        label: '技能差距'
    },
    {
        id: 'plan',
        label: '学习计划'
    },
    {
        id: 'sdg',
        label: 'SDG'
    },
    {
        id: 'method',
        label: '方法与来源'
    }
];
function ResultDashboard({ result, weeklyStudyHours, toolbar }) {
    _s();
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrichResult"])(result, weeklyStudyHours);
    const [highRiskOnly, setHighRiskOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAllRoles, setShowAllRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const neededBySkill = new Map(view.gaps.map((gap)=>[
            gap.skill,
            gap.neededBy
        ]));
    const topRole = view.roles[0] ?? null;
    const firstGap = view.gaps.find((gap)=>gap.status === 'gap');
    const visibleTasks = highRiskOnly ? view.tasks.filter((task)=>task.changeType === 'automated') : view.tasks;
    const visibleRoles = showAllRoles ? view.roles : view.roles.slice(0, 3);
    const conclusion = `已识别 ${view.metrics.skillCount} 项技能，其中 ${view.metrics.strengthCount} 项可直接迁移；` + (firstGap ? `建议优先补齐「${firstGap.skill}」，` : '') + `按每周 ${weeklyStudyHours} 小时计算，全部学习步骤约需 ${view.metrics.totalWeeks} 周。`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:pt-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0e7c57]",
                                children: "AI 技能转型导航"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-1.5 text-2xl font-semibold tracking-tight text-[#0f241d] sm:text-3xl",
                                children: "转型建议报告"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm leading-6 text-[#43554c]",
                                children: "基于你提交的岗位、任务与学习投入生成的示例报告，所有分数与工时为估算值。"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-print flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge badge-neutral",
                                children: "示例数据"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>window.print(),
                                className: "rounded-full border border-[rgba(16,40,32,0.18)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#43554c] transition hover:border-[#0e7c57] hover:text-[#0e7c57]",
                                children: "打印 / 另存 PDF"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "rounded-full border border-[rgba(16,40,32,0.18)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[#43554c] transition hover:border-[#0e7c57] hover:text-[#0e7c57]",
                                children: "重新填写"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            toolbar,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$SectionNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionNav"], {
                sections: SECTIONS
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ReportSummary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportSummary"], {
                        metrics: view.metrics,
                        topRole: topRole,
                        conclusion: conclusion
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                        id: "skills",
                        title: "技能画像",
                        badge: `${view.skills.length} 项`,
                        children: [
                            view.categoryCounts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 space-y-2",
                                children: view.categoryCounts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-24 shrink-0 text-[11px] text-[#788b82]",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(16,40,32,0.07)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full bg-[#0e7c57]",
                                                    style: {
                                                        width: `${item.count / Math.max(1, view.skills.length) * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-8 shrink-0 text-right text-[11px] text-[#43554c] tnum",
                                                children: item.count
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.category, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 sm:grid-cols-2",
                                children: view.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-sub p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-[#0f241d]",
                                                        children: skill.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "badge badge-neutral",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_CATEGORY_LABEL"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classifySkillCategory"])(skill.name)]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1.5 text-xs leading-5 text-[#788b82]",
                                                children: skill.evidence
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[11px] text-[#788b82]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tnum font-semibold text-[#0e7c57]",
                                                        children: neededBySkill.get(skill.name) ?? 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    ' ',
                                                    "个推荐方向需要"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, skill.name, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                        id: "tasks",
                        title: "任务变化",
                        badge: `${view.tasks.length} 项任务`,
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setHighRiskOnly((prev)=>!prev),
                            "aria-pressed": highRiskOnly,
                            className: `no-print rounded-full border px-3 py-1 text-[11px] font-medium transition ${highRiskOnly ? 'border-[#b4482f] bg-[rgba(196,84,63,0.08)] text-[#b4482f]' : 'border-[rgba(16,40,32,0.18)] bg-white/60 text-[#43554c] hover:border-[#0e7c57]'}`,
                            children: "只看高风险"
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskDistribution, {
                                distribution: view.taskDistribution,
                                total: view.tasks.length
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-3",
                                children: [
                                    visibleTasks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "glass-sub print-break p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "lg:max-w-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-[#0f241d]",
                                                                        children: item.task
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `badge ${changeTone(item.changeType)}`,
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TASK_CHANGE_LABEL"][item.changeType]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: item.source.url,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "mt-1 inline-flex items-center gap-1 text-xs text-[#788b82] underline-offset-2 transition hover:text-[#0e7c57] hover:underline",
                                                                children: [
                                                                    item.source.name,
                                                                    " · ",
                                                                    item.source.date,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "aria-hidden": "true",
                                                                        children: "↗"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid w-full gap-3 sm:grid-cols-2 lg:max-w-md",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meter, {
                                                                label: "AI 影响",
                                                                value: item.aiImpact,
                                                                tone: "accent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meter, {
                                                                label: "人类判断",
                                                                value: item.humanJudgment,
                                                                tone: "gold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        }, item.task, false, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)),
                                    visibleTasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "glass-sub p-4 text-xs text-[#788b82]",
                                        children: "当前没有符合筛选条件的任务。"
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                        id: "roles",
                        title: "相邻岗位",
                        badge: `${view.roles.length} 个方向`,
                        action: view.roles.length > 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowAllRoles((prev)=>!prev),
                            "aria-expanded": showAllRoles,
                            className: "no-print rounded-full border border-[rgba(16,40,32,0.18)] bg-white/60 px-3 py-1 text-[11px] font-medium text-[#43554c] transition hover:border-[#0e7c57] hover:text-[#0e7c57]",
                            children: showAllRoles ? '收起' : `展开全部 ${view.roles.length} 个`
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this) : null,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                children: visibleRoles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleCard, {
                                        role: role
                                    }, role.title, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 214,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-[11px] leading-5 text-[#788b82]",
                                children: "匹配分 = 技能重合度 + 兴趣 / 经验 / 岗位方向的小幅调整，仅用于排序，不代表录用概率。"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                id: "gaps",
                                title: "技能差距",
                                badge: `${view.metrics.gapCount} 项待补`,
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 flex flex-wrap gap-2 text-[11px] text-[#788b82]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "待补",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-[#b4482f] tnum",
                                                        children: view.metrics.gapCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, this),
                                                    " 项"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "优势",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-[#0e7c57] tnum",
                                                        children: view.metrics.strengthCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 17
                                                    }, this),
                                                    ' ',
                                                    "项"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: view.gaps.map((gap)=>{
                                            const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIORITY_META"][gap.priority];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "glass-sub flex items-center justify-between gap-3 px-3 py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-0 items-center gap-2.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `status-dot ${gap.status === 'gap' ? 'status-gap' : 'status-strength'}`,
                                                                "aria-hidden": "true",
                                                                children: gap.status === 'gap' ? '↑' : '✔'
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "truncate text-sm font-medium text-[#0f241d]",
                                                                        children: gap.skill
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-[#788b82]",
                                                                        children: [
                                                                            gap.status === 'gap' ? '待补差距' : '现有优势',
                                                                            " ·",
                                                                            ' ',
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_CATEGORY_LABEL"][gap.category],
                                                                            " · 被",
                                                                            ' ',
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "tnum",
                                                                                children: gap.neededBy
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            " 个方向需要"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge badge-${gap.priority}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: meta.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this),
                                                            meta.label
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, gap.skill, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[11px] text-[#788b82]",
                                        children: [
                                            "按优先级从高到低排列，现有优势 ",
                                            view.metrics.strengthCount,
                                            " 项。"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                                id: "plan",
                                title: "学习计划",
                                badge: `合计 ${view.metrics.totalHours} 小时`,
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 grid grid-cols-3 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                                label: "总时长",
                                                value: `${view.metrics.totalHours} 小时`
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                                label: "预计周数",
                                                value: `${view.metrics.totalWeeks} 周`
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                                                label: "每周投入",
                                                value: `${weeklyStudyHours} 小时`
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: view.planGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#788b82]",
                                                        children: [
                                                            group.phase,
                                                            " · 第 ",
                                                            group.steps[0].weekStart,
                                                            "–",
                                                            group.steps[group.steps.length - 1].weekEnd,
                                                            " 周"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "space-y-2",
                                                        children: group.steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanRow, {
                                                                step: step,
                                                                index: index + 1
                                                            }, step.skillGap, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, group.phase, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionCard, {
                        id: "sdg",
                        title: "SDG 关联",
                        badge: `${view.sdgs.length} 项目标`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 md:grid-cols-3",
                            children: view.sdgs.map((link)=>{
                                const number = link.goal.match(/SDG\s*(\d+)/)?.[1] ?? '';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-sub p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[rgba(14,124,87,0.10)] text-[11px] font-bold text-[#0e7c57] tnum",
                                                    children: number || 'SDG'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-[#0f241d]",
                                                    children: link.goal
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs leading-6 text-[#43554c]",
                                            children: link.reason
                                        }, void 0, false, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, link.goal, true, {
                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$MethodologyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MethodologyCard"], {
                        scenarioNote: view.scenarioNote,
                        methodology: view.methodology
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ResultDashboard, "jNCRxuFAzKfvSCCZv6mkPAhwQho=");
_c = ResultDashboard;
/* =========================================================
 * 子组件
 * ======================================================= */ function SectionCard({ id, title, badge, action, children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `glass section-anchor print-break p-5 sm:p-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-semibold text-[#0f241d]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 367,
                                columnNumber: 11
                            }, this),
                            badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge badge-neutral",
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 368,
                                columnNumber: 20
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, this),
                    action
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
_c1 = SectionCard;
function TaskDistribution({ distribution, total }) {
    const rows = [
        {
            key: 'automated',
            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TASK_CHANGE_LABEL"].automated,
            color: '#b4482f'
        },
        {
            key: 'augmented',
            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TASK_CHANGE_LABEL"].augmented,
            color: '#a98545'
        },
        {
            key: 'unchanged',
            label: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TASK_CHANGE_LABEL"].unchanged,
            color: '#0e7c57'
        }
    ];
    const safeTotal = Math.max(1, total);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-2.5 overflow-hidden rounded-full bg-[rgba(16,40,32,0.07)]",
                children: rows.map((row)=>{
                    const value = distribution[row.key];
                    if (value === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: `${value / safeTotal * 100}%`,
                            backgroundColor: row.color
                        },
                        "aria-hidden": "true"
                    }, row.key, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 399,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#788b82]",
                children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block h-2 w-2 rounded-full",
                                style: {
                                    backgroundColor: row.color
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            row.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tnum font-semibold text-[#43554c]",
                                children: distribution[row.key]
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 416,
                                columnNumber: 13
                            }, this)
                        ]
                    }, row.key, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 393,
        columnNumber: 5
    }, this);
}
_c2 = TaskDistribution;
function RoleCard({ role }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "glass-sub flex flex-col p-4 transition hover:shadow-[0_10px_24px_rgba(16,40,32,0.08)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-semibold leading-5 text-[#0f241d]",
                        children: role.title
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "shrink-0 text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-2xl font-semibold tracking-tight text-[#0f241d] tnum",
                                children: role.matchScore
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-[10px] text-[#788b82]",
                                children: "匹配分"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 429,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(16,40,32,0.07)]",
                role: "progressbar",
                "aria-label": `${role.title} 匹配分`,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": role.matchScore,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-[#0e7c57]",
                    style: {
                        width: `${role.matchScore}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[11px] text-[#788b82]",
                children: [
                    "技能命中",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tnum font-semibold text-[#43554c]",
                        children: [
                            role.matchedSkills.length,
                            "/",
                            role.requiredCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "· 待补 ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tnum",
                        children: role.missingSkills.length
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 453,
                        columnNumber: 14
                    }, this),
                    " 项 · 兴趣命中",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tnum",
                        children: role.interestHitCount
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-3 space-y-1.5",
                children: role.reasons.slice(0, 4).map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2 text-xs leading-5 text-[#43554c]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9fb3a8]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: reason
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this)
                        ]
                    }, reason, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 space-y-2 border-t border-[rgba(16,40,32,0.08)] pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillChips, {
                        label: "已匹配技能",
                        items: role.matchedSkills,
                        tone: "matched"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillChips, {
                        label: "待补技能",
                        items: role.missingSkills,
                        tone: "missing"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
_c3 = RoleCard;
function SkillChips({ label, items, tone }) {
    const chipClass = tone === 'matched' ? 'border-[rgba(14,124,87,0.25)] bg-[rgba(14,124,87,0.07)] text-[#0e7c57]' : 'border-[rgba(196,84,63,0.25)] bg-[rgba(196,84,63,0.06)] text-[#b4482f]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-medium uppercase tracking-[0.1em] text-[#788b82]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 flex flex-wrap gap-1.5",
                children: items.length > 0 ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `rounded-md border px-2 py-0.5 text-[11px] font-medium ${chipClass}`,
                        children: item
                    }, item, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 494,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] text-[#788b82]",
                    children: "暂无"
                }, void 0, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 502,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, this);
}
_c4 = SkillChips;
function PlanRow({ step, index }) {
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseResource"])(step.resource);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "glass-sub flex gap-3 px-3.5 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0e7c57] text-[11px] font-semibold text-white tnum",
                children: index
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 514,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium leading-5 text-[#0f241d]",
                        children: [
                            "补足 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: step.skillGap
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 519,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-[11px] font-normal text-[#788b82] tnum",
                                children: [
                                    "第 ",
                                    step.weekStart,
                                    "–",
                                    step.weekEnd,
                                    " 周 · ",
                                    step.estimatedHours,
                                    " 小时"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#788b82]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: step.resource.url,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "font-medium text-[#0e7c57] underline-offset-2 hover:underline",
                                children: [
                                    resource.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: " ↗"
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this),
                            resource.provider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "· ",
                                    resource.provider
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 534,
                                columnNumber: 32
                            }, this) : null,
                            resource.publishedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tnum",
                                children: [
                                    "· ",
                                    resource.publishedAt
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 535,
                                columnNumber: 35
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
_c5 = PlanRow;
function MiniStat({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-sub px-2.5 py-2 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-[#788b82]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-[#0f241d] tnum",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
_c6 = MiniStat;
function Meter({ label, value, tone }) {
    const safeValue = Math.min(100, Math.max(0, value));
    const color = tone === 'accent' ? '#0e7c57' : '#a98545';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[#788b82]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-[#0f241d] tnum",
                        children: [
                            safeValue,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-[rgba(16,40,32,0.07)]",
                role: "progressbar",
                "aria-label": label,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": safeValue,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full",
                    style: {
                        width: `${safeValue}%`,
                        backgroundColor: color
                    }
                }, void 0, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 556,
        columnNumber: 5
    }, this);
}
_c7 = Meter;
function changeTone(type) {
    if (type === 'automated') return 'badge-high';
    if (type === 'augmented') return 'badge-medium';
    return 'badge-low';
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ResultDashboard");
__turbopack_context__.k.register(_c1, "SectionCard");
__turbopack_context__.k.register(_c2, "TaskDistribution");
__turbopack_context__.k.register(_c3, "RoleCard");
__turbopack_context__.k.register(_c4, "SkillChips");
__turbopack_context__.k.register(_c5, "PlanRow");
__turbopack_context__.k.register(_c6, "MiniStat");
__turbopack_context__.k.register(_c7, "Meter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/result/ScenarioSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScenarioSwitcher",
    ()=>ScenarioSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
const scenarioLabels = {
    slow: 'AI 变化较缓',
    fast: 'AI 变化较快'
};
const scenarioOptions = [
    'slow',
    'fast'
];
function ScenarioSwitcher({ currentScenario, isSwitching, pendingScenario, error, changeNote, saveWarning, legacy, onSelect, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "情景切换",
        className: "glass no-print mt-5 p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[#0f241d]",
                                children: "情景"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-xs leading-5 text-[#788b82]",
                                children: "切换后会重新分析岗位顺序与学习优先级，原结果保留到新结果返回。"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "选择情景",
                                className: "inline-flex rounded-full border border-[rgba(16,40,32,0.10)] bg-[rgba(16,40,32,0.05)] p-1",
                                children: scenarioOptions.map((option)=>{
                                    const selected = currentScenario === option;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSelect(option),
                                        disabled: isSwitching || legacy,
                                        "aria-pressed": selected,
                                        "aria-label": scenarioLabels[option],
                                        title: scenarioLabels[option],
                                        className: `min-w-14 rounded-full px-4 py-1.5 text-sm font-medium transition ${selected ? 'bg-white text-[#0f241d] shadow-[0_2px_8px_rgba(16,40,32,0.10)]' : 'text-[#788b82] hover:text-[#0f241d]'} disabled:cursor-not-allowed disabled:opacity-60`,
                                        children: option === 'slow' ? '缓' : '快'
                                    }, option, false, {
                                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#788b82]",
                                children: currentScenario ? `当前：${scenarioLabels[currentScenario]}` : '当前情景未知'
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            isSwitching && pendingScenario ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                className: "mt-3 flex items-center gap-2 rounded-xl border border-[rgba(14,124,87,0.20)] bg-[rgba(14,124,87,0.07)] px-3 py-2.5 text-sm text-[#0e7c57]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgba(14,124,87,0.25)] border-t-[#0e7c57]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    "正在按「",
                    scenarioLabels[pendingScenario],
                    "」重新分析你的档案…"
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "mt-3 rounded-xl border border-[rgba(196,84,63,0.28)] bg-[rgba(196,84,63,0.06)] p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[#b4482f]",
                        children: [
                            "切换到「",
                            scenarioLabels[error.target],
                            "」失败"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs leading-5 text-[#8f4536]",
                        children: error.message
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    error.details.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 list-disc space-y-0.5 pl-5 text-xs text-[#8f4536]",
                        children: error.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: detail
                            }, detail, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 112,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        disabled: isSwitching,
                        className: "mt-3 rounded-full border border-[rgba(196,84,63,0.35)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[#b4482f] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60",
                        children: "重试"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this) : null,
            changeNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                "aria-live": "polite",
                className: "mt-3 rounded-xl border border-[rgba(14,124,87,0.20)] bg-[rgba(14,124,87,0.06)] px-3 py-2 text-sm leading-6 text-[#0e7c57]",
                children: changeNote
            }, void 0, false, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this) : null,
            saveWarning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[#a98545]",
                children: saveWarning
            }, void 0, false, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 137,
                columnNumber: 22
            }, this) : null,
            legacy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 rounded-xl border border-[rgba(16,40,32,0.10)] bg-white/60 px-3 py-2 text-xs leading-5 text-[#43554c]",
                children: [
                    "此结果来自旧版本，未保存原始档案，暂时无法切换情景。",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "ml-1 font-medium text-[#0e7c57] underline-offset-2 hover:underline",
                        children: "重新填写"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = ScenarioSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ScenarioSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/result/SectionNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionNav",
    ()=>SectionNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SectionNav({ sections }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sections[0]?.id ?? '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionNav.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "SectionNav.useEffect": (entries)=>{
                    const visible = entries.filter({
                        "SectionNav.useEffect.visible": (entry)=>entry.isIntersecting
                    }["SectionNav.useEffect.visible"]).sort({
                        "SectionNav.useEffect.visible": (a, b)=>a.boundingClientRect.top - b.boundingClientRect.top
                    }["SectionNav.useEffect.visible"]);
                    if (visible[0]) {
                        setActive(visible[0].target.id);
                    }
                }
            }["SectionNav.useEffect"], {
                rootMargin: '-96px 0px -60% 0px',
                threshold: [
                    0,
                    1
                ]
            });
            sections.forEach({
                "SectionNav.useEffect": (section)=>{
                    const el = document.getElementById(section.id);
                    if (el) observer.observe(el);
                }
            }["SectionNav.useEffect"]);
            return ({
                "SectionNav.useEffect": ()=>observer.disconnect()
            })["SectionNav.useEffect"];
        }
    }["SectionNav.useEffect"], [
        sections
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "报告分区",
        className: "no-print sticky top-3 z-20 mt-4 flex gap-1.5 overflow-x-auto rounded-full border border-white/70 bg-white/65 px-2 py-1.5 shadow-[0_10px_26px_rgba(16,40,32,0.08)] backdrop-blur-md",
        children: sections.map((section)=>{
            const isActive = active === section.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `#${section.id}`,
                "aria-current": isActive ? 'true' : undefined,
                className: `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${isActive ? 'bg-[#0e7c57] text-white' : 'text-[#43554c] hover:bg-white hover:text-[#0f241d]'}`,
                children: section.label
            }, section.id, false, {
                fileName: "[project]/components/result/SectionNav.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/result/SectionNav.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(SectionNav, "dAe/DKC5nK7OWl66cMxkvN7eZ9o=");
_c = SectionNav;
var _c;
__turbopack_context__.k.register(_c, "SectionNav");
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
"[project]/lib/result-insights.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    return typeof candidate.currentRole === 'string' && candidate.currentRole.trim() !== '' && Array.isArray(candidate.dailyTasks) && candidate.dailyTasks.length > 0 && candidate.dailyTasks.every((item)=>typeof item === 'string') && Array.isArray(candidate.existingSkills) && candidate.existingSkills.every((item)=>typeof item === 'string') && typeof candidate.experienceYears === 'number' && Number.isFinite(candidate.experienceYears) && Array.isArray(candidate.interests) && candidate.interests.every((item)=>typeof item === 'string') && typeof candidate.weeklyStudyHours === 'number' && Number.isFinite(candidate.weeklyStudyHours) && candidate.weeklyStudyHours > 0 && (candidate.scenario === 'slow' || candidate.scenario === 'fast');
}
function isAnalyzeResponse(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const candidate = value;
    return Array.isArray(candidate.extractedSkills) && Array.isArray(candidate.taskChanges) && Array.isArray(candidate.recommendedRoles) && Array.isArray(candidate.skillGaps) && Array.isArray(candidate.learningPlan) && Array.isArray(candidate.sdgLinks) && typeof candidate.scenarioNote === 'string';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1dsf8z7bs94ed._.js.map