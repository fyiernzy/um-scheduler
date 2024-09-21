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

/***/ "(app-pages-browser)/./src/app/components/Timetable.tsx":
/*!******************************************!*\
  !*** ./src/app/components/Timetable.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst DAYS = [\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\"\n];\nconst HOURS = Array.from({\n    length: 12\n}, (_, i)=>i + 8);\n// Mapping short days (Mon, Tue, etc.) to full day names\nconst dayMap = {\n    Mon: \"Monday\",\n    Tue: \"Tuesday\",\n    Wed: \"Wednesday\",\n    Thu: \"Thursday\",\n    Fri: \"Friday\"\n};\nconst Timetable = (param)=>{\n    let { courses, selectedOccurrences } = param;\n    _s();\n    console.log(selectedOccurrences);\n    const [occupiedSlots, setOccupiedSlots] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const newOccupiedSlots = {};\n        courses.forEach((course)=>{\n            const selectedOccurrenceId = selectedOccurrences.get(course[\"Course Code\"]);\n            if (selectedOccurrenceId) {\n                const selectedOccurrence = course.Occurrences.find((occurrence)=>occurrence.Occurrence === selectedOccurrenceId);\n                if (selectedOccurrence) {\n                    selectedOccurrence.Activities.forEach((activity)=>{\n                        const day = dayMap[activity.Day]; // Map the day abbreviation to the full day name\n                        const startHour = parseInt(activity[\"Begin time\"].split(\":\")[0]);\n                        const endHour = parseInt(activity[\"End time\"].split(\":\")[0]);\n                        for(let hour = startHour; hour < endHour; hour++){\n                            const key = \"\".concat(day, \"-\").concat(hour);\n                            if (!newOccupiedSlots[key]) {\n                                newOccupiedSlots[key] = [];\n                            }\n                            newOccupiedSlots[key].push(activity);\n                        }\n                    });\n                }\n            }\n        });\n        setOccupiedSlots(newOccupiedSlots);\n    }, [\n        courses,\n        selectedOccurrences\n    ]);\n    const isSlotOccupied = (day, hour)=>{\n        return occupiedSlots[\"\".concat(day, \"-\").concat(hour)];\n    };\n    const renderCell = (day, hour)=>{\n        const activities = isSlotOccupied(day, hour);\n        if (activities) {\n            return activities.map((activity, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-blue-200 p-1 text-xs\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: activity.Activity\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                activity[\"Begin time\"],\n                                \" - \",\n                                activity[\"End time\"]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: activity.Room\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, idx, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined));\n        }\n        return null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"w-full border-collapse\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"border p-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined),\n                            HOURS.map((hour)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border p-2\",\n                                    children: \"\".concat(hour, \":00\")\n                                }, hour, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: DAYS.map((day)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"border p-2 font-bold\",\n                                    children: day\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined),\n                                HOURS.map((hour)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border p-2 h-16\",\n                                        children: renderCell(day, hour)\n                                    }, \"\".concat(day, \"-\").concat(hour), false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined))\n                            ]\n                        }, day, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\components\\\\Timetable.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Timetable, \"+7WIEqJW3SwYm5Kj6LdSdk3d7Yc=\");\n_c = Timetable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timetable);\nvar _c;\n$RefreshReg$(_c, \"Timetable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UaW1ldGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUduRCxNQUFNRyxPQUFPO0lBQUM7SUFBVTtJQUFXO0lBQWE7SUFBWTtDQUFTO0FBQ3JFLE1BQU1DLFFBQVFDLE1BQU1DLElBQUksQ0FBQztJQUFFQyxRQUFRO0FBQUcsR0FBRyxDQUFDQyxHQUFHQyxJQUFNQSxJQUFJO0FBT3ZELHdEQUF3RDtBQUN4RCxNQUFNQyxTQUFpQztJQUNyQ0MsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsS0FBSztJQUNMQyxLQUFLO0FBQ1A7QUFFQSxNQUFNQyxZQUFzQztRQUFDLEVBQzNDQyxPQUFPLEVBQ1BDLG1CQUFtQixFQUNwQjs7SUFDQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU0sQ0FBQ0csZUFBZUMsaUJBQWlCLEdBQUdyQiwrQ0FBUUEsQ0FFaEQsQ0FBQztJQUVIQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixtQkFBK0MsQ0FBQztRQUV0RE4sUUFBUU8sT0FBTyxDQUFDLENBQUNDO1lBQ2YsTUFBTUMsdUJBQXVCUixvQkFBb0JTLEdBQUcsQ0FDbERGLE1BQU0sQ0FBQyxjQUFjO1lBRXZCLElBQUlDLHNCQUFzQjtnQkFDeEIsTUFBTUUscUJBQXFCSCxPQUFPSSxXQUFXLENBQUNDLElBQUksQ0FDaEQsQ0FBQ0MsYUFBZUEsV0FBV0MsVUFBVSxLQUFLTjtnQkFFNUMsSUFBSUUsb0JBQW9CO29CQUN0QkEsbUJBQW1CSyxVQUFVLENBQUNULE9BQU8sQ0FBQyxDQUFDVTt3QkFDckMsTUFBTUMsTUFBTXpCLE1BQU0sQ0FBQ3dCLFNBQVNFLEdBQUcsQ0FBQyxFQUFFLGdEQUFnRDt3QkFDbEYsTUFBTUMsWUFBWUMsU0FBU0osUUFBUSxDQUFDLGFBQWEsQ0FBQ0ssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMvRCxNQUFNQyxVQUFVRixTQUFTSixRQUFRLENBQUMsV0FBVyxDQUFDSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBRTNELElBQUssSUFBSUUsT0FBT0osV0FBV0ksT0FBT0QsU0FBU0MsT0FBUTs0QkFDakQsTUFBTUMsTUFBTSxHQUFVRCxPQUFQTixLQUFJLEtBQVEsT0FBTE07NEJBQ3RCLElBQUksQ0FBQ2xCLGdCQUFnQixDQUFDbUIsSUFBSSxFQUFFO2dDQUMxQm5CLGdCQUFnQixDQUFDbUIsSUFBSSxHQUFHLEVBQUU7NEJBQzVCOzRCQUNBbkIsZ0JBQWdCLENBQUNtQixJQUFJLENBQUNDLElBQUksQ0FBQ1Q7d0JBQzdCO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBWixpQkFBaUJDO0lBQ25CLEdBQUc7UUFBQ047UUFBU0M7S0FBb0I7SUFFakMsTUFBTTBCLGlCQUFpQixDQUFDVCxLQUFhTTtRQUNuQyxPQUFPcEIsYUFBYSxDQUFDLEdBQVVvQixPQUFQTixLQUFJLEtBQVEsT0FBTE0sTUFBTztJQUN4QztJQUVBLE1BQU1JLGFBQWEsQ0FBQ1YsS0FBYU07UUFDL0IsTUFBTUssYUFBYUYsZUFBZVQsS0FBS007UUFDdkMsSUFBSUssWUFBWTtZQUNkLE9BQU9BLFdBQVdDLEdBQUcsQ0FBQyxDQUFDYixVQUFVYyxvQkFDL0IsOERBQUNDO29CQUFjQyxXQUFVOztzQ0FDdkIsOERBQUNEO3NDQUFLZixTQUFTaUIsUUFBUTs7Ozs7O3NDQUN2Qiw4REFBQ0Y7O2dDQUNFZixRQUFRLENBQUMsYUFBYTtnQ0FBQztnQ0FBSUEsUUFBUSxDQUFDLFdBQVc7Ozs7Ozs7c0NBRWxELDhEQUFDZTtzQ0FBS2YsU0FBU2tCLElBQUk7Ozs7Ozs7bUJBTFhKOzs7OztRQVFkO1FBQ0EsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNHO1lBQU1ILFdBQVU7OzhCQUNmLDhEQUFDSTs4QkFDQyw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBR04sV0FBVTs7Ozs7OzRCQUNiOUMsTUFBTTJDLEdBQUcsQ0FBQyxDQUFDTixxQkFDViw4REFBQ2U7b0NBQWNOLFdBQVU7OENBQ3RCLEdBQVEsT0FBTFQsTUFBSzttQ0FERkE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWYsOERBQUNnQjs4QkFDRXRELEtBQUs0QyxHQUFHLENBQUMsQ0FBQ1osb0JBQ1QsOERBQUNvQjs7OENBQ0MsOERBQUNHO29DQUFHUixXQUFVOzhDQUF3QmY7Ozs7OztnQ0FDckMvQixNQUFNMkMsR0FBRyxDQUFDLENBQUNOLHFCQUNWLDhEQUFDaUI7d0NBQTBCUixXQUFVO2tEQUNsQ0wsV0FBV1YsS0FBS007dUNBRFYsR0FBVUEsT0FBUE4sS0FBSSxLQUFRLE9BQUxNOzs7Ozs7MkJBSGROOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhckI7R0F6Rk1uQjtLQUFBQTtBQTJGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGltZXRhYmxlLnRzeD9lMTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvdXJzZSwgQWN0aXZpdHkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBEQVlTID0gW1wiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCJdO1xyXG5jb25zdCBIT1VSUyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0sIChfLCBpKSA9PiBpICsgOCk7XHJcblxyXG5pbnRlcmZhY2UgVGltZXRhYmxlUHJvcHMge1xyXG4gIGNvdXJzZXM6IENvdXJzZVtdO1xyXG4gIHNlbGVjdGVkT2NjdXJyZW5jZXM6IE1hcDxzdHJpbmcsIHN0cmluZz47XHJcbn1cclxuXHJcbi8vIE1hcHBpbmcgc2hvcnQgZGF5cyAoTW9uLCBUdWUsIGV0Yy4pIHRvIGZ1bGwgZGF5IG5hbWVzXHJcbmNvbnN0IGRheU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICBNb246IFwiTW9uZGF5XCIsXHJcbiAgVHVlOiBcIlR1ZXNkYXlcIixcclxuICBXZWQ6IFwiV2VkbmVzZGF5XCIsXHJcbiAgVGh1OiBcIlRodXJzZGF5XCIsXHJcbiAgRnJpOiBcIkZyaWRheVwiLFxyXG59O1xyXG5cclxuY29uc3QgVGltZXRhYmxlOiBSZWFjdC5GQzxUaW1ldGFibGVQcm9wcz4gPSAoe1xyXG4gIGNvdXJzZXMsXHJcbiAgc2VsZWN0ZWRPY2N1cnJlbmNlcyxcclxufSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkT2NjdXJyZW5jZXMpO1xyXG4gIGNvbnN0IFtvY2N1cGllZFNsb3RzLCBzZXRPY2N1cGllZFNsb3RzXSA9IHVzZVN0YXRlPFxyXG4gICAgUmVjb3JkPHN0cmluZywgQWN0aXZpdHlbXT5cclxuICA+KHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG5ld09jY3VwaWVkU2xvdHM6IFJlY29yZDxzdHJpbmcsIEFjdGl2aXR5W10+ID0ge307XHJcblxyXG4gICAgY291cnNlcy5mb3JFYWNoKChjb3Vyc2UpID0+IHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRPY2N1cnJlbmNlSWQgPSBzZWxlY3RlZE9jY3VycmVuY2VzLmdldChcclxuICAgICAgICBjb3Vyc2VbXCJDb3Vyc2UgQ29kZVwiXVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc2VsZWN0ZWRPY2N1cnJlbmNlSWQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9jY3VycmVuY2UgPSBjb3Vyc2UuT2NjdXJyZW5jZXMuZmluZChcclxuICAgICAgICAgIChvY2N1cnJlbmNlKSA9PiBvY2N1cnJlbmNlLk9jY3VycmVuY2UgPT09IHNlbGVjdGVkT2NjdXJyZW5jZUlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRPY2N1cnJlbmNlKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZE9jY3VycmVuY2UuQWN0aXZpdGllcy5mb3JFYWNoKChhY3Rpdml0eSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXkgPSBkYXlNYXBbYWN0aXZpdHkuRGF5XTsgLy8gTWFwIHRoZSBkYXkgYWJicmV2aWF0aW9uIHRvIHRoZSBmdWxsIGRheSBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SG91ciA9IHBhcnNlSW50KGFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXS5zcGxpdChcIjpcIilbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRIb3VyID0gcGFyc2VJbnQoYWN0aXZpdHlbXCJFbmQgdGltZVwiXS5zcGxpdChcIjpcIilbMF0pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaG91ciA9IHN0YXJ0SG91cjsgaG91ciA8IGVuZEhvdXI7IGhvdXIrKykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2RheX0tJHtob3VyfWA7XHJcbiAgICAgICAgICAgICAgaWYgKCFuZXdPY2N1cGllZFNsb3RzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09jY3VwaWVkU2xvdHNba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuZXdPY2N1cGllZFNsb3RzW2tleV0ucHVzaChhY3Rpdml0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0T2NjdXBpZWRTbG90cyhuZXdPY2N1cGllZFNsb3RzKTtcclxuICB9LCBbY291cnNlcywgc2VsZWN0ZWRPY2N1cnJlbmNlc10pO1xyXG5cclxuICBjb25zdCBpc1Nsb3RPY2N1cGllZCA9IChkYXk6IHN0cmluZywgaG91cjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gb2NjdXBpZWRTbG90c1tgJHtkYXl9LSR7aG91cn1gXTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJDZWxsID0gKGRheTogc3RyaW5nLCBob3VyOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBpc1Nsb3RPY2N1cGllZChkYXksIGhvdXIpO1xyXG4gICAgaWYgKGFjdGl2aXRpZXMpIHtcclxuICAgICAgcmV0dXJuIGFjdGl2aXRpZXMubWFwKChhY3Rpdml0eSwgaWR4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiYmctYmx1ZS0yMDAgcC0xIHRleHQteHNcIj5cclxuICAgICAgICAgIDxkaXY+e2FjdGl2aXR5LkFjdGl2aXR5fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2FjdGl2aXR5W1wiQmVnaW4gdGltZVwiXX0gLSB7YWN0aXZpdHlbXCJFbmQgdGltZVwiXX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj57YWN0aXZpdHkuUm9vbX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIHAtMlwiPjwvdGg+XHJcbiAgICAgICAgICAgIHtIT1VSUy5tYXAoKGhvdXIpID0+IChcclxuICAgICAgICAgICAgICA8dGgga2V5PXtob3VyfSBjbGFzc05hbWU9XCJib3JkZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7aG91cn06MDBgfVxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtEQVlTLm1hcCgoZGF5KSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2RheX0+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgZm9udC1ib2xkXCI+e2RheX08L3RkPlxyXG4gICAgICAgICAgICAgIHtIT1VSUy5tYXAoKGhvdXIpID0+IChcclxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2Ake2RheX0tJHtob3VyfWB9IGNsYXNzTmFtZT1cImJvcmRlciBwLTIgaC0xNlwiPlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVyQ2VsbChkYXksIGhvdXIpfVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXRhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRBWVMiLCJIT1VSUyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiZGF5TWFwIiwiTW9uIiwiVHVlIiwiV2VkIiwiVGh1IiwiRnJpIiwiVGltZXRhYmxlIiwiY291cnNlcyIsInNlbGVjdGVkT2NjdXJyZW5jZXMiLCJjb25zb2xlIiwibG9nIiwib2NjdXBpZWRTbG90cyIsInNldE9jY3VwaWVkU2xvdHMiLCJuZXdPY2N1cGllZFNsb3RzIiwiZm9yRWFjaCIsImNvdXJzZSIsInNlbGVjdGVkT2NjdXJyZW5jZUlkIiwiZ2V0Iiwic2VsZWN0ZWRPY2N1cnJlbmNlIiwiT2NjdXJyZW5jZXMiLCJmaW5kIiwib2NjdXJyZW5jZSIsIk9jY3VycmVuY2UiLCJBY3Rpdml0aWVzIiwiYWN0aXZpdHkiLCJkYXkiLCJEYXkiLCJzdGFydEhvdXIiLCJwYXJzZUludCIsInNwbGl0IiwiZW5kSG91ciIsImhvdXIiLCJrZXkiLCJwdXNoIiwiaXNTbG90T2NjdXBpZWQiLCJyZW5kZXJDZWxsIiwiYWN0aXZpdGllcyIsIm1hcCIsImlkeCIsImRpdiIsImNsYXNzTmFtZSIsIkFjdGl2aXR5IiwiUm9vbSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Timetable.tsx\n"));

/***/ })

});