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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Timetable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Timetable */ \"(app-pages-browser)/./src/app/components/Timetable.tsx\");\n/* harmony import */ var _components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CourseDetails */ \"(app-pages-browser)/./src/app/components/CourseDetails.tsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"(app-pages-browser)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Utility Functions\nconst sortOccurrencesByNumber = (occurrences)=>lodash__WEBPACK_IMPORTED_MODULE_4___default().sortBy(occurrences, (occurrence)=>parseInt(occurrence.Occurrence));\nconst doesOccurrenceConflict = (selectedActivities, occurrence)=>occurrence.Activities.some((activity)=>selectedActivities.some((selectedActivity)=>activity.Day === selectedActivity.Day && (activity[\"Begin time\"] >= selectedActivity[\"Begin time\"] && activity[\"Begin time\"] < selectedActivity[\"End time\"] || activity[\"End time\"] > selectedActivity[\"Begin time\"] && activity[\"End time\"] <= selectedActivity[\"End time\"] || activity[\"Begin time\"] <= selectedActivity[\"Begin time\"] && activity[\"End time\"] >= selectedActivity[\"End time\"])));\n// Fetch Courses Data\nconst fetchCoursesData = async ()=>{\n    const response = await fetch(\"/course_data_final_fixed.json\");\n    const data = await response.json();\n    return data.map((course)=>({\n            ...course,\n            Occurrences: sortOccurrencesByNumber(course.Occurrences)\n        }));\n};\n// Main Home Component\nfunction Home() {\n    _s();\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedOccurrences, setSelectedOccurrences] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map());\n    // Fetch courses when component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadCourses = async ()=>{\n            const data = await fetchCoursesData();\n            setCourses(data);\n        };\n        loadCourses();\n    }, []);\n    // Handle Occurrence Selection and Unselection\n    const handleOccurrenceSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((courseCode, occurrence)=>{\n        setSelectedOccurrences((prev)=>{\n            const updatedSelections = new Map(prev); // Clone the current selections map\n            const currentSelection = updatedSelections.get(courseCode);\n            console.log(\"Current Selection: \", currentSelection);\n            if (currentSelection === occurrence) {\n                // If the user clicked the selected occurrence, unselect it (remove it)\n                console.log(\"Remove it!\");\n                updatedSelections.delete(courseCode);\n            } else {\n                // Otherwise, select the occurrence\n                updatedSelections.set(courseCode, occurrence);\n            }\n            return new Map(updatedSelections); // Return the new updated map to trigger a re-render\n        });\n    }, []);\n    // Check if Occurrence is Disabled\n    const isOccurrenceDisabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((course, occurrence)=>{\n        if (selectedOccurrences.size === 0) return false;\n        const selectedActivitiesByOtherCourses = [];\n        courses.forEach((c)=>{\n            if (c[\"Course Code\"] !== course[\"Course Code\"]) {\n                const selectedOccurrence = selectedOccurrences.get(c[\"Course Code\"]);\n                if (selectedOccurrence) {\n                    var _c_Occurrences_find;\n                    const selectedOccurrenceActivities = ((_c_Occurrences_find = c.Occurrences.find((o)=>o.Occurrence === selectedOccurrence)) === null || _c_Occurrences_find === void 0 ? void 0 : _c_Occurrences_find.Activities) || [];\n                    selectedActivitiesByOtherCourses.push(...selectedOccurrenceActivities);\n                }\n            }\n        });\n        return doesOccurrenceConflict(selectedActivitiesByOtherCourses, occurrence);\n    }, [\n        selectedOccurrences,\n        courses\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-6 space-y-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Timetable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                courses: courses,\n                selectedOccurrences: selectedOccurrences\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            courses.map((course, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CourseDetails__WEBPACK_IMPORTED_MODULE_3__.CourseDetails, {\n                    course: course,\n                    selectedOccurrences: selectedOccurrences,\n                    onOccurrenceSelect: handleOccurrenceSelect,\n                    isOccurrenceDisabled: isOccurrenceDisabled\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\schedule\\\\course-layout\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"lSIGqp02pU7dqETdI5qzjMeEcqM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUN5RDtBQUNWO0FBQ1k7QUFFcEM7QUFFdkIsb0JBQW9CO0FBQ3BCLE1BQU1NLDBCQUEwQixDQUFDQyxjQUMvQkYsb0RBQVEsQ0FBQ0UsYUFBYSxDQUFDRSxhQUFlQyxTQUFTRCxXQUFXRSxVQUFVO0FBRXRFLE1BQU1DLHlCQUF5QixDQUM3QkMsb0JBQ0FKLGFBRUFBLFdBQVdLLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLFdBQzFCSCxtQkFBbUJFLElBQUksQ0FDckIsQ0FBQ0UsbUJBQ0NELFNBQVNFLEdBQUcsS0FBS0QsaUJBQWlCQyxHQUFHLElBQ3BDLFNBQVMsQ0FBQyxhQUFhLElBQUlELGdCQUFnQixDQUFDLGFBQWEsSUFDeERELFFBQVEsQ0FBQyxhQUFhLEdBQUdDLGdCQUFnQixDQUFDLFdBQVcsSUFDcERELFFBQVEsQ0FBQyxXQUFXLEdBQUdDLGdCQUFnQixDQUFDLGFBQWEsSUFDcERELFFBQVEsQ0FBQyxXQUFXLElBQUlDLGdCQUFnQixDQUFDLFdBQVcsSUFDckRELFFBQVEsQ0FBQyxhQUFhLElBQUlDLGdCQUFnQixDQUFDLGFBQWEsSUFDdkRELFFBQVEsQ0FBQyxXQUFXLElBQUlDLGdCQUFnQixDQUFDLFdBQVc7QUFJaEUscUJBQXFCO0FBQ3JCLE1BQU1FLG1CQUFtQjtJQUN2QixNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBaUIsTUFBTUYsU0FBU0csSUFBSTtJQUMxQyxPQUFPRCxLQUFLRSxHQUFHLENBQUMsQ0FBQ0MsU0FBWTtZQUMzQixHQUFHQSxNQUFNO1lBQ1RDLGFBQWFwQix3QkFBd0JtQixPQUFPQyxXQUFXO1FBQ3pEO0FBQ0Y7QUFFQSxzQkFBc0I7QUFDUCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUc1QiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25ELE1BQU0sQ0FBQzZCLHFCQUFxQkMsdUJBQXVCLEdBQUc5QiwrQ0FBUUEsQ0FFNUQsSUFBSStCO0lBRU4sc0NBQXNDO0lBQ3RDaEMsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUMsY0FBYztZQUNsQixNQUFNWCxPQUFPLE1BQU1IO1lBQ25CVSxXQUFXUDtRQUNiO1FBQ0FXO0lBQ0YsR0FBRyxFQUFFO0lBRUwsOENBQThDO0lBQzlDLE1BQU1DLHlCQUF5QmhDLGtEQUFXQSxDQUN4QyxDQUFDaUMsWUFBb0IxQjtRQUNuQnNCLHVCQUF1QixDQUFDSztZQUN0QixNQUFNQyxvQkFBb0IsSUFBSUwsSUFBSUksT0FBTyxtQ0FBbUM7WUFDNUUsTUFBTUUsbUJBQW1CRCxrQkFBa0JFLEdBQUcsQ0FBQ0o7WUFDL0NLLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJIO1lBQ25DLElBQUlBLHFCQUFxQjdCLFlBQVk7Z0JBQ25DLHVFQUF1RTtnQkFDdkUrQixRQUFRQyxHQUFHLENBQUM7Z0JBQ1pKLGtCQUFrQkssTUFBTSxDQUFDUDtZQUMzQixPQUFPO2dCQUNMLG1DQUFtQztnQkFDbkNFLGtCQUFrQk0sR0FBRyxDQUFDUixZQUFZMUI7WUFDcEM7WUFFQSxPQUFPLElBQUl1QixJQUFJSyxvQkFBb0Isb0RBQW9EO1FBQ3pGO0lBQ0YsR0FDQSxFQUFFO0lBR0osa0NBQWtDO0lBQ2xDLE1BQU1PLHVCQUF1QjFDLGtEQUFXQSxDQUN0QyxDQUFDdUIsUUFBZ0JoQjtRQUNmLElBQUlxQixvQkFBb0JlLElBQUksS0FBSyxHQUFHLE9BQU87UUFFM0MsTUFBTUMsbUNBQStDLEVBQUU7UUFFdkRsQixRQUFRbUIsT0FBTyxDQUFDLENBQUNDO1lBQ2YsSUFBSUEsQ0FBQyxDQUFDLGNBQWMsS0FBS3ZCLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlDLE1BQU13QixxQkFBcUJuQixvQkFBb0JTLEdBQUcsQ0FBQ1MsQ0FBQyxDQUFDLGNBQWM7Z0JBQ25FLElBQUlDLG9CQUFvQjt3QkFFcEJEO29CQURGLE1BQU1FLCtCQUNKRixFQUFBQSxzQkFBQUEsRUFBRXRCLFdBQVcsQ0FBQ3lCLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFekMsVUFBVSxLQUFLc0MsaUNBQTNDRCwwQ0FBQUEsb0JBQ0lsQyxVQUFVLEtBQUksRUFBRTtvQkFDdEJnQyxpQ0FBaUNPLElBQUksSUFDaENIO2dCQUVQO1lBQ0Y7UUFDRjtRQUVBLE9BQU90Qyx1QkFDTGtDLGtDQUNBckM7SUFFSixHQUNBO1FBQUNxQjtRQUFxQkY7S0FBUTtJQUdoQyxxQkFDRSw4REFBQzBCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDcEQsNkRBQVNBO2dCQUFDeUIsU0FBU0E7Z0JBQVNFLHFCQUFxQkE7Ozs7OztZQUNqREYsUUFBUUosR0FBRyxDQUFDLENBQUNDLFFBQVErQixzQkFDcEIsOERBQUNwRCxvRUFBYUE7b0JBRVpxQixRQUFRQTtvQkFDUksscUJBQXFCQTtvQkFDckIyQixvQkFBb0J2QjtvQkFDcEJVLHNCQUFzQkE7bUJBSmpCWTs7Ozs7Ozs7Ozs7QUFTZjtHQWpGd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRpbWV0YWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWV0YWJsZVwiO1xuaW1wb3J0IHsgQ291cnNlRGV0YWlscyB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ291cnNlRGV0YWlsc1wiO1xuaW1wb3J0IHsgQ291cnNlLCBBY3Rpdml0eSwgT2NjdXJyZW5jZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vLyBVdGlsaXR5IEZ1bmN0aW9uc1xuY29uc3Qgc29ydE9jY3VycmVuY2VzQnlOdW1iZXIgPSAob2NjdXJyZW5jZXM6IE9jY3VycmVuY2VbXSk6IE9jY3VycmVuY2VbXSA9PlxuICBfLnNvcnRCeShvY2N1cnJlbmNlcywgKG9jY3VycmVuY2UpID0+IHBhcnNlSW50KG9jY3VycmVuY2UuT2NjdXJyZW5jZSkpO1xuXG5jb25zdCBkb2VzT2NjdXJyZW5jZUNvbmZsaWN0ID0gKFxuICBzZWxlY3RlZEFjdGl2aXRpZXM6IEFjdGl2aXR5W10sXG4gIG9jY3VycmVuY2U6IE9jY3VycmVuY2Vcbik6IGJvb2xlYW4gPT5cbiAgb2NjdXJyZW5jZS5BY3Rpdml0aWVzLnNvbWUoKGFjdGl2aXR5KSA9PlxuICAgIHNlbGVjdGVkQWN0aXZpdGllcy5zb21lKFxuICAgICAgKHNlbGVjdGVkQWN0aXZpdHkpID0+XG4gICAgICAgIGFjdGl2aXR5LkRheSA9PT0gc2VsZWN0ZWRBY3Rpdml0eS5EYXkgJiZcbiAgICAgICAgKChhY3Rpdml0eVtcIkJlZ2luIHRpbWVcIl0gPj0gc2VsZWN0ZWRBY3Rpdml0eVtcIkJlZ2luIHRpbWVcIl0gJiZcbiAgICAgICAgICBhY3Rpdml0eVtcIkJlZ2luIHRpbWVcIl0gPCBzZWxlY3RlZEFjdGl2aXR5W1wiRW5kIHRpbWVcIl0pIHx8XG4gICAgICAgICAgKGFjdGl2aXR5W1wiRW5kIHRpbWVcIl0gPiBzZWxlY3RlZEFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSAmJlxuICAgICAgICAgICAgYWN0aXZpdHlbXCJFbmQgdGltZVwiXSA8PSBzZWxlY3RlZEFjdGl2aXR5W1wiRW5kIHRpbWVcIl0pIHx8XG4gICAgICAgICAgKGFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSA8PSBzZWxlY3RlZEFjdGl2aXR5W1wiQmVnaW4gdGltZVwiXSAmJlxuICAgICAgICAgICAgYWN0aXZpdHlbXCJFbmQgdGltZVwiXSA+PSBzZWxlY3RlZEFjdGl2aXR5W1wiRW5kIHRpbWVcIl0pKVxuICAgIClcbiAgKTtcblxuLy8gRmV0Y2ggQ291cnNlcyBEYXRhXG5jb25zdCBmZXRjaENvdXJzZXNEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8Q291cnNlW10+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb3Vyc2VfZGF0YV9maW5hbF9maXhlZC5qc29uXCIpO1xuICBjb25zdCBkYXRhOiBDb3Vyc2VbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEubWFwKChjb3Vyc2UpID0+ICh7XG4gICAgLi4uY291cnNlLFxuICAgIE9jY3VycmVuY2VzOiBzb3J0T2NjdXJyZW5jZXNCeU51bWJlcihjb3Vyc2UuT2NjdXJyZW5jZXMpLFxuICB9KSk7XG59O1xuXG4vLyBNYWluIEhvbWUgQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY291cnNlcywgc2V0Q291cnNlc10gPSB1c2VTdGF0ZTxDb3Vyc2VbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRPY2N1cnJlbmNlcywgc2V0U2VsZWN0ZWRPY2N1cnJlbmNlc10gPSB1c2VTdGF0ZTxcbiAgICBNYXA8c3RyaW5nLCBzdHJpbmc+XG4gID4obmV3IE1hcCgpKTtcblxuICAvLyBGZXRjaCBjb3Vyc2VzIHdoZW4gY29tcG9uZW50IG1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRDb3Vyc2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQ291cnNlc0RhdGEoKTtcbiAgICAgIHNldENvdXJzZXMoZGF0YSk7XG4gICAgfTtcbiAgICBsb2FkQ291cnNlcygpO1xuICB9LCBbXSk7XG5cbiAgLy8gSGFuZGxlIE9jY3VycmVuY2UgU2VsZWN0aW9uIGFuZCBVbnNlbGVjdGlvblxuICBjb25zdCBoYW5kbGVPY2N1cnJlbmNlU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKGNvdXJzZUNvZGU6IHN0cmluZywgb2NjdXJyZW5jZTogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRTZWxlY3RlZE9jY3VycmVuY2VzKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTZWxlY3Rpb25zID0gbmV3IE1hcChwcmV2KTsgLy8gQ2xvbmUgdGhlIGN1cnJlbnQgc2VsZWN0aW9ucyBtYXBcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IHVwZGF0ZWRTZWxlY3Rpb25zLmdldChjb3Vyc2VDb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IFNlbGVjdGlvbjogXCIsIGN1cnJlbnRTZWxlY3Rpb24pO1xuICAgICAgICBpZiAoY3VycmVudFNlbGVjdGlvbiA9PT0gb2NjdXJyZW5jZSkge1xuICAgICAgICAgIC8vIElmIHRoZSB1c2VyIGNsaWNrZWQgdGhlIHNlbGVjdGVkIG9jY3VycmVuY2UsIHVuc2VsZWN0IGl0IChyZW1vdmUgaXQpXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmUgaXQhXCIpO1xuICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb25zLmRlbGV0ZShjb3Vyc2VDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIHNlbGVjdCB0aGUgb2NjdXJyZW5jZVxuICAgICAgICAgIHVwZGF0ZWRTZWxlY3Rpb25zLnNldChjb3Vyc2VDb2RlLCBvY2N1cnJlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTWFwKHVwZGF0ZWRTZWxlY3Rpb25zKTsgLy8gUmV0dXJuIHRoZSBuZXcgdXBkYXRlZCBtYXAgdG8gdHJpZ2dlciBhIHJlLXJlbmRlclxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIENoZWNrIGlmIE9jY3VycmVuY2UgaXMgRGlzYWJsZWRcbiAgY29uc3QgaXNPY2N1cnJlbmNlRGlzYWJsZWQgPSB1c2VDYWxsYmFjayhcbiAgICAoY291cnNlOiBDb3Vyc2UsIG9jY3VycmVuY2U6IE9jY3VycmVuY2UpOiBib29sZWFuID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZE9jY3VycmVuY2VzLnNpemUgPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRBY3Rpdml0aWVzQnlPdGhlckNvdXJzZXM6IEFjdGl2aXR5W10gPSBbXTtcblxuICAgICAgY291cnNlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGlmIChjW1wiQ291cnNlIENvZGVcIl0gIT09IGNvdXJzZVtcIkNvdXJzZSBDb2RlXCJdKSB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPY2N1cnJlbmNlID0gc2VsZWN0ZWRPY2N1cnJlbmNlcy5nZXQoY1tcIkNvdXJzZSBDb2RlXCJdKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRPY2N1cnJlbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE9jY3VycmVuY2VBY3Rpdml0aWVzID1cbiAgICAgICAgICAgICAgYy5PY2N1cnJlbmNlcy5maW5kKChvKSA9PiBvLk9jY3VycmVuY2UgPT09IHNlbGVjdGVkT2NjdXJyZW5jZSlcbiAgICAgICAgICAgICAgICA/LkFjdGl2aXRpZXMgfHwgW107XG4gICAgICAgICAgICBzZWxlY3RlZEFjdGl2aXRpZXNCeU90aGVyQ291cnNlcy5wdXNoKFxuICAgICAgICAgICAgICAuLi5zZWxlY3RlZE9jY3VycmVuY2VBY3Rpdml0aWVzXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkb2VzT2NjdXJyZW5jZUNvbmZsaWN0KFxuICAgICAgICBzZWxlY3RlZEFjdGl2aXRpZXNCeU90aGVyQ291cnNlcyxcbiAgICAgICAgb2NjdXJyZW5jZVxuICAgICAgKTtcbiAgICB9LFxuICAgIFtzZWxlY3RlZE9jY3VycmVuY2VzLCBjb3Vyc2VzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNiBzcGFjZS15LTZcIj5cbiAgICAgIHsvKiBQYXNzIHRoZSBzZWxlY3RlZCBvY2N1cnJlbmNlcyB0byB0aGUgVGltZXRhYmxlIGNvbXBvbmVudCAqL31cbiAgICAgIDxUaW1ldGFibGUgY291cnNlcz17Y291cnNlc30gc2VsZWN0ZWRPY2N1cnJlbmNlcz17c2VsZWN0ZWRPY2N1cnJlbmNlc30gLz5cbiAgICAgIHtjb3Vyc2VzLm1hcCgoY291cnNlLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q291cnNlRGV0YWlsc1xuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgY291cnNlPXtjb3Vyc2V9XG4gICAgICAgICAgc2VsZWN0ZWRPY2N1cnJlbmNlcz17c2VsZWN0ZWRPY2N1cnJlbmNlc31cbiAgICAgICAgICBvbk9jY3VycmVuY2VTZWxlY3Q9e2hhbmRsZU9jY3VycmVuY2VTZWxlY3R9XG4gICAgICAgICAgaXNPY2N1cnJlbmNlRGlzYWJsZWQ9e2lzT2NjdXJyZW5jZURpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIlRpbWV0YWJsZSIsIkNvdXJzZURldGFpbHMiLCJfIiwic29ydE9jY3VycmVuY2VzQnlOdW1iZXIiLCJvY2N1cnJlbmNlcyIsInNvcnRCeSIsIm9jY3VycmVuY2UiLCJwYXJzZUludCIsIk9jY3VycmVuY2UiLCJkb2VzT2NjdXJyZW5jZUNvbmZsaWN0Iiwic2VsZWN0ZWRBY3Rpdml0aWVzIiwiQWN0aXZpdGllcyIsInNvbWUiLCJhY3Rpdml0eSIsInNlbGVjdGVkQWN0aXZpdHkiLCJEYXkiLCJmZXRjaENvdXJzZXNEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWFwIiwiY291cnNlIiwiT2NjdXJyZW5jZXMiLCJIb21lIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJzZWxlY3RlZE9jY3VycmVuY2VzIiwic2V0U2VsZWN0ZWRPY2N1cnJlbmNlcyIsIk1hcCIsImxvYWRDb3Vyc2VzIiwiaGFuZGxlT2NjdXJyZW5jZVNlbGVjdCIsImNvdXJzZUNvZGUiLCJwcmV2IiwidXBkYXRlZFNlbGVjdGlvbnMiLCJjdXJyZW50U2VsZWN0aW9uIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRlbGV0ZSIsInNldCIsImlzT2NjdXJyZW5jZURpc2FibGVkIiwic2l6ZSIsInNlbGVjdGVkQWN0aXZpdGllc0J5T3RoZXJDb3Vyc2VzIiwiZm9yRWFjaCIsImMiLCJzZWxlY3RlZE9jY3VycmVuY2UiLCJzZWxlY3RlZE9jY3VycmVuY2VBY3Rpdml0aWVzIiwiZmluZCIsIm8iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5kZXgiLCJvbk9jY3VycmVuY2VTZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});