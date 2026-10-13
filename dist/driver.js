/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\nbody {\n    background-color: grey;\n}\n\n#top {\n    display: flex;\n    gap: 20px;\n}\n\n.boardBox {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin-top: 120px;\n}\n\n\n\n.board-grid {\n    display: grid;\n    grid-template-columns: repeat(var(--size), 1fr);\n    max-width: 600px;\n    max-height: 600px;\n    width: 80%;\n    aspect-ratio: 1 / 1;\n    gap: 20px;\n    display: grid;\n    margin: 20px;\n    border: 2px solid black;\n    padding: 10px;\n\n}\n\n.board-container {\n    display: flex;\n    flex-direction: column;\n    flex: 0 1 600px;\n    max-width: 600px;\n    align-items: center;\n}\n\n.cell {\n    aspect-ratio: 1 / 1;\n    background: lightblue;\n}\n\n.cell.hit { \n    background: red;\n}\n\n.cell.miss {\n    background: black;\n}\n\n.game-over {\n    pointer-events: auto;\n    opacity: .18;\n}\n\n#gameOverPopup {\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.board1Box, .board2Box {\n    display: flex;\n    flex-direction: column;\n    height: 500px;\n    width: 500px;\n}\n\n.cell.ship {\n    background-color: darkgreen;\n}\n\n\n\n#gameOverModal {\n    position: relative;\n    inset: 0;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1000;\n}\n\n\n.overlay-box {\n    position: absolute;\n    display: flex;\n    margin-top: 150px;\n    background-color: white;\n    width: 100vw;\n    height: 300px;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n#playGamePrompt {\n\n    position: absolute;\n    margin-top: 150px;\n    background-color: white;\n    width: 100vw;\n    height: 200px;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal-box{\n    position: relative;\n    inset: 0;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 1000;\n    display: flex;\n    background-color: white;\n    width: 100vw;\n    height: 200px;\n    align-items: center;\n    justify-content: center;\n}\n\n.hidden {\n    display: none;\n}\n\n.instructions {\n    text-align: center;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/board.js"
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\nclass Gameboard {\n    constructor(size = 8) {\n        this.size = size;\n        this.board = this.buildBoard();\n        this.ships = [];\n        this.missedAttacks = [];\n    }\n\n    buildBoard() {\n        const board = [];\n\n        for (let row = 0; row < this.size; row++) {\n            const rowArray = [];\n            for (let col = 0; col < this.size; col++) {\n                rowArray.push({ ship: null });\n            }\n            board.push(rowArray);\n        }\n        return board;\n    };\n\n    canPlace(length, row, col, direction) {\n        for (let i = 0; i < length; i++) {\n            const r = direction === 'vertical' ? row + i : row;\n            const c = direction === 'horizontal' ? col + i : col;\n\n            if (r >= this.size || c >= this.size) return false;\n            if (this.board[r][c].ship !== null) return false;\n        }\n        return true;\n    }\n\n    placeShips(length, row, col, direction) {\n        const ship = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n        const coordinates = [];\n\n        for (let i = 0; i < ship.length; i++) {\n            const r = direction === 'vertical' ? row + i : row;\n            const c = direction === 'horizontal' ? col + i : col;\n\n            if (r >= this.size || c >= this.size) {\n                alert('Ship out of bounds');\n                return false;\n            }\n            if (this.board[r][c].ship !== null) {\n                alert('Cell already occupied');\n                return false;\n                //right now ship doesnt get placed and alert shows but\n                //ship gets skipped entirely and placed in wrong spot\n            }\n            coordinates.push([r, c]);\n        }\n        \n        coordinates.forEach(([r, c]) => {\n            this.board[r][c].ship = ship;\n        });\n        this.ships.push(ship);\n        return true;\n    }\n\n    receiveAttack(row, col) {\n        const cell = this.board[row][col];\n        if (cell.attacked) {\n            { hit: false };\n            throw new Error('Cell already attacked: Try again!');\n            \n        }\n        let wasHit = false;\n\n        if (cell.ship) {\n            cell.ship.hit();\n            cell.hit = cell.ship.hits;\n            cell.sunk = cell.ship.isSunk();\n            wasHit = true;\n        } else {\n            this.missedAttacks.push([row, col]);\n        };\n        cell.attacked = true;\n        return { hit: wasHit };\n    }\n\n    allShipsSunk() {\n        return this.ships.every(ship => ship.isSunk());\n    }\n};\n\n\n//# sourceURL=webpack://battleship/./src/board.js?\n}");

/***/ },

/***/ "./src/driver.js"
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   driveGame: () => (/* binding */ driveGame)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\n\n\n\nconst boardBox1 = document.getElementById('board1');\nconst boardBox2 = document.getElementById('board2');\n\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player();\nconst opponent = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player();\n\nconst gameOverModal = document.getElementById('gameOverModal');\nconst gameOverMessage = document.getElementById('gameOverPopup');\n\nlet gamePhase = 'placement';\n\nconst playGamePrompt = document.getElementById('playGamePrompt');\nconst playGameBtn = document.getElementById('playGameBtn');\n\nfunction showPlayPrompt() {\n    playGamePrompt.classList.remove('hidden');\n};\n\nfunction driveGame() {\n\n    boardBox1.innerHTML = \"\";\n    boardBox2.innerHTML = \"\";\n\n    boardBox1.classList.remove('game-over');\n    boardBox2.classList.remove('game-over');\n\n    player.setup();\n    opponent.setup();\n\n    player.opponentBoard = opponent.board;\n    opponent.opponentBoard = player.board;\n\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, board1, true);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, board2, false);\n};\n\nconst submitBtn = document.querySelector('#submitBtn');\nsubmitBtn.addEventListener('click', event => {\n    const allPlaced = player.playerPlacements();\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, boardBox1, true);\n\n    if (allPlaced) {\n        playGamePrompt.classList.remove('hidden');\n    }\n});\n\nconst resetBtn = document.getElementById('reset');\nresetBtn.addEventListener('click', event => {\n    \n    gameOverModal.classList.add('hidden');\n    playGamePrompt.classList.add('hidden');\n\n    boardBox1.classList.remove('game-over');\n    boardBox2.classList.remove('game-over');\n\n    player.reset();\n    opponent.reset();\n    gamePhase = 'placement';\n\n    rowBox.value = \"\";\n    colBox.value = \"\";\n    directionBox.value = \"\";\n\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, boardBox1, true);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(opponent.board, boardBox2, false);\n\n});\n\nplayGameBtn.addEventListener('click', () => {\n    playGamePrompt.classList.add('hidden');\n\n    gamePhase = 'attack';\n    opponent.randomSetup();\n    player.opponentBoard = opponent.board;\n    opponent.opponentBoard = player.board;\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(opponent.board, boardBox2, false);\n});\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.boardListener)(boardBox2, () => opponent.board, (row, col) => {\n\n    if (gamePhase !== 'attack') return;\n    \n    player.attack(row, col);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(opponent.board, boardBox2, false);\n    if (opponent.board.allShipsSunk()) {\n        boardBox2.classList.add('game-over');\n        boardBox1.classList.add('game-over');\n        showGameOver('Game Over: You win!')\n        return;\n    }\n    \n    opponent.huntAttack();\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, boardBox1, true);\n    if (player.board.allShipsSunk()) {\n        boardBox2.classList.add('game-over');\n        boardBox1.classList.add('game-over');\n        showGameOver('Game Over: Computer wins')\n        return;\n    }\n});\n\nfunction showGameOver(text) {\n    gameOverMessage.textContent = text;\n    gameOverModal.classList.remove('hidden');\n};\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(player.board, boardBox1, true);\n(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderBoard)(opponent.board, boardBox2, false);\n\n//# sourceURL=webpack://battleship/./src/driver.js?\n}");

/***/ },

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n        this.sunk = false;\n    }\n\n    hit() {\n        this.hits += 1;\n        this.isSunk();\n    }\n\n    isSunk() {\n        if (this.hits >= this.length) {\n            this.sunk = true;\n        }\n        return this.sunk;\n    };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/game.js?\n}");

/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\n\nclass Player {\n    constructor() {\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n        this.opponentBoard = null;\n        this.targetQueue = [];\n        this.shipIndex = 0;\n        this.shipLengths = [5, 4, 3, 3, 2];\n    }\n    \n\n    setup() {\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n        this.board.placeShips(5, 0, 0, 'horizontal');\n        this.board.placeShips(4, 1, 0, 'horizontal');\n        this.board.placeShips(3, 2, 0, 'horizontal');\n        this.board.placeShips(3, 3, 0, 'horizontal');\n        this.board.placeShips(2, 4, 0, 'horizontal');\n    }\n\n    reset() {\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n        this.opponentBoard = null;\n        this.targetQueue = [];\n        this.shipIndex = 0;\n    }\n\n    randomSetup() {\n        this.board = new _board_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n\n        for (const length of this.shipLengths) {\n            let placed = false;\n\n            while (!placed) {\n                const row = Math.floor(Math.random() * this.board.size);\n                const col = Math.floor(Math.random() * this.board.size);\n                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';\n\n                if (this.board.canPlace(length, row, col, direction)) {\n                    this.board.placeShips(length, row, col, direction);\n                    placed = true;\n                }\n            }\n        }\n    }\n\n    playerPlacements() {\n        if (this.shipIndex >= this.shipLengths.length) return true;\n\n        const rowBox = document.querySelector('#rowBox');\n        const colBox = document.querySelector('#colBox');\n        const directionBox = document.querySelector('#directionBox');\n\n        const playerRow = Number(rowBox.value);\n        const playerCol = Number(colBox.value);\n        const playerDir = directionBox.value;\n\n        if (rowBox.value !== \"\" & colBox.value !== \"\" && directionBox !== \"\") {\n            const placed = this.board.placeShips(\n                this.shipLengths[this.shipIndex],\n                playerRow,\n                playerCol,\n                playerDir\n            );\n\n            if (placed) {\n                this.shipIndex++;\n                rowBox.value = \"\";\n                colBox.value = \"\";\n                directionBox.value = \"\";\n            }\n        }\n        return this.shipIndex >= this.shipLengths.length;\n    }\n\n    attack(row, col) {\n        return this.opponentBoard.receiveAttack(row, col);\n    }\n\n    computerAttack() {\n        let row, col;\n        let alreadyAttacked = true;\n\n        while (alreadyAttacked) {\n            row = Math.floor(Math.random() * this.opponentBoard.size);\n            col = Math.floor(Math.random() * this.opponentBoard.size);\n            alreadyAttacked = this.opponentBoard.board[row][col].attacked;\n        }\n        this.attack(row, col);\n    }\n\n    queueNeighbors(row, col) {\n        const candidates = [\n            [row - 1, col],\n            [row + 1, col],\n            [row, col - 1],\n            [row, col + 1],\n        ];\n\n        for (const [r, c] of candidates) {\n            const inBounds = r >= 0 && r < this.opponentBoard.size &&\n                            c >= 0 && c < this.opponentBoard.size;\n            if (!inBounds) continue;\n\n            const alreadyQueued = this.targetQueue.some(([qr, qc]) => qr === r && qc === c);\n            const alreadyAttacked = this.opponentBoard.board[r][c].attacked;\n\n            if (!alreadyAttacked && !alreadyQueued) {\n            this.targetQueue.push([r, c]);\n            }\n        }\n    }\n\n    huntAttack() {\n        let row, col;\n\n        if (this.targetQueue.length > 0) {\n            [row, col] = this.targetQueue.shift();\n        } else {\n            row = Math.floor(Math.random() * this.opponentBoard.size);\n            col = Math.floor(Math.random() * this.opponentBoard.size);\n            while (this.opponentBoard.board[row][col].attacked) {\n                row = Math.floor(Math.random() * this.opponentBoard.size);\n                col = Math.floor(Math.random() * this.opponentBoard.size);\n            }\n        }\n\n        const result = this.attack(row, col);\n        if (result.hit) {\n            this.queueNeighbors(row, col);\n        }\n        return result;\n    }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?\n}");

/***/ },

/***/ "./src/render.js"
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boardListener: () => (/* binding */ boardListener),\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\n\n\nfunction renderBoard(gameboard, container, showShips) {\n    container.innerHTML = \"\";\n    container.classList.add(\"board-grid\");\n    container.style.setProperty('--size', gameboard.size);\n\n    for (let row = 0; row < gameboard.size; row++) {\n        for (let col = 0; col < gameboard.size; col++) {\n            const cell = gameboard.board[row][col];\n            const cellDiv = document.createElement(\"div\");\n            cellDiv.classList.add(\"cell\");\n            cellDiv.dataset.row = row;\n            cellDiv.dataset.col = col;\n\n            if (cell.attacked && cell.ship) cellDiv.classList.add(\"hit\");\n            else if (cell.attacked) cellDiv.classList.add(\"miss\");\n\n            if (cell.ship && !cell.attacked && showShips) {\n                cellDiv.classList.add(\"ship\");\n            }\n\n            container.appendChild(cellDiv);\n        };\n    };\n};\n\nfunction boardListener(container, getGameboard, cellClick) {\n    container.addEventListener(\"click\", (e) => {\n        if (!e.target.classList.contains(\"cell\")) return;\n\n        const gameboard = getGameboard();\n        const row = Number(e.target.dataset.row);\n        const col = Number(e.target.dataset.col);\n        cellClick(row, col);\n    });\n};\n\n//# sourceURL=webpack://battleship/./src/render.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/driver.js");
/******/ 	
/******/ })()
;