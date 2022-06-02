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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ \"./components/Navigation/List.js\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ \"./components/Navigation/MenuToggle.js\");\n/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-dimensions */ \"./components/Navigation/use-dimensions.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sidebar = {\n    open: function() {\n        var height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n        return {\n            clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n            transition: {\n                type: \"spring\",\n                stiffness: 20,\n                restDelta: 2\n            }\n        };\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.5,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nvar Navigation = function() {\n    _s();\n    var ref = _slicedToArray((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle)(false, true), 2), isOpen = ref[0], toggleOpen = ref[1];\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var height = (0,_use_dimensions__WEBPACK_IMPORTED_MODULE_4__.useDimensions)(containerRef).height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"Open\" : \"Closed\",\n        custom: height,\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().background),\n                variants: sidebar\n            }, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toggle: function() {\n                    return toggleOpen();\n                }\n            }, void 0, false, {\n                fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/desaegertim/Desktop/castaar/castaar-rebuild/components/Navigation/Navigation.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navigation, \"bkodWS93JBXr46jlqLzgn3OoaQc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle,\n        _use_dimensions__WEBPACK_IMPORTED_MODULE_4__.useDimensions\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDYTtBQUNFO0FBQ3pCO0FBQ1k7QUFDUzs7QUFFL0MsSUFBTVEsT0FBTyxHQUFHO0lBQ2RDLElBQUksRUFBRTtZQUFDQyxNQUFNLG9FQUFHLElBQUk7ZUFBTTtZQUN4QkMsUUFBUSxFQUFFLFNBQVEsQ0FBbUIsTUFBZ0IsQ0FBakNELE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFDLGtCQUFnQixDQUFDO1lBQ3RERSxVQUFVLEVBQUU7Z0JBQ1ZDLElBQUksRUFBRSxRQUFRO2dCQUNkQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsU0FBUyxFQUFFLENBQUM7YUFDYjtTQUNGO0tBQUM7SUFDRkMsTUFBTSxFQUFFO1FBQ05MLFFBQVEsRUFBRSwyQkFBMkI7UUFDckNDLFVBQVUsRUFBRTtZQUNWSyxLQUFLLEVBQUUsR0FBRztZQUNWSixJQUFJLEVBQUUsUUFBUTtZQUNkQyxTQUFTLEVBQUUsR0FBRztZQUNkSSxPQUFPLEVBQUUsRUFBRTtTQUNaO0tBQ0Y7Q0FDRjtBQUVELElBQU1DLFVBQVUsR0FBRyxXQUFNOztJQUN2QixJQUE2QmhCLEdBQXFCLGtCQUFyQkEsdURBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQTNDaUIsTUFBTSxHQUFnQmpCLEdBQXFCLEdBQXJDLEVBQUVrQixVQUFVLEdBQUlsQixHQUFxQixHQUF6QjtJQUN6QixJQUFNbUIsWUFBWSxHQUFHckIsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDakMsSUFBTSxNQUFRLEdBQUtNLDhEQUFhLENBQUNlLFlBQVksQ0FBQyxDQUF0Q1osTUFBTTtJQUVkLHFCQUNFLDhEQUFDUixxREFBVTtRQUNUc0IsT0FBTyxFQUFFLEtBQUs7UUFDZEMsT0FBTyxFQUFFTCxNQUFNLEdBQUcsTUFBTSxHQUFHLFFBQVE7UUFDbkNNLE1BQU0sRUFBRWhCLE1BQU07UUFDZGlCLEdBQUcsRUFBRUwsWUFBWTtRQUNqQk0sU0FBUyxFQUFFeEIscUVBQVU7OzBCQUVyQiw4REFBQ0YscURBQVU7Z0JBQUMwQixTQUFTLEVBQUV4Qiw0RUFBaUI7Z0JBQUUyQixRQUFRLEVBQUV2QixPQUFPOzs7OztxQkFBSTswQkFDL0QsOERBQUNILDZDQUFJOzs7O3FCQUFFOzBCQUNQLDhEQUFDQyxtREFBVTtnQkFBQzBCLE1BQU0sRUFBRTsyQkFBTVgsVUFBVSxFQUFFO2lCQUFBOzs7OztxQkFBSTs7Ozs7O2FBQy9CLENBQ2Q7Q0FDRjtHQWxCS0YsVUFBVTs7UUFDZWhCLG1EQUFRO1FBRWxCSSwwREFBYTs7O0FBSDVCWSxLQUFBQSxVQUFVO0FBb0JoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcz9hMGU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VDeWNsZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IE1lbnVUb2dnbGUgZnJvbSAnLi9NZW51VG9nZ2xlJztcbmltcG9ydCB7dXNlRGltZW5zaW9uc30gZnJvbSAnLi91c2UtZGltZW5zaW9ucyc7XG5cbmNvbnN0IHNpZGViYXIgPSB7XG4gIG9wZW46IChoZWlnaHQgPSAxMDAwKSA9PiAoe1xuICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCA0MHB4IDQwcHgpYCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgc3RpZmZuZXNzOiAyMCxcbiAgICAgIHJlc3REZWx0YTogMlxuICAgIH1cbiAgfSksXG4gIGNsb3NlZDoge1xuICAgIGNsaXBQYXRoOiBcImNpcmNsZSgzMHB4IGF0IDQwcHggNDBweClcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgZGFtcGluZzogNDBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHRvZ2dsZU9wZW5dID0gdXNlQ3ljbGUoZmFsc2UsIHRydWUpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VEaW1lbnNpb25zKGNvbnRhaW5lclJlZik7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLm5hdlxuICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIk9wZW5cIiA6IFwiQ2xvc2VkXCJ9XG4gICAgICBjdXN0b209e2hlaWdodH1cbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2fVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IHZhcmlhbnRzPXtzaWRlYmFyfSAvPlxuICAgICAgPExpc3QvPlxuICAgICAgPE1lbnVUb2dnbGUgdG9nZ2xlPXsoKSA9PiB0b2dnbGVPcGVuKCl9IC8+XG4gICAgPC9tb3Rpb24ubmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VDeWNsZSIsInN0eWxlcyIsIkxpc3QiLCJNZW51VG9nZ2xlIiwidXNlRGltZW5zaW9ucyIsInNpZGViYXIiLCJvcGVuIiwiaGVpZ2h0IiwiY2xpcFBhdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsInJlc3REZWx0YSIsImNsb3NlZCIsImRlbGF5IiwiZGFtcGluZyIsIk5hdmlnYXRpb24iLCJpc09wZW4iLCJ0b2dnbGVPcGVuIiwiY29udGFpbmVyUmVmIiwibmF2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjdXN0b20iLCJyZWYiLCJjbGFzc05hbWUiLCJkaXYiLCJiYWNrZ3JvdW5kIiwidmFyaWFudHMiLCJ0b2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navigation/Navigation.js\n");

/***/ })

});