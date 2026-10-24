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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ResultDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/ResultDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ScenarioSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/result/ScenarioSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/site/SiteHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analyze-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/terms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
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
;
;
;
function ResultPageClient() {
    _s();
    const { t, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const switchingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trendSnapshot, setTrendSnapshot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trendLoadFailed, setTrendLoadFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingScenario, setPendingScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [switchError, setSwitchError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failedScenario, setFailedScenario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastSwitch, setLastSwitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [saveWarning, setSaveWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultPageClient.useEffect": ()=>{
            const savedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAnalysisSession"])();
            setSession(savedSession);
            if (savedSession && !savedSession.result.trendSnapshot) {
                void fetch('/api/trends').then({
                    "ResultPageClient.useEffect": async (response)=>{
                        if (!response.ok) {
                            throw new Error(`Trend request failed with status ${response.status}`);
                        }
                        const data = await response.json();
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWorkforceTrendSnapshot"])(data)) {
                            throw new Error('Trend response did not match the expected schema');
                        }
                        setTrendSnapshot(data);
                    }
                }["ResultPageClient.useEffect"]).catch({
                    "ResultPageClient.useEffect": (error)=>{
                        console.error('[result] Could not load workforce trends.', error);
                        setTrendLoadFailed(true);
                    }
                }["ResultPageClient.useEffect"]);
            }
            setIsLoading(false);
        }
    }["ResultPageClient.useEffect"], []);
    // 提示文案按当前语言即时重建，切换语言后不会停留在旧语言
    const changeNote = lastSwitch ? buildChangeNote(lastSwitch.previous, lastSwitch.next, lastSwitch.scenario, t, lang) : null;
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
        setLastSwitch(null);
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
            setLastSwitch({
                previous: previousSession.result,
                next: mergedResult,
                scenario: nextScenario
            });
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAnalysisSession"])(nextSession);
            } catch  {
                setSaveWarning(t.result.scenario.saveWarning);
            }
        } catch (error) {
            const message = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analyze$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnalysisRequestError"] ? error.message : t.survey.errors.requestFailed;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                    fileName: "[project]/app/result/ResultPageClient.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto w-full max-w-3xl px-4 py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto h-5 w-5 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.2)] border-t-[color:var(--accent)]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-[color:var(--ink-muted)]",
                                role: "status",
                                "aria-live": "polite",
                                children: t.result.loading
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/result/ResultPageClient.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/result/ResultPageClient.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                    fileName: "[project]/app/result/ResultPageClient.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "mx-auto w-full max-w-3xl px-4 py-16 sm:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glass p-8 text-center sm:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-[color:var(--accent)]",
                                children: t.meta.appName
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink)]",
                                children: t.result.empty.title
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-body)]",
                                children: t.result.empty.desc
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/survey",
                                className: "mt-6 inline-flex rounded-lg bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.26)] transition hover:bg-[color:var(--accent-strong)]",
                                children: t.result.empty.cta
                            }, void 0, false, {
                                fileName: "[project]/app/result/ResultPageClient.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/result/ResultPageClient.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/result/ResultPageClient.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/result/ResultPageClient.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$site$2f$SiteHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteHeader"], {}, void 0, false, {
                fileName: "[project]/app/result/ResultPageClient.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$result$2f$ResultDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResultDashboard"], {
                result: session.result,
                trendSnapshot: trendSnapshot,
                trendLoadFailed: trendLoadFailed,
                weeklyStudyHours: session.input?.weeklyStudyHours ?? 8,
                scenario: session.input?.scenario ?? null,
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
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/result/ResultPageClient.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/result/ResultPageClient.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
_s(ResultPageClient, "ZCftuSMoFK+oKKlOdVavSS+t1nA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
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
function buildChangeNote(previous, next, scenario, t, lang) {
    const tr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$terms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTranslator"])(lang);
    const copy = t.result.change;
    const rolesChanged = previous.recommendedRoles.map((role)=>role.title).join('|') !== next.recommendedRoles.map((role)=>role.title).join('|');
    const planChanged = previous.learningPlan.map((step)=>step.skillGap).join('|') !== next.learningPlan.map((step)=>step.skillGap).join('|');
    let summary;
    if (rolesChanged && planChanged) {
        summary = copy.rolesAndPlan;
    } else if (rolesChanged) {
        summary = copy.rolesOnly;
    } else if (planChanged) {
        summary = copy.planOnly;
    } else {
        summary = copy.none;
    }
    const topRole = next.recommendedRoles[0]?.title;
    const firstStep = next.learningPlan[0]?.skillGap;
    const details = [
        topRole ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.topRole, {
            name: tr.term('role', topRole)
        }) : '',
        firstStep ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.firstStep, {
            name: tr.term('skill', firstStep)
        }) : ''
    ].filter(Boolean).join(lang === 'en' ? '; ' : '；');
    const label = scenario === 'fast' ? t.result.scenario.fast : t.result.scenario.slow;
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.scenarioLabel, {
        name: label
    })}${summary}${details ? lang === 'en' ? ` ${details}. ` : `${details}。` : ''}${copy.keepSources}`;
}
var _c;
__turbopack_context__.k.register(_c, "ResultPageClient");
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
"[project]/components/result/ResultDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultDashboard",
    ()=>ResultDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/result-insights.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PRIORITY_TONE = {
    high: 'border-l-[color:var(--coral)]',
    medium: 'border-l-[color:var(--amber)]',
    low: 'border-l-[#94a3b8]'
};
const CHANGE_TONE = {
    automated: 'badge-high',
    augmented: 'badge-medium',
    unchanged: 'badge-low'
};
function ResultDashboard({ result, trendSnapshot, trendLoadFailed = false, weeklyStudyHours, scenario, toolbar }) {
    _s();
    const { t, tr, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enrichResult"])(result, weeklyStudyHours);
    const g = t.result.gaps;
    const trends = result.trendSnapshot ?? trendSnapshot;
    const scenarioName = scenario === 'slow' ? t.result.scenario.slow : scenario === 'fast' ? t.result.scenario.fast : null;
    const scenarioNote = lang === 'en' && scenarioName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.note.scenario, {
        name: scenarioName,
        perWeek: weeklyStudyHours,
        weeks: view.metrics.totalWeeks
    }) : view.scenarioNote;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto w-full max-w-6xl px-4 pb-16 pt-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]",
                                children: t.meta.appName
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-1.5 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-[1.75rem]",
                                children: t.result.title
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-sm leading-6 text-[color:var(--ink-body)]",
                                children: t.result.lead
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "no-print flex flex-wrap items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge badge-neutral",
                                children: trends ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.trends.badge, {
                                    version: trends.version
                                }) : t.result.sampleBadge
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/survey",
                                className: "rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                children: t.result.rerun
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>window.print(),
                                className: "rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                children: t.meta.print
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            toolbar,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: t.result.sections.skills,
                        badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.skills.count, {
                            n: view.skills.length
                        }),
                        children: view.skills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-[color:var(--ink-muted)]",
                            children: t.result.gaps.empty
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid gap-x-6 gap-y-2.5 sm:grid-cols-2",
                            children: view.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-2)]",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] font-medium text-[color:var(--ink)]",
                                                    children: tr.term('skill', skill.name)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-0.5 text-[11px] leading-5 text-[color:var(--ink-muted)]",
                                                    children: formatEvidence(skill.evidence, lang)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SdgContributions, {
                                                    links: skill.sdgLinks ?? [],
                                                    label: t.result.sdg.skillContribution,
                                                    compact: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, skill.name, true, {
                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: t.result.sections.tasks,
                        badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.tasks.count, {
                            n: view.tasks.length
                        }),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid gap-3 lg:grid-cols-2",
                            children: [
                                view.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskRow, {
                                        task: task
                                    }, task.task, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)),
                                view.tasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-xs text-[color:var(--ink-muted)]",
                                    children: t.result.tasks.empty
                                }, void 0, false, {
                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: t.result.sections.roles,
                        badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.roles.count, {
                            n: view.roles.length
                        }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3",
                                children: view.roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoleCard, {
                                        role: role
                                    }, role.title, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[11px] leading-5 text-[color:var(--ink-muted)]",
                                children: t.result.roles.scoreNote
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: t.result.sections.gaps,
                                badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(g.count, {
                                    n: view.metrics.gapCount
                                }),
                                children: [
                                    view.gaps.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[color:var(--ink-muted)]",
                                        children: g.empty
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: view.gaps.map((gap)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GapRow, {
                                                gap: gap
                                            }, gap.skill, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[11px] text-[color:var(--ink-muted)]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(g.sortNote, {
                                            n: view.metrics.strengthCount
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: t.result.sections.plan,
                                badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.hours, {
                                    n: view.metrics.totalHours
                                }),
                                children: [
                                    view.plan.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[color:var(--ink-muted)]",
                                        children: t.result.plan.empty
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "space-y-2",
                                        children: view.plan.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanRow, {
                                                step: step,
                                                index: index + 1
                                            }, `${step.skillGap}-${index}`, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[11px] text-[color:var(--ink-muted)]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.totals, {
                                            hours: view.metrics.totalHours,
                                            perWeek: weeklyStudyHours,
                                            weeks: view.metrics.totalWeeks
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                        title: t.result.sections.trends,
                        badge: trends?.version,
                        children: trends ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkforceTrends, {
                            snapshot: trends,
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-5 text-[color:var(--ink-muted)]",
                            role: "status",
                            children: trendLoadFailed ? t.result.trends.loadFailure : t.result.trends.loading
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: t.result.sections.sdg,
                                badge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.sdg.count, {
                                    n: view.sdgs.length
                                }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: view.sdgs.map((link)=>{
                                        const number = link.goal.match(/SDG\s*(\d+)/)?.[1] ?? 'SDG';
                                        const goal = tr.term('sdg', link.goal);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-center gap-2 text-[13px] font-semibold text-[color:var(--accent)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[rgba(6,182,212,0.14)] text-[10px] font-bold text-[color:var(--accent-strong)] tnum",
                                                            children: number
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 23
                                                        }, this),
                                                        goal.replace(/^SDG\s*\d+\s*/, '')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 pl-8 text-[11px] leading-5 text-[color:var(--ink-body)]",
                                                    children: tr.term('sdgReason', link.goal)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, link.goal, true, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                title: t.result.sections.note,
                                badge: t.result.note.estimateLabel,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "rounded-xl border border-[rgba(37,99,235,0.16)] bg-[rgba(37,99,235,0.05)] px-3 py-2.5 text-[12px] leading-6 text-[color:var(--ink-body)]",
                                        children: scenarioNote
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                        className: "group mt-3 rounded-xl border border-[color:var(--line-soft)] bg-white/60 px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                className: "cursor-pointer list-none text-[11px] font-semibold text-[color:var(--ink-body)] transition hover:text-[color:var(--accent)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "transition group-open:rotate-90",
                                                            "aria-hidden": "true",
                                                            children: "▸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 19
                                                        }, this),
                                                        t.result.note.methodologyLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1.5 text-[11px] leading-5 text-[color:var(--ink-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: lang === 'en' ? t.result.note.matchFormula : view.methodology.matchFormula
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: lang === 'en' ? t.result.note.priorityRule : view.methodology.priorityRule
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: lang === 'en' ? t.result.note.durationRule : view.methodology.durationRule
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, this),
                                            view.methodology.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1 border-t border-[color:var(--line-soft)] pt-2 text-[11px]",
                                                children: view.methodology.sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex flex-wrap gap-1",
                                                        children: [
                                                            source.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: source.url,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-[color:var(--accent)] underline-offset-2 hover:underline",
                                                                children: tr.term('source', source.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[color:var(--ink-body)]",
                                                                children: tr.term('source', source.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[color:var(--ink-muted)]",
                                                                children: [
                                                                    "· ",
                                                                    source.date,
                                                                    " · ",
                                                                    tr.term('usedFor', source.usedFor)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 288,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, `${source.name}-${source.date}`, true, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(ResultDashboard, "3BmNrpvnFwcMs+ZuK+PSay7GOIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = ResultDashboard;
/* =========================================================
 * 子组件
 * ======================================================= */ function WorkforceTrends({ snapshot, lang }) {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const copy = t.result.trends;
    const percent = new Intl.NumberFormat(lang === 'en' ? 'en-MY' : 'zh-CN', {
        style: 'percent',
        maximumFractionDigits: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-x-4 gap-y-1 text-[11px] leading-5 text-[color:var(--ink-muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.scope, {
                            country: snapshot.country,
                            family: snapshot.jobFamily,
                            population: snapshot.targetPopulation
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.periods, {
                            current: snapshot.currentPeriod,
                            previous: snapshot.previousPeriod
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.updated, {
                            date: snapshot.lastUpdated
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.sourceMethod, {
                            source: snapshot.sourceFamily
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid gap-3 lg:grid-cols-2",
                children: snapshot.paths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "glass-sub p-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[13px] font-semibold text-[color:var(--ink)]",
                                                children: lang === 'en' ? path.toRoleEn : path.toRoleZh
                                            }, void 0, false, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[10px] text-[color:var(--ink-muted)]",
                                                children: [
                                                    lang === 'en' ? path.fromRoleEn : path.fromRoleZh,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mx-1",
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 19
                                                    }, this),
                                                    lang === 'en' ? path.toRoleEn : path.toRoleZh
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge badge-neutral",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.samplePair, {
                                            current: path.currentSampleSize,
                                            previous: path.previousSampleSize
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[11px] font-medium text-[color:var(--accent)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(copy.pathScore, {
                                    score: path.transitionFitScore,
                                    change: `${path.scoreChange > 0 ? '+' : ''}${path.scoreChange}`
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[10px] leading-5 text-[color:var(--ink-muted)]",
                                children: copy.pathScoreNote
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 373,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full min-w-[520px] border-collapse text-left text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-[color:var(--line-soft)] text-[color:var(--ink-muted)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5 pr-2 font-medium",
                                                        children: copy.skill
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-1.5 font-medium",
                                                        children: copy.currentRate
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-1.5 font-medium",
                                                        children: copy.previousRate
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-1.5 font-medium",
                                                        children: copy.change
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/result/ResultDashboard.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: path.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-[color:var(--line-soft)] last:border-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-1.5 pr-2 text-[color:var(--ink)]",
                                                            children: lang === 'en' ? skill.skillNameEn : skill.skillNameZh
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1.5 text-[color:var(--ink-body)]",
                                                            children: percent.format(skill.currentRate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1.5 text-[color:var(--ink-body)]",
                                                            children: percent.format(skill.previousRate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-1.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: skill.changePp > 0 ? 'text-[color:var(--green)]' : skill.changePp < 0 ? 'text-[color:var(--coral)]' : 'text-[color:var(--ink-muted)]',
                                                                children: [
                                                                    formatPercentagePoints(skill.changePp, lang),
                                                                    " ·",
                                                                    ' ',
                                                                    getTrendLabel(copy, skill.trend)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, skill.skillId, true, {
                                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/result/ResultDashboard.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/result/ResultDashboard.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, path.trackId, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 rounded-xl border border-[rgba(220,75,62,0.16)] bg-[rgba(220,75,62,0.04)] px-3 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold text-[color:var(--ink)]",
                        children: copy.limitations
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[11px] leading-5 text-[color:var(--ink-body)]",
                        children: copy.sampleWarning
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 322,
        columnNumber: 5
    }, this);
}
_s1(WorkforceTrends, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c1 = WorkforceTrends;
function getTrendLabel(copy, trend) {
    switch(trend){
        case 'up':
            return copy.up;
        case 'down':
            return copy.down;
        case 'changing':
            return copy.changing;
        default:
            return copy.insufficient;
    }
}
function formatPercentagePoints(value, lang) {
    return `${value > 0 ? '+' : ''}${value}${lang === 'en' ? 'pp' : ' 个百分点'}`;
}
function Section({ title, badge, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "glass print-break p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3.5 flex flex-wrap items-center justify-between gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[15px] font-semibold text-[color:var(--ink)]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge badge-neutral",
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 466,
                            columnNumber: 20
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 462,
        columnNumber: 5
    }, this);
}
_c2 = Section;
function TaskRow({ task }) {
    _s2();
    const { t, tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const labels = t.result.tasks;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "glass-sub p-3.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-medium text-[color:var(--ink)]",
                        children: task.task
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `badge ${CHANGE_TONE[task.changeType]}`,
                        children: labels[task.changeType]
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 480,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: task.source.url,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-1 inline-flex items-center gap-1 text-[11px] text-[color:var(--ink-muted)] underline-offset-2 transition hover:text-[color:var(--accent)] hover:underline",
                children: [
                    tr.term('source', task.source.name),
                    " · ",
                    task.source.date,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2.5 space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meter, {
                        label: labels.aiImpact,
                        value: task.aiImpact,
                        color: "var(--accent)"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meter, {
                        label: labels.humanJudgment,
                        value: task.humanJudgment,
                        color: "var(--amber)"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 479,
        columnNumber: 5
    }, this);
}
_s2(TaskRow, "trnuqiKMTMwl7r2N+Nfy7i8Xrz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c3 = TaskRow;
function Meter({ label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-[60px] shrink-0 text-[11px] text-[color:var(--ink-muted)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(15,42,74,0.08)]",
                role: "progressbar",
                "aria-label": label,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": value,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full",
                    style: {
                        width: `${value}%`,
                        backgroundColor: color
                    }
                }, void 0, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-8 shrink-0 text-right text-[11px] font-semibold text-[color:var(--ink-body)] tnum",
                children: [
                    value,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 504,
        columnNumber: 5
    }, this);
}
_c4 = Meter;
function RoleCard({ role }) {
    _s3();
    const { t, tr, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const r = t.result.roles;
    const matched = tr.terms('skill', role.matchedSkills);
    const missing = tr.terms('skill', role.missingSkills);
    const lines = [];
    lines.push(role.matchedSkills.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(r.coreHit, {
        hit: role.matchedSkills.length,
        total: role.requiredCount,
        skills: tr.join(matched)
    }) : r.coreHitNone);
    lines.push(role.interestMatches?.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(r.interestHit, {
        skills: tr.join(tr.terms('interest', role.interestMatches))
    }) : r.interestNone);
    lines.push(role.missingSkills.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(r.fillGap, {
        skills: tr.join(missing)
    }) : r.noGap);
    const experience = parseExperienceReason(role.reasons);
    if (experience) {
        const fit = experience.fit;
        lines.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(r.experience[fit], {
            years: experience.years,
            ideal: experience.ideal
        }) + (experience.roleName ? ` ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(r.experience.roleSuffix, {
            name: experience.roleName
        })}` : ''));
    }
    const basis = parseBasis(role.reasons);
    const extras = role.reasons.filter((reason)=>!isStructuredReason(reason));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "glass-sub flex h-full flex-col p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[13px] font-semibold leading-5 text-[color:var(--ink)]",
                        children: tr.term('role', role.title)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "shrink-0 text-right leading-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-semibold tracking-tight text-[color:var(--accent)] tnum",
                                children: role.matchScore
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-[10px] text-[color:var(--ink-muted)]",
                                children: r.score
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 563,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(15,42,74,0.08)]",
                role: "progressbar",
                "aria-label": tr.term('role', role.title),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": role.matchScore,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-[linear-gradient(90deg,var(--accent-2),var(--accent))]",
                    style: {
                        width: `${role.matchScore}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 583,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-2.5 space-y-1",
                children: [
                    lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-[11px] leading-5 text-[color:var(--ink-body)]",
                            children: line
                        }, line, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this)),
                    extras.map((reason)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-[11px] leading-5 text-[color:var(--ink-body)]",
                            children: reason
                        }, reason, false, {
                            fileName: "[project]/components/result/ResultDashboard.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this)),
                    basis ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-[11px] leading-5 text-[color:var(--ink-muted)]",
                        children: [
                            r.basis,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: basis.url || undefined,
                                target: basis.url ? '_blank' : undefined,
                                rel: basis.url ? 'noreferrer' : undefined,
                                className: "underline-offset-2 hover:underline",
                                children: [
                                    tr.term('source', basis.name),
                                    lang === 'en' ? ` (${basis.date})` : `（${basis.date}）`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 603,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 601,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SdgContributions, {
                links: role.sdgLinks ?? [],
                label: t.result.sdg.roleContribution
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 616,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto space-y-1.5 border-t border-[color:var(--line-soft)] pt-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipRow, {
                        title: r.matchedTitle,
                        items: matched,
                        tone: "matched"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChipRow, {
                        title: r.missingTitle,
                        items: missing,
                        tone: "missing"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_s3(RoleCard, "3BmNrpvnFwcMs+ZuK+PSay7GOIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c5 = RoleCard;
function ChipRow({ title, items, tone }) {
    _s4();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const palette = tone === 'matched' ? 'border-[rgba(37,99,235,0.22)] bg-[rgba(37,99,235,0.08)] text-[color:var(--accent-strong)]' : 'border-[rgba(220,75,62,0.22)] bg-[rgba(220,75,62,0.07)] text-[color:var(--coral)]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-medium text-[color:var(--ink-muted)]",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this),
            items.length > 0 ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `rounded-full border px-2 py-0.5 text-[10px] ${palette}`,
                    children: item
                }, item, false, {
                    fileName: "[project]/components/result/ResultDashboard.tsx",
                    lineNumber: 649,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-[color:var(--ink-muted)]",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 654,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: t.result.sections.roles
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 645,
        columnNumber: 5
    }, this);
}
_s4(ChipRow, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c6 = ChipRow;
function GapRow({ gap }) {
    _s5();
    const { t, tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const g = t.result.gaps;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: `flex items-center justify-between gap-2 rounded-xl border border-[color:var(--line-soft)] border-l-[3px] bg-white/70 px-3 py-2 ${gap.status === 'gap' ? PRIORITY_TONE[gap.priority] : 'border-l-[color:var(--green)]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate text-[13px] font-medium text-[color:var(--ink)]",
                        children: tr.term('skill', gap.skill)
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-[color:var(--ink-muted)]",
                        children: [
                            gap.status === 'gap' ? g.gap : g.strength,
                            typeof gap.neededBy === 'number' ? ` · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.skills.neededBy, {
                                n: gap.neededBy
                            })}` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 675,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SdgContributions, {
                        links: gap.sdgLinks ?? [],
                        label: t.result.sdg.skillContribution,
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `badge badge-${gap.priority}`,
                children: g[gap.priority]
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 685,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 666,
        columnNumber: 5
    }, this);
}
_s5(GapRow, "trnuqiKMTMwl7r2N+Nfy7i8Xrz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c7 = GapRow;
function SdgContributions({ links, label, compact = false }) {
    _s6();
    const { t, tr, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    if (links.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${compact ? 'mt-1' : 'mt-2.5 rounded-lg bg-white/55 p-2.5'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold text-[color:var(--accent-strong)]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 707,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: compact ? 'mt-0.5 space-y-0.5' : 'mt-1.5 space-y-1.5',
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-[10px] leading-4 text-[color:var(--ink-body)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-[color:var(--accent)]",
                                children: tr.term('sdg', link.goal)
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 711,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    " · ",
                                    lang === 'en' && link.reasonEn ? link.reasonEn : link.reason
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 712,
                                columnNumber: 13
                            }, this)
                        ]
                    }, `${link.goal}-${link.reason}`, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 710,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 708,
                columnNumber: 7
            }, this),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-[10px] leading-4 text-[color:var(--ink-muted)]",
                children: t.result.sdg.contributionNote
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 717,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 706,
        columnNumber: 5
    }, this);
}
_s6(SdgContributions, "3BmNrpvnFwcMs+ZuK+PSay7GOIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c8 = SdgContributions;
function PlanRow({ step, index }) {
    _s7();
    const { t, tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$result$2d$insights$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseResource"])(step.resource);
    const resourceTitle = tr.term('resource', resource.title);
    const provider = resource.provider ? tr.term('provider', resource.provider) : '';
    const skill = tr.term('skill', step.skillGap);
    const title = resourceTitle ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.stepTitle, {
        resource: resourceTitle,
        skill
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.stepTitleNoResource, {
        skill
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex gap-2.5 rounded-xl bg-white/60 px-3 py-2.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(37,99,235,0.12)] text-[10px] font-bold text-[color:var(--accent-strong)] tnum",
                children: index
            }, void 0, false, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-medium leading-5 text-[color:var(--ink)]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-[color:var(--ink-muted)]",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.hoursValue, {
                                n: step.estimatedHours
                            }),
                            step.weekStart && step.weekEnd ? ` · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(t.result.plan.weekRange, {
                                a: step.weekStart,
                                b: step.weekEnd
                            })}` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 742,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: step.resource.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "mt-0.5 inline-flex flex-wrap items-center gap-1 text-[11px] text-[color:var(--accent)] underline-offset-2 hover:underline",
                        children: [
                            resourceTitle,
                            provider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[color:var(--ink-muted)]",
                                children: [
                                    "· ",
                                    provider
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 755,
                                columnNumber: 23
                            }, this) : null,
                            resource.publishedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[color:var(--ink-muted)]",
                                children: [
                                    "(",
                                    resource.publishedAt,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/components/result/ResultDashboard.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ResultDashboard.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ResultDashboard.tsx",
                lineNumber: 740,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ResultDashboard.tsx",
        lineNumber: 736,
        columnNumber: 5
    }, this);
}
_s7(PlanRow, "trnuqiKMTMwl7r2N+Nfy7i8Xrz0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c9 = PlanRow;
/* =========================================================
 * 辅助
 * ======================================================= */ const STRUCTURED_PREFIXES = [
    '核心技能命中',
    '兴趣方向命中',
    '兴趣方向暂无',
    '待补：',
    '待补足：',
    '岗位所需技能已全部覆盖',
    '需求依据'
];
function isStructuredReason(reason) {
    return STRUCTURED_PREFIXES.some((prefix)=>reason.startsWith(prefix)) || parseExperienceReason([
        reason
    ]) !== null;
}
/** 规则引擎的经验适配句：`3 年经验，…（岗位参考 2 年）[；当前岗位「X」方向接近]。` */ function parseExperienceReason(reasons) {
    for (const reason of reasons){
        const match = reason.match(/^(\d+)\s*年经验，(经验年限与岗位通常要求接近|经验年限高于该岗位通常要求|经验年限低于该岗位通常要求)（岗位参考\s*(\d+)\s*年）(?:；当前岗位「(.+?)」方向接近)?。?$/);
        if (!match) {
            continue;
        }
        const fit = match[2] === '经验年限与岗位通常要求接近' ? 'close' : match[2] === '经验年限高于该岗位通常要求' ? 'higher' : 'lower';
        return {
            years: Number(match[1]),
            ideal: Number(match[3]),
            fit,
            roleName: match[4] ?? ''
        };
    }
    return null;
}
/** 从 `需求依据：名称（2025-01-07）…` 中取出名称与日期。 */ function parseBasis(reasons) {
    for (const reason of reasons){
        const match = reason.match(/需求依据：(.+?)（(\d{4}-\d{2}-\d{2})）\s*(https?:\/\/\S+)?/);
        if (match) {
            return {
                name: match[1],
                date: match[2],
                url: match[3] ?? ''
            };
        }
    }
    return null;
}
/** 技能证据由 `任务「…」` / `自评技能「…」` 片段组成，英文界面改成对应写法。 */ function formatEvidence(evidence, lang) {
    if (lang === 'zh') {
        return evidence;
    }
    return evidence.split('；').map((segment)=>{
        const task = segment.match(/^任务「(.*)」$/);
        if (task) {
            return `Task “${task[1]}”`;
        }
        const skill = segment.match(/^自评技能「(.*)」$/);
        if (skill) {
            return `Self-declared “${skill[1]}”`;
        }
        return segment;
    }).join(' · ');
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "ResultDashboard");
__turbopack_context__.k.register(_c1, "WorkforceTrends");
__turbopack_context__.k.register(_c2, "Section");
__turbopack_context__.k.register(_c3, "TaskRow");
__turbopack_context__.k.register(_c4, "Meter");
__turbopack_context__.k.register(_c5, "RoleCard");
__turbopack_context__.k.register(_c6, "ChipRow");
__turbopack_context__.k.register(_c7, "GapRow");
__turbopack_context__.k.register(_c8, "SdgContributions");
__turbopack_context__.k.register(_c9, "PlanRow");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/i18n/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/dict.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SCENARIO_ORDER = [
    'slow',
    'fast'
];
function ScenarioSwitcher({ currentScenario, isSwitching, pendingScenario, error, changeNote, saveWarning, legacy, onSelect, onRetry }) {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const s = t.result.scenario;
    const labelOf = (scenario)=>scenario === 'slow' ? s.slow : s.fast;
    const shortOf = (scenario)=>scenario === 'slow' ? s.shortSlow : s.shortFast;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": s.title,
        className: "glass no-print mt-4 px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-[color:var(--ink)]",
                                children: s.title
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 max-w-xl text-xs leading-5 text-[color:var(--ink-muted)]",
                                children: s.desc
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": s.title,
                                className: "inline-flex rounded-full border border-[color:var(--line)] bg-[rgba(15,42,74,0.05)] p-0.5",
                                children: SCENARIO_ORDER.map((option)=>{
                                    const selected = currentScenario === option;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSelect(option),
                                        disabled: isSwitching || legacy,
                                        "aria-pressed": selected,
                                        "aria-label": labelOf(option),
                                        title: labelOf(option),
                                        className: `min-w-14 rounded-full px-4 py-1.5 text-xs font-semibold transition ${selected ? 'bg-white text-[color:var(--accent)] shadow-[0_2px_10px_rgba(15,42,74,0.12)]' : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'} disabled:cursor-not-allowed disabled:opacity-60`,
                                        children: shortOf(option)
                                    }, option, false, {
                                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[color:var(--ink-muted)]",
                                children: currentScenario ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(s.current, {
                                    name: labelOf(currentScenario)
                                }) : s.unknown
                            }, void 0, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            isSwitching && pendingScenario ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                className: "mt-3 flex items-center gap-2 rounded-xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.07)] px-3 py-2.5 text-sm text-[color:var(--accent-strong)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.25)] border-t-[color:var(--accent)]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(s.switching, {
                        name: labelOf(pendingScenario)
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "mt-3 rounded-xl border border-[rgba(220,75,62,0.28)] bg-[rgba(220,75,62,0.06)] p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium text-[color:var(--coral)]",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fmt"])(s.failed, {
                            name: labelOf(error.target)
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs leading-5 text-[color:var(--coral)]",
                        children: error.message
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    error.details.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 list-disc space-y-0.5 pl-5 text-xs text-[color:var(--coral)]",
                        children: error.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: detail
                            }, detail, false, {
                                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                                lineNumber: 116,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRetry,
                        disabled: isSwitching,
                        className: "mt-3 rounded-full border border-[rgba(220,75,62,0.35)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[color:var(--coral)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60",
                        children: t.meta.retry
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this) : null,
            changeNote ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                "aria-live": "polite",
                className: "mt-3 rounded-xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.06)] px-3 py-2 text-sm leading-6 text-[color:var(--accent-strong)]",
                children: changeNote
            }, void 0, false, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this) : null,
            saveWarning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-[color:var(--amber)]",
                children: saveWarning
            }, void 0, false, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this) : null,
            legacy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 rounded-xl border border-[color:var(--line)] bg-white/60 px-3 py-2 text-xs leading-5 text-[color:var(--ink-body)]",
                children: [
                    s.legacy,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/survey",
                        className: "ml-1 font-medium text-[color:var(--accent)] underline-offset-2 hover:underline",
                        children: s.reFill
                    }, void 0, false, {
                        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/result/ScenarioSwitcher.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/result/ScenarioSwitcher.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ScenarioSwitcher, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$i18n$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = ScenarioSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ScenarioSwitcher");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sdg-mapping.ts [app-client] (ecmascript)");
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
            sdgLinks: role.sdgLinks?.length ? role.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoleSdgLinks"])(role.title),
            requiredCount,
            hitRate: requiredCount === 0 ? 0 : Math.round(role.matchedSkills.length / requiredCount * 100),
            interestHitCount
        };
    });
    const gaps = result.skillGaps.map((gap)=>({
            ...gap,
            sdgLinks: gap.sdgLinks?.length ? gap.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(gap.skill),
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
                sdgLinks: skill.sdgLinks?.length ? skill.sdgLinks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sdg$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSkillSdgLinks"])(skill.name)
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sdg-mapping.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=_0uuewvu412_0n._.js.map