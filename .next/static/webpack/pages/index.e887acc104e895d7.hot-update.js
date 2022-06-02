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

/***/ "./components/Navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/Navigation/Navigation.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ \"./components/Navigation/List.js\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ \"./components/Navigation/MenuToggle.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sidebar = {\n    open: function() {\n        var height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n        return {\n            clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n            transition: {\n                type: \"spring\",\n                stiffness: 20,\n                restDelta: 2\n            }\n        };\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.5,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nvar Navigation = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false, true), isOpen = ref[0], toggleOpen = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"Open\" : \"Closed\",\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().background),\n                variants: sidebar\n            }, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toggle: function() {\n                    return toggleOpen();\n                }\n            }, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navigation, \"NmZSPM66ZfbiZXF4hhD+p1ZfSbk=\");\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1A7QUFDa0I7QUFDRTtBQUN6QjtBQUNZOztBQUV0QyxJQUFNUSxPQUFPLEdBQUc7SUFDZEMsSUFBSSxFQUFFO1lBQUNDLE1BQU0sb0VBQUcsSUFBSTtlQUFNO1lBQ3hCQyxRQUFRLEVBQUUsU0FBUSxDQUFtQixNQUFnQixDQUFqQ0QsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUMsa0JBQWdCLENBQUM7WUFDdERFLFVBQVUsRUFBRTtnQkFDVkMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2RDLFNBQVMsRUFBRSxFQUFFO2dCQUNiQyxTQUFTLEVBQUUsQ0FBQzthQUNiO1NBQ0Y7S0FBQztJQUNGQyxNQUFNLEVBQUU7UUFDTkwsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQ0MsVUFBVSxFQUFFO1lBQ1ZLLEtBQUssRUFBRSxHQUFHO1lBQ1ZKLElBQUksRUFBRSxRQUFRO1lBQ2RDLFNBQVMsRUFBRSxHQUFHO1lBQ2RJLE9BQU8sRUFBRSxFQUFFO1NBQ1o7S0FDRjtDQUNGO0FBRUQsSUFBTUMsVUFBVSxHQUFHLFdBQU07O0lBQ3ZCLElBQTZCbEIsR0FBcUIsR0FBckJBLCtDQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQTVCcEQsTUE0QmUsR0FBZ0JBLEdBQXFCLEdBQXJDLEVBNUJmLFVBNEIyQixHQUFJQSxHQUFxQixHQUF6QjtJQUN6QixJQUFNcUIsWUFBWSxHQUFHcEIsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFakMscUJBQ0UsOERBQUNDLHFEQUFVO1FBQ1RxQixPQUFPLEVBQUUsS0FBSztRQUNkQyxPQUFPLEVBQUVMLE1BQU0sR0FBRyxNQUFNLEdBQUcsUUFBUTtRQUNuQ00sR0FBRyxFQUFFSixZQUFZO1FBQ2pCSyxTQUFTLEVBQUV0QixxRUFBVTs7MEJBRXJCLDhEQUFDRixxREFBVTtnQkFBQ3dCLFNBQVMsRUFBRXRCLDRFQUFpQjtnQkFBRXlCLFFBQVEsRUFBRXRCLE9BQU87Ozs7O3FCQUFJOzBCQUMvRCw4REFBQ0YsNkNBQUk7Ozs7cUJBQUU7MEJBQ1AsOERBQUNDLG1EQUFVO2dCQUFDd0IsTUFBTSxFQUFFOzJCQUFNVixVQUFVLEVBQUU7aUJBQUE7Ozs7O3FCQUFJOzs7Ozs7YUFDL0IsQ0FDZDtDQUNGO0dBaEJLRixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFrQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzP2EwZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlQ3ljbGUgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcbmltcG9ydCBNZW51VG9nZ2xlIGZyb20gJy4vTWVudVRvZ2dsZSc7XG5cbmNvbnN0IHNpZGViYXIgPSB7XG4gIG9wZW46IChoZWlnaHQgPSAxMDAwKSA9PiAoe1xuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCA0MHB4IDQwcHgpYCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgc3RpZmZuZXNzOiAyMCxcbiAgICAgIHJlc3REZWx0YTogMlxuICAgIH1cbiAgfSksXG4gIGNsb3NlZDoge1xuICAgIGNsaXBQYXRoOiBcImNpcmNsZSgzMHB4IGF0IDQwcHggNDBweClcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgZGFtcGluZzogNDBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UsIHRydWUpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLm5hdlxuICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIk9wZW5cIiA6IFwiQ2xvc2VkXCJ9XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdn1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSB2YXJpYW50cz17c2lkZWJhcn0gLz5cbiAgICAgIDxMaXN0Lz5cbiAgICAgIDxNZW51VG9nZ2xlIHRvZ2dsZT17KCkgPT4gdG9nZ2xlT3BlbigpfSAvPlxuICAgIDwvbW90aW9uLm5hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VDeWNsZSIsInN0eWxlcyIsIkxpc3QiLCJNZW51VG9nZ2xlIiwic2lkZWJhciIsIm9wZW4iLCJoZWlnaHQiLCJjbGlwUGF0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwicmVzdERlbHRhIiwiY2xvc2VkIiwiZGVsYXkiLCJkYW1waW5nIiwiTmF2aWdhdGlvbiIsImlzT3BlbiIsInRvZ2dsZU9wZW4iLCJjb250YWluZXJSZWYiLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInJlZiIsImNsYXNzTmFtZSIsImRpdiIsImJhY2tncm91bmQiLCJ2YXJpYW50cyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation/Navigation.js\n");

/***/ })

});