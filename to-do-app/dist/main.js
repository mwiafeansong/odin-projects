/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 13px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.5rem;\r\n    color: #444;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide {\r\n        padding: 0;\r\n        width: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --base-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--base-font);\r\n    display: flex;\r\n}\r\n\r\nh1 {\r\n    font-size: 1.8rem;\r\n    font-style: italic;\r\n}\r\n\r\nbutton {\r\n    font-family: var(--base-font);\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-icon {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.btn-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-icon img {\r\n    width: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nform {\r\n    width: 300px;\r\n    background-color: #fff;\r\n    padding: 0 20px 15px 20px;\r\n    border-radius: 10px;\r\n    position: absolute;\r\n    inset: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    box-shadow: 3px 3px 5px grey;\r\n    visibility: hidden;\r\n    z-index: 2;\r\n    height: fit-content;\r\n}\r\n\r\nform input, select, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: none;\r\n    background-color: #ddd;\r\n    margin-top: 4px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    padding: 3px 5px;\r\n}\r\n\r\nform input:focus,\r\nform select:focus,\r\nform textarea:focus {\r\n    outline: none;\r\n    border: 1px solid #555;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.form-btns {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n    gap: 8px;\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    padding: 5px 15px;\r\n    border-radius: 5px;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:not(.cancel) {\r\n    background-color: #ccc;\r\n}\r\n\r\nform button:not(.cancel):hover {\r\n    background-color: #999;\r\n}\r\n\r\n.cancel {\r\n    background-color: #f22;\r\n}\r\n\r\n.backdrop {\r\n    position: fixed;\r\n    inset: 0;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n    opacity: 0;\r\n}\r\n\r\n.backdrop.show {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n/* ASIDE */\r\naside {\r\n    background-color: #eee;\r\n    min-height: 100vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    width: 30%;\r\n    z-index: 1;\r\n    transition: .2s ease-in;\r\n    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);\r\n    padding: 20px;\r\n}\r\n\r\n.aside-head {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.close-aside {\r\n    visibility: hidden;\r\n}\r\n\r\n.add-project {\r\n    display: block;\r\n    margin: 15px auto;\r\n    padding: 7px 25px;\r\n    border: none;\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n}\r\n\r\n.add-project:hover {\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\naside h2 {\r\n    margin-top: 20px;\r\n    font-size: 1.2rem;\r\n    padding-left: 25px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.tablink {\r\n    display: block;\r\n    padding: 7px 8px;\r\n    margin-bottom: 3px;\r\n    width: 100%;\r\n    text-align: start;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tablink:hover {\r\n    background-color: #ccc;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.tablink.first {\r\n    border-left: 7px solid #2f2;\r\n}\r\n\r\n.tablink.second {\r\n    border-left: 7px solid #ff0;\r\n}\r\n\r\n.tablink.third {\r\n    border-left: 7px solid #f22;\r\n}\r\n\r\n.show {\r\n    background-color: #ccc;\r\n}\r\n\r\n\r\n/* MAIN */\r\nmain {\r\n    position: relative;\r\n    width: 70%;\r\n}\r\n\r\n.hamburger {\r\n    position: fixed;\r\n    right: 13px;\r\n    top: 5px;\r\n    visibility: hidden;\r\n}\r\n\r\n.tab-content {\r\n    min-height: 100vh;\r\n    padding: 50px 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tab-content:not(#today){\r\n    display: none;\r\n}\r\n\r\n.tab-content#today {\r\n    display: block;\r\n}\r\n\r\n.special-contents .task-btns,\r\n.special-contents input[type=checkbox] { \r\n    display: none;\r\n}\r\n\r\n/* SPECIAL SECTION */\r\n.special-contents h3 {\r\n    font-size: 1.5rem;\r\n    color: #444;\r\n}\r\n\r\n.today-para,\r\n.upcoming-para,\r\n.important-para {\r\n    padding: 30px;\r\n    font-size: 1.5rem;\r\n    font-style: italic;\r\n    text-align: center;\r\n}\r\n\r\n/* PROJECT TABS */\r\n.project-head {\r\n    border-bottom : 1px solid #ccc;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.title-addtask-delete {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.project-head h3 {\r\n    font-size: 1.55rem;\r\n    margin-left: 0;\r\n    margin-right: auto;\r\n}\r\n\r\n#myproject .btn-icon:not(.plus-task) {\r\n    display: none;\r\n}\r\n\r\n.task {\r\n    padding-top: 25px;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    padding-bottom: 3px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.task-titled {\r\n    font-size: 1.1rem;\r\n    margin-top: -2px;\r\n}\r\n\r\n.task-titled.unchecked {\r\n    color: #22f;\r\n}\r\n\r\n.task-titled.checked {\r\n    color: #777;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.expand-icon {\r\n    margin-right: 0;\r\n    margin-left: auto;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n\r\n.expand-icon:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.expand-icon img {\r\n    width: 15px;\r\n}\r\n\r\n.task p, .task-btns {\r\n    padding-top: 5px;\r\n}\r\n\r\n.priority {\r\n    padding: 0px 5px;\r\n    background-color: transparent;\r\n    font-size: 0.85rem;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority.Low {\r\n    border: 3px solid #22f;\r\n}\r\n\r\n.priority.Medium {\r\n    border: 3px solid #ffcc00\r\n}\r\n\r\n.priority.High {\r\n    border: 3px solid #f22;\r\n}\r\n\r\n.task-btns {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 8px;\r\n}\r\n\r\n.btn-in-main {\r\n    padding: 3px 7px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    font-family: inherit;\r\n    font-size: 1rem;\r\n}\r\n\r\n.btn-in-main:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.edit {\r\n    background-color: #ddd;\r\n}\r\n\r\n.edit:hover {\r\n    background-color: #999;\r\n}\r\n\r\n.delete {\r\n    background-color: #f33222;\r\n}\r\n\r\n\r\n/* JS styles */\r\n.not-specified {\r\n    font-style: italic;\r\n}\r\n\r\n.invisible {\r\n    display: none;\r\n}\r\n\r\n.rotate {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n\r\n@media screen and (max-width: 580px) {\r\n    aside {\r\n        position: absolute;\r\n        width: 80%;\r\n        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n    .close-aside {\r\n        visibility: visible;\r\n    }\r\n\r\n    main {\r\n        width: 100vw;\r\n    }\r\n\r\n    .hamburger {\r\n        visibility: visible;\r\n    }\r\n\r\n    .hide {\r\n        padding: 0;\r\n        width: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addInputsToProjectForm": () => (/* binding */ addInputsToProjectForm),
/* harmony export */   "addInputsToTaskForm": () => (/* binding */ addInputsToTaskForm),
/* harmony export */   "clearInputs": () => (/* binding */ clearInputs),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "takeProjectInputs": () => (/* binding */ takeProjectInputs),
/* harmony export */   "takeTaskInputs": () => (/* binding */ takeTaskInputs)
/* harmony export */ });

const backDrop  = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

function showForm(formType) {
    backDrop.classList.add('show');
    formType.style.visibility = 'visible';
    aside.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    aside.style.pointerEvents = 'none';
}

function removeForm(formType) {
    backDrop.classList.remove('show');
    formType.style.visibility = 'hidden';
    aside.style.backgroundColor = '#eee';
    aside.style.pointerEvents = 'all';
}

function clearInputs(formType) {
    const labels = formType.children;
    for (const label of labels) {
        if (label.tagName === 'LABEL' && (label.lastElementChild.tagName === 'INPUT' || label.lastElementChild.tagName === 'TEXTAREA')) {
            label.lastElementChild.value = '';
        }
    }
}

function takeProjectInputs(titleInput, descriptionInput) {

    let projectInputs = [];
    projectInputs.push(titleInput.value, descriptionInput.value);

    return projectInputs;
}

function takeTaskInputs(titleInput, descriptionInput, priorityInput, dueDateInput) {

    let taskInputs = [];
    taskInputs.push(titleInput.value, descriptionInput.value, priorityInput.value, dueDateInput.value);

    return taskInputs;
}

function addInputsToProjectForm(title, description) {
    projectTitleEdit.value = title;
    projectDescriptionEdit.value = description;

}

function addInputsToTaskForm(title, description, priority, dueDate) {
    taskTitleEdit.value = title;
    taskDescriptionEdit.value = description;
    taskPriorityEdit.value = priority;
    taskDueDateEdit.value = dueDate;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myProjects": () => (/* binding */ myProjects)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabdisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabdisplay */ "./src/tabdisplay.js");
/* harmony import */ var _projectDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom */ "./src/projectDom.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _taskDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskDom */ "./src/taskDom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");








const projectForm = document.querySelector('.project-form');
const projectFormEdit = document.querySelector('.project-form-edit');
const addProjectBtn = document.querySelector('.add-project');
const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');
const allProjectsContainer = document.querySelector('.project-contents');
const cancelBtns = document.querySelectorAll('.cancel');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-aside');
let projectId;
let needed = [];
let taskNeeds = [];




let myProjects = JSON.parse(localStorage.getItem("projects")) || [];

//adds the default project to storage if this is the browser's first visit
if (myProjects.length === 0) {
    const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_5__.Project('My Project', 'This is the default project');
    defaultProject.addProjectToStorage();
}

//displays each project in local storage and its tasks to the DOM
myProjects.forEach((proj) => {
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.AddFromStorage)(proj);

    if (proj.projectTasks.length !== 0) {
        proj.projectTasks.forEach((task) => {
            (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.addTaskFromStorage)(task, myProjects.indexOf(proj) + 3)
        })
    }
})



;(0,_tabdisplay__WEBPACK_IMPORTED_MODULE_1__["default"])();

hamburger.addEventListener('click', _tabdisplay__WEBPACK_IMPORTED_MODULE_1__.displaySidebar);
closeBtn.addEventListener('click', _tabdisplay__WEBPACK_IMPORTED_MODULE_1__.removeSidebar);

//to remove a form when cancel button is clicked
cancelBtns.forEach((cancelBtn) => {
    cancelBtn.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.style.visibility === 'visible') {
            (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(e.target.parentElement.parentElement);
        };
    });   
});


//add a new Project from a form
addProjectBtn.addEventListener('click', () => {
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(projectForm);
});

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.addAProject)();
});



allProjectsContainer.addEventListener('click', (e) => {
    //to add a new task -  in continuity with taskForm event listener below
    if (e.target.parentElement.classList.contains('plus-task')) {
        (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(taskForm);
        projectId = (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.getProjectOfTask)(e);
    }

    if (e.target.classList.contains('edit-icon')) {
        //get the target's dataId, the title element and description element
        //these will be used to edit the project title and description when the form is submitted
        needed = (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.showEditFormAndGetEditBtnDataId)(e);
    }
    
    //delete a project
    if (e.target.classList.contains('delete-icon')) {
        (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(e);
    }

    //delete a task
    if (e.target.classList.contains('delete')) {
        (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.deleteTask)(e);
    }

    //get the target's dataId, it's projectbody data id, title, description, priority and duedate elements
    //these will be used to edit the task details when the form is submitted
    if (e.target.classList.contains('edit')) {
        taskNeeds = (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.getTaskElements)(e);
    }

    //check a task
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.checkTask)(e);
    }
});


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.addATask)(projectId);
})


projectFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    (0,_projectDom__WEBPACK_IMPORTED_MODULE_2__.editProject)(needed);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(projectFormEdit);
})


taskFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    (0,_taskDom__WEBPACK_IMPORTED_MODULE_4__.editTask)(taskNeeds);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(taskFormEdit);
})





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addAProjectToStorage": () => (/* binding */ addAProjectToStorage),
/* harmony export */   "deleteProjectFromStorage": () => (/* binding */ deleteProjectFromStorage),
/* harmony export */   "editProjectInStorage": () => (/* binding */ editProjectInStorage),
/* harmony export */   "getTheProjectDomId": () => (/* binding */ getTheProjectDomId)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");




const projectTitle = document.querySelector('#project-title');
const projectDescription = document.querySelector('#project-description');

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addProjectToStorage() {
        ___WEBPACK_IMPORTED_MODULE_1__.myProjects.push(this);
    }

    // getProjectId() {
    //     return myProjects.indexOf(this);
    // }
    
    projectTasks = [];

    // addTask(task) {
    //     this.projectTasks.push(task);
    // }

}


//takes the inputs from the form, creates a project object, stores it in memory
function addAProjectToStorage() {
    //take the user's inputs from the form
    let projectInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.takeProjectInputs)(projectTitle, projectDescription);
        
    //instantiate a new project object with the inputs taken and store it
    const newProject = new Project(projectInputs[0], projectInputs[1]);
    newProject.addProjectToStorage();
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

    return newProject;
}

//gets the data-id of the project
function getTheProjectDomId(newProject) {
    let projectId = ___WEBPACK_IMPORTED_MODULE_1__.myProjects.indexOf(newProject);
    projectId = projectId + 3;

    return projectId;
}


//finds the project in array of all projects in storage and deletes it
function deleteProjectFromStorage(btnDataId, parent) {
    if (btnDataId === parent.getAttribute('data-id')) {
        ___WEBPACK_IMPORTED_MODULE_1__.myProjects.splice(parseInt(btnDataId) - 3, 1);
        localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));
    }
}


//changes projects details in storage
function editProjectInStorage(btnDataId, newTitle, newDescription) {
    
    let projectIndex = parseInt(btnDataId) - 3;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].title = newTitle;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].description = newDescription;
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

}


/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddFromStorage": () => (/* binding */ AddFromStorage),
/* harmony export */   "addAProject": () => (/* binding */ addAProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject),
/* harmony export */   "projectBodies": () => (/* binding */ projectBodies),
/* harmony export */   "showEditFormAndGetEditBtnDataId": () => (/* binding */ showEditFormAndGetEditBtnDataId)
/* harmony export */ });
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/file-edit-outline.svg */ "./src/images/file-edit-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/images/trash-can-outline.svg");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _tabdisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabdisplay */ "./src/tabdisplay.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");








const projectForm = document.querySelector('.project-form');
const today = document.querySelector('#today');
const todayLink = document.querySelector('.first');
const allProjectsContainer = document.querySelector('.project-contents');
const projectFormEdit = document.querySelector('.project-form-edit');
const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');


let projectBodies = [];
const allTaskContainers = document.querySelectorAll('.project-body');
for (const container of allTaskContainers) {
    if (container.getAttribute('data-id') === '3') {
        projectBodies.push(container);
    }
}



function addAProject() {
    let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_5__.addAProjectToStorage)();
    let projectId = (0,_project__WEBPACK_IMPORTED_MODULE_5__.getTheProjectDomId)(newProject);
    appendProjectToDom(newProject, projectId);
    appendTabLink(newProject, projectId);
    
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.removeForm)(projectForm);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.clearInputs)(projectForm);
    
    //this is so new tablink and tabcontent are added to the flow
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__["default"])();
}

function AddFromStorage(project) {
    let projectId = (0,_project__WEBPACK_IMPORTED_MODULE_5__.getTheProjectDomId)(project);
    appendProjectToDom(project, projectId);
    tablink(project.title, projectId);
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__["default"])();
}


function deleteProject(e) {

    let parent = e.target.parentElement.parentElement.parentElement.parentElement;
    let btnDataId = e.target.parentElement.getAttribute('data-id');

    (0,_project__WEBPACK_IMPORTED_MODULE_5__.deleteProjectFromStorage)(btnDataId, parent);
    deleteProjectFromDom(btnDataId, parent);
}


function editProject(needed) {
    let editInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_3__.takeProjectInputs)(projectTitleEdit, projectDescriptionEdit);

    (0,_project__WEBPACK_IMPORTED_MODULE_5__.editProjectInStorage)(needed[0], editInputs[0], editInputs[1]);
    editProjectInDom(needed[0], editInputs, needed[1], needed[2]);
}


//creates the project and adds it to DOM
function appendProjectToDom(newProject, projectId) {
    const allProjectsContainer = document.querySelector('.project-contents');

    let myNewproject = project(newProject.title, newProject.description, projectId);
    
    allProjectsContainer.appendChild(myNewproject);
}


//creates the tablink and ensures that its contents are displayed immediately the form is submitted
function appendTabLink(newProject, projectId) {
    let newTabLink = tablink(newProject.title, projectId);
    (0,_tabdisplay__WEBPACK_IMPORTED_MODULE_4__.openPage)(newProject.title.toLowerCase().replace(/ /g, ''), newTabLink);
}


//creates tablink for project
function tablink(projectTitle, projectId) {
    const projectBtns = document.querySelector('.project-btns');

    const listItem = document.createElement('li');
    const tabLink = document.createElement('button');
    tabLink.className = 'tablink project-btn';
    tabLink.setAttribute('data-id', projectId);
    tabLink.textContent = projectTitle;
    listItem.appendChild(tabLink);

    projectBtns.appendChild(listItem);

    //we will use this to open the tablink's page content right after it is created
    return tabLink;
}


//creates project elements to be added to DOM
function project(title, description, dataId) {
    

    const newProject = document.createElement('div');
    newProject.setAttribute('data-id', dataId);
    newProject.id = title.toLowerCase().replace(/ /g, '');
    newProject.className = 'tab-content';

    const projectHead = document.createElement('div');
    projectHead.className = 'project-head';
    const titleAddTaskDelete = document.createElement('div');
    titleAddTaskDelete.className = 'title-addtask-delete';
    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-titled';
    projectTitle.textContent = title;
    titleAddTaskDelete.appendChild(projectTitle);

    let btnIcons = [];
    for (let i = 0; i < 3; i++) {
        let btnIcon = document.createElement('button');
        btnIcon.className = 'btn-icon';
        btnIcons.push(btnIcon);
        titleAddTaskDelete.appendChild(btnIcon);
    }
    
    const plusImage = new Image();
    plusImage.src = _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
    const editImage = new Image();
    editImage.src = _images_file_edit_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    editImage.className = 'edit-icon';
    const trashImage = new Image();
    trashImage.src = _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__;
    trashImage.className = 'delete-icon';

    btnIcons[0].appendChild(plusImage);
    btnIcons[0].classList.add('plus-task');
    btnIcons[1].appendChild(editImage);
    btnIcons[1].setAttribute('data-id', dataId);
    btnIcons[2].appendChild(trashImage);
    btnIcons[2].setAttribute('data-id', dataId)

    projectHead.appendChild(titleAddTaskDelete);

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-described';
    projectDescription.textContent = description;
    projectHead.appendChild(projectDescription);

    const projectBody = document.createElement('div');
    projectBody.setAttribute('data-id', dataId);
    projectBody.className = 'project-body';
    projectBodies.push(projectBody);

    newProject.append(projectHead, projectBody);

    return newProject;
}



function deleteProjectFromDom(btnDataId, parent) {

    //we remove the content page of that project
    if (btnDataId === parent.getAttribute('data-id')) {
        allProjectsContainer.removeChild(parent);
        today.style.display = 'block';
        todayLink.style.backgroundColor = '#ccc';
    }

    //we remove the link in the sidebar corresponding to that project
    const tabLinks = document.querySelectorAll('.project-btn');
    const projectBtns = document.querySelector('.project-btns');
    for (const link of tabLinks) {
        if (btnDataId === link.getAttribute('data-id')) {
            projectBtns.removeChild(link.parentElement);
            break;
        }
    }
}

function editProjectInDom(btnDataId, editInputs, titleElement, descriptionElement) {
    
    titleElement.textContent = editInputs[0];
    descriptionElement.textContent = editInputs[1];

    const tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        if (link.getAttribute('data-id') === btnDataId) {
            link.textContent = editInputs[0];
        }
    }
}


//the edit button data id wiil be used to edit that project in storage
function showEditFormAndGetEditBtnDataId(e) {
    let needs = [];
    let titleElement = e.target.parentElement.previousElementSibling.previousElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.nextElementSibling
    let description = descriptionElement.textContent;
    let btnDataId = e.target.parentElement.getAttribute('data-id');
    needs.push(btnDataId, titleElement, descriptionElement);

    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.showForm)(projectFormEdit);
    (0,_forms__WEBPACK_IMPORTED_MODULE_3__.addInputsToProjectForm)(title, description);

    return needs;
}



/***/ }),

/***/ "./src/tabdisplay.js":
/*!***************************!*\
  !*** ./src/tabdisplay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayPage),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar),
/* harmony export */   "openPage": () => (/* binding */ openPage),
/* harmony export */   "removeSidebar": () => (/* binding */ removeSidebar)
/* harmony export */ });
const aside = document.querySelector('aside');

function openPage(page, element) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = '';
    }

    tabLinks[0].classList.remove('show');
    
    document.getElementById(page).style.display = 'block';
    element.style.backgroundColor = '#ccc';
}


function displayPage() {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        for (const content of tabContents) {
             if (link.getAttribute('data-id') === content.getAttribute('data-id')) {
                link.addEventListener('click', (e) => {
                    openPage(content.getAttribute('id'), e.target);
                    removeSidebar();
                })
             }
         }
     }
}

function displaySidebar() {
    aside.classList.remove('hide');
}

function removeSidebar() {
    aside.classList.add('hide')
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTaskToStorage": () => (/* binding */ addTaskToStorage),
/* harmony export */   "deleteTaskFromStorage": () => (/* binding */ deleteTaskFromStorage),
/* harmony export */   "editTaskInStorage": () => (/* binding */ editTaskInStorage),
/* harmony export */   "getIndexOfTask": () => (/* binding */ getIndexOfTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");




const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');
const taskPriority = document.querySelector('#priority');
const taskDueDate = document.querySelector('#due-date');


class Task extends _project__WEBPACK_IMPORTED_MODULE_0__.Project {
    constructor(title, description, priority, dueDate) {
        super(title, description);
        this.priority = priority;
        this.dueDate = dueDate;
    }   
}


//takes the inputs from the task form, creates a task with those input and adds the task to its calling project
function addTaskToStorage(projectId) {
    let taskInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.takeTaskInputs)(taskTitle, taskDescription, taskPriority, taskDueDate);
    let newTask = new Task(taskInputs[0], taskInputs[1], taskInputs[2], taskInputs[3]);
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId - 3].projectTasks.push(newTask);

    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

    return newTask;
}


//gets the index of the newTask added in its parent project's projectTasks array
//this will be used to give a dataId to each task created in that particular project
function getIndexOfTask(projectId, newTask) {

    return ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId - 3].projectTasks.indexOf(newTask);

}


function deleteTaskFromStorage(e, grandParent) {
    let projectId = grandParent.getAttribute('data-id');
    projectId = parseInt(projectId) - 3;

    let taskId = e.target.getAttribute('data-id');

    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectId].projectTasks.splice(taskId, 1);

    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));
}


function editTaskInStorage(btnDataId, projectBodyDataId, newTitle, newDescription, newPriority, newDueDate) {
    
    let projectIndex = parseInt(projectBodyDataId) - 3;
    let taskIndex = parseInt(btnDataId);

    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].title = newTitle;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].description = newDescription;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].priority = newPriority;
    ___WEBPACK_IMPORTED_MODULE_1__.myProjects[projectIndex].projectTasks[taskIndex].dueDate = newDueDate;
    
    localStorage.setItem("projects", JSON.stringify(___WEBPACK_IMPORTED_MODULE_1__.myProjects));

}


/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addATask": () => (/* binding */ addATask),
/* harmony export */   "addTaskFromStorage": () => (/* binding */ addTaskFromStorage),
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getProjectOfTask": () => (/* binding */ getProjectOfTask),
/* harmony export */   "getTaskElements": () => (/* binding */ getTaskElements)
/* harmony export */ });
/* harmony import */ var _images_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icon-arrow-down.svg */ "./src/images/icon-arrow-down.svg");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _projectDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDom */ "./src/projectDom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");







const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

const important = document.querySelector('.important-special');
const todays = document.querySelector('.today-special');
const thisWeeks = document.querySelector('.upcoming-special');

const importantPara = document.querySelector('.important-para');
const todayPara = document.querySelector('.today-para');
const upcomingPara = document.querySelector('.upcoming-para');
let importantTasks = [];
let allTasks = [];
let todaysTasks = [];
let thisWeeksTasks = [];


function addATask(projectId) {
    let newTask = (0,_task__WEBPACK_IMPORTED_MODULE_3__.addTaskToStorage)(projectId);
    let taskId = (0,_task__WEBPACK_IMPORTED_MODULE_3__.getIndexOfTask)(projectId, newTask);
    appendTaskToDom(projectId, newTask, taskId);

    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.clearInputs)(taskForm);
    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.removeForm)(taskForm);
}

function addTaskFromStorage(task, projectId) {
    let taskId = (0,_task__WEBPACK_IMPORTED_MODULE_3__.getIndexOfTask)(projectId, task);
    appendTaskToDom(projectId, task, taskId);
}


function deleteTask(e) {
    let parent = e.target.parentElement.parentElement.parentElement;
    let grandParent = e.target.parentElement.parentElement.parentElement.parentElement;
    
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.deleteTaskFromStorage)(e, grandParent);
    deleteTaskFromDom(grandParent, parent);   
}

//taskNeeds - [editBtndataid, projectId, titleelement, descriptionelement, etc.]
function editTask(taskNeeds) {
    let editTaskInputs = (0,_forms__WEBPACK_IMPORTED_MODULE_1__.takeTaskInputs)(taskTitleEdit, taskDescriptionEdit, taskPriorityEdit, taskDueDateEdit);
    
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.editTaskInStorage)(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    editTaskInDom(editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3], taskNeeds[2], taskNeeds[3], taskNeeds[4], taskNeeds[5], taskNeeds[0], taskNeeds[1]);
    editSpecialTask(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    
}


function checkTask(e) {
    let taskTitle = e.target.nextElementSibling;
    check(e, taskTitle);

    let dataId = e.target.getAttribute('data-id');
    let projectDataId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    let taskPriority = e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild;
    let taskDueDate = taskPriority.parentElement.nextElementSibling.lastElementChild.textContent;

    //looks through the 'important' section to check selected tasks as well
    if (taskPriority.classList.contains('High')) {
        verifyIdAndCheck(e, importantTasks, dataId, projectDataId);
    }

    //looks through todays tasks to see if the item is there and check it there as well
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDueDate))) {
        verifyIdAndCheck(e, todaysTasks, dataId, projectDataId);
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(taskDueDate))) {
        verifyIdAndCheck(e, thisWeeksTasks, dataId, projectDataId);
    }
}

//looks through an array containing specific tasks to check them as well if they are there 
function verifyIdAndCheck(e, tasks, dataId, projectDataId) {
    for (const task of tasks) {
        let taskTitleElement = task.firstElementChild.firstElementChild.nextElementSibling;
        if (taskTitleElement.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
                
            check(e, taskTitleElement);
        } 
    }
}

function check(e, taskTitle) {
    
    if (e.target.checked) {
        taskTitle.classList.remove('unchecked');
        taskTitle.classList.add('checked');
    } else {
        taskTitle.classList.add('unchecked');
        taskTitle.classList.remove('checked');
    }
}


//gets the data Id of the project 'whose add task' button was clicked. This will be used to add that task to its project
function getProjectOfTask(e) {
    let parentProject = e.target.parentElement.parentElement.parentElement.parentElement;
    let parentProjectId = parentProject.getAttribute('data-id');

    return parseInt(parentProjectId);
}


//adds the task created to the DOM
function appendTaskToDom(projectId, newTask, taskId) {
    let myTask = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask2 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask3 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask4 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);

    
    //to specify which project to add the task to
    _projectDom__WEBPACK_IMPORTED_MODULE_2__.projectBodies[projectId - 3].appendChild(myTask);
    //all tasks created are put in this array. We will loop througth this to find today's tasks
    allTasks.push(myTask);

    //appends the task to the 'important' section if its priority is high
    if (newTask.priority === 'High') {
        importantPara.style.display = 'none';
        important.appendChild(myTask2);
        importantTasks.push(myTask2);
    }

    let dueDate = new Date(newTask.dueDate);
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(dueDate)) {
        todayPara.style.display = 'none';
        todays.appendChild(myTask3);
        todaysTasks.push(myTask3);
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(dueDate)) {
        upcomingPara.style.display = 'none';
        thisWeeks.appendChild(myTask4);
        thisWeeksTasks.push(myTask4);
    }
}


//creates task elements to be added to DOM
function task(title, description, priority, dueDate, taskId, projectId) {
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.setAttribute('data-id', taskId);
    newTask.setAttribute('project-data-id', projectId);

    const taskHead = document.createElement('div');
    taskHead.className = 'task-head';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('data-id', taskId);
    const taskTitle = document.createElement('h4');
    taskTitle.className = 'task-titled unchecked';
    taskTitle.setAttribute('data-id', taskId);
    taskTitle.textContent = title;

    const expandBtn = document.createElement('button');
    expandBtn.className = 'expand-icon';
    const expandImage = new Image();
    expandImage.src = _images_icon_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__;
    expandBtn.appendChild(expandImage);

    taskHead.append(check, taskTitle, expandBtn);

    const taskDetails = document.createElement('div');
    document.className = 'task-details';
    
    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-described';
    if (!description || !(description.trim())) {
        taskDescription.classList.add('not-specified');
        taskDescription.textContent = 'No description provided';
    } else {
        taskDescription.textContent = description;
    }
    
    const taskPriority = document.createElement('p');
    taskPriority.textContent = 'Priority: ';
    const priorityBtn = document.createElement('button');
    priorityBtn.className = 'priority';
    priorityBtn.classList.add(priority);
    priorityBtn.textContent = priority;
    
    taskPriority.appendChild(priorityBtn);

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = 'Due date: ';
    const dueDateSpan = document.createElement('span');
    if (dueDate !== '') {
        dueDateSpan.textContent = dueDate;
    } else {
        dueDateSpan.classList.add('not-specified');
        dueDateSpan.textContent = 'Not specified';
    }
    
    taskDueDate.appendChild(dueDateSpan);

    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.className = 'task-btns';
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-in-main edit';
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('data-id', taskId)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-in-main delete';
    deleteBtn.setAttribute('data-id', taskId);
    deleteBtn.textContent = 'Delete';
    taskBtnsContainer.append(editBtn, deleteBtn);

    taskDetails.append(taskDescription, taskPriority, taskDueDate, taskBtnsContainer);

    expandImage.addEventListener('click', (e) => {
        e.target.classList.toggle('rotate');
        taskDetails.classList.toggle('invisible');
    })

    newTask.append(taskHead, taskDetails);

    return newTask;
}

function deleteTaskFromDom(grandParent, parent) {

    grandParent.removeChild(parent);

    let taskId = parent.getAttribute('data-id');
    let projectDataId = grandParent.getAttribute('data-id');
    let taskPriorityElement = parent.lastElementChild.firstElementChild.nextElementSibling.lastElementChild
    let taskDueDate = taskPriorityElement.parentElement.nextElementSibling.lastElementChild.textContent;
    
    //deletes the task from the 'important' section as well if it is there
    if (taskPriorityElement.classList.contains('High')) {
        verifyAndDelete(importantTasks, important, taskId, projectDataId, importantPara);
    }

    //deletes the task if it is in the 'today' section as well
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDueDate))) {
        verifyAndDelete(todaysTasks, todays, taskId, projectDataId, todayPara);
    }

    //delete if in this week section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(taskDueDate))) {
        verifyAndDelete(thisWeeksTasks, thisWeeks, taskId, projectDataId, upcomingPara);
    }

}

//delete task from a section
function verifyAndDelete(tasks, section, taskId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === taskId && task.getAttribute('project-data-id') === projectDataId) {
            section.removeChild(task);
            tasks.splice(tasks.indexOf(task), 1);

            if (tasks.length === 0) {
                sectionPara.style.display = 'block';
            }
            break;
        }
    }
}

//these will be used to edit the element contents
function getTaskElements(e) {
    let taskNeeds = [];
    let titleElement = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.firstElementChild;
    let description;
    if (descriptionElement.textContent === 'No description provided') {
        description = '';
    } else {
        description = descriptionElement.textContent;
    }
    let priorityElement = e.target.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
    let priority = priorityElement.textContent;
    let dueDateElement = e.target.parentElement.previousElementSibling.lastElementChild;
    let dueDate = dueDateElement.textContent;

    let taskProjectBodyDataId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
    let editBtnDataId = e.target.getAttribute('data-id');
    
    taskNeeds.push(editBtnDataId, taskProjectBodyDataId, titleElement, descriptionElement, priorityElement, dueDateElement);

    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.showForm)(taskFormEdit);
    (0,_forms__WEBPACK_IMPORTED_MODULE_1__.addInputsToTaskForm)(title, description, priority, dueDate);

    return taskNeeds;   
}


//fill in the task details with the new inputs taken
function editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement) {
    titleElement.textContent = title;
    
    
    if (!description || !(description.trim())) {
        descriptionElement.textContent = 'No description provided';
        if (!descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.add('not-specified');
            
        }
    } else {
        descriptionElement.textContent = description;
        if (descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.remove('not-specified');
        }
    }
    
    priorityElement.textContent = priority;
    priorityElement.className = `priority ${priority}`;
    
    if (dueDate !== '') {
        dueDateElement.textContent = dueDate;
        if (dueDateElement.classList.contains('not-specified')) {
            dueDateElement.classList.remove('not-specified');
        }
    } else {
        dueDateElement.textContent = 'Not specified';
        if (dueDateElement.classList.contains('not-specified')) {
            return;
        } else {
            dueDateElement.classList.add('not-specified');
        }
    }
}

function editSpecialTask(editBtnDataId, projectDataId, title, description, priority, dueDate) {   

    //if the priority input is high, first check if its already in the 'important' section
    if (priority === 'High') {
        verifyAndEditOrAdd(importantTasks, important, editBtnDataId, projectDataId, title, description, priority, dueDate, importantPara);
    } else {
        //if priority has been changed from High and its in the important section, we remove it
        verifyAndRemove(importantTasks, important, editBtnDataId, projectDataId, importantPara);
    }
    
    //edit for the 'today' section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(dueDate))) {
        verifyAndEditOrAdd(todaysTasks, todays, editBtnDataId, projectDataId, title, description, priority, dueDate, todayPara)
    } else {
        verifyAndRemove(todaysTasks, todays, editBtnDataId, projectDataId, todayPara);
    }

    //edit for 'this week' section
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(dueDate))) {
        verifyAndEditOrAdd(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, title, description, priority, dueDate, upcomingPara)
    } else {
        verifyAndRemove(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, upcomingPara);
    }
}


//edits the info in a special section if its there and adds it if the edited data fits criteria for that task to be in that special section
function verifyAndEditOrAdd(tasks, section, dataId, projectDataId, title, description, priority, dueDate, sectionPara) {
    //checks if its there first
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            let titleElement = task.firstElementChild.firstElementChild.nextElementSibling;
            let descriptionElement = task.lastElementChild.firstElementChild;
            let priorityElement = descriptionElement.nextElementSibling.lastElementChild;
            let dueDateElement = descriptionElement.nextElementSibling.nextElementSibling.lastElementChild;

            editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement);

            return;
        }       
    }

    //if it's not there, create task elements for it and add it to the special section
    let editedTask = task(title, description, priority, dueDate, dataId, projectDataId);
    section.appendChild(editedTask);
    tasks.push(editedTask);

    sectionPara.style.display = 'none';
}


//removes the info from the special section if edited data makes it unfit to be there
function verifyAndRemove(tasks, section, dataId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            tasks.splice(tasks.indexOf(task), 1);
            section.removeChild(task);
        }
    }

    if (tasks.length === 0) {
        sectionPara.style.display = 'block';
    }
}


/***/ }),

/***/ "./src/images/file-edit-outline.svg":
/*!******************************************!*\
  !*** ./src/images/file-edit-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cfaf989963567a367cc.svg";

/***/ }),

/***/ "./src/images/icon-arrow-down.svg":
/*!****************************************!*\
  !*** ./src/images/icon-arrow-down.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "852fa301a0e795e07c59.svg";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e85b9fcbcc681264c887.svg";

/***/ }),

/***/ "./src/images/trash-can-outline.svg":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63cd4382fa778ceabd5e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9B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O0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWixJQUFJLDJEQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQU87QUFDZjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDclpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFiZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFza0RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWJhc2UtZm9udDogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IFxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtZm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHggMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBncmV5O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAzcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0OmZvY3VzLFxcclxcbmZvcm0gc2VsZWN0OmZvY3VzLFxcclxcbmZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpub3QoLmNhbmNlbCk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBBU0lERSAqL1xcclxcbmFzaWRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlLWhlYWQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1hc2lkZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA3cHggMjVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmFzaWRlIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDdweCA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsuZmlyc3Qge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICMyZjI7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLnNlY29uZCB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxpbmsudGhpcmQge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogTUFJTiAqL1xcclxcbm1haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAxM3B4O1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcGFkZGluZzogNTBweCAyNXB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jb250ZW50Om5vdCgjdG9kYXkpe1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiLWNvbnRlbnQjdG9kYXkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNwZWNpYWwtY29udGVudHMgLnRhc2stYnRucyxcXHJcXG4uc3BlY2lhbC1jb250ZW50cyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7IFxcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTUEVDSUFMIFNFQ1RJT04gKi9cXHJcXG4uc3BlY2lhbC1jb250ZW50cyBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXBhcmEsXFxyXFxuLnVwY29taW5nLXBhcmEsXFxyXFxuLmltcG9ydGFudC1wYXJhIHtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUIFRBQlMgKi9cXHJcXG4ucHJvamVjdC1oZWFkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbSA6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtYWRkdGFzay1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjU1cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlwcm9qZWN0IC5idG4taWNvbjpub3QoLnBsdXMtdGFzaykge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkLnVuY2hlY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjMjJmO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay10aXRsZWQuY2hlY2tlZCB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWljb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHAsIC50YXNrLWJ0bnMge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS5Mb3cge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMjJmO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuTWVkaXVtIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmY2MwMFxcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuSGlnaCB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMjI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pbi1tYWluIHtcXHJcXG4gICAgcGFkZGluZzogM3B4IDdweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4taW4tbWFpbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMzMjIyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBKUyBzdHlsZXMgKi9cXHJcXG4ubm90LXNwZWNpZmllZCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmludmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcbiAgICBhc2lkZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNsb3NlLWFzaWRlIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhhbWJ1cmdlciB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oaWRlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNERBQTREO0FB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QUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDViw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFFBQVE7SUFDWjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1iYXNlLWZvbnQ6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmOyBcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWZvbnQpO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4taWNvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idG4taWNvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1pY29uIGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4IDE1cHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ3JleTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dDpmb2N1cyxcXHJcXG5mb3JtIHNlbGVjdDpmb2N1cyxcXHJcXG5mb3JtIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b246bm90KC5jYW5jZWwpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b246bm90KC5jYW5jZWwpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjI7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaW5zZXQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZHJvcC5zaG93IHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQVNJREUgKi9cXHJcXG5hc2lkZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC4ycyBlYXNlLWluO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hc2lkZS1oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYXNpZGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogN3B4IDI1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Q6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hc2lkZSBoMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGluazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLmZpcnN0IHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjMmYyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGluay5zZWNvbmQge1xcclxcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkICNmZjA7XFxyXFxufVxcclxcblxcclxcbi50YWJsaW5rLnRoaXJkIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIE1BSU4gKi9cXHJcXG5tYWluIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICByaWdodDogMTNweDtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jb250ZW50IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggMjVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YWItY29udGVudDpub3QoI3RvZGF5KXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi1jb250ZW50I3RvZGF5IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zcGVjaWFsLWNvbnRlbnRzIC50YXNrLWJ0bnMsXFxyXFxuLnNwZWNpYWwtY29udGVudHMgaW5wdXRbdHlwZT1jaGVja2JveF0geyBcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU1BFQ0lBTCBTRUNUSU9OICovXFxyXFxuLnNwZWNpYWwtY29udGVudHMgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi50b2RheS1wYXJhLFxcclxcbi51cGNvbWluZy1wYXJhLFxcclxcbi5pbXBvcnRhbnQtcGFyYSB7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogUFJPSkVDVCBUQUJTICovXFxyXFxuLnByb2plY3QtaGVhZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWFkZHRhc2stZGVsZXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI215cHJvamVjdCAuYnRuLWljb246bm90KC5wbHVzLXRhc2spIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlZC51bmNoZWNrZWQge1xcclxcbiAgICBjb2xvcjogIzIyZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdGl0bGVkLmNoZWNrZWQge1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbiB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtaWNvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1pY29uIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBwLCAudGFzay1idG5zIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkuTG93IHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzIyZjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5Lk1lZGl1bSB7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmNjMDBcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LkhpZ2gge1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZjIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4taW4tbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA3cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWluLW1haW46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzMzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogSlMgc3R5bGVzICovXFxyXFxuLm5vdC1zcGVjaWZpZWQge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jbG9zZS1hc2lkZSB7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oYW1idXJnZXIge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGlkZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcclxuY29uc3QgYmFja0Ryb3AgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbmNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKTtcclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1lZGl0Jyk7XHJcbmNvbnN0IHByb2plY3REZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbi1lZGl0Jyk7XHJcblxyXG5jb25zdCB0YXNrVGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtZWRpdCcpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWVkaXQnKTtcclxuY29uc3QgdGFza0R1ZURhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWVkaXQnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Rm9ybShmb3JtVHlwZSkge1xyXG4gICAgYmFja0Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgZm9ybVR5cGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIGFzaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuMSknO1xyXG4gICAgYXNpZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvcm0oZm9ybVR5cGUpIHtcclxuICAgIGJhY2tEcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIGZvcm1UeXBlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGFzaWRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWVlJztcclxuICAgIGFzaWRlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySW5wdXRzKGZvcm1UeXBlKSB7XHJcbiAgICBjb25zdCBsYWJlbHMgPSBmb3JtVHlwZS5jaGlsZHJlbjtcclxuICAgIGZvciAoY29uc3QgbGFiZWwgb2YgbGFiZWxzKSB7XHJcbiAgICAgICAgaWYgKGxhYmVsLnRhZ05hbWUgPT09ICdMQUJFTCcgJiYgKGxhYmVsLmxhc3RFbGVtZW50Q2hpbGQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBsYWJlbC5sYXN0RWxlbWVudENoaWxkLnRhZ05hbWUgPT09ICdURVhUQVJFQScpKSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmxhc3RFbGVtZW50Q2hpbGQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWtlUHJvamVjdElucHV0cyh0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0KSB7XHJcblxyXG4gICAgbGV0IHByb2plY3RJbnB1dHMgPSBbXTtcclxuICAgIHByb2plY3RJbnB1dHMucHVzaCh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdElucHV0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRha2VUYXNrSW5wdXRzKHRpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIHByaW9yaXR5SW5wdXQsIGR1ZURhdGVJbnB1dCkge1xyXG5cclxuICAgIGxldCB0YXNrSW5wdXRzID0gW107XHJcbiAgICB0YXNrSW5wdXRzLnB1c2godGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlKTtcclxuXHJcbiAgICByZXR1cm4gdGFza0lucHV0cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZElucHV0c1RvUHJvamVjdEZvcm0odGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICBwcm9qZWN0VGl0bGVFZGl0LnZhbHVlID0gdGl0bGU7XHJcbiAgICBwcm9qZWN0RGVzY3JpcHRpb25FZGl0LnZhbHVlID0gZGVzY3JpcHRpb247XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSW5wdXRzVG9UYXNrRm9ybSh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICB0YXNrVGl0bGVFZGl0LnZhbHVlID0gdGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25FZGl0LnZhbHVlID0gZGVzY3JpcHRpb247XHJcbiAgICB0YXNrUHJpb3JpdHlFZGl0LnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICB0YXNrRHVlRGF0ZUVkaXQudmFsdWUgPSBkdWVEYXRlO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGRpc3BsYXlQYWdlLCB7IGRpc3BsYXlTaWRlYmFyLCByZW1vdmVTaWRlYmFyIH0gZnJvbSAnLi90YWJkaXNwbGF5JztcclxuaW1wb3J0IHthZGRBUHJvamVjdCwgZGVsZXRlUHJvamVjdCwgc2hvd0VkaXRGb3JtQW5kR2V0RWRpdEJ0bkRhdGFJZCwgZWRpdFByb2plY3QsIEFkZEZyb21TdG9yYWdlfSBmcm9tICcuL3Byb2plY3REb20nO1xyXG5pbXBvcnQgeyBzaG93Rm9ybSwgcmVtb3ZlRm9ybSB9IGZyb20gJy4vZm9ybXMnO1xyXG5pbXBvcnQgeyBhZGRBVGFzaywgY2hlY2tUYXNrLCBkZWxldGVUYXNrLCBnZXRUYXNrRWxlbWVudHMsIGVkaXRUYXNrLCBhZGRUYXNrRnJvbVN0b3JhZ2UgfSBmcm9tICcuL3Rhc2tEb20nO1xyXG5pbXBvcnQgeyBnZXRQcm9qZWN0T2ZUYXNrIH0gZnJvbSAnLi90YXNrRG9tJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcclxuY29uc3QgcHJvamVjdEZvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1lZGl0Jyk7XHJcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcclxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XHJcbmNvbnN0IHRhc2tGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tZWRpdCcpO1xyXG5jb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnRzJyk7XHJcbmNvbnN0IGNhbmNlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FuY2VsJyk7XHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXNpZGUnKTtcclxubGV0IHByb2plY3RJZDtcclxubGV0IG5lZWRlZCA9IFtdO1xyXG5sZXQgdGFza05lZWRzID0gW107XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IG15UHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xyXG5cclxuLy9hZGRzIHRoZSBkZWZhdWx0IHByb2plY3QgdG8gc3RvcmFnZSBpZiB0aGlzIGlzIHRoZSBicm93c2VyJ3MgZmlyc3QgdmlzaXRcclxuaWYgKG15UHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdNeSBQcm9qZWN0JywgJ1RoaXMgaXMgdGhlIGRlZmF1bHQgcHJvamVjdCcpO1xyXG4gICAgZGVmYXVsdFByb2plY3QuYWRkUHJvamVjdFRvU3RvcmFnZSgpO1xyXG59XHJcblxyXG4vL2Rpc3BsYXlzIGVhY2ggcHJvamVjdCBpbiBsb2NhbCBzdG9yYWdlIGFuZCBpdHMgdGFza3MgdG8gdGhlIERPTVxyXG5teVByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcclxuICAgIEFkZEZyb21TdG9yYWdlKHByb2opO1xyXG5cclxuICAgIGlmIChwcm9qLnByb2plY3RUYXNrcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBwcm9qLnByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZFRhc2tGcm9tU3RvcmFnZSh0YXNrLCBteVByb2plY3RzLmluZGV4T2YocHJvaikgKyAzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbmRpc3BsYXlQYWdlKCk7XHJcblxyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2lkZWJhcik7XHJcbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlU2lkZWJhcik7XHJcblxyXG4vL3RvIHJlbW92ZSBhIGZvcm0gd2hlbiBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWRcclxuY2FuY2VsQnRucy5mb3JFYWNoKChjYW5jZWxCdG4pID0+IHtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRm9ybShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTsgICBcclxufSk7XHJcblxyXG5cclxuLy9hZGQgYSBuZXcgUHJvamVjdCBmcm9tIGEgZm9ybVxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2hvd0Zvcm0ocHJvamVjdEZvcm0pO1xyXG59KTtcclxuXHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRBUHJvamVjdCgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuYWxsUHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgLy90byBhZGQgYSBuZXcgdGFzayAtICBpbiBjb250aW51aXR5IHdpdGggdGFza0Zvcm0gZXZlbnQgbGlzdGVuZXIgYmVsb3dcclxuICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGx1cy10YXNrJykpIHtcclxuICAgICAgICBzaG93Rm9ybSh0YXNrRm9ybSk7XHJcbiAgICAgICAgcHJvamVjdElkID0gZ2V0UHJvamVjdE9mVGFzayhlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWljb24nKSkge1xyXG4gICAgICAgIC8vZ2V0IHRoZSB0YXJnZXQncyBkYXRhSWQsIHRoZSB0aXRsZSBlbGVtZW50IGFuZCBkZXNjcmlwdGlvbiBlbGVtZW50XHJcbiAgICAgICAgLy90aGVzZSB3aWxsIGJlIHVzZWQgdG8gZWRpdCB0aGUgcHJvamVjdCB0aXRsZSBhbmQgZGVzY3JpcHRpb24gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcclxuICAgICAgICBuZWVkZWQgPSBzaG93RWRpdEZvcm1BbmRHZXRFZGl0QnRuRGF0YUlkKGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2RlbGV0ZSBhIHByb2plY3RcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1pY29uJykpIHtcclxuICAgICAgICBkZWxldGVQcm9qZWN0KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRlIGEgdGFza1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcclxuICAgICAgICBkZWxldGVUYXNrKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0IHRoZSB0YXJnZXQncyBkYXRhSWQsIGl0J3MgcHJvamVjdGJvZHkgZGF0YSBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSBhbmQgZHVlZGF0ZSBlbGVtZW50c1xyXG4gICAgLy90aGVzZSB3aWxsIGJlIHVzZWQgdG8gZWRpdCB0aGUgdGFzayBkZXRhaWxzIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkXHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcclxuICAgICAgICB0YXNrTmVlZHMgPSBnZXRUYXNrRWxlbWVudHMoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGVjayBhIHRhc2tcclxuICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmIGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICBjaGVja1Rhc2soZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYWRkQVRhc2socHJvamVjdElkKTtcclxufSlcclxuXHJcblxyXG5wcm9qZWN0Rm9ybUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgZWRpdFByb2plY3QobmVlZGVkKTtcclxuICAgIHJlbW92ZUZvcm0ocHJvamVjdEZvcm1FZGl0KTtcclxufSlcclxuXHJcblxyXG50YXNrRm9ybUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgZWRpdFRhc2sodGFza05lZWRzKTtcclxuICAgIHJlbW92ZUZvcm0odGFza0Zvcm1FZGl0KTtcclxufSlcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgdGFrZVByb2plY3RJbnB1dHMgfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi5cIjtcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xyXG5jb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbicpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0VG9TdG9yYWdlKCkge1xyXG4gICAgICAgIG15UHJvamVjdHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRQcm9qZWN0SWQoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG15UHJvamVjdHMuaW5kZXhPZih0aGlzKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgcHJvamVjdFRhc2tzID0gW107XHJcblxyXG4gICAgLy8gYWRkVGFzayh0YXNrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9qZWN0VGFza3MucHVzaCh0YXNrKTtcclxuICAgIC8vIH1cclxuXHJcbn1cclxuXHJcblxyXG4vL3Rha2VzIHRoZSBpbnB1dHMgZnJvbSB0aGUgZm9ybSwgY3JlYXRlcyBhIHByb2plY3Qgb2JqZWN0LCBzdG9yZXMgaXQgaW4gbWVtb3J5XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRBUHJvamVjdFRvU3RvcmFnZSgpIHtcclxuICAgIC8vdGFrZSB0aGUgdXNlcidzIGlucHV0cyBmcm9tIHRoZSBmb3JtXHJcbiAgICBsZXQgcHJvamVjdElucHV0cyA9IHRha2VQcm9qZWN0SW5wdXRzKHByb2plY3RUaXRsZSwgcHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICBcclxuICAgIC8vaW5zdGFudGlhdGUgYSBuZXcgcHJvamVjdCBvYmplY3Qgd2l0aCB0aGUgaW5wdXRzIHRha2VuIGFuZCBzdG9yZSBpdFxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dHNbMF0sIHByb2plY3RJbnB1dHNbMV0pO1xyXG4gICAgbmV3UHJvamVjdC5hZGRQcm9qZWN0VG9TdG9yYWdlKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuXHJcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcclxufVxyXG5cclxuLy9nZXRzIHRoZSBkYXRhLWlkIG9mIHRoZSBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGVQcm9qZWN0RG9tSWQobmV3UHJvamVjdCkge1xyXG4gICAgbGV0IHByb2plY3RJZCA9IG15UHJvamVjdHMuaW5kZXhPZihuZXdQcm9qZWN0KTtcclxuICAgIHByb2plY3RJZCA9IHByb2plY3RJZCArIDM7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RJZDtcclxufVxyXG5cclxuXHJcbi8vZmluZHMgdGhlIHByb2plY3QgaW4gYXJyYXkgb2YgYWxsIHByb2plY3RzIGluIHN0b3JhZ2UgYW5kIGRlbGV0ZXMgaXRcclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZShidG5EYXRhSWQsIHBhcmVudCkge1xyXG4gICAgaWYgKGJ0bkRhdGFJZCA9PT0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgbXlQcm9qZWN0cy5zcGxpY2UocGFyc2VJbnQoYnRuRGF0YUlkKSAtIDMsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9jaGFuZ2VzIHByb2plY3RzIGRldGFpbHMgaW4gc3RvcmFnZVxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3RJblN0b3JhZ2UoYnRuRGF0YUlkLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24pIHtcclxuICAgIFxyXG4gICAgbGV0IHByb2plY3RJbmRleCA9IHBhcnNlSW50KGJ0bkRhdGFJZCkgLSAzO1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJbmRleF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcGx1c0ljb24gZnJvbSAnLi9pbWFnZXMvcGx1cy5zdmcnO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9pbWFnZXMvZmlsZS1lZGl0LW91dGxpbmUuc3ZnJztcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmcnO1xyXG5pbXBvcnQgeyBzaG93Rm9ybSwgcmVtb3ZlRm9ybSwgY2xlYXJJbnB1dHMsIGFkZElucHV0c1RvUHJvamVjdEZvcm0sIHRha2VQcm9qZWN0SW5wdXRzIH0gZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCBkaXNwbGF5UGFnZSwgeyBvcGVuUGFnZSB9IGZyb20gJy4vdGFiZGlzcGxheSc7XHJcbmltcG9ydCB7IGFkZEFQcm9qZWN0VG9TdG9yYWdlLCBnZXRUaGVQcm9qZWN0RG9tSWQsIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZSwgZWRpdFByb2plY3RJblN0b3JhZ2UgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xyXG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xyXG5jb25zdCB0b2RheUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3QnKTtcclxuY29uc3QgYWxsUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250ZW50cycpO1xyXG5jb25zdCBwcm9qZWN0Rm9ybUVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWVkaXQnKTtcclxuY29uc3QgcHJvamVjdFRpdGxlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWVkaXQnKTtcclxuY29uc3QgcHJvamVjdERlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2NyaXB0aW9uLWVkaXQnKTtcclxuXHJcblxyXG5leHBvcnQgbGV0IHByb2plY3RCb2RpZXMgPSBbXTtcclxuY29uc3QgYWxsVGFza0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1ib2R5Jyk7XHJcbmZvciAoY29uc3QgY29udGFpbmVyIG9mIGFsbFRhc2tDb250YWluZXJzKSB7XHJcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSAnMycpIHtcclxuICAgICAgICBwcm9qZWN0Qm9kaWVzLnB1c2goY29udGFpbmVyKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQVByb2plY3QoKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGFkZEFQcm9qZWN0VG9TdG9yYWdlKCk7XHJcbiAgICBsZXQgcHJvamVjdElkID0gZ2V0VGhlUHJvamVjdERvbUlkKG5ld1Byb2plY3QpO1xyXG4gICAgYXBwZW5kUHJvamVjdFRvRG9tKG5ld1Byb2plY3QsIHByb2plY3RJZCk7XHJcbiAgICBhcHBlbmRUYWJMaW5rKG5ld1Byb2plY3QsIHByb2plY3RJZCk7XHJcbiAgICBcclxuICAgIHJlbW92ZUZvcm0ocHJvamVjdEZvcm0pO1xyXG4gICAgY2xlYXJJbnB1dHMocHJvamVjdEZvcm0pO1xyXG4gICAgXHJcbiAgICAvL3RoaXMgaXMgc28gbmV3IHRhYmxpbmsgYW5kIHRhYmNvbnRlbnQgYXJlIGFkZGVkIHRvIHRoZSBmbG93XHJcbiAgICBkaXNwbGF5UGFnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWRkRnJvbVN0b3JhZ2UocHJvamVjdCkge1xyXG4gICAgbGV0IHByb2plY3RJZCA9IGdldFRoZVByb2plY3REb21JZChwcm9qZWN0KTtcclxuICAgIGFwcGVuZFByb2plY3RUb0RvbShwcm9qZWN0LCBwcm9qZWN0SWQpO1xyXG4gICAgdGFibGluayhwcm9qZWN0LnRpdGxlLCBwcm9qZWN0SWQpO1xyXG4gICAgZGlzcGxheVBhZ2UoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcclxuXHJcbiAgICBsZXQgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGxldCBidG5EYXRhSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZShidG5EYXRhSWQsIHBhcmVudCk7XHJcbiAgICBkZWxldGVQcm9qZWN0RnJvbURvbShidG5EYXRhSWQsIHBhcmVudCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3QobmVlZGVkKSB7XHJcbiAgICBsZXQgZWRpdElucHV0cyA9IHRha2VQcm9qZWN0SW5wdXRzKHByb2plY3RUaXRsZUVkaXQsIHByb2plY3REZXNjcmlwdGlvbkVkaXQpO1xyXG5cclxuICAgIGVkaXRQcm9qZWN0SW5TdG9yYWdlKG5lZWRlZFswXSwgZWRpdElucHV0c1swXSwgZWRpdElucHV0c1sxXSk7XHJcbiAgICBlZGl0UHJvamVjdEluRG9tKG5lZWRlZFswXSwgZWRpdElucHV0cywgbmVlZGVkWzFdLCBuZWVkZWRbMl0pO1xyXG59XHJcblxyXG5cclxuLy9jcmVhdGVzIHRoZSBwcm9qZWN0IGFuZCBhZGRzIGl0IHRvIERPTVxyXG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0VG9Eb20obmV3UHJvamVjdCwgcHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRlbnRzJyk7XHJcblxyXG4gICAgbGV0IG15TmV3cHJvamVjdCA9IHByb2plY3QobmV3UHJvamVjdC50aXRsZSwgbmV3UHJvamVjdC5kZXNjcmlwdGlvbiwgcHJvamVjdElkKTtcclxuICAgIFxyXG4gICAgYWxsUHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQobXlOZXdwcm9qZWN0KTtcclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyB0aGUgdGFibGluayBhbmQgZW5zdXJlcyB0aGF0IGl0cyBjb250ZW50cyBhcmUgZGlzcGxheWVkIGltbWVkaWF0ZWx5IHRoZSBmb3JtIGlzIHN1Ym1pdHRlZFxyXG5mdW5jdGlvbiBhcHBlbmRUYWJMaW5rKG5ld1Byb2plY3QsIHByb2plY3RJZCkge1xyXG4gICAgbGV0IG5ld1RhYkxpbmsgPSB0YWJsaW5rKG5ld1Byb2plY3QudGl0bGUsIHByb2plY3RJZCk7XHJcbiAgICBvcGVuUGFnZShuZXdQcm9qZWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJyksIG5ld1RhYkxpbmspO1xyXG59XHJcblxyXG5cclxuLy9jcmVhdGVzIHRhYmxpbmsgZm9yIHByb2plY3RcclxuZnVuY3Rpb24gdGFibGluayhwcm9qZWN0VGl0bGUsIHByb2plY3RJZCkge1xyXG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idG5zJyk7XHJcblxyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgdGFiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFiTGluay5jbGFzc05hbWUgPSAndGFibGluayBwcm9qZWN0LWJ0bic7XHJcbiAgICB0YWJMaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHByb2plY3RJZCk7XHJcbiAgICB0YWJMaW5rLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQodGFiTGluayk7XHJcblxyXG4gICAgcHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG5cclxuICAgIC8vd2Ugd2lsbCB1c2UgdGhpcyB0byBvcGVuIHRoZSB0YWJsaW5rJ3MgcGFnZSBjb250ZW50IHJpZ2h0IGFmdGVyIGl0IGlzIGNyZWF0ZWRcclxuICAgIHJldHVybiB0YWJMaW5rO1xyXG59XHJcblxyXG5cclxuLy9jcmVhdGVzIHByb2plY3QgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8gRE9NXHJcbmZ1bmN0aW9uIHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhSWQpIHtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZGF0YUlkKTtcclxuICAgIG5ld1Byb2plY3QuaWQgPSB0aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpO1xyXG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSAndGFiLWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0SGVhZC5jbGFzc05hbWUgPSAncHJvamVjdC1oZWFkJztcclxuICAgIGNvbnN0IHRpdGxlQWRkVGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGVBZGRUYXNrRGVsZXRlLmNsYXNzTmFtZSA9ICd0aXRsZS1hZGR0YXNrLWRlbGV0ZSc7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRpdGxlZCc7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHRpdGxlQWRkVGFza0RlbGV0ZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIGxldCBidG5JY29ucyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBsZXQgYnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkljb24uY2xhc3NOYW1lID0gJ2J0bi1pY29uJztcclxuICAgICAgICBidG5JY29ucy5wdXNoKGJ0bkljb24pO1xyXG4gICAgICAgIHRpdGxlQWRkVGFza0RlbGV0ZS5hcHBlbmRDaGlsZChidG5JY29uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgcGx1c0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBwbHVzSW1hZ2Uuc3JjID0gcGx1c0ljb247XHJcbiAgICBjb25zdCBlZGl0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGVkaXRJbWFnZS5zcmMgPSBlZGl0SWNvbjtcclxuICAgIGVkaXRJbWFnZS5jbGFzc05hbWUgPSAnZWRpdC1pY29uJztcclxuICAgIGNvbnN0IHRyYXNoSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRyYXNoSW1hZ2Uuc3JjID0gdHJhc2hJY29uO1xyXG4gICAgdHJhc2hJbWFnZS5jbGFzc05hbWUgPSAnZGVsZXRlLWljb24nO1xyXG5cclxuICAgIGJ0bkljb25zWzBdLmFwcGVuZENoaWxkKHBsdXNJbWFnZSk7XHJcbiAgICBidG5JY29uc1swXS5jbGFzc0xpc3QuYWRkKCdwbHVzLXRhc2snKTtcclxuICAgIGJ0bkljb25zWzFdLmFwcGVuZENoaWxkKGVkaXRJbWFnZSk7XHJcbiAgICBidG5JY29uc1sxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBkYXRhSWQpO1xyXG4gICAgYnRuSWNvbnNbMl0uYXBwZW5kQ2hpbGQodHJhc2hJbWFnZSk7XHJcbiAgICBidG5JY29uc1syXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBkYXRhSWQpXHJcblxyXG4gICAgcHJvamVjdEhlYWQuYXBwZW5kQ2hpbGQodGl0bGVBZGRUYXNrRGVsZXRlKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3Byb2plY3QtZGVzY3JpYmVkJztcclxuICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgcHJvamVjdEhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZGF0YUlkKTtcclxuICAgIHByb2plY3RCb2R5LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJvZHknO1xyXG4gICAgcHJvamVjdEJvZGllcy5wdXNoKHByb2plY3RCb2R5KTtcclxuXHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZChwcm9qZWN0SGVhZCwgcHJvamVjdEJvZHkpO1xyXG5cclxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tRG9tKGJ0bkRhdGFJZCwgcGFyZW50KSB7XHJcblxyXG4gICAgLy93ZSByZW1vdmUgdGhlIGNvbnRlbnQgcGFnZSBvZiB0aGF0IHByb2plY3RcclxuICAgIGlmIChidG5EYXRhSWQgPT09IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgIGFsbFByb2plY3RzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHBhcmVudCk7XHJcbiAgICAgICAgdG9kYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdG9kYXlMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjJztcclxuICAgIH1cclxuXHJcbiAgICAvL3dlIHJlbW92ZSB0aGUgbGluayBpbiB0aGUgc2lkZWJhciBjb3JyZXNwb25kaW5nIHRvIHRoYXQgcHJvamVjdFxyXG4gICAgY29uc3QgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idG4nKTtcclxuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnRucycpO1xyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIHRhYkxpbmtzKSB7XHJcbiAgICAgICAgaWYgKGJ0bkRhdGFJZCA9PT0gbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0QnRucy5yZW1vdmVDaGlsZChsaW5rLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0SW5Eb20oYnRuRGF0YUlkLCBlZGl0SW5wdXRzLCB0aXRsZUVsZW1lbnQsIGRlc2NyaXB0aW9uRWxlbWVudCkge1xyXG4gICAgXHJcbiAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0SW5wdXRzWzBdO1xyXG4gICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gZWRpdElucHV0c1sxXTtcclxuXHJcbiAgICBjb25zdCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsaW5rJyk7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGFiTGlua3MpIHtcclxuICAgICAgICBpZiAobGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gYnRuRGF0YUlkKSB7XHJcbiAgICAgICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBlZGl0SW5wdXRzWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vdGhlIGVkaXQgYnV0dG9uIGRhdGEgaWQgd2lpbCBiZSB1c2VkIHRvIGVkaXQgdGhhdCBwcm9qZWN0IGluIHN0b3JhZ2VcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFZGl0Rm9ybUFuZEdldEVkaXRCdG5EYXRhSWQoZSkge1xyXG4gICAgbGV0IG5lZWRzID0gW107XHJcbiAgICBsZXQgdGl0bGVFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICBsZXQgdGl0bGUgPSB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgZGVzY3JpcHRpb25FbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgbGV0IGJ0bkRhdGFJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBuZWVkcy5wdXNoKGJ0bkRhdGFJZCwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQpO1xyXG5cclxuICAgIHNob3dGb3JtKHByb2plY3RGb3JtRWRpdCk7XHJcbiAgICBhZGRJbnB1dHNUb1Byb2plY3RGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIG5lZWRzO1xyXG59XHJcblxyXG4iLCJjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlblBhZ2UocGFnZSwgZWxlbWVudCkge1xyXG4gICAgbGV0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1jb250ZW50Jyk7XHJcbiAgICBsZXQgdGFiTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGluaycpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkNvbnRlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFiQ29udGVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFiTGlua3NbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiTGlua3NbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVBhZ2UoKSB7XHJcbiAgICBsZXQgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLWNvbnRlbnQnKTtcclxuICAgIGxldCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsaW5rJyk7XHJcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgdGFiTGlua3MpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRlbnQgb2YgdGFiQ29udGVudHMpIHtcclxuICAgICAgICAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBjb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuUGFnZShjb250ZW50LmdldEF0dHJpYnV0ZSgnaWQnKSwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNpZGViYXIoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U2lkZWJhcigpIHtcclxuICAgIGFzaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNpZGViYXIoKSB7XHJcbiAgICBhc2lkZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyB0YWtlVGFza0lucHV0cyB9IGZyb20gXCIuL2Zvcm1zXCI7XHJcblxyXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbicpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIHN1cGVyKHRpdGxlLCBkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG4vL3Rha2VzIHRoZSBpbnB1dHMgZnJvbSB0aGUgdGFzayBmb3JtLCBjcmVhdGVzIGEgdGFzayB3aXRoIHRob3NlIGlucHV0IGFuZCBhZGRzIHRoZSB0YXNrIHRvIGl0cyBjYWxsaW5nIHByb2plY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb1N0b3JhZ2UocHJvamVjdElkKSB7XHJcbiAgICBsZXQgdGFza0lucHV0cyA9IHRha2VUYXNrSW5wdXRzKHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHksIHRhc2tEdWVEYXRlKTtcclxuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGFza0lucHV0c1swXSwgdGFza0lucHV0c1sxXSwgdGFza0lucHV0c1syXSwgdGFza0lucHV0c1szXSk7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJZCAtIDNdLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5cclxuLy9nZXRzIHRoZSBpbmRleCBvZiB0aGUgbmV3VGFzayBhZGRlZCBpbiBpdHMgcGFyZW50IHByb2plY3QncyBwcm9qZWN0VGFza3MgYXJyYXlcclxuLy90aGlzIHdpbGwgYmUgdXNlZCB0byBnaXZlIGEgZGF0YUlkIHRvIGVhY2ggdGFzayBjcmVhdGVkIGluIHRoYXQgcGFydGljdWxhciBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIG5ld1Rhc2spIHtcclxuXHJcbiAgICByZXR1cm4gbXlQcm9qZWN0c1twcm9qZWN0SWQgLSAzXS5wcm9qZWN0VGFza3MuaW5kZXhPZihuZXdUYXNrKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21TdG9yYWdlKGUsIGdyYW5kUGFyZW50KSB7XHJcbiAgICBsZXQgcHJvamVjdElkID0gZ3JhbmRQYXJlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBwcm9qZWN0SWQgPSBwYXJzZUludChwcm9qZWN0SWQpIC0gMztcclxuXHJcbiAgICBsZXQgdGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SWRdLnByb2plY3RUYXNrcy5zcGxpY2UodGFza0lkLCAxKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza0luU3RvcmFnZShidG5EYXRhSWQsIHByb2plY3RCb2R5RGF0YUlkLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5LCBuZXdEdWVEYXRlKSB7XHJcbiAgICBcclxuICAgIGxldCBwcm9qZWN0SW5kZXggPSBwYXJzZUludChwcm9qZWN0Qm9keURhdGFJZCkgLSAzO1xyXG4gICAgbGV0IHRhc2tJbmRleCA9IHBhcnNlSW50KGJ0bkRhdGFJZCk7XHJcblxyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICBteVByb2plY3RzW3Byb2plY3RJbmRleF0ucHJvamVjdFRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIG15UHJvamVjdHNbcHJvamVjdEluZGV4XS5wcm9qZWN0VGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnByb2plY3RUYXNrc1t0YXNrSW5kZXhdLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcclxuXHJcbn1cclxuIiwiaW1wb3J0IGV4cGFuZEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi1hcnJvdy1kb3duLnN2Zyc7XHJcbmltcG9ydCB7IHRha2VUYXNrSW5wdXRzLCBjbGVhcklucHV0cywgcmVtb3ZlRm9ybSwgc2hvd0Zvcm0sIGFkZElucHV0c1RvVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0Qm9kaWVzIH0gZnJvbSBcIi4vcHJvamVjdERvbVwiO1xyXG5pbXBvcnQgeyBhZGRUYXNrVG9TdG9yYWdlLCBnZXRJbmRleE9mVGFzaywgZGVsZXRlVGFza0Zyb21TdG9yYWdlLCBlZGl0VGFza0luU3RvcmFnZSB9IGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IHsgaXNUaGlzV2VlaywgaXNUb2RheSB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcblxyXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcclxuY29uc3QgdGFza0Zvcm1FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1lZGl0Jyk7XHJcblxyXG5jb25zdCB0YXNrVGl0bGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtZWRpdCcpO1xyXG5jb25zdCB0YXNrRGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24tZWRpdCcpO1xyXG5jb25zdCB0YXNrUHJpb3JpdHlFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWVkaXQnKTtcclxuY29uc3QgdGFza0R1ZURhdGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWVkaXQnKTtcclxuXHJcbmNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtc3BlY2lhbCcpO1xyXG5jb25zdCB0b2RheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktc3BlY2lhbCcpO1xyXG5jb25zdCB0aGlzV2Vla3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctc3BlY2lhbCcpO1xyXG5cclxuY29uc3QgaW1wb3J0YW50UGFyYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQtcGFyYScpO1xyXG5jb25zdCB0b2RheVBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktcGFyYScpO1xyXG5jb25zdCB1cGNvbWluZ1BhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmctcGFyYScpO1xyXG5sZXQgaW1wb3J0YW50VGFza3MgPSBbXTtcclxubGV0IGFsbFRhc2tzID0gW107XHJcbmxldCB0b2RheXNUYXNrcyA9IFtdO1xyXG5sZXQgdGhpc1dlZWtzVGFza3MgPSBbXTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQVRhc2socHJvamVjdElkKSB7XHJcbiAgICBsZXQgbmV3VGFzayA9IGFkZFRhc2tUb1N0b3JhZ2UocHJvamVjdElkKTtcclxuICAgIGxldCB0YXNrSWQgPSBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIG5ld1Rhc2spO1xyXG4gICAgYXBwZW5kVGFza1RvRG9tKHByb2plY3RJZCwgbmV3VGFzaywgdGFza0lkKTtcclxuXHJcbiAgICBjbGVhcklucHV0cyh0YXNrRm9ybSk7XHJcbiAgICByZW1vdmVGb3JtKHRhc2tGb3JtKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tGcm9tU3RvcmFnZSh0YXNrLCBwcm9qZWN0SWQpIHtcclxuICAgIGxldCB0YXNrSWQgPSBnZXRJbmRleE9mVGFzayhwcm9qZWN0SWQsIHRhc2spO1xyXG4gICAgYXBwZW5kVGFza1RvRG9tKHByb2plY3RJZCwgdGFzaywgdGFza0lkKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGxldCBncmFuZFBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIGRlbGV0ZVRhc2tGcm9tU3RvcmFnZShlLCBncmFuZFBhcmVudCk7XHJcbiAgICBkZWxldGVUYXNrRnJvbURvbShncmFuZFBhcmVudCwgcGFyZW50KTsgICBcclxufVxyXG5cclxuLy90YXNrTmVlZHMgLSBbZWRpdEJ0bmRhdGFpZCwgcHJvamVjdElkLCB0aXRsZWVsZW1lbnQsIGRlc2NyaXB0aW9uZWxlbWVudCwgZXRjLl1cclxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2tOZWVkcykge1xyXG4gICAgbGV0IGVkaXRUYXNrSW5wdXRzID0gdGFrZVRhc2tJbnB1dHModGFza1RpdGxlRWRpdCwgdGFza0Rlc2NyaXB0aW9uRWRpdCwgdGFza1ByaW9yaXR5RWRpdCwgdGFza0R1ZURhdGVFZGl0KTtcclxuICAgIFxyXG4gICAgZWRpdFRhc2tJblN0b3JhZ2UodGFza05lZWRzWzBdLCB0YXNrTmVlZHNbMV0sIGVkaXRUYXNrSW5wdXRzWzBdLCBlZGl0VGFza0lucHV0c1sxXSwgZWRpdFRhc2tJbnB1dHNbMl0sIGVkaXRUYXNrSW5wdXRzWzNdKTtcclxuICAgIGVkaXRUYXNrSW5Eb20oZWRpdFRhc2tJbnB1dHNbMF0sIGVkaXRUYXNrSW5wdXRzWzFdLCBlZGl0VGFza0lucHV0c1syXSwgZWRpdFRhc2tJbnB1dHNbM10sIHRhc2tOZWVkc1syXSwgdGFza05lZWRzWzNdLCB0YXNrTmVlZHNbNF0sIHRhc2tOZWVkc1s1XSwgdGFza05lZWRzWzBdLCB0YXNrTmVlZHNbMV0pO1xyXG4gICAgZWRpdFNwZWNpYWxUYXNrKHRhc2tOZWVkc1swXSwgdGFza05lZWRzWzFdLCBlZGl0VGFza0lucHV0c1swXSwgZWRpdFRhc2tJbnB1dHNbMV0sIGVkaXRUYXNrSW5wdXRzWzJdLCBlZGl0VGFza0lucHV0c1szXSk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Rhc2soZSkge1xyXG4gICAgbGV0IHRhc2tUaXRsZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNoZWNrKGUsIHRhc2tUaXRsZSk7XHJcblxyXG4gICAgbGV0IGRhdGFJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgbGV0IHByb2plY3REYXRhSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tQcmlvcml0eS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG5cclxuICAgIC8vbG9va3MgdGhyb3VnaCB0aGUgJ2ltcG9ydGFudCcgc2VjdGlvbiB0byBjaGVjayBzZWxlY3RlZCB0YXNrcyBhcyB3ZWxsXHJcbiAgICBpZiAodGFza1ByaW9yaXR5LmNsYXNzTGlzdC5jb250YWlucygnSGlnaCcpKSB7XHJcbiAgICAgICAgdmVyaWZ5SWRBbmRDaGVjayhlLCBpbXBvcnRhbnRUYXNrcywgZGF0YUlkLCBwcm9qZWN0RGF0YUlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb2tzIHRocm91Z2ggdG9kYXlzIHRhc2tzIHRvIHNlZSBpZiB0aGUgaXRlbSBpcyB0aGVyZSBhbmQgY2hlY2sgaXQgdGhlcmUgYXMgd2VsbFxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUlkQW5kQ2hlY2soZSwgdG9kYXlzVGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUlkQW5kQ2hlY2soZSwgdGhpc1dlZWtzVGFza3MsIGRhdGFJZCwgcHJvamVjdERhdGFJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vbG9va3MgdGhyb3VnaCBhbiBhcnJheSBjb250YWluaW5nIHNwZWNpZmljIHRhc2tzIHRvIGNoZWNrIHRoZW0gYXMgd2VsbCBpZiB0aGV5IGFyZSB0aGVyZSBcclxuZnVuY3Rpb24gdmVyaWZ5SWRBbmRDaGVjayhlLCB0YXNrcywgZGF0YUlkLCBwcm9qZWN0RGF0YUlkKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBsZXQgdGFza1RpdGxlRWxlbWVudCA9IHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmICh0YXNrVGl0bGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBkYXRhSWQgJiYgdGFzay5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QtZGF0YS1pZCcpID09PSBwcm9qZWN0RGF0YUlkKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hlY2soZSwgdGFza1RpdGxlRWxlbWVudCk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2soZSwgdGFza1RpdGxlKSB7XHJcbiAgICBcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY2hlY2tlZCcpO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd1bmNoZWNrZWQnKTtcclxuICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy9nZXRzIHRoZSBkYXRhIElkIG9mIHRoZSBwcm9qZWN0ICd3aG9zZSBhZGQgdGFzaycgYnV0dG9uIHdhcyBjbGlja2VkLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBhZGQgdGhhdCB0YXNrIHRvIGl0cyBwcm9qZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0T2ZUYXNrKGUpIHtcclxuICAgIGxldCBwYXJlbnRQcm9qZWN0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGxldCBwYXJlbnRQcm9qZWN0SWQgPSBwYXJlbnRQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgIHJldHVybiBwYXJzZUludChwYXJlbnRQcm9qZWN0SWQpO1xyXG59XHJcblxyXG5cclxuLy9hZGRzIHRoZSB0YXNrIGNyZWF0ZWQgdG8gdGhlIERPTVxyXG5mdW5jdGlvbiBhcHBlbmRUYXNrVG9Eb20ocHJvamVjdElkLCBuZXdUYXNrLCB0YXNrSWQpIHtcclxuICAgIGxldCBteVRhc2sgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazIgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazMgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG4gICAgbGV0IG15VGFzazQgPSB0YXNrKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzY3JpcHRpb24sIG5ld1Rhc2sucHJpb3JpdHksIG5ld1Rhc2suZHVlRGF0ZSwgdGFza0lkLCBwcm9qZWN0SWQpO1xyXG5cclxuICAgIFxyXG4gICAgLy90byBzcGVjaWZ5IHdoaWNoIHByb2plY3QgdG8gYWRkIHRoZSB0YXNrIHRvXHJcbiAgICBwcm9qZWN0Qm9kaWVzW3Byb2plY3RJZCAtIDNdLmFwcGVuZENoaWxkKG15VGFzayk7XHJcbiAgICAvL2FsbCB0YXNrcyBjcmVhdGVkIGFyZSBwdXQgaW4gdGhpcyBhcnJheS4gV2Ugd2lsbCBsb29wIHRocm91Z3RoIHRoaXMgdG8gZmluZCB0b2RheSdzIHRhc2tzXHJcbiAgICBhbGxUYXNrcy5wdXNoKG15VGFzayk7XHJcblxyXG4gICAgLy9hcHBlbmRzIHRoZSB0YXNrIHRvIHRoZSAnaW1wb3J0YW50JyBzZWN0aW9uIGlmIGl0cyBwcmlvcml0eSBpcyBoaWdoXHJcbiAgICBpZiAobmV3VGFzay5wcmlvcml0eSA9PT0gJ0hpZ2gnKSB7XHJcbiAgICAgICAgaW1wb3J0YW50UGFyYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGltcG9ydGFudC5hcHBlbmRDaGlsZChteVRhc2syKTtcclxuICAgICAgICBpbXBvcnRhbnRUYXNrcy5wdXNoKG15VGFzazIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUobmV3VGFzay5kdWVEYXRlKTtcclxuICAgIGlmIChpc1RvZGF5KGR1ZURhdGUpKSB7XHJcbiAgICAgICAgdG9kYXlQYXJhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdG9kYXlzLmFwcGVuZENoaWxkKG15VGFzazMpO1xyXG4gICAgICAgIHRvZGF5c1Rhc2tzLnB1c2gobXlUYXNrMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVGhpc1dlZWsoZHVlRGF0ZSkpIHtcclxuICAgICAgICB1cGNvbWluZ1BhcmEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzV2Vla3MuYXBwZW5kQ2hpbGQobXlUYXNrNCk7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFza3MucHVzaChteVRhc2s0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vY3JlYXRlcyB0YXNrIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvIERPTVxyXG5mdW5jdGlvbiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRhc2tJZCwgcHJvamVjdElkKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrLmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFza0lkKTtcclxuICAgIG5ld1Rhc2suc2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnLCBwcm9qZWN0SWQpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrSGVhZC5jbGFzc05hbWUgPSAndGFzay1oZWFkJztcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrLXRpdGxlZCB1bmNoZWNrZWQnO1xyXG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRhc2tJZCk7XHJcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICBjb25zdCBleHBhbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGV4cGFuZEJ0bi5jbGFzc05hbWUgPSAnZXhwYW5kLWljb24nO1xyXG4gICAgY29uc3QgZXhwYW5kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGV4cGFuZEltYWdlLnNyYyA9IGV4cGFuZEljb247XHJcbiAgICBleHBhbmRCdG4uYXBwZW5kQ2hpbGQoZXhwYW5kSW1hZ2UpO1xyXG5cclxuICAgIHRhc2tIZWFkLmFwcGVuZChjaGVjaywgdGFza1RpdGxlLCBleHBhbmRCdG4pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb2N1bWVudC5jbGFzc05hbWUgPSAndGFzay1kZXRhaWxzJztcclxuICAgIFxyXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICd0YXNrLWRlc2NyaWJlZCc7XHJcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICEoZGVzY3JpcHRpb24udHJpbSgpKSkge1xyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdub3Qtc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcclxuICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwcmlvcml0eUJ0bi5jbGFzc05hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XHJcbiAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgXHJcbiAgICB0YXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG4pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIGRhdGU6ICc7XHJcbiAgICBjb25zdCBkdWVEYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGlmIChkdWVEYXRlICE9PSAnJykge1xyXG4gICAgICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gJ05vdCBzcGVjaWZpZWQnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YXNrRHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XHJcblxyXG4gICAgY29uc3QgdGFza0J0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tCdG5zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrLWJ0bnMnO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZWRpdEJ0bi5jbGFzc05hbWUgPSAnYnRuLWluLW1haW4gZWRpdCc7XHJcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpXHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnYnRuLWluLW1haW4gZGVsZXRlJztcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0YXNrSWQpO1xyXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcbiAgICB0YXNrQnRuc0NvbnRhaW5lci5hcHBlbmQoZWRpdEJ0biwgZGVsZXRlQnRuKTtcclxuXHJcbiAgICB0YXNrRGV0YWlscy5hcHBlbmQodGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHksIHRhc2tEdWVEYXRlLCB0YXNrQnRuc0NvbnRhaW5lcik7XHJcblxyXG4gICAgZXhwYW5kSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZScpO1xyXG4gICAgICAgIHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzaWJsZScpO1xyXG4gICAgfSlcclxuXHJcbiAgICBuZXdUYXNrLmFwcGVuZCh0YXNrSGVhZCwgdGFza0RldGFpbHMpO1xyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbURvbShncmFuZFBhcmVudCwgcGFyZW50KSB7XHJcblxyXG4gICAgZ3JhbmRQYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50KTtcclxuXHJcbiAgICBsZXQgdGFza0lkID0gcGFyZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgbGV0IHByb2plY3REYXRhSWQgPSBncmFuZFBhcmVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCB0YXNrUHJpb3JpdHlFbGVtZW50ID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGRcclxuICAgIGxldCB0YXNrRHVlRGF0ZSA9IHRhc2tQcmlvcml0eUVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgLy9kZWxldGVzIHRoZSB0YXNrIGZyb20gdGhlICdpbXBvcnRhbnQnIHNlY3Rpb24gYXMgd2VsbCBpZiBpdCBpcyB0aGVyZVxyXG4gICAgaWYgKHRhc2tQcmlvcml0eUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdIaWdoJykpIHtcclxuICAgICAgICB2ZXJpZnlBbmREZWxldGUoaW1wb3J0YW50VGFza3MsIGltcG9ydGFudCwgdGFza0lkLCBwcm9qZWN0RGF0YUlkLCBpbXBvcnRhbnRQYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZXMgdGhlIHRhc2sgaWYgaXQgaXMgaW4gdGhlICd0b2RheScgc2VjdGlvbiBhcyB3ZWxsXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0YXNrRHVlRGF0ZSkpKSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kRGVsZXRlKHRvZGF5c1Rhc2tzLCB0b2RheXMsIHRhc2tJZCwgcHJvamVjdERhdGFJZCwgdG9kYXlQYXJhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZSBpZiBpbiB0aGlzIHdlZWsgc2VjdGlvblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUodGFza0R1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZERlbGV0ZSh0aGlzV2Vla3NUYXNrcywgdGhpc1dlZWtzLCB0YXNrSWQsIHByb2plY3REYXRhSWQsIHVwY29taW5nUGFyYSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2RlbGV0ZSB0YXNrIGZyb20gYSBzZWN0aW9uXHJcbmZ1bmN0aW9uIHZlcmlmeUFuZERlbGV0ZSh0YXNrcywgc2VjdGlvbiwgdGFza0lkLCBwcm9qZWN0RGF0YUlkLCBzZWN0aW9uUGFyYSkge1xyXG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzKSB7XHJcbiAgICAgICAgaWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHRhc2tJZCAmJiB0YXNrLmdldEF0dHJpYnV0ZSgncHJvamVjdC1kYXRhLWlkJykgPT09IHByb2plY3REYXRhSWQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKHRhc2tzLmluZGV4T2YodGFzayksIDEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvblBhcmEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3RoZXNlIHdpbGwgYmUgdXNlZCB0byBlZGl0IHRoZSBlbGVtZW50IGNvbnRlbnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRWxlbWVudHMoZSkge1xyXG4gICAgbGV0IHRhc2tOZWVkcyA9IFtdO1xyXG4gICAgbGV0IHRpdGxlRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGxldCB0aXRsZSA9IHRpdGxlRWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgZGVzY3JpcHRpb247XHJcbiAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID09PSAnTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQnKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICBsZXQgcHJpb3JpdHlFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBwcmlvcml0eSA9IHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGxldCBkdWVEYXRlRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkdWVEYXRlRWxlbWVudC50ZXh0Q29udGVudDtcclxuXHJcbiAgICBsZXQgdGFza1Byb2plY3RCb2R5RGF0YUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGxldCBlZGl0QnRuRGF0YUlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICBcclxuICAgIHRhc2tOZWVkcy5wdXNoKGVkaXRCdG5EYXRhSWQsIHRhc2tQcm9qZWN0Qm9keURhdGFJZCwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQsIHByaW9yaXR5RWxlbWVudCwgZHVlRGF0ZUVsZW1lbnQpO1xyXG5cclxuICAgIHNob3dGb3JtKHRhc2tGb3JtRWRpdCk7XHJcbiAgICBhZGRJbnB1dHNUb1Rhc2tGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xyXG5cclxuICAgIHJldHVybiB0YXNrTmVlZHM7ICAgXHJcbn1cclxuXHJcblxyXG4vL2ZpbGwgaW4gdGhlIHRhc2sgZGV0YWlscyB3aXRoIHRoZSBuZXcgaW5wdXRzIHRha2VuXHJcbmZ1bmN0aW9uIGVkaXRUYXNrSW5Eb20odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSwgdGl0bGVFbGVtZW50LCBkZXNjcmlwdGlvbkVsZW1lbnQsIHByaW9yaXR5RWxlbWVudCwgZHVlRGF0ZUVsZW1lbnQpIHtcclxuICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmICghZGVzY3JpcHRpb24gfHwgIShkZXNjcmlwdGlvbi50cmltKCkpKSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gJ05vIGRlc2NyaXB0aW9uIHByb3ZpZGVkJztcclxuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25vdC1zcGVjaWZpZWQnKSkge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc3BlY2lmaWVkJykpIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25vdC1zcGVjaWZpZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG4gICAgcHJpb3JpdHlFbGVtZW50LmNsYXNzTmFtZSA9IGBwcmlvcml0eSAke3ByaW9yaXR5fWA7XHJcbiAgICBcclxuICAgIGlmIChkdWVEYXRlICE9PSAnJykge1xyXG4gICAgICAgIGR1ZURhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZHVlRGF0ZTtcclxuICAgICAgICBpZiAoZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdub3Qtc3BlY2lmaWVkJykpIHtcclxuICAgICAgICAgICAgZHVlRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXNwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnTm90IHNwZWNpZmllZCc7XHJcbiAgICAgICAgaWYgKGR1ZURhdGVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbm90LXNwZWNpZmllZCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkdWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3Qtc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0U3BlY2lhbFRhc2soZWRpdEJ0bkRhdGFJZCwgcHJvamVjdERhdGFJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkgeyAgIFxyXG5cclxuICAgIC8vaWYgdGhlIHByaW9yaXR5IGlucHV0IGlzIGhpZ2gsIGZpcnN0IGNoZWNrIGlmIGl0cyBhbHJlYWR5IGluIHRoZSAnaW1wb3J0YW50JyBzZWN0aW9uXHJcbiAgICBpZiAocHJpb3JpdHkgPT09ICdIaWdoJykge1xyXG4gICAgICAgIHZlcmlmeUFuZEVkaXRPckFkZChpbXBvcnRhbnRUYXNrcywgaW1wb3J0YW50LCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBpbXBvcnRhbnRQYXJhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9pZiBwcmlvcml0eSBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gSGlnaCBhbmQgaXRzIGluIHRoZSBpbXBvcnRhbnQgc2VjdGlvbiwgd2UgcmVtb3ZlIGl0XHJcbiAgICAgICAgdmVyaWZ5QW5kUmVtb3ZlKGltcG9ydGFudFRhc2tzLCBpbXBvcnRhbnQsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIGltcG9ydGFudFBhcmEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2VkaXQgZm9yIHRoZSAndG9kYXknIHNlY3Rpb25cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKGR1ZURhdGUpKSkge1xyXG4gICAgICAgIHZlcmlmeUFuZEVkaXRPckFkZCh0b2RheXNUYXNrcywgdG9kYXlzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCB0b2RheVBhcmEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZlcmlmeUFuZFJlbW92ZSh0b2RheXNUYXNrcywgdG9kYXlzLCBlZGl0QnRuRGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0b2RheVBhcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZWRpdCBmb3IgJ3RoaXMgd2Vlaycgc2VjdGlvblxyXG4gICAgaWYgKGlzVGhpc1dlZWsobmV3IERhdGUoZHVlRGF0ZSkpKSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kRWRpdE9yQWRkKHRoaXNXZWVrc1Rhc2tzLCB0aGlzV2Vla3MsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHVwY29taW5nUGFyYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmVyaWZ5QW5kUmVtb3ZlKHRoaXNXZWVrc1Rhc2tzLCB0aGlzV2Vla3MsIGVkaXRCdG5EYXRhSWQsIHByb2plY3REYXRhSWQsIHVwY29taW5nUGFyYSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL2VkaXRzIHRoZSBpbmZvIGluIGEgc3BlY2lhbCBzZWN0aW9uIGlmIGl0cyB0aGVyZSBhbmQgYWRkcyBpdCBpZiB0aGUgZWRpdGVkIGRhdGEgZml0cyBjcml0ZXJpYSBmb3IgdGhhdCB0YXNrIHRvIGJlIGluIHRoYXQgc3BlY2lhbCBzZWN0aW9uXHJcbmZ1bmN0aW9uIHZlcmlmeUFuZEVkaXRPckFkZCh0YXNrcywgc2VjdGlvbiwgZGF0YUlkLCBwcm9qZWN0RGF0YUlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBzZWN0aW9uUGFyYSkge1xyXG4gICAgLy9jaGVja3MgaWYgaXRzIHRoZXJlIGZpcnN0XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBpZiAodGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZGF0YUlkICYmIHRhc2suZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnKSA9PT0gcHJvamVjdERhdGFJZCkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGVFbGVtZW50ID0gdGFzay5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkVsZW1lbnQgPSB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eUVsZW1lbnQgPSBkZXNjcmlwdGlvbkVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGxldCBkdWVEYXRlRWxlbWVudCA9IGRlc2NyaXB0aW9uRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBlZGl0VGFza0luRG9tKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRpdGxlRWxlbWVudCwgZGVzY3JpcHRpb25FbGVtZW50LCBwcmlvcml0eUVsZW1lbnQsIGR1ZURhdGVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vaWYgaXQncyBub3QgdGhlcmUsIGNyZWF0ZSB0YXNrIGVsZW1lbnRzIGZvciBpdCBhbmQgYWRkIGl0IHRvIHRoZSBzcGVjaWFsIHNlY3Rpb25cclxuICAgIGxldCBlZGl0ZWRUYXNrID0gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBkYXRhSWQsIHByb2plY3REYXRhSWQpO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0ZWRUYXNrKTtcclxuICAgIHRhc2tzLnB1c2goZWRpdGVkVGFzayk7XHJcblxyXG4gICAgc2VjdGlvblBhcmEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuXHJcbi8vcmVtb3ZlcyB0aGUgaW5mbyBmcm9tIHRoZSBzcGVjaWFsIHNlY3Rpb24gaWYgZWRpdGVkIGRhdGEgbWFrZXMgaXQgdW5maXQgdG8gYmUgdGhlcmVcclxuZnVuY3Rpb24gdmVyaWZ5QW5kUmVtb3ZlKHRhc2tzLCBzZWN0aW9uLCBkYXRhSWQsIHByb2plY3REYXRhSWQsIHNlY3Rpb25QYXJhKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3MpIHtcclxuICAgICAgICBpZiAodGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSA9PT0gZGF0YUlkICYmIHRhc2suZ2V0QXR0cmlidXRlKCdwcm9qZWN0LWRhdGEtaWQnKSA9PT0gcHJvamVjdERhdGFJZCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ucmVtb3ZlQ2hpbGQodGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzZWN0aW9uUGFyYS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=