"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navigation/useDimentions.js":
/*!************************************************!*\
  !*** ./components/Navigation/useDimentions.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UseDimensions\": function() { return /* binding */ UseDimensions; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\n// Naive implementation - in reality would want to attach\n// a window or resize listener. Also use state/layoutEffect instead of ref/effect\n// if this is important to know on initial client render.\n// It would be safer to  return null for unmeasured states.\nvar UseDimensions = function(ref) {\n    _s();\n    var dimensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        width: 0,\n        height: 0\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        dimensions.current.width = ref.current.offsetWidth;\n        dimensions.current.height = ref.current.offsetHeight;\n    }, []);\n    return dimensions.current;\n};\n_s(UseDimensions, \"NpC5NsAphXwbxBdzDONhVAO+yb4=\");\n_c = UseDimensions;\nvar _c;\n$RefreshReg$(_c, \"UseDimensions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vdXNlRGltZW50aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7O0FBRTFDLHlEQUF5RDtBQUN6RCxpRkFBaUY7QUFDakYseURBQXlEO0FBQ3pELDJEQUEyRDtBQUNwRCxJQUFNRSxhQUFhLEdBQUdDLFNBQUFBLEdBQUcsRUFBSTs7SUFDbEMsSUFBTUMsVUFBVSxHQUFHSCw2Q0FBTSxDQUFDO1FBQUVJLEtBQUssRUFBRSxDQUFDO1FBQUVDLE1BQU0sRUFBRSxDQUFDO0tBQUUsQ0FBQztJQUVsRE4sZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RJLFVBQVUsQ0FBQ0csT0FBTyxDQUFDRixLQUFLLEdBQUdGLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxXQUFXLENBQUM7UUFDbkRKLFVBQVUsQ0FBQ0csT0FBTyxDQUFDRCxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDRSxZQUFZLENBQUM7S0FDdEQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU9MLFVBQVUsQ0FBQ0csT0FBTyxDQUFDO0NBQzNCLENBQUM7R0FUV0wsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi91c2VEaW1lbnRpb25zLmpzP2E2MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gTmFpdmUgaW1wbGVtZW50YXRpb24gLSBpbiByZWFsaXR5IHdvdWxkIHdhbnQgdG8gYXR0YWNoXG4vLyBhIHdpbmRvdyBvciByZXNpemUgbGlzdGVuZXIuIEFsc28gdXNlIHN0YXRlL2xheW91dEVmZmVjdCBpbnN0ZWFkIG9mIHJlZi9lZmZlY3Rcbi8vIGlmIHRoaXMgaXMgaW1wb3J0YW50IHRvIGtub3cgb24gaW5pdGlhbCBjbGllbnQgcmVuZGVyLlxuLy8gSXQgd291bGQgYmUgc2FmZXIgdG8gIHJldHVybiBudWxsIGZvciB1bm1lYXN1cmVkIHN0YXRlcy5cbmV4cG9ydCBjb25zdCBVc2VEaW1lbnNpb25zID0gcmVmID0+IHtcbiAgY29uc3QgZGltZW5zaW9ucyA9IHVzZVJlZih7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaW1lbnNpb25zLmN1cnJlbnQud2lkdGggPSByZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICBkaW1lbnNpb25zLmN1cnJlbnQuaGVpZ2h0ID0gcmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGRpbWVuc2lvbnMuY3VycmVudDtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiVXNlRGltZW5zaW9ucyIsInJlZiIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/useDimentions.js\n");

/***/ })

});