(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(providers)/MuiProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MuiProvider": (()=>MuiProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toolpad$2f$core$2f$esm$2f$AppProvider$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@toolpad/core/esm/AppProvider/AppProvider.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/entities/user-settings'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MuiProvider = ({ children })=>{
    _s();
    const settings = useUserSettings();
    const theme = getTheme(settings.theme);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$toolpad$2f$core$2f$esm$2f$AppProvider$2f$AppProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppProvider"], {
        theme: theme,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/(providers)/MuiProvider.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
};
_s(MuiProvider, "fj5sfH1JgVB8iZSSJz65NkxfosA=", false, function() {
    return [
        useUserSettings
    ];
});
_c = MuiProvider;
var _c;
__turbopack_context__.k.register(_c, "MuiProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28providers%29_MuiProvider_tsx_a6e50bf1._.js.map