/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/WOW.js/dist/wow.js":
/*!*****************************************!*\
  !*** ./node_modules/WOW.js/dist/wow.js ***!
  \*****************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else { var mod; }\n})(this, function (module, exports) {\n  'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  var _class, _temp;\n\n  function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError(\"Cannot call a class as a function\");\n    }\n  }\n\n  var _createClass = function () {\n    function defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n\n    return function (Constructor, protoProps, staticProps) {\n      if (protoProps) defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) defineProperties(Constructor, staticProps);\n      return Constructor;\n    };\n  }();\n\n  function isIn(needle, haystack) {\n    return haystack.indexOf(needle) >= 0;\n  }\n\n  function extend(custom, defaults) {\n    for (var key in defaults) {\n      if (custom[key] == null) {\n        var value = defaults[key];\n        custom[key] = value;\n      }\n    }\n    return custom;\n  }\n\n  function isMobile(agent) {\n    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)\n    );\n  }\n\n  function createEvent(event) {\n    var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];\n    var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];\n    var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];\n\n    var customEvent = void 0;\n    if (document.createEvent != null) {\n      // W3C DOM\n      customEvent = document.createEvent('CustomEvent');\n      customEvent.initCustomEvent(event, bubble, cancel, detail);\n    } else if (document.createEventObject != null) {\n      // IE DOM < 9\n      customEvent = document.createEventObject();\n      customEvent.eventType = event;\n    } else {\n      customEvent.eventName = event;\n    }\n\n    return customEvent;\n  }\n\n  function emitEvent(elem, event) {\n    if (elem.dispatchEvent != null) {\n      // W3C DOM\n      elem.dispatchEvent(event);\n    } else if (event in (elem != null)) {\n      elem[event]();\n    } else if ('on' + event in (elem != null)) {\n      elem['on' + event]();\n    }\n  }\n\n  function addEvent(elem, event, fn) {\n    if (elem.addEventListener != null) {\n      // W3C DOM\n      elem.addEventListener(event, fn, false);\n    } else if (elem.attachEvent != null) {\n      // IE DOM\n      elem.attachEvent('on' + event, fn);\n    } else {\n      // fallback\n      elem[event] = fn;\n    }\n  }\n\n  function removeEvent(elem, event, fn) {\n    if (elem.removeEventListener != null) {\n      // W3C DOM\n      elem.removeEventListener(event, fn, false);\n    } else if (elem.detachEvent != null) {\n      // IE DOM\n      elem.detachEvent('on' + event, fn);\n    } else {\n      // fallback\n      delete elem[event];\n    }\n  }\n\n  function getInnerHeight() {\n    if ('innerHeight' in window) {\n      return window.innerHeight;\n    }\n\n    return document.documentElement.clientHeight;\n  }\n\n  // Minimalistic WeakMap shim, just in case.\n  var WeakMap = window.WeakMap || window.MozWeakMap || function () {\n    function WeakMap() {\n      _classCallCheck(this, WeakMap);\n\n      this.keys = [];\n      this.values = [];\n    }\n\n    _createClass(WeakMap, [{\n      key: 'get',\n      value: function get(key) {\n        for (var i = 0; i < this.keys.length; i++) {\n          var item = this.keys[i];\n          if (item === key) {\n            return this.values[i];\n          }\n        }\n        return undefined;\n      }\n    }, {\n      key: 'set',\n      value: function set(key, value) {\n        for (var i = 0; i < this.keys.length; i++) {\n          var item = this.keys[i];\n          if (item === key) {\n            this.values[i] = value;\n            return this;\n          }\n        }\n        this.keys.push(key);\n        this.values.push(value);\n        return this;\n      }\n    }]);\n\n    return WeakMap;\n  }();\n\n  // Dummy MutationObserver, to avoid raising exceptions.\n  var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function () {\n    function MutationObserver() {\n      _classCallCheck(this, MutationObserver);\n\n      if (typeof console !== 'undefined' && console !== null) {\n        console.warn('MutationObserver is not supported by your browser.');\n        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');\n      }\n    }\n\n    _createClass(MutationObserver, [{\n      key: 'observe',\n      value: function observe() {}\n    }]);\n\n    return MutationObserver;\n  }(), _class.notSupported = true, _temp);\n\n  // getComputedStyle shim, from http://stackoverflow.com/a/21797294\n  var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {\n    var getComputedStyleRX = /(\\-([a-z]){1})/g;\n    return {\n      getPropertyValue: function getPropertyValue(prop) {\n        if (prop === 'float') {\n          prop = 'styleFloat';\n        }\n        if (getComputedStyleRX.test(prop)) {\n          prop.replace(getComputedStyleRX, function (_, _char) {\n            return _char.toUpperCase();\n          });\n        }\n        var currentStyle = el.currentStyle;\n\n        return (currentStyle != null ? currentStyle[prop] : void 0) || null;\n      }\n    };\n  };\n\n  var WOW = function () {\n    function WOW() {\n      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];\n\n      _classCallCheck(this, WOW);\n\n      this.defaults = {\n        boxClass: 'wow',\n        animateClass: 'animated',\n        offset: 0,\n        mobile: true,\n        live: true,\n        callback: null,\n        scrollContainer: null\n      };\n\n      this.animate = function animateFactory() {\n        if ('requestAnimationFrame' in window) {\n          return function (callback) {\n            return window.requestAnimationFrame(callback);\n          };\n        }\n        return function (callback) {\n          return callback();\n        };\n      }();\n\n      this.vendors = ['moz', 'webkit'];\n\n      this.start = this.start.bind(this);\n      this.resetAnimation = this.resetAnimation.bind(this);\n      this.scrollHandler = this.scrollHandler.bind(this);\n      this.scrollCallback = this.scrollCallback.bind(this);\n      this.scrolled = true;\n      this.config = extend(options, this.defaults);\n      if (options.scrollContainer != null) {\n        this.config.scrollContainer = document.querySelector(options.scrollContainer);\n      }\n      // Map of elements to animation names:\n      this.animationNameCache = new WeakMap();\n      this.wowEvent = createEvent(this.config.boxClass);\n    }\n\n    _createClass(WOW, [{\n      key: 'init',\n      value: function init() {\n        this.element = window.document.documentElement;\n        if (isIn(document.readyState, ['interactive', 'complete'])) {\n          this.start();\n        } else {\n          addEvent(document, 'DOMContentLoaded', this.start);\n        }\n        this.finished = [];\n      }\n    }, {\n      key: 'start',\n      value: function start() {\n        var _this = this;\n\n        this.stopped = false;\n        this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass));\n        this.all = this.boxes.slice(0);\n        if (this.boxes.length) {\n          if (this.disabled()) {\n            this.resetStyle();\n          } else {\n            for (var i = 0; i < this.boxes.length; i++) {\n              var box = this.boxes[i];\n              this.applyStyle(box, true);\n            }\n          }\n        }\n        if (!this.disabled()) {\n          addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n          addEvent(window, 'resize', this.scrollHandler);\n          this.interval = setInterval(this.scrollCallback, 50);\n        }\n        if (this.config.live) {\n          var mut = new MutationObserver(function (records) {\n            for (var j = 0; j < records.length; j++) {\n              var record = records[j];\n              for (var k = 0; k < record.addedNodes.length; k++) {\n                var node = record.addedNodes[k];\n                _this.doSync(node);\n              }\n            }\n            return undefined;\n          });\n          mut.observe(document.body, {\n            childList: true,\n            subtree: true\n          });\n        }\n      }\n    }, {\n      key: 'stop',\n      value: function stop() {\n        this.stopped = true;\n        removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);\n        removeEvent(window, 'resize', this.scrollHandler);\n        if (this.interval != null) {\n          clearInterval(this.interval);\n        }\n      }\n    }, {\n      key: 'sync',\n      value: function sync() {\n        if (MutationObserver.notSupported) {\n          this.doSync(this.element);\n        }\n      }\n    }, {\n      key: 'doSync',\n      value: function doSync(element) {\n        if (typeof element === 'undefined' || element === null) {\n          element = this.element;\n        }\n        if (element.nodeType !== 1) {\n          return;\n        }\n        element = element.parentNode || element;\n        var iterable = element.querySelectorAll('.' + this.config.boxClass);\n        for (var i = 0; i < iterable.length; i++) {\n          var box = iterable[i];\n          if (!isIn(box, this.all)) {\n            this.boxes.push(box);\n            this.all.push(box);\n            if (this.stopped || this.disabled()) {\n              this.resetStyle();\n            } else {\n              this.applyStyle(box, true);\n            }\n            this.scrolled = true;\n          }\n        }\n      }\n    }, {\n      key: 'show',\n      value: function show(box) {\n        this.applyStyle(box);\n        box.className = box.className + ' ' + this.config.animateClass;\n        if (this.config.callback != null) {\n          this.config.callback(box);\n        }\n        emitEvent(box, this.wowEvent);\n\n        addEvent(box, 'animationend', this.resetAnimation);\n        addEvent(box, 'oanimationend', this.resetAnimation);\n        addEvent(box, 'webkitAnimationEnd', this.resetAnimation);\n        addEvent(box, 'MSAnimationEnd', this.resetAnimation);\n\n        return box;\n      }\n    }, {\n      key: 'applyStyle',\n      value: function applyStyle(box, hidden) {\n        var _this2 = this;\n\n        var duration = box.getAttribute('data-wow-duration');\n        var delay = box.getAttribute('data-wow-delay');\n        var iteration = box.getAttribute('data-wow-iteration');\n\n        return this.animate(function () {\n          return _this2.customStyle(box, hidden, duration, delay, iteration);\n        });\n      }\n    }, {\n      key: 'resetStyle',\n      value: function resetStyle() {\n        for (var i = 0; i < this.boxes.length; i++) {\n          var box = this.boxes[i];\n          box.style.visibility = 'visible';\n        }\n        return undefined;\n      }\n    }, {\n      key: 'resetAnimation',\n      value: function resetAnimation(event) {\n        if (event.type.toLowerCase().indexOf('animationend') >= 0) {\n          var target = event.target || event.srcElement;\n          target.className = target.className.replace(this.config.animateClass, '').trim();\n        }\n      }\n    }, {\n      key: 'customStyle',\n      value: function customStyle(box, hidden, duration, delay, iteration) {\n        if (hidden) {\n          this.cacheAnimationName(box);\n        }\n        box.style.visibility = hidden ? 'hidden' : 'visible';\n\n        if (duration) {\n          this.vendorSet(box.style, { animationDuration: duration });\n        }\n        if (delay) {\n          this.vendorSet(box.style, { animationDelay: delay });\n        }\n        if (iteration) {\n          this.vendorSet(box.style, { animationIterationCount: iteration });\n        }\n        this.vendorSet(box.style, { animationName: hidden ? 'none' : this.cachedAnimationName(box) });\n\n        return box;\n      }\n    }, {\n      key: 'vendorSet',\n      value: function vendorSet(elem, properties) {\n        for (var name in properties) {\n          if (properties.hasOwnProperty(name)) {\n            var value = properties[name];\n            elem['' + name] = value;\n            for (var i = 0; i < this.vendors.length; i++) {\n              var vendor = this.vendors[i];\n              elem['' + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;\n            }\n          }\n        }\n      }\n    }, {\n      key: 'vendorCSS',\n      value: function vendorCSS(elem, property) {\n        var style = getComputedStyle(elem);\n        var result = style.getPropertyCSSValue(property);\n        for (var i = 0; i < this.vendors.length; i++) {\n          var vendor = this.vendors[i];\n          result = result || style.getPropertyCSSValue('-' + vendor + '-' + property);\n        }\n        return result;\n      }\n    }, {\n      key: 'animationName',\n      value: function animationName(box) {\n        var aName = void 0;\n        try {\n          aName = this.vendorCSS(box, 'animation-name').cssText;\n        } catch (error) {\n          // Opera, fall back to plain property value\n          aName = getComputedStyle(box).getPropertyValue('animation-name');\n        }\n\n        if (aName === 'none') {\n          return ''; // SVG/Firefox, unable to get animation name?\n        }\n\n        return aName;\n      }\n    }, {\n      key: 'cacheAnimationName',\n      value: function cacheAnimationName(box) {\n        // https://bugzilla.mozilla.org/show_bug.cgi?id=921834\n        // box.dataset is not supported for SVG elements in Firefox\n        return this.animationNameCache.set(box, this.animationName(box));\n      }\n    }, {\n      key: 'cachedAnimationName',\n      value: function cachedAnimationName(box) {\n        return this.animationNameCache.get(box);\n      }\n    }, {\n      key: 'scrollHandler',\n      value: function scrollHandler() {\n        this.scrolled = true;\n      }\n    }, {\n      key: 'scrollCallback',\n      value: function scrollCallback() {\n        if (this.scrolled) {\n          this.scrolled = false;\n          var results = [];\n          for (var i = 0; i < this.boxes.length; i++) {\n            var box = this.boxes[i];\n            if (box) {\n              if (this.isVisible(box)) {\n                this.show(box);\n                continue;\n              }\n              results.push(box);\n            }\n          }\n          this.boxes = results;\n          if (!this.boxes.length && !this.config.live) {\n            this.stop();\n          }\n        }\n      }\n    }, {\n      key: 'offsetTop',\n      value: function offsetTop(element) {\n        // SVG elements don't have an offsetTop in Firefox.\n        // This will use their nearest parent that has an offsetTop.\n        // Also, using ('offsetTop' of element) causes an exception in Firefox.\n        while (element.offsetTop === undefined) {\n          element = element.parentNode;\n        }\n        var top = element.offsetTop;\n        while (element.offsetParent) {\n          element = element.offsetParent;\n          top += element.offsetTop;\n        }\n        return top;\n      }\n    }, {\n      key: 'isVisible',\n      value: function isVisible(box) {\n        var offset = box.getAttribute('data-wow-offset') || this.config.offset;\n        var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;\n        var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;\n        var top = this.offsetTop(box);\n        var bottom = top + box.clientHeight;\n\n        return top <= viewBottom && bottom >= viewTop;\n      }\n    }, {\n      key: 'disabled',\n      value: function disabled() {\n        return !this.config.mobile && isMobile(navigator.userAgent);\n      }\n    }]);\n\n    return WOW;\n  }();\n\n  exports.default = WOW;\n  module.exports = exports['default'];\n});\n\n\n//# sourceURL=webpack://Advanced_frontend/./node_modules/WOW.js/dist/wow.js?");

/***/ }),

/***/ "./src/assets/js/Modules/PartFormSign-Up/checkDotInput.js":
/*!****************************************************************!*\
  !*** ./src/assets/js/Modules/PartFormSign-Up/checkDotInput.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portion_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Portion/addClass */ \"./src/assets/js/Modules/Portion/addClass.js\");\n/* harmony import */ var _Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portion/removeClass */ \"./src/assets/js/Modules/Portion/removeClass.js\");\n\r\n\r\n\r\nconst checkDotInput = (selector, selectorBtn) => {\r\n\r\n      const Client = JSON.parse(localStorage.getItem('dataClient'))  \r\n\r\n      let ClientLogin = null\r\n   \r\n      try {\r\n          for (let item of Client) {\r\n              ClientLogin = item.log;\r\n\r\n              selector.addEventListener('input', (e) => {\r\n               e.target.value = e.target.value.replace(/[.,=+;:?!* /]/g, '')\r\n         \r\n               ;(0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selector)\r\n               selector.previousElementSibling.innerText = 'Your username'\r\n         \r\n               if (selector.value === ClientLogin && selectorBtn.value === 'Sign Up') {\r\n                  (0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)\r\n                  selector.previousElementSibling.innerText = 'Имя занято'\r\n               }\r\n               })\r\n           }\r\n      } catch{}\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkDotInput);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/PartFormSign-Up/checkDotInput.js?");

/***/ }),

/***/ "./src/assets/js/Modules/PartFormSign-Up/checkMailInput.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/Modules/PartFormSign-Up/checkMailInput.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portion_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Portion/addClass */ \"./src/assets/js/Modules/Portion/addClass.js\");\n/* harmony import */ var _Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portion/removeClass */ \"./src/assets/js/Modules/Portion/removeClass.js\");\n\r\n\r\n\r\nconst checkMailInput = (selector) => {\r\n   const emailRegexp = /^(([^<>()[\\].,;:\\s@\"]+(\\.[^<>()[\\].,;:\\s@\"]+)*)|(\".+\"))@(([^<>()[\\].,;:\\s@\"]+\\.)+[^<>()[\\].,;:\\s@\"]{2,})$/iu\r\n\r\n   function isEmailValid(value) {\r\n      return emailRegexp.test(value)\r\n  }\r\n  \r\n  function onInput() {\r\n     if (isEmailValid(selector.value)) {\r\n      (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selector)\r\n      selector.previousElementSibling.innerText = 'E-mail'\r\n     } else {\r\n      (0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)\r\n      selector.previousElementSibling.innerText = 'Некорректный e-mail'\r\n     }\r\n  }\r\n  \r\n  selector.addEventListener('input', onInput)\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkMailInput);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/PartFormSign-Up/checkMailInput.js?");

/***/ }),

/***/ "./src/assets/js/Modules/PartFormSign-Up/checkPasswordInput.js":
/*!*********************************************************************!*\
  !*** ./src/assets/js/Modules/PartFormSign-Up/checkPasswordInput.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portion_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Portion/addClass */ \"./src/assets/js/Modules/Portion/addClass.js\");\n/* harmony import */ var _Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portion/removeClass */ \"./src/assets/js/Modules/Portion/removeClass.js\");\n\r\n\r\n\r\nconst checkPassword = (selector) => {\r\n\r\n   const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\\w\\s]).{8,}/\r\n\r\n   function isEmailValid(value) {\r\n      return passwordRegexp.test(value)\r\n  }\r\n  \r\n  function onInput() {\r\n     if (isEmailValid(selector.value)) {\r\n      (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selector)\r\n      selector.previousElementSibling.innerText = 'Password'\r\n     } else {\r\n      (0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(selector)\r\n      selector.previousElementSibling.innerText = 'Добавте: один спец-символ и заглавную букву'\r\n     }\r\n  }\r\n  \r\n  selector.addEventListener('input', onInput)\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkPassword);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/PartFormSign-Up/checkPasswordInput.js?");

/***/ }),

/***/ "./src/assets/js/Modules/PartFormSign-Up/checkRepeat.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/Modules/PartFormSign-Up/checkRepeat.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portion_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Portion/addClass */ \"./src/assets/js/Modules/Portion/addClass.js\");\n/* harmony import */ var _Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portion/removeClass */ \"./src/assets/js/Modules/Portion/removeClass.js\");\n\r\n\r\n\r\nconst checkRepeat = (repeatSelector, paswordSelector) => {\r\n\r\n  \r\n  function onInput() {\r\n     if (repeatSelector.value === paswordSelector.value) {\r\n      (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(repeatSelector)\r\n      repeatSelector.previousElementSibling.innerText = 'Repeat Password'\r\n     } else {\r\n      (0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(repeatSelector)\r\n      repeatSelector.previousElementSibling.innerText = 'Несовпадает!!!'\r\n     }\r\n  }\r\n  \r\n  repeatSelector.addEventListener('input', onInput)\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (checkRepeat);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/PartFormSign-Up/checkRepeat.js?");

/***/ }),

/***/ "./src/assets/js/Modules/PartFormSign-Up/conditionSign-Up.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/Modules/PartFormSign-Up/conditionSign-Up.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Portion_addClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Portion/addClass */ \"./src/assets/js/Modules/Portion/addClass.js\");\n/* harmony import */ var _Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portion/removeClass */ \"./src/assets/js/Modules/Portion/removeClass.js\");\n/* harmony import */ var _Portion_saveLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portion/saveLocalStorage */ \"./src/assets/js/Modules/Portion/saveLocalStorage.js\");\n/* harmony import */ var _Portion_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portion/popup */ \"./src/assets/js/Modules/Portion/popup.js\");\n\r\n\r\n\r\n\r\n\r\nconst conditions = (fullName, yourUsername, eMail, password, repeat, checkbox, btn) => {\r\n\r\n\r\n\r\n   let hasError = false\r\n\r\n     \r\n   try {\r\n      if (!fullName.value  || fullName.value.length < 3) {\r\n         hasError = true\r\n         ;(0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fullName)\r\n      } else {\r\n         (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(fullName)\r\n      }\r\n   } catch{}\r\n\r\n      if (!yourUsername.value || yourUsername.value.length < 3 ) {\r\n         hasError = true\r\n         ;(0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(yourUsername)\r\n      } else {\r\n         (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(yourUsername)\r\n      }\r\n\r\n   try {\r\n      if (!eMail.value || eMail.value.length < 6 ) {\r\n         hasError = true\r\n         ;(0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eMail)\r\n      } else {\r\n         (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(eMail)\r\n      }\r\n   } catch{}\r\n\r\n      if (!password.value && password.value.length < 8) {\r\n         hasError = true\r\n         ;(0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(password)\r\n      } else {\r\n         (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(password)\r\n      }\r\n\r\n   try {\r\n      if (password.value !== repeat.value && repeat.value.length < 8) {\r\n         hasError = true\r\n         ;(0,_Portion_addClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(repeat)\r\n      } else {\r\n         (0,_Portion_removeClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(repeat)\r\n      }\r\n   } catch{}\r\n\r\n   try {\r\n      if (!checkbox.checked) {\r\n         hasError = true\r\n         checkbox.nextElementSibling.nextElementSibling.style.display = 'block'\r\n      } else {\r\n         checkbox.nextElementSibling.nextElementSibling.style.display = 'none'\r\n      }\r\n   } catch{}\r\n\r\n      if (!hasError && btn.value === 'Sign Up' ) {\r\n\r\n         (0,_Portion_saveLocalStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fullName, yourUsername, password) \r\n         ;(0,_Portion_popup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('#layer', '[data-close]')\r\n         }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (conditions);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/PartFormSign-Up/conditionSign-Up.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/addClass.js":
/*!***************************************************!*\
  !*** ./src/assets/js/Modules/Portion/addClass.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addClass = (item) => {\r\n\r\n   item.classList.add('form__input--error')\r\n   item.nextElementSibling.style.display = 'block'\r\n   item.previousElementSibling.classList.add('form__input-label--error')\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (addClass);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/addClass.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/clearForm.js":
/*!****************************************************!*\
  !*** ./src/assets/js/Modules/Portion/clearForm.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst clearForm = () => {\r\n\r\n   const input = document.querySelectorAll('.form__input')\r\n\r\n      input.forEach(item => {\r\n         item.value = null\r\n      })\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearForm);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/clearForm.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/loading.js":
/*!**************************************************!*\
  !*** ./src/assets/js/Modules/Portion/loading.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst loading = () => {\r\n\r\n      document.body.classList.add('loaded__hiding')\r\n      setTimeout(function () {\r\n          document.body.classList.add('loaded')\r\n          document.body.classList.remove('loaded__hiding')\r\n      }, 1000)\r\n      setTimeout(function () {\r\n        document.body.classList.remove('loaded')\r\n        }, 1100)\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/loading.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/popup.js":
/*!************************************************!*\
  !*** ./src/assets/js/Modules/Portion/popup.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ \"./src/assets/js/Modules/Portion/loading.js\");\n\r\nconst popup = ( popupSelection, closeSelection) => {\r\n\r\n   const popup = document.querySelector(popupSelection),\r\n         close = document.querySelector(closeSelection)\r\n\r\n\r\n            popup.classList.add('visible')\r\n            document.body.style.overflow = 'hidden'\r\n            document.body.style.margin = '0 17px 0 0'\r\n\r\n\r\n         function removeClassPopup () {\r\n            popup.classList.remove('visible')\r\n            document.body.style.overflow = ''\r\n            document.body.style.margin = '0'\r\n            ;(0,_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n         }\r\n\r\n\r\n         close.addEventListener('click', removeClassPopup)\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/popup.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/removeClass.js":
/*!******************************************************!*\
  !*** ./src/assets/js/Modules/Portion/removeClass.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst removeClass = (item) => {\r\n\r\n   item.classList.remove('form__input--error')\r\n   try {\r\n      item.nextElementSibling.style.display = 'none'\r\n   } catch{}\r\n   try {\r\n      item.previousElementSibling.classList.remove('form__input-label--error')\r\n   } catch{}\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeClass);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/removeClass.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Portion/saveLocalStorage.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/Modules/Portion/saveLocalStorage.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst saveLocalStorage = (fullName, yourUsername, password) => {\r\n\r\n    const Client = JSON.parse(localStorage.getItem('dataClient'))  \r\n\r\n    let ClientLogin = null\r\n    let ClientPass = null\r\n \r\n    try {\r\n        for (let item of Client) {\r\n            ClientLogin = item.log;\r\n            ClientPass = item.pass;\r\n            \r\n        }\r\n    } catch{}\r\n    if (yourUsername.value !== ClientLogin && password.value !== ClientPass ) {\r\n        let clients = []\r\n        let data = {name: fullName.value, log: yourUsername.value, pass: password.value}\r\n        let dataClient = localStorage.getItem('dataClient')\r\n     \r\n        if (dataClient) {\r\n            clients = JSON.parse(dataClient)\r\n        }\r\n        clients.push(data)\r\n        localStorage.setItem('dataClient', JSON.stringify(clients))\r\n    }\r\n\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (saveLocalStorage);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/Portion/saveLocalStorage.js?");

/***/ }),

/***/ "./src/assets/js/Modules/validForm.js":
/*!********************************************!*\
  !*** ./src/assets/js/Modules/validForm.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSign-Up/checkNumInputs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _PartFormSign_Up_checkDotInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartFormSign-Up/checkDotInput */ \"./src/assets/js/Modules/PartFormSign-Up/checkDotInput.js\");\n/* harmony import */ var _PartFormSign_Up_checkMailInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartFormSign-Up/checkMailInput */ \"./src/assets/js/Modules/PartFormSign-Up/checkMailInput.js\");\n/* harmony import */ var _PartFormSign_Up_checkPasswordInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PartFormSign-Up/checkPasswordInput */ \"./src/assets/js/Modules/PartFormSign-Up/checkPasswordInput.js\");\n/* harmony import */ var _PartFormSign_Up_checkRepeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PartFormSign-Up/checkRepeat */ \"./src/assets/js/Modules/PartFormSign-Up/checkRepeat.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSigh-In/signIn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSigh-In/welcomeAccount'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _PartFormSign_Up_conditionSign_Up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PartFormSign-Up/conditionSign-Up */ \"./src/assets/js/Modules/PartFormSign-Up/conditionSign-Up.js\");\n/* harmony import */ var _Portion_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Portion/loading */ \"./src/assets/js/Modules/Portion/loading.js\");\n/* harmony import */ var _Portion_clearForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Portion/clearForm */ \"./src/assets/js/Modules/Portion/clearForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst validForm = (formSelector,checkboxSelector,nameSelector, userNameSelector, eMailSelector, passwordSelector, repeatSelector, btnSelector, textSelector, btnAgreeSelector, haveAccountSelector) => {\r\n\r\n   const form = document.querySelector(formSelector),\r\n         fullName = document.querySelector(nameSelector),\r\n         yourUsername = document.querySelector(userNameSelector),\r\n         eMail = document.querySelector(eMailSelector),\r\n         password = document.querySelector(passwordSelector),\r\n         repeat = document.querySelector(repeatSelector),\r\n         checkbox = document.querySelector(checkboxSelector),\r\n         btn = document.querySelector(btnSelector),\r\n         text = document.querySelector(textSelector),\r\n         agreeBtn = document.querySelector(btnAgreeSelector),\r\n         haveAccount = document.querySelector(haveAccountSelector)\r\n\r\n\r\n   checkNumInput(fullName)\r\n   checkDotInput(yourUsername, btn)\r\n   checkMailInput(eMail)\r\n   ;(0,_PartFormSign_Up_checkPasswordInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(password)\r\n   ;(0,_PartFormSign_Up_checkRepeat__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(repeat, password)\r\n\r\n\r\n   const validCondition =  (e) => {\r\n      stopDefAction(e)\r\n      ;(0,_PartFormSign_Up_conditionSign_Up__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(fullName, yourUsername, eMail, password, repeat, checkbox, btn)\r\n   }\r\n\r\n   const haveAccountLink = (e) => {\r\n      stopDefAction(e)\r\n      if (haveAccount.innerText === 'Already have an account?') {\r\n         try {\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSigh-In/signIn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(text, btn, fullName, eMail, repeat, checkbox, haveAccount)\r\n         } catch{}\r\n         (0,_Portion_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n      } else {\r\n         try {\r\n            location. reload()\r\n         } catch{}\r\n         (0,_Portion_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n\r\n      }\r\n   } \r\n\r\n   function handleClick() {\r\n\r\n      form.removeEventListener('submit', validCondition, handleClick)\r\n      form.removeEventListener('submit', signWelcome, handleClick)\r\n   \r\n   }\r\n\r\n   function stopDefAction(e) {\r\n      e.preventDefault();\r\n   }\r\n\r\n   function signWelcome (e) {\r\n      stopDefAction(e)\r\n      if (haveAccount.innerText === 'Registration') {\r\n         try {\r\n            Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSigh-In/welcomeAccount'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(text, btn, yourUsername, password, haveAccount)\r\n         } catch{}\r\n      }\r\n   }\r\n\r\n   function exitAccount () {\r\n      if (btn.value == 'Exit') {\r\n         (0,_Portion_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n         location. reload()\r\n      }\r\n   }\r\n\r\n   function haveAccountBtn () {\r\n      (0,_Portion_clearForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n      try {\r\n         Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './PartFormSigh-In/signIn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(text, btn, fullName, eMail, repeat, checkbox, haveAccount)\r\n      } catch{}\r\n      (0,_Portion_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n   }\r\n\r\n   form.addEventListener('submit', validCondition, handleClick)\r\n   \r\n   agreeBtn.addEventListener('click', haveAccountBtn)\r\n\r\n   haveAccount.addEventListener('click', haveAccountLink)\r\n\r\n   form.addEventListener('submit', signWelcome, handleClick)\r\n\r\n   btn.addEventListener('click', exitAccount,)\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validForm);\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/Modules/validForm.js?");

/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_validForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/validForm */ \"./src/assets/js/Modules/validForm.js\");\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n   \"use strict\"\r\n\r\n   ;(0,_Modules_validForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#formSubmit', '.form__agree', '#Full_Name', '#Your_username', '#E_mail', '#Password', '#Repeat_Password', '#form__btn', '.form-section__account', '[data-close]', '[data-account]')\r\n   \r\n   wowJS()\r\n});\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/script.js?");

/***/ }),

/***/ "./src/assets/js/wow.js":
/*!******************************!*\
  !*** ./src/assets/js/wow.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var WOW_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! WOW.js */ \"./node_modules/WOW.js/dist/wow.js\");\n/* harmony import */ var WOW_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(WOW_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nnew (WOW_js__WEBPACK_IMPORTED_MODULE_0___default())().init();\r\n\n\n//# sourceURL=webpack://Advanced_frontend/./src/assets/js/wow.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/script.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/wow.js");
/******/ 	
/******/ })()
;