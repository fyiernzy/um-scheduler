"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/OccurrenceItem.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/OccurrenceItem.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OccurrenceItem: function() { return /* binding */ OccurrenceItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ActivityDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityDetails */ \"(app-pages-browser)/./src/app/components/ActivityDetails.tsx\");\n\n\nconst OccurrenceItem = (param)=>{\n    let { course, occurrence, selectedOccurrence, onOccurrenceSelect, isDisabled } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 p-4 mb-4 border \".concat(selectedOccurrence === occurrence.Occurrence ? \"bg-blue-200\" : isDisabled ? \"bg-gray-200 cursor-not-allowed\" : \"border-red-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"flex items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"occurrence-\".concat(course[\"Course Code\"]),\n                        value: occurrence.Occurrence,\n                        checked: selectedOccurrence === occurrence.Occurrence,\n                        onClick: ()=>onOccurrenceSelect(course[\"Course Code\"], occurrence.Occurrence),\n                        disabled: isDisabled,\n                        className: \"form-radio\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\OccurrenceItem.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-lg font-semibold\",\n                        children: occurrence.Occurrence\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\OccurrenceItem.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\OccurrenceItem.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            occurrence.Activities.map((activity, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ActivityDetails__WEBPACK_IMPORTED_MODULE_1__.ActivityDetails, {\n                    activity: activity\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\OccurrenceItem.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\OccurrenceItem.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OccurrenceItem;\nvar _c;\n$RefreshReg$(_c, \"OccurrenceItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9PY2N1cnJlbmNlSXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNvRDtBQUU3QyxNQUFNQyxpQkFBaUI7UUFBQyxFQUM3QkMsTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLGtCQUFrQixFQUNsQkMsa0JBQWtCLEVBQ2xCQyxVQUFVLEVBT1g7SUFDQyxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVyx5QkFNVixPQUxDSix1QkFBdUJELFdBQVdNLFVBQVUsR0FDeEMsZ0JBQ0FILGFBQ0EsbUNBQ0E7OzBCQUlOLDhEQUFDSTtnQkFBTUYsV0FBVTs7a0NBQ2YsOERBQUNHO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFNLGNBQW9DLE9BQXRCWCxNQUFNLENBQUMsY0FBYzt3QkFDekNZLE9BQU9YLFdBQVdNLFVBQVU7d0JBQzVCTSxTQUFTWCx1QkFBdUJELFdBQVdNLFVBQVU7d0JBQ3JETyxTQUFTLElBQ1BYLG1CQUFtQkgsTUFBTSxDQUFDLGNBQWMsRUFBRUMsV0FBV00sVUFBVTt3QkFFakVRLFVBQVVYO3dCQUNWRSxXQUFVOzs7Ozs7a0NBRVosOERBQUNVO3dCQUFLVixXQUFVO2tDQUF5QkwsV0FBV00sVUFBVTs7Ozs7Ozs7Ozs7O1lBSS9ETixXQUFXZ0IsVUFBVSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsa0JBQ3BDLDhEQUFDdEIsNkRBQWVBO29CQUFTcUIsVUFBVUE7bUJBQWJDOzs7Ozs7Ozs7OztBQUk5QixFQUFFO0tBN0NXckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL09jY3VycmVuY2VJdGVtLnRzeD9iZGUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvdXJzZSwgT2NjdXJyZW5jZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQWN0aXZpdHlEZXRhaWxzIH0gZnJvbSBcIi4vQWN0aXZpdHlEZXRhaWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgT2NjdXJyZW5jZUl0ZW0gPSAoe1xyXG4gIGNvdXJzZSxcclxuICBvY2N1cnJlbmNlLFxyXG4gIHNlbGVjdGVkT2NjdXJyZW5jZSxcclxuICBvbk9jY3VycmVuY2VTZWxlY3QsXHJcbiAgaXNEaXNhYmxlZCxcclxufToge1xyXG4gIGNvdXJzZTogQ291cnNlO1xyXG4gIG9jY3VycmVuY2U6IE9jY3VycmVuY2U7XHJcbiAgc2VsZWN0ZWRPY2N1cnJlbmNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgb25PY2N1cnJlbmNlU2VsZWN0OiAoY291cnNlQ29kZTogc3RyaW5nLCBvY2N1cnJlbmNlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YHctMS80IHAtNCBtYi00IGJvcmRlciAke1xyXG4gICAgICAgIHNlbGVjdGVkT2NjdXJyZW5jZSA9PT0gb2NjdXJyZW5jZS5PY2N1cnJlbmNlXHJcbiAgICAgICAgICA/IFwiYmctYmx1ZS0yMDBcIlxyXG4gICAgICAgICAgOiBpc0Rpc2FibGVkXHJcbiAgICAgICAgICA/IFwiYmctZ3JheS0yMDAgY3Vyc29yLW5vdC1hbGxvd2VkXCJcclxuICAgICAgICAgIDogXCJib3JkZXItcmVkLTUwMFwiXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICB7LyogT2NjdXJyZW5jZSB3aXRoIHJhZGlvIGJ1dHRvbiAqL31cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgIG5hbWU9e2BvY2N1cnJlbmNlLSR7Y291cnNlW1wiQ291cnNlIENvZGVcIl19YH1cclxuICAgICAgICAgIHZhbHVlPXtvY2N1cnJlbmNlLk9jY3VycmVuY2V9XHJcbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZE9jY3VycmVuY2UgPT09IG9jY3VycmVuY2UuT2NjdXJyZW5jZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgIG9uT2NjdXJyZW5jZVNlbGVjdChjb3Vyc2VbXCJDb3Vyc2UgQ29kZVwiXSwgb2NjdXJyZW5jZS5PY2N1cnJlbmNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXJhZGlvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPntvY2N1cnJlbmNlLk9jY3VycmVuY2V9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgey8qIEFjdGl2aXR5IERldGFpbHMgKi99XHJcbiAgICAgIHtvY2N1cnJlbmNlLkFjdGl2aXRpZXMubWFwKChhY3Rpdml0eSwgaSkgPT4gKFxyXG4gICAgICAgIDxBY3Rpdml0eURldGFpbHMga2V5PXtpfSBhY3Rpdml0eT17YWN0aXZpdHl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkFjdGl2aXR5RGV0YWlscyIsIk9jY3VycmVuY2VJdGVtIiwiY291cnNlIiwib2NjdXJyZW5jZSIsInNlbGVjdGVkT2NjdXJyZW5jZSIsIm9uT2NjdXJyZW5jZVNlbGVjdCIsImlzRGlzYWJsZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJPY2N1cnJlbmNlIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DbGljayIsImRpc2FibGVkIiwic3BhbiIsIkFjdGl2aXRpZXMiLCJtYXAiLCJhY3Rpdml0eSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/OccurrenceItem.tsx\n"));

/***/ })

});