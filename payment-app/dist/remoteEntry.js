/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var PaymentApp;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * react-dom.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function noop() {}\n    function testStringCoercion(value) {\n      return \"\" + value;\n    }\n    function createPortal$1(children, containerInfo, implementation) {\n      var key =\n        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;\n      try {\n        testStringCoercion(key);\n        var JSCompiler_inline_result = !1;\n      } catch (e) {\n        JSCompiler_inline_result = !0;\n      }\n      JSCompiler_inline_result &&\n        (console.error(\n          \"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.\",\n          (\"function\" === typeof Symbol &&\n            Symbol.toStringTag &&\n            key[Symbol.toStringTag]) ||\n            key.constructor.name ||\n            \"Object\"\n        ),\n        testStringCoercion(key));\n      return {\n        $$typeof: REACT_PORTAL_TYPE,\n        key: null == key ? null : \"\" + key,\n        children: children,\n        containerInfo: containerInfo,\n        implementation: implementation\n      };\n    }\n    function getCrossOriginStringAs(as, input) {\n      if (\"font\" === as) return \"\";\n      if (\"string\" === typeof input)\n        return \"use-credentials\" === input ? input : \"\";\n    }\n    function getValueDescriptorExpectingObjectForWarning(thing) {\n      return null === thing\n        ? \"`null`\"\n        : void 0 === thing\n          ? \"`undefined`\"\n          : \"\" === thing\n            ? \"an empty string\"\n            : 'something with type \"' + typeof thing + '\"';\n    }\n    function getValueDescriptorExpectingEnumForWarning(thing) {\n      return null === thing\n        ? \"`null`\"\n        : void 0 === thing\n          ? \"`undefined`\"\n          : \"\" === thing\n            ? \"an empty string\"\n            : \"string\" === typeof thing\n              ? JSON.stringify(thing)\n              : \"number\" === typeof thing\n                ? \"`\" + thing + \"`\"\n                : 'something with type \"' + typeof thing + '\"';\n    }\n    function resolveDispatcher() {\n      var dispatcher = ReactSharedInternals.H;\n      null === dispatcher &&\n        console.error(\n          \"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.\"\n        );\n      return dispatcher;\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\"),\n      Internals = {\n        d: {\n          f: noop,\n          r: function () {\n            throw Error(\n              \"Invalid form element. requestFormReset must be passed a form that was rendered by React.\"\n            );\n          },\n          D: noop,\n          C: noop,\n          L: noop,\n          m: noop,\n          X: noop,\n          S: noop,\n          M: noop\n        },\n        p: 0,\n        findDOMNode: null\n      },\n      REACT_PORTAL_TYPE = Symbol.for(\"react.portal\"),\n      ReactSharedInternals =\n        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;\n    (\"function\" === typeof Map &&\n      null != Map.prototype &&\n      \"function\" === typeof Map.prototype.forEach &&\n      \"function\" === typeof Set &&\n      null != Set.prototype &&\n      \"function\" === typeof Set.prototype.clear &&\n      \"function\" === typeof Set.prototype.forEach) ||\n      console.error(\n        \"React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills\"\n      );\n    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =\n      Internals;\n    exports.createPortal = function (children, container) {\n      var key =\n        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;\n      if (\n        !container ||\n        (1 !== container.nodeType &&\n          9 !== container.nodeType &&\n          11 !== container.nodeType)\n      )\n        throw Error(\"Target container is not a DOM element.\");\n      return createPortal$1(children, container, null, key);\n    };\n    exports.flushSync = function (fn) {\n      var previousTransition = ReactSharedInternals.T,\n        previousUpdatePriority = Internals.p;\n      try {\n        if (((ReactSharedInternals.T = null), (Internals.p = 2), fn))\n          return fn();\n      } finally {\n        (ReactSharedInternals.T = previousTransition),\n          (Internals.p = previousUpdatePriority),\n          Internals.d.f() &&\n            console.error(\n              \"flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.\"\n            );\n      }\n    };\n    exports.preconnect = function (href, options) {\n      \"string\" === typeof href && href\n        ? null != options && \"object\" !== typeof options\n          ? console.error(\n              \"ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.\",\n              getValueDescriptorExpectingEnumForWarning(options)\n            )\n          : null != options &&\n            \"string\" !== typeof options.crossOrigin &&\n            console.error(\n              \"ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.\",\n              getValueDescriptorExpectingObjectForWarning(options.crossOrigin)\n            )\n        : console.error(\n            \"ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.\",\n            getValueDescriptorExpectingObjectForWarning(href)\n          );\n      \"string\" === typeof href &&\n        (options\n          ? ((options = options.crossOrigin),\n            (options =\n              \"string\" === typeof options\n                ? \"use-credentials\" === options\n                  ? options\n                  : \"\"\n                : void 0))\n          : (options = null),\n        Internals.d.C(href, options));\n    };\n    exports.prefetchDNS = function (href) {\n      if (\"string\" !== typeof href || !href)\n        console.error(\n          \"ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.\",\n          getValueDescriptorExpectingObjectForWarning(href)\n        );\n      else if (1 < arguments.length) {\n        var options = arguments[1];\n        \"object\" === typeof options && options.hasOwnProperty(\"crossOrigin\")\n          ? console.error(\n              \"ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.\",\n              getValueDescriptorExpectingEnumForWarning(options)\n            )\n          : console.error(\n              \"ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.\",\n              getValueDescriptorExpectingEnumForWarning(options)\n            );\n      }\n      \"string\" === typeof href && Internals.d.D(href);\n    };\n    exports.preinit = function (href, options) {\n      \"string\" === typeof href && href\n        ? null == options || \"object\" !== typeof options\n          ? console.error(\n              \"ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.\",\n              getValueDescriptorExpectingEnumForWarning(options)\n            )\n          : \"style\" !== options.as &&\n            \"script\" !== options.as &&\n            console.error(\n              'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".',\n              getValueDescriptorExpectingEnumForWarning(options.as)\n            )\n        : console.error(\n            \"ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.\",\n            getValueDescriptorExpectingObjectForWarning(href)\n          );\n      if (\n        \"string\" === typeof href &&\n        options &&\n        \"string\" === typeof options.as\n      ) {\n        var as = options.as,\n          crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),\n          integrity =\n            \"string\" === typeof options.integrity ? options.integrity : void 0,\n          fetchPriority =\n            \"string\" === typeof options.fetchPriority\n              ? options.fetchPriority\n              : void 0;\n        \"style\" === as\n          ? Internals.d.S(\n              href,\n              \"string\" === typeof options.precedence\n                ? options.precedence\n                : void 0,\n              {\n                crossOrigin: crossOrigin,\n                integrity: integrity,\n                fetchPriority: fetchPriority\n              }\n            )\n          : \"script\" === as &&\n            Internals.d.X(href, {\n              crossOrigin: crossOrigin,\n              integrity: integrity,\n              fetchPriority: fetchPriority,\n              nonce: \"string\" === typeof options.nonce ? options.nonce : void 0\n            });\n      }\n    };\n    exports.preinitModule = function (href, options) {\n      var encountered = \"\";\n      (\"string\" === typeof href && href) ||\n        (encountered +=\n          \" The `href` argument encountered was \" +\n          getValueDescriptorExpectingObjectForWarning(href) +\n          \".\");\n      void 0 !== options && \"object\" !== typeof options\n        ? (encountered +=\n            \" The `options` argument encountered was \" +\n            getValueDescriptorExpectingObjectForWarning(options) +\n            \".\")\n        : options &&\n          \"as\" in options &&\n          \"script\" !== options.as &&\n          (encountered +=\n            \" The `as` option encountered was \" +\n            getValueDescriptorExpectingEnumForWarning(options.as) +\n            \".\");\n      if (encountered)\n        console.error(\n          \"ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s\",\n          encountered\n        );\n      else\n        switch (\n          ((encountered =\n            options && \"string\" === typeof options.as ? options.as : \"script\"),\n          encountered)\n        ) {\n          case \"script\":\n            break;\n          default:\n            (encountered =\n              getValueDescriptorExpectingEnumForWarning(encountered)),\n              console.error(\n                'ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',\n                encountered,\n                href\n              );\n        }\n      if (\"string\" === typeof href)\n        if (\"object\" === typeof options && null !== options) {\n          if (null == options.as || \"script\" === options.as)\n            (encountered = getCrossOriginStringAs(\n              options.as,\n              options.crossOrigin\n            )),\n              Internals.d.M(href, {\n                crossOrigin: encountered,\n                integrity:\n                  \"string\" === typeof options.integrity\n                    ? options.integrity\n                    : void 0,\n                nonce:\n                  \"string\" === typeof options.nonce ? options.nonce : void 0\n              });\n        } else null == options && Internals.d.M(href);\n    };\n    exports.preload = function (href, options) {\n      var encountered = \"\";\n      (\"string\" === typeof href && href) ||\n        (encountered +=\n          \" The `href` argument encountered was \" +\n          getValueDescriptorExpectingObjectForWarning(href) +\n          \".\");\n      null == options || \"object\" !== typeof options\n        ? (encountered +=\n            \" The `options` argument encountered was \" +\n            getValueDescriptorExpectingObjectForWarning(options) +\n            \".\")\n        : (\"string\" === typeof options.as && options.as) ||\n          (encountered +=\n            \" The `as` option encountered was \" +\n            getValueDescriptorExpectingObjectForWarning(options.as) +\n            \".\");\n      encountered &&\n        console.error(\n          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s',\n          encountered\n        );\n      if (\n        \"string\" === typeof href &&\n        \"object\" === typeof options &&\n        null !== options &&\n        \"string\" === typeof options.as\n      ) {\n        encountered = options.as;\n        var crossOrigin = getCrossOriginStringAs(\n          encountered,\n          options.crossOrigin\n        );\n        Internals.d.L(href, encountered, {\n          crossOrigin: crossOrigin,\n          integrity:\n            \"string\" === typeof options.integrity ? options.integrity : void 0,\n          nonce: \"string\" === typeof options.nonce ? options.nonce : void 0,\n          type: \"string\" === typeof options.type ? options.type : void 0,\n          fetchPriority:\n            \"string\" === typeof options.fetchPriority\n              ? options.fetchPriority\n              : void 0,\n          referrerPolicy:\n            \"string\" === typeof options.referrerPolicy\n              ? options.referrerPolicy\n              : void 0,\n          imageSrcSet:\n            \"string\" === typeof options.imageSrcSet\n              ? options.imageSrcSet\n              : void 0,\n          imageSizes:\n            \"string\" === typeof options.imageSizes\n              ? options.imageSizes\n              : void 0,\n          media: \"string\" === typeof options.media ? options.media : void 0\n        });\n      }\n    };\n    exports.preloadModule = function (href, options) {\n      var encountered = \"\";\n      (\"string\" === typeof href && href) ||\n        (encountered +=\n          \" The `href` argument encountered was \" +\n          getValueDescriptorExpectingObjectForWarning(href) +\n          \".\");\n      void 0 !== options && \"object\" !== typeof options\n        ? (encountered +=\n            \" The `options` argument encountered was \" +\n            getValueDescriptorExpectingObjectForWarning(options) +\n            \".\")\n        : options &&\n          \"as\" in options &&\n          \"string\" !== typeof options.as &&\n          (encountered +=\n            \" The `as` option encountered was \" +\n            getValueDescriptorExpectingObjectForWarning(options.as) +\n            \".\");\n      encountered &&\n        console.error(\n          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s',\n          encountered\n        );\n      \"string\" === typeof href &&\n        (options\n          ? ((encountered = getCrossOriginStringAs(\n              options.as,\n              options.crossOrigin\n            )),\n            Internals.d.m(href, {\n              as:\n                \"string\" === typeof options.as && \"script\" !== options.as\n                  ? options.as\n                  : void 0,\n              crossOrigin: encountered,\n              integrity:\n                \"string\" === typeof options.integrity\n                  ? options.integrity\n                  : void 0\n            }))\n          : Internals.d.m(href));\n    };\n    exports.requestFormReset = function (form) {\n      Internals.d.r(form);\n    };\n    exports.unstable_batchedUpdates = function (fn, a) {\n      return fn(a);\n    };\n    exports.useFormState = function (action, initialState, permalink) {\n      return resolveDispatcher().useFormState(action, initialState, permalink);\n    };\n    exports.useFormStatus = function () {\n      return resolveDispatcher().useHostTransitionStatus();\n    };\n    exports.version = \"19.0.0\";\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n\n\n//# sourceURL=webpack://payment-app/./node_modules/react-dom/cjs/react-dom.development.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (true) {\n    // This branch is unreachable because this function is only called\n    // in production, but the condition is true only in development.\n    // Therefore if the branch is still here, dead code elimination wasn't\n    // properly applied.\n    // Don't change the message. React DevTools relies on it. Also make sure\n    // this message doesn't occur elsewhere in this function, or it will cause\n    // a false positive.\n    throw new Error('^_^');\n  }\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.development.js */ \"./node_modules/react-dom/cjs/react-dom.development.js\");\n}\n\n\n//# sourceURL=webpack://payment-app/./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * @license React\n * react.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function defineDeprecationWarning(methodName, info) {\n      Object.defineProperty(Component.prototype, methodName, {\n        get: function () {\n          console.warn(\n            \"%s(...) is deprecated in plain JavaScript React classes. %s\",\n            info[0],\n            info[1]\n          );\n        }\n      });\n    }\n    function getIteratorFn(maybeIterable) {\n      if (null === maybeIterable || \"object\" !== typeof maybeIterable)\n        return null;\n      maybeIterable =\n        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||\n        maybeIterable[\"@@iterator\"];\n      return \"function\" === typeof maybeIterable ? maybeIterable : null;\n    }\n    function warnNoop(publicInstance, callerName) {\n      publicInstance =\n        ((publicInstance = publicInstance.constructor) &&\n          (publicInstance.displayName || publicInstance.name)) ||\n        \"ReactClass\";\n      var warningKey = publicInstance + \".\" + callerName;\n      didWarnStateUpdateForUnmountedComponent[warningKey] ||\n        (console.error(\n          \"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.\",\n          callerName,\n          publicInstance\n        ),\n        (didWarnStateUpdateForUnmountedComponent[warningKey] = !0));\n    }\n    function Component(props, context, updater) {\n      this.props = props;\n      this.context = context;\n      this.refs = emptyObject;\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n    function ComponentDummy() {}\n    function PureComponent(props, context, updater) {\n      this.props = props;\n      this.context = context;\n      this.refs = emptyObject;\n      this.updater = updater || ReactNoopUpdateQueue;\n    }\n    function testStringCoercion(value) {\n      return \"\" + value;\n    }\n    function checkKeyStringCoercion(value) {\n      try {\n        testStringCoercion(value);\n        var JSCompiler_inline_result = !1;\n      } catch (e) {\n        JSCompiler_inline_result = !0;\n      }\n      if (JSCompiler_inline_result) {\n        JSCompiler_inline_result = console;\n        var JSCompiler_temp_const = JSCompiler_inline_result.error;\n        var JSCompiler_inline_result$jscomp$0 =\n          (\"function\" === typeof Symbol &&\n            Symbol.toStringTag &&\n            value[Symbol.toStringTag]) ||\n          value.constructor.name ||\n          \"Object\";\n        JSCompiler_temp_const.call(\n          JSCompiler_inline_result,\n          \"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.\",\n          JSCompiler_inline_result$jscomp$0\n        );\n        return testStringCoercion(value);\n      }\n    }\n    function getComponentNameFromType(type) {\n      if (null == type) return null;\n      if (\"function\" === typeof type)\n        return type.$$typeof === REACT_CLIENT_REFERENCE$2\n          ? null\n          : type.displayName || type.name || null;\n      if (\"string\" === typeof type) return type;\n      switch (type) {\n        case REACT_FRAGMENT_TYPE:\n          return \"Fragment\";\n        case REACT_PORTAL_TYPE:\n          return \"Portal\";\n        case REACT_PROFILER_TYPE:\n          return \"Profiler\";\n        case REACT_STRICT_MODE_TYPE:\n          return \"StrictMode\";\n        case REACT_SUSPENSE_TYPE:\n          return \"Suspense\";\n        case REACT_SUSPENSE_LIST_TYPE:\n          return \"SuspenseList\";\n      }\n      if (\"object\" === typeof type)\n        switch (\n          (\"number\" === typeof type.tag &&\n            console.error(\n              \"Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.\"\n            ),\n          type.$$typeof)\n        ) {\n          case REACT_CONTEXT_TYPE:\n            return (type.displayName || \"Context\") + \".Provider\";\n          case REACT_CONSUMER_TYPE:\n            return (type._context.displayName || \"Context\") + \".Consumer\";\n          case REACT_FORWARD_REF_TYPE:\n            var innerType = type.render;\n            type = type.displayName;\n            type ||\n              ((type = innerType.displayName || innerType.name || \"\"),\n              (type = \"\" !== type ? \"ForwardRef(\" + type + \")\" : \"ForwardRef\"));\n            return type;\n          case REACT_MEMO_TYPE:\n            return (\n              (innerType = type.displayName || null),\n              null !== innerType\n                ? innerType\n                : getComponentNameFromType(type.type) || \"Memo\"\n            );\n          case REACT_LAZY_TYPE:\n            innerType = type._payload;\n            type = type._init;\n            try {\n              return getComponentNameFromType(type(innerType));\n            } catch (x) {}\n        }\n      return null;\n    }\n    function isValidElementType(type) {\n      return \"string\" === typeof type ||\n        \"function\" === typeof type ||\n        type === REACT_FRAGMENT_TYPE ||\n        type === REACT_PROFILER_TYPE ||\n        type === REACT_STRICT_MODE_TYPE ||\n        type === REACT_SUSPENSE_TYPE ||\n        type === REACT_SUSPENSE_LIST_TYPE ||\n        type === REACT_OFFSCREEN_TYPE ||\n        (\"object\" === typeof type &&\n          null !== type &&\n          (type.$$typeof === REACT_LAZY_TYPE ||\n            type.$$typeof === REACT_MEMO_TYPE ||\n            type.$$typeof === REACT_CONTEXT_TYPE ||\n            type.$$typeof === REACT_CONSUMER_TYPE ||\n            type.$$typeof === REACT_FORWARD_REF_TYPE ||\n            type.$$typeof === REACT_CLIENT_REFERENCE$1 ||\n            void 0 !== type.getModuleId))\n        ? !0\n        : !1;\n    }\n    function disabledLog() {}\n    function disableLogs() {\n      if (0 === disabledDepth) {\n        prevLog = console.log;\n        prevInfo = console.info;\n        prevWarn = console.warn;\n        prevError = console.error;\n        prevGroup = console.group;\n        prevGroupCollapsed = console.groupCollapsed;\n        prevGroupEnd = console.groupEnd;\n        var props = {\n          configurable: !0,\n          enumerable: !0,\n          value: disabledLog,\n          writable: !0\n        };\n        Object.defineProperties(console, {\n          info: props,\n          log: props,\n          warn: props,\n          error: props,\n          group: props,\n          groupCollapsed: props,\n          groupEnd: props\n        });\n      }\n      disabledDepth++;\n    }\n    function reenableLogs() {\n      disabledDepth--;\n      if (0 === disabledDepth) {\n        var props = { configurable: !0, enumerable: !0, writable: !0 };\n        Object.defineProperties(console, {\n          log: assign({}, props, { value: prevLog }),\n          info: assign({}, props, { value: prevInfo }),\n          warn: assign({}, props, { value: prevWarn }),\n          error: assign({}, props, { value: prevError }),\n          group: assign({}, props, { value: prevGroup }),\n          groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),\n          groupEnd: assign({}, props, { value: prevGroupEnd })\n        });\n      }\n      0 > disabledDepth &&\n        console.error(\n          \"disabledDepth fell below zero. This is a bug in React. Please file an issue.\"\n        );\n    }\n    function describeBuiltInComponentFrame(name) {\n      if (void 0 === prefix)\n        try {\n          throw Error();\n        } catch (x) {\n          var match = x.stack.trim().match(/\\n( *(at )?)/);\n          prefix = (match && match[1]) || \"\";\n          suffix =\n            -1 < x.stack.indexOf(\"\\n    at\")\n              ? \" (<anonymous>)\"\n              : -1 < x.stack.indexOf(\"@\")\n                ? \"@unknown:0:0\"\n                : \"\";\n        }\n      return \"\\n\" + prefix + name + suffix;\n    }\n    function describeNativeComponentFrame(fn, construct) {\n      if (!fn || reentry) return \"\";\n      var frame = componentFrameCache.get(fn);\n      if (void 0 !== frame) return frame;\n      reentry = !0;\n      frame = Error.prepareStackTrace;\n      Error.prepareStackTrace = void 0;\n      var previousDispatcher = null;\n      previousDispatcher = ReactSharedInternals.H;\n      ReactSharedInternals.H = null;\n      disableLogs();\n      try {\n        var RunInRootFrame = {\n          DetermineComponentFrameRoot: function () {\n            try {\n              if (construct) {\n                var Fake = function () {\n                  throw Error();\n                };\n                Object.defineProperty(Fake.prototype, \"props\", {\n                  set: function () {\n                    throw Error();\n                  }\n                });\n                if (\"object\" === typeof Reflect && Reflect.construct) {\n                  try {\n                    Reflect.construct(Fake, []);\n                  } catch (x) {\n                    var control = x;\n                  }\n                  Reflect.construct(fn, [], Fake);\n                } else {\n                  try {\n                    Fake.call();\n                  } catch (x$0) {\n                    control = x$0;\n                  }\n                  fn.call(Fake.prototype);\n                }\n              } else {\n                try {\n                  throw Error();\n                } catch (x$1) {\n                  control = x$1;\n                }\n                (Fake = fn()) &&\n                  \"function\" === typeof Fake.catch &&\n                  Fake.catch(function () {});\n              }\n            } catch (sample) {\n              if (sample && control && \"string\" === typeof sample.stack)\n                return [sample.stack, control.stack];\n            }\n            return [null, null];\n          }\n        };\n        RunInRootFrame.DetermineComponentFrameRoot.displayName =\n          \"DetermineComponentFrameRoot\";\n        var namePropDescriptor = Object.getOwnPropertyDescriptor(\n          RunInRootFrame.DetermineComponentFrameRoot,\n          \"name\"\n        );\n        namePropDescriptor &&\n          namePropDescriptor.configurable &&\n          Object.defineProperty(\n            RunInRootFrame.DetermineComponentFrameRoot,\n            \"name\",\n            { value: \"DetermineComponentFrameRoot\" }\n          );\n        var _RunInRootFrame$Deter =\n            RunInRootFrame.DetermineComponentFrameRoot(),\n          sampleStack = _RunInRootFrame$Deter[0],\n          controlStack = _RunInRootFrame$Deter[1];\n        if (sampleStack && controlStack) {\n          var sampleLines = sampleStack.split(\"\\n\"),\n            controlLines = controlStack.split(\"\\n\");\n          for (\n            _RunInRootFrame$Deter = namePropDescriptor = 0;\n            namePropDescriptor < sampleLines.length &&\n            !sampleLines[namePropDescriptor].includes(\n              \"DetermineComponentFrameRoot\"\n            );\n\n          )\n            namePropDescriptor++;\n          for (\n            ;\n            _RunInRootFrame$Deter < controlLines.length &&\n            !controlLines[_RunInRootFrame$Deter].includes(\n              \"DetermineComponentFrameRoot\"\n            );\n\n          )\n            _RunInRootFrame$Deter++;\n          if (\n            namePropDescriptor === sampleLines.length ||\n            _RunInRootFrame$Deter === controlLines.length\n          )\n            for (\n              namePropDescriptor = sampleLines.length - 1,\n                _RunInRootFrame$Deter = controlLines.length - 1;\n              1 <= namePropDescriptor &&\n              0 <= _RunInRootFrame$Deter &&\n              sampleLines[namePropDescriptor] !==\n                controlLines[_RunInRootFrame$Deter];\n\n            )\n              _RunInRootFrame$Deter--;\n          for (\n            ;\n            1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;\n            namePropDescriptor--, _RunInRootFrame$Deter--\n          )\n            if (\n              sampleLines[namePropDescriptor] !==\n              controlLines[_RunInRootFrame$Deter]\n            ) {\n              if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {\n                do\n                  if (\n                    (namePropDescriptor--,\n                    _RunInRootFrame$Deter--,\n                    0 > _RunInRootFrame$Deter ||\n                      sampleLines[namePropDescriptor] !==\n                        controlLines[_RunInRootFrame$Deter])\n                  ) {\n                    var _frame =\n                      \"\\n\" +\n                      sampleLines[namePropDescriptor].replace(\n                        \" at new \",\n                        \" at \"\n                      );\n                    fn.displayName &&\n                      _frame.includes(\"<anonymous>\") &&\n                      (_frame = _frame.replace(\"<anonymous>\", fn.displayName));\n                    \"function\" === typeof fn &&\n                      componentFrameCache.set(fn, _frame);\n                    return _frame;\n                  }\n                while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);\n              }\n              break;\n            }\n        }\n      } finally {\n        (reentry = !1),\n          (ReactSharedInternals.H = previousDispatcher),\n          reenableLogs(),\n          (Error.prepareStackTrace = frame);\n      }\n      sampleLines = (sampleLines = fn ? fn.displayName || fn.name : \"\")\n        ? describeBuiltInComponentFrame(sampleLines)\n        : \"\";\n      \"function\" === typeof fn && componentFrameCache.set(fn, sampleLines);\n      return sampleLines;\n    }\n    function describeUnknownElementTypeFrameInDEV(type) {\n      if (null == type) return \"\";\n      if (\"function\" === typeof type) {\n        var prototype = type.prototype;\n        return describeNativeComponentFrame(\n          type,\n          !(!prototype || !prototype.isReactComponent)\n        );\n      }\n      if (\"string\" === typeof type) return describeBuiltInComponentFrame(type);\n      switch (type) {\n        case REACT_SUSPENSE_TYPE:\n          return describeBuiltInComponentFrame(\"Suspense\");\n        case REACT_SUSPENSE_LIST_TYPE:\n          return describeBuiltInComponentFrame(\"SuspenseList\");\n      }\n      if (\"object\" === typeof type)\n        switch (type.$$typeof) {\n          case REACT_FORWARD_REF_TYPE:\n            return (type = describeNativeComponentFrame(type.render, !1)), type;\n          case REACT_MEMO_TYPE:\n            return describeUnknownElementTypeFrameInDEV(type.type);\n          case REACT_LAZY_TYPE:\n            prototype = type._payload;\n            type = type._init;\n            try {\n              return describeUnknownElementTypeFrameInDEV(type(prototype));\n            } catch (x) {}\n        }\n      return \"\";\n    }\n    function getOwner() {\n      var dispatcher = ReactSharedInternals.A;\n      return null === dispatcher ? null : dispatcher.getOwner();\n    }\n    function hasValidKey(config) {\n      if (hasOwnProperty.call(config, \"key\")) {\n        var getter = Object.getOwnPropertyDescriptor(config, \"key\").get;\n        if (getter && getter.isReactWarning) return !1;\n      }\n      return void 0 !== config.key;\n    }\n    function defineKeyPropWarningGetter(props, displayName) {\n      function warnAboutAccessingKey() {\n        specialPropKeyWarningShown ||\n          ((specialPropKeyWarningShown = !0),\n          console.error(\n            \"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)\",\n            displayName\n          ));\n      }\n      warnAboutAccessingKey.isReactWarning = !0;\n      Object.defineProperty(props, \"key\", {\n        get: warnAboutAccessingKey,\n        configurable: !0\n      });\n    }\n    function elementRefGetterWithDeprecationWarning() {\n      var componentName = getComponentNameFromType(this.type);\n      didWarnAboutElementRef[componentName] ||\n        ((didWarnAboutElementRef[componentName] = !0),\n        console.error(\n          \"Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.\"\n        ));\n      componentName = this.props.ref;\n      return void 0 !== componentName ? componentName : null;\n    }\n    function ReactElement(type, key, self, source, owner, props) {\n      self = props.ref;\n      type = {\n        $$typeof: REACT_ELEMENT_TYPE,\n        type: type,\n        key: key,\n        props: props,\n        _owner: owner\n      };\n      null !== (void 0 !== self ? self : null)\n        ? Object.defineProperty(type, \"ref\", {\n            enumerable: !1,\n            get: elementRefGetterWithDeprecationWarning\n          })\n        : Object.defineProperty(type, \"ref\", { enumerable: !1, value: null });\n      type._store = {};\n      Object.defineProperty(type._store, \"validated\", {\n        configurable: !1,\n        enumerable: !1,\n        writable: !0,\n        value: 0\n      });\n      Object.defineProperty(type, \"_debugInfo\", {\n        configurable: !1,\n        enumerable: !1,\n        writable: !0,\n        value: null\n      });\n      Object.freeze && (Object.freeze(type.props), Object.freeze(type));\n      return type;\n    }\n    function cloneAndReplaceKey(oldElement, newKey) {\n      newKey = ReactElement(\n        oldElement.type,\n        newKey,\n        void 0,\n        void 0,\n        oldElement._owner,\n        oldElement.props\n      );\n      newKey._store.validated = oldElement._store.validated;\n      return newKey;\n    }\n    function validateChildKeys(node, parentType) {\n      if (\n        \"object\" === typeof node &&\n        node &&\n        node.$$typeof !== REACT_CLIENT_REFERENCE\n      )\n        if (isArrayImpl(node))\n          for (var i = 0; i < node.length; i++) {\n            var child = node[i];\n            isValidElement(child) && validateExplicitKey(child, parentType);\n          }\n        else if (isValidElement(node))\n          node._store && (node._store.validated = 1);\n        else if (\n          ((i = getIteratorFn(node)),\n          \"function\" === typeof i &&\n            i !== node.entries &&\n            ((i = i.call(node)), i !== node))\n        )\n          for (; !(node = i.next()).done; )\n            isValidElement(node.value) &&\n              validateExplicitKey(node.value, parentType);\n    }\n    function isValidElement(object) {\n      return (\n        \"object\" === typeof object &&\n        null !== object &&\n        object.$$typeof === REACT_ELEMENT_TYPE\n      );\n    }\n    function validateExplicitKey(element, parentType) {\n      if (\n        element._store &&\n        !element._store.validated &&\n        null == element.key &&\n        ((element._store.validated = 1),\n        (parentType = getCurrentComponentErrorInfo(parentType)),\n        !ownerHasKeyUseWarning[parentType])\n      ) {\n        ownerHasKeyUseWarning[parentType] = !0;\n        var childOwner = \"\";\n        element &&\n          null != element._owner &&\n          element._owner !== getOwner() &&\n          ((childOwner = null),\n          \"number\" === typeof element._owner.tag\n            ? (childOwner = getComponentNameFromType(element._owner.type))\n            : \"string\" === typeof element._owner.name &&\n              (childOwner = element._owner.name),\n          (childOwner = \" It was passed a child from \" + childOwner + \".\"));\n        var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;\n        ReactSharedInternals.getCurrentStack = function () {\n          var stack = describeUnknownElementTypeFrameInDEV(element.type);\n          prevGetCurrentStack && (stack += prevGetCurrentStack() || \"\");\n          return stack;\n        };\n        console.error(\n          'Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.',\n          parentType,\n          childOwner\n        );\n        ReactSharedInternals.getCurrentStack = prevGetCurrentStack;\n      }\n    }\n    function getCurrentComponentErrorInfo(parentType) {\n      var info = \"\",\n        owner = getOwner();\n      owner &&\n        (owner = getComponentNameFromType(owner.type)) &&\n        (info = \"\\n\\nCheck the render method of `\" + owner + \"`.\");\n      info ||\n        ((parentType = getComponentNameFromType(parentType)) &&\n          (info =\n            \"\\n\\nCheck the top-level render call using <\" + parentType + \">.\"));\n      return info;\n    }\n    function escape(key) {\n      var escaperLookup = { \"=\": \"=0\", \":\": \"=2\" };\n      return (\n        \"$\" +\n        key.replace(/[=:]/g, function (match) {\n          return escaperLookup[match];\n        })\n      );\n    }\n    function getElementKey(element, index) {\n      return \"object\" === typeof element &&\n        null !== element &&\n        null != element.key\n        ? (checkKeyStringCoercion(element.key), escape(\"\" + element.key))\n        : index.toString(36);\n    }\n    function noop$1() {}\n    function resolveThenable(thenable) {\n      switch (thenable.status) {\n        case \"fulfilled\":\n          return thenable.value;\n        case \"rejected\":\n          throw thenable.reason;\n        default:\n          switch (\n            (\"string\" === typeof thenable.status\n              ? thenable.then(noop$1, noop$1)\n              : ((thenable.status = \"pending\"),\n                thenable.then(\n                  function (fulfilledValue) {\n                    \"pending\" === thenable.status &&\n                      ((thenable.status = \"fulfilled\"),\n                      (thenable.value = fulfilledValue));\n                  },\n                  function (error) {\n                    \"pending\" === thenable.status &&\n                      ((thenable.status = \"rejected\"),\n                      (thenable.reason = error));\n                  }\n                )),\n            thenable.status)\n          ) {\n            case \"fulfilled\":\n              return thenable.value;\n            case \"rejected\":\n              throw thenable.reason;\n          }\n      }\n      throw thenable;\n    }\n    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n      var type = typeof children;\n      if (\"undefined\" === type || \"boolean\" === type) children = null;\n      var invokeCallback = !1;\n      if (null === children) invokeCallback = !0;\n      else\n        switch (type) {\n          case \"bigint\":\n          case \"string\":\n          case \"number\":\n            invokeCallback = !0;\n            break;\n          case \"object\":\n            switch (children.$$typeof) {\n              case REACT_ELEMENT_TYPE:\n              case REACT_PORTAL_TYPE:\n                invokeCallback = !0;\n                break;\n              case REACT_LAZY_TYPE:\n                return (\n                  (invokeCallback = children._init),\n                  mapIntoArray(\n                    invokeCallback(children._payload),\n                    array,\n                    escapedPrefix,\n                    nameSoFar,\n                    callback\n                  )\n                );\n            }\n        }\n      if (invokeCallback) {\n        invokeCallback = children;\n        callback = callback(invokeCallback);\n        var childKey =\n          \"\" === nameSoFar ? \".\" + getElementKey(invokeCallback, 0) : nameSoFar;\n        isArrayImpl(callback)\n          ? ((escapedPrefix = \"\"),\n            null != childKey &&\n              (escapedPrefix =\n                childKey.replace(userProvidedKeyEscapeRegex, \"$&/\") + \"/\"),\n            mapIntoArray(callback, array, escapedPrefix, \"\", function (c) {\n              return c;\n            }))\n          : null != callback &&\n            (isValidElement(callback) &&\n              (null != callback.key &&\n                ((invokeCallback && invokeCallback.key === callback.key) ||\n                  checkKeyStringCoercion(callback.key)),\n              (escapedPrefix = cloneAndReplaceKey(\n                callback,\n                escapedPrefix +\n                  (null == callback.key ||\n                  (invokeCallback && invokeCallback.key === callback.key)\n                    ? \"\"\n                    : (\"\" + callback.key).replace(\n                        userProvidedKeyEscapeRegex,\n                        \"$&/\"\n                      ) + \"/\") +\n                  childKey\n              )),\n              \"\" !== nameSoFar &&\n                null != invokeCallback &&\n                isValidElement(invokeCallback) &&\n                null == invokeCallback.key &&\n                invokeCallback._store &&\n                !invokeCallback._store.validated &&\n                (escapedPrefix._store.validated = 2),\n              (callback = escapedPrefix)),\n            array.push(callback));\n        return 1;\n      }\n      invokeCallback = 0;\n      childKey = \"\" === nameSoFar ? \".\" : nameSoFar + \":\";\n      if (isArrayImpl(children))\n        for (var i = 0; i < children.length; i++)\n          (nameSoFar = children[i]),\n            (type = childKey + getElementKey(nameSoFar, i)),\n            (invokeCallback += mapIntoArray(\n              nameSoFar,\n              array,\n              escapedPrefix,\n              type,\n              callback\n            ));\n      else if (((i = getIteratorFn(children)), \"function\" === typeof i))\n        for (\n          i === children.entries &&\n            (didWarnAboutMaps ||\n              console.warn(\n                \"Using Maps as children is not supported. Use an array of keyed ReactElements instead.\"\n              ),\n            (didWarnAboutMaps = !0)),\n            children = i.call(children),\n            i = 0;\n          !(nameSoFar = children.next()).done;\n\n        )\n          (nameSoFar = nameSoFar.value),\n            (type = childKey + getElementKey(nameSoFar, i++)),\n            (invokeCallback += mapIntoArray(\n              nameSoFar,\n              array,\n              escapedPrefix,\n              type,\n              callback\n            ));\n      else if (\"object\" === type) {\n        if (\"function\" === typeof children.then)\n          return mapIntoArray(\n            resolveThenable(children),\n            array,\n            escapedPrefix,\n            nameSoFar,\n            callback\n          );\n        array = String(children);\n        throw Error(\n          \"Objects are not valid as a React child (found: \" +\n            (\"[object Object]\" === array\n              ? \"object with keys {\" + Object.keys(children).join(\", \") + \"}\"\n              : array) +\n            \"). If you meant to render a collection of children, use an array instead.\"\n        );\n      }\n      return invokeCallback;\n    }\n    function mapChildren(children, func, context) {\n      if (null == children) return children;\n      var result = [],\n        count = 0;\n      mapIntoArray(children, result, \"\", \"\", function (child) {\n        return func.call(context, child, count++);\n      });\n      return result;\n    }\n    function lazyInitializer(payload) {\n      if (-1 === payload._status) {\n        var ctor = payload._result;\n        ctor = ctor();\n        ctor.then(\n          function (moduleObject) {\n            if (0 === payload._status || -1 === payload._status)\n              (payload._status = 1), (payload._result = moduleObject);\n          },\n          function (error) {\n            if (0 === payload._status || -1 === payload._status)\n              (payload._status = 2), (payload._result = error);\n          }\n        );\n        -1 === payload._status &&\n          ((payload._status = 0), (payload._result = ctor));\n      }\n      if (1 === payload._status)\n        return (\n          (ctor = payload._result),\n          void 0 === ctor &&\n            console.error(\n              \"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\\n\\nDid you accidentally put curly braces around the import?\",\n              ctor\n            ),\n          \"default\" in ctor ||\n            console.error(\n              \"lazy: Expected the result of a dynamic import() call. Instead received: %s\\n\\nYour code should look like: \\n  const MyComponent = lazy(() => import('./MyComponent'))\",\n              ctor\n            ),\n          ctor.default\n        );\n      throw payload._result;\n    }\n    function resolveDispatcher() {\n      var dispatcher = ReactSharedInternals.H;\n      null === dispatcher &&\n        console.error(\n          \"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.\"\n        );\n      return dispatcher;\n    }\n    function noop() {}\n    function enqueueTask(task) {\n      if (null === enqueueTaskImpl)\n        try {\n          var requireString = (\"require\" + Math.random()).slice(0, 7);\n          enqueueTaskImpl = (module && module[requireString]).call(\n            module,\n            \"timers\"\n          ).setImmediate;\n        } catch (_err) {\n          enqueueTaskImpl = function (callback) {\n            !1 === didWarnAboutMessageChannel &&\n              ((didWarnAboutMessageChannel = !0),\n              \"undefined\" === typeof MessageChannel &&\n                console.error(\n                  \"This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.\"\n                ));\n            var channel = new MessageChannel();\n            channel.port1.onmessage = callback;\n            channel.port2.postMessage(void 0);\n          };\n        }\n      return enqueueTaskImpl(task);\n    }\n    function aggregateErrors(errors) {\n      return 1 < errors.length && \"function\" === typeof AggregateError\n        ? new AggregateError(errors)\n        : errors[0];\n    }\n    function popActScope(prevActQueue, prevActScopeDepth) {\n      prevActScopeDepth !== actScopeDepth - 1 &&\n        console.error(\n          \"You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. \"\n        );\n      actScopeDepth = prevActScopeDepth;\n    }\n    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {\n      var queue = ReactSharedInternals.actQueue;\n      if (null !== queue)\n        if (0 !== queue.length)\n          try {\n            flushActQueue(queue);\n            enqueueTask(function () {\n              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);\n            });\n            return;\n          } catch (error) {\n            ReactSharedInternals.thrownErrors.push(error);\n          }\n        else ReactSharedInternals.actQueue = null;\n      0 < ReactSharedInternals.thrownErrors.length\n        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          reject(queue))\n        : resolve(returnValue);\n    }\n    function flushActQueue(queue) {\n      if (!isFlushing) {\n        isFlushing = !0;\n        var i = 0;\n        try {\n          for (; i < queue.length; i++) {\n            var callback = queue[i];\n            do {\n              ReactSharedInternals.didUsePromise = !1;\n              var continuation = callback(!1);\n              if (null !== continuation) {\n                if (ReactSharedInternals.didUsePromise) {\n                  queue[i] = callback;\n                  queue.splice(0, i);\n                  return;\n                }\n                callback = continuation;\n              } else break;\n            } while (1);\n          }\n          queue.length = 0;\n        } catch (error) {\n          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);\n        } finally {\n          isFlushing = !1;\n        }\n      }\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var REACT_ELEMENT_TYPE = Symbol.for(\"react.transitional.element\"),\n      REACT_PORTAL_TYPE = Symbol.for(\"react.portal\"),\n      REACT_FRAGMENT_TYPE = Symbol.for(\"react.fragment\"),\n      REACT_STRICT_MODE_TYPE = Symbol.for(\"react.strict_mode\"),\n      REACT_PROFILER_TYPE = Symbol.for(\"react.profiler\");\n    Symbol.for(\"react.provider\");\n    var REACT_CONSUMER_TYPE = Symbol.for(\"react.consumer\"),\n      REACT_CONTEXT_TYPE = Symbol.for(\"react.context\"),\n      REACT_FORWARD_REF_TYPE = Symbol.for(\"react.forward_ref\"),\n      REACT_SUSPENSE_TYPE = Symbol.for(\"react.suspense\"),\n      REACT_SUSPENSE_LIST_TYPE = Symbol.for(\"react.suspense_list\"),\n      REACT_MEMO_TYPE = Symbol.for(\"react.memo\"),\n      REACT_LAZY_TYPE = Symbol.for(\"react.lazy\"),\n      REACT_OFFSCREEN_TYPE = Symbol.for(\"react.offscreen\"),\n      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,\n      didWarnStateUpdateForUnmountedComponent = {},\n      ReactNoopUpdateQueue = {\n        isMounted: function () {\n          return !1;\n        },\n        enqueueForceUpdate: function (publicInstance) {\n          warnNoop(publicInstance, \"forceUpdate\");\n        },\n        enqueueReplaceState: function (publicInstance) {\n          warnNoop(publicInstance, \"replaceState\");\n        },\n        enqueueSetState: function (publicInstance) {\n          warnNoop(publicInstance, \"setState\");\n        }\n      },\n      assign = Object.assign,\n      emptyObject = {};\n    Object.freeze(emptyObject);\n    Component.prototype.isReactComponent = {};\n    Component.prototype.setState = function (partialState, callback) {\n      if (\n        \"object\" !== typeof partialState &&\n        \"function\" !== typeof partialState &&\n        null != partialState\n      )\n        throw Error(\n          \"takes an object of state variables to update or a function which returns an object of state variables.\"\n        );\n      this.updater.enqueueSetState(this, partialState, callback, \"setState\");\n    };\n    Component.prototype.forceUpdate = function (callback) {\n      this.updater.enqueueForceUpdate(this, callback, \"forceUpdate\");\n    };\n    var deprecatedAPIs = {\n        isMounted: [\n          \"isMounted\",\n          \"Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.\"\n        ],\n        replaceState: [\n          \"replaceState\",\n          \"Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).\"\n        ]\n      },\n      fnName;\n    for (fnName in deprecatedAPIs)\n      deprecatedAPIs.hasOwnProperty(fnName) &&\n        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    ComponentDummy.prototype = Component.prototype;\n    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();\n    deprecatedAPIs.constructor = PureComponent;\n    assign(deprecatedAPIs, Component.prototype);\n    deprecatedAPIs.isPureReactComponent = !0;\n    var isArrayImpl = Array.isArray,\n      REACT_CLIENT_REFERENCE$2 = Symbol.for(\"react.client.reference\"),\n      ReactSharedInternals = {\n        H: null,\n        A: null,\n        T: null,\n        S: null,\n        actQueue: null,\n        isBatchingLegacy: !1,\n        didScheduleLegacyUpdate: !1,\n        didUsePromise: !1,\n        thrownErrors: [],\n        getCurrentStack: null\n      },\n      hasOwnProperty = Object.prototype.hasOwnProperty,\n      REACT_CLIENT_REFERENCE$1 = Symbol.for(\"react.client.reference\"),\n      disabledDepth = 0,\n      prevLog,\n      prevInfo,\n      prevWarn,\n      prevError,\n      prevGroup,\n      prevGroupCollapsed,\n      prevGroupEnd;\n    disabledLog.__reactDisabledLog = !0;\n    var prefix,\n      suffix,\n      reentry = !1;\n    var componentFrameCache = new (\n      \"function\" === typeof WeakMap ? WeakMap : Map\n    )();\n    var REACT_CLIENT_REFERENCE = Symbol.for(\"react.client.reference\"),\n      specialPropKeyWarningShown,\n      didWarnAboutOldJSXRuntime;\n    var didWarnAboutElementRef = {};\n    var ownerHasKeyUseWarning = {},\n      didWarnAboutMaps = !1,\n      userProvidedKeyEscapeRegex = /\\/+/g,\n      reportGlobalError =\n        \"function\" === typeof reportError\n          ? reportError\n          : function (error) {\n              if (\n                \"object\" === typeof window &&\n                \"function\" === typeof window.ErrorEvent\n              ) {\n                var event = new window.ErrorEvent(\"error\", {\n                  bubbles: !0,\n                  cancelable: !0,\n                  message:\n                    \"object\" === typeof error &&\n                    null !== error &&\n                    \"string\" === typeof error.message\n                      ? String(error.message)\n                      : String(error),\n                  error: error\n                });\n                if (!window.dispatchEvent(event)) return;\n              } else if (\n                \"object\" === typeof process &&\n                \"function\" === typeof process.emit\n              ) {\n                process.emit(\"uncaughtException\", error);\n                return;\n              }\n              console.error(error);\n            },\n      didWarnAboutMessageChannel = !1,\n      enqueueTaskImpl = null,\n      actScopeDepth = 0,\n      didWarnNoAwaitAct = !1,\n      isFlushing = !1,\n      queueSeveralMicrotasks =\n        \"function\" === typeof queueMicrotask\n          ? function (callback) {\n              queueMicrotask(function () {\n                return queueMicrotask(callback);\n              });\n            }\n          : enqueueTask;\n    exports.Children = {\n      map: mapChildren,\n      forEach: function (children, forEachFunc, forEachContext) {\n        mapChildren(\n          children,\n          function () {\n            forEachFunc.apply(this, arguments);\n          },\n          forEachContext\n        );\n      },\n      count: function (children) {\n        var n = 0;\n        mapChildren(children, function () {\n          n++;\n        });\n        return n;\n      },\n      toArray: function (children) {\n        return (\n          mapChildren(children, function (child) {\n            return child;\n          }) || []\n        );\n      },\n      only: function (children) {\n        if (!isValidElement(children))\n          throw Error(\n            \"React.Children.only expected to receive a single React element child.\"\n          );\n        return children;\n      }\n    };\n    exports.Component = Component;\n    exports.Fragment = REACT_FRAGMENT_TYPE;\n    exports.Profiler = REACT_PROFILER_TYPE;\n    exports.PureComponent = PureComponent;\n    exports.StrictMode = REACT_STRICT_MODE_TYPE;\n    exports.Suspense = REACT_SUSPENSE_TYPE;\n    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =\n      ReactSharedInternals;\n    exports.act = function (callback) {\n      var prevActQueue = ReactSharedInternals.actQueue,\n        prevActScopeDepth = actScopeDepth;\n      actScopeDepth++;\n      var queue = (ReactSharedInternals.actQueue =\n          null !== prevActQueue ? prevActQueue : []),\n        didAwaitActCall = !1;\n      try {\n        var result = callback();\n      } catch (error) {\n        ReactSharedInternals.thrownErrors.push(error);\n      }\n      if (0 < ReactSharedInternals.thrownErrors.length)\n        throw (\n          (popActScope(prevActQueue, prevActScopeDepth),\n          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          callback)\n        );\n      if (\n        null !== result &&\n        \"object\" === typeof result &&\n        \"function\" === typeof result.then\n      ) {\n        var thenable = result;\n        queueSeveralMicrotasks(function () {\n          didAwaitActCall ||\n            didWarnNoAwaitAct ||\n            ((didWarnNoAwaitAct = !0),\n            console.error(\n              \"You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);\"\n            ));\n        });\n        return {\n          then: function (resolve, reject) {\n            didAwaitActCall = !0;\n            thenable.then(\n              function (returnValue) {\n                popActScope(prevActQueue, prevActScopeDepth);\n                if (0 === prevActScopeDepth) {\n                  try {\n                    flushActQueue(queue),\n                      enqueueTask(function () {\n                        return recursivelyFlushAsyncActWork(\n                          returnValue,\n                          resolve,\n                          reject\n                        );\n                      });\n                  } catch (error$2) {\n                    ReactSharedInternals.thrownErrors.push(error$2);\n                  }\n                  if (0 < ReactSharedInternals.thrownErrors.length) {\n                    var _thrownError = aggregateErrors(\n                      ReactSharedInternals.thrownErrors\n                    );\n                    ReactSharedInternals.thrownErrors.length = 0;\n                    reject(_thrownError);\n                  }\n                } else resolve(returnValue);\n              },\n              function (error) {\n                popActScope(prevActQueue, prevActScopeDepth);\n                0 < ReactSharedInternals.thrownErrors.length\n                  ? ((error = aggregateErrors(\n                      ReactSharedInternals.thrownErrors\n                    )),\n                    (ReactSharedInternals.thrownErrors.length = 0),\n                    reject(error))\n                  : reject(error);\n              }\n            );\n          }\n        };\n      }\n      var returnValue$jscomp$0 = result;\n      popActScope(prevActQueue, prevActScopeDepth);\n      0 === prevActScopeDepth &&\n        (flushActQueue(queue),\n        0 !== queue.length &&\n          queueSeveralMicrotasks(function () {\n            didAwaitActCall ||\n              didWarnNoAwaitAct ||\n              ((didWarnNoAwaitAct = !0),\n              console.error(\n                \"A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\\n\\nawait act(() => ...)\"\n              ));\n          }),\n        (ReactSharedInternals.actQueue = null));\n      if (0 < ReactSharedInternals.thrownErrors.length)\n        throw (\n          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),\n          (ReactSharedInternals.thrownErrors.length = 0),\n          callback)\n        );\n      return {\n        then: function (resolve, reject) {\n          didAwaitActCall = !0;\n          0 === prevActScopeDepth\n            ? ((ReactSharedInternals.actQueue = queue),\n              enqueueTask(function () {\n                return recursivelyFlushAsyncActWork(\n                  returnValue$jscomp$0,\n                  resolve,\n                  reject\n                );\n              }))\n            : resolve(returnValue$jscomp$0);\n        }\n      };\n    };\n    exports.cache = function (fn) {\n      return function () {\n        return fn.apply(null, arguments);\n      };\n    };\n    exports.cloneElement = function (element, config, children) {\n      if (null === element || void 0 === element)\n        throw Error(\n          \"The argument must be a React element, but you passed \" +\n            element +\n            \".\"\n        );\n      var props = assign({}, element.props),\n        key = element.key,\n        owner = element._owner;\n      if (null != config) {\n        var JSCompiler_inline_result;\n        a: {\n          if (\n            hasOwnProperty.call(config, \"ref\") &&\n            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(\n              config,\n              \"ref\"\n            ).get) &&\n            JSCompiler_inline_result.isReactWarning\n          ) {\n            JSCompiler_inline_result = !1;\n            break a;\n          }\n          JSCompiler_inline_result = void 0 !== config.ref;\n        }\n        JSCompiler_inline_result && (owner = getOwner());\n        hasValidKey(config) &&\n          (checkKeyStringCoercion(config.key), (key = \"\" + config.key));\n        for (propName in config)\n          !hasOwnProperty.call(config, propName) ||\n            \"key\" === propName ||\n            \"__self\" === propName ||\n            \"__source\" === propName ||\n            (\"ref\" === propName && void 0 === config.ref) ||\n            (props[propName] = config[propName]);\n      }\n      var propName = arguments.length - 2;\n      if (1 === propName) props.children = children;\n      else if (1 < propName) {\n        JSCompiler_inline_result = Array(propName);\n        for (var i = 0; i < propName; i++)\n          JSCompiler_inline_result[i] = arguments[i + 2];\n        props.children = JSCompiler_inline_result;\n      }\n      props = ReactElement(element.type, key, void 0, void 0, owner, props);\n      for (key = 2; key < arguments.length; key++)\n        validateChildKeys(arguments[key], props.type);\n      return props;\n    };\n    exports.createContext = function (defaultValue) {\n      defaultValue = {\n        $$typeof: REACT_CONTEXT_TYPE,\n        _currentValue: defaultValue,\n        _currentValue2: defaultValue,\n        _threadCount: 0,\n        Provider: null,\n        Consumer: null\n      };\n      defaultValue.Provider = defaultValue;\n      defaultValue.Consumer = {\n        $$typeof: REACT_CONSUMER_TYPE,\n        _context: defaultValue\n      };\n      defaultValue._currentRenderer = null;\n      defaultValue._currentRenderer2 = null;\n      return defaultValue;\n    };\n    exports.createElement = function (type, config, children) {\n      if (isValidElementType(type))\n        for (var i = 2; i < arguments.length; i++)\n          validateChildKeys(arguments[i], type);\n      else {\n        i = \"\";\n        if (\n          void 0 === type ||\n          (\"object\" === typeof type &&\n            null !== type &&\n            0 === Object.keys(type).length)\n        )\n          i +=\n            \" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\";\n        if (null === type) var typeString = \"null\";\n        else\n          isArrayImpl(type)\n            ? (typeString = \"array\")\n            : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE\n              ? ((typeString =\n                  \"<\" +\n                  (getComponentNameFromType(type.type) || \"Unknown\") +\n                  \" />\"),\n                (i =\n                  \" Did you accidentally export a JSX literal instead of a component?\"))\n              : (typeString = typeof type);\n        console.error(\n          \"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s\",\n          typeString,\n          i\n        );\n      }\n      var propName;\n      i = {};\n      typeString = null;\n      if (null != config)\n        for (propName in (didWarnAboutOldJSXRuntime ||\n          !(\"__self\" in config) ||\n          \"key\" in config ||\n          ((didWarnAboutOldJSXRuntime = !0),\n          console.warn(\n            \"Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform\"\n          )),\n        hasValidKey(config) &&\n          (checkKeyStringCoercion(config.key), (typeString = \"\" + config.key)),\n        config))\n          hasOwnProperty.call(config, propName) &&\n            \"key\" !== propName &&\n            \"__self\" !== propName &&\n            \"__source\" !== propName &&\n            (i[propName] = config[propName]);\n      var childrenLength = arguments.length - 2;\n      if (1 === childrenLength) i.children = children;\n      else if (1 < childrenLength) {\n        for (\n          var childArray = Array(childrenLength), _i = 0;\n          _i < childrenLength;\n          _i++\n        )\n          childArray[_i] = arguments[_i + 2];\n        Object.freeze && Object.freeze(childArray);\n        i.children = childArray;\n      }\n      if (type && type.defaultProps)\n        for (propName in ((childrenLength = type.defaultProps), childrenLength))\n          void 0 === i[propName] && (i[propName] = childrenLength[propName]);\n      typeString &&\n        defineKeyPropWarningGetter(\n          i,\n          \"function\" === typeof type\n            ? type.displayName || type.name || \"Unknown\"\n            : type\n        );\n      return ReactElement(type, typeString, void 0, void 0, getOwner(), i);\n    };\n    exports.createRef = function () {\n      var refObject = { current: null };\n      Object.seal(refObject);\n      return refObject;\n    };\n    exports.forwardRef = function (render) {\n      null != render && render.$$typeof === REACT_MEMO_TYPE\n        ? console.error(\n            \"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).\"\n          )\n        : \"function\" !== typeof render\n          ? console.error(\n              \"forwardRef requires a render function but was given %s.\",\n              null === render ? \"null\" : typeof render\n            )\n          : 0 !== render.length &&\n            2 !== render.length &&\n            console.error(\n              \"forwardRef render functions accept exactly two parameters: props and ref. %s\",\n              1 === render.length\n                ? \"Did you forget to use the ref parameter?\"\n                : \"Any additional parameter will be undefined.\"\n            );\n      null != render &&\n        null != render.defaultProps &&\n        console.error(\n          \"forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?\"\n        );\n      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },\n        ownName;\n      Object.defineProperty(elementType, \"displayName\", {\n        enumerable: !1,\n        configurable: !0,\n        get: function () {\n          return ownName;\n        },\n        set: function (name) {\n          ownName = name;\n          render.name ||\n            render.displayName ||\n            (Object.defineProperty(render, \"name\", { value: name }),\n            (render.displayName = name));\n        }\n      });\n      return elementType;\n    };\n    exports.isValidElement = isValidElement;\n    exports.lazy = function (ctor) {\n      return {\n        $$typeof: REACT_LAZY_TYPE,\n        _payload: { _status: -1, _result: ctor },\n        _init: lazyInitializer\n      };\n    };\n    exports.memo = function (type, compare) {\n      isValidElementType(type) ||\n        console.error(\n          \"memo: The first argument must be a component. Instead received: %s\",\n          null === type ? \"null\" : typeof type\n        );\n      compare = {\n        $$typeof: REACT_MEMO_TYPE,\n        type: type,\n        compare: void 0 === compare ? null : compare\n      };\n      var ownName;\n      Object.defineProperty(compare, \"displayName\", {\n        enumerable: !1,\n        configurable: !0,\n        get: function () {\n          return ownName;\n        },\n        set: function (name) {\n          ownName = name;\n          type.name ||\n            type.displayName ||\n            (Object.defineProperty(type, \"name\", { value: name }),\n            (type.displayName = name));\n        }\n      });\n      return compare;\n    };\n    exports.startTransition = function (scope) {\n      var prevTransition = ReactSharedInternals.T,\n        currentTransition = {};\n      ReactSharedInternals.T = currentTransition;\n      currentTransition._updatedFibers = new Set();\n      try {\n        var returnValue = scope(),\n          onStartTransitionFinish = ReactSharedInternals.S;\n        null !== onStartTransitionFinish &&\n          onStartTransitionFinish(currentTransition, returnValue);\n        \"object\" === typeof returnValue &&\n          null !== returnValue &&\n          \"function\" === typeof returnValue.then &&\n          returnValue.then(noop, reportGlobalError);\n      } catch (error) {\n        reportGlobalError(error);\n      } finally {\n        null === prevTransition &&\n          currentTransition._updatedFibers &&\n          ((scope = currentTransition._updatedFibers.size),\n          currentTransition._updatedFibers.clear(),\n          10 < scope &&\n            console.warn(\n              \"Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.\"\n            )),\n          (ReactSharedInternals.T = prevTransition);\n      }\n    };\n    exports.unstable_useCacheRefresh = function () {\n      return resolveDispatcher().useCacheRefresh();\n    };\n    exports.use = function (usable) {\n      return resolveDispatcher().use(usable);\n    };\n    exports.useActionState = function (action, initialState, permalink) {\n      return resolveDispatcher().useActionState(\n        action,\n        initialState,\n        permalink\n      );\n    };\n    exports.useCallback = function (callback, deps) {\n      return resolveDispatcher().useCallback(callback, deps);\n    };\n    exports.useContext = function (Context) {\n      var dispatcher = resolveDispatcher();\n      Context.$$typeof === REACT_CONSUMER_TYPE &&\n        console.error(\n          \"Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?\"\n        );\n      return dispatcher.useContext(Context);\n    };\n    exports.useDebugValue = function (value, formatterFn) {\n      return resolveDispatcher().useDebugValue(value, formatterFn);\n    };\n    exports.useDeferredValue = function (value, initialValue) {\n      return resolveDispatcher().useDeferredValue(value, initialValue);\n    };\n    exports.useEffect = function (create, deps) {\n      return resolveDispatcher().useEffect(create, deps);\n    };\n    exports.useId = function () {\n      return resolveDispatcher().useId();\n    };\n    exports.useImperativeHandle = function (ref, create, deps) {\n      return resolveDispatcher().useImperativeHandle(ref, create, deps);\n    };\n    exports.useInsertionEffect = function (create, deps) {\n      return resolveDispatcher().useInsertionEffect(create, deps);\n    };\n    exports.useLayoutEffect = function (create, deps) {\n      return resolveDispatcher().useLayoutEffect(create, deps);\n    };\n    exports.useMemo = function (create, deps) {\n      return resolveDispatcher().useMemo(create, deps);\n    };\n    exports.useOptimistic = function (passthrough, reducer) {\n      return resolveDispatcher().useOptimistic(passthrough, reducer);\n    };\n    exports.useReducer = function (reducer, initialArg, init) {\n      return resolveDispatcher().useReducer(reducer, initialArg, init);\n    };\n    exports.useRef = function (initialValue) {\n      return resolveDispatcher().useRef(initialValue);\n    };\n    exports.useState = function (initialState) {\n      return resolveDispatcher().useState(initialState);\n    };\n    exports.useSyncExternalStore = function (\n      subscribe,\n      getSnapshot,\n      getServerSnapshot\n    ) {\n      return resolveDispatcher().useSyncExternalStore(\n        subscribe,\n        getSnapshot,\n        getServerSnapshot\n      );\n    };\n    exports.useTransition = function () {\n      return resolveDispatcher().useTransition();\n    };\n    exports.version = \"19.0.0\";\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n\n\n//# sourceURL=webpack://payment-app/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack://payment-app/./node_modules/react/index.js?");

/***/ }),

/***/ "webpack/container/entry/PaymentApp":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var moduleMap = {\n\t\"./PaymentPage\": () => {\n\t\treturn __webpack_require__.e(\"src_PaymentPage_js\").then(() => (() => ((__webpack_require__(/*! ./src/PaymentPage */ \"./src/PaymentPage.js\")))));\n\t}\n};\nvar get = (module, getScope) => {\n\t__webpack_require__.R = getScope;\n\tgetScope = (\n\t\t__webpack_require__.o(moduleMap, module)\n\t\t\t? moduleMap[module]()\n\t\t\t: Promise.resolve().then(() => {\n\t\t\t\tthrow new Error('Module \"' + module + '\" does not exist in container.');\n\t\t\t})\n\t);\n\t__webpack_require__.R = undefined;\n\treturn getScope;\n};\nvar init = (shareScope, initScope) => {\n\tif (!__webpack_require__.S) return;\n\tvar name = \"default\"\n\tvar oldScope = __webpack_require__.S[name];\n\tif(oldScope && oldScope !== shareScope) throw new Error(\"Container initialization failed as it has already been initialized with a different share scope\");\n\t__webpack_require__.S[name] = shareScope;\n\treturn __webpack_require__.I(name, initScope);\n};\n\n// This exports getters to disallow modifications\n__webpack_require__.d(exports, {\n\tget: () => (get),\n\tinit: () => (init)\n});\n\n//# sourceURL=webpack://payment-app/container_entry?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "payment-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "payment-app";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("react-dom", "19.0.0", () => (() => (__webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"))), 1);
/******/ 					register("react", "19.0.0", () => (() => (__webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"))), 1);
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var parseVersion = (str) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 		}
/******/ 		var versionLt = (a, b) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 		}
/******/ 		var rangeToString = (range) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 		}
/******/ 		var satisfy = (range, version) => {
/******/ 			// see webpack/lib/util/semver.js for original code
/******/ 			if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 		}
/******/ 		var exists = (scope, key) => {
/******/ 			return scope && __webpack_require__.o(scope, key);
/******/ 		}
/******/ 		var get = (entry) => {
/******/ 			entry.loaded = 1;
/******/ 			return entry.get()
/******/ 		};
/******/ 		var eagerOnly = (versions) => {
/******/ 			return Object.keys(versions).reduce((filtered, version) => {
/******/ 					if (versions[version].eager) {
/******/ 						filtered[version] = versions[version];
/******/ 					}
/******/ 					return filtered;
/******/ 			}, {});
/******/ 		};
/******/ 		var findLatestVersion = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key];
/******/ 		};
/******/ 		var findSatisfyingVersion = (scope, key, requiredVersion, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			var key = Object.keys(versions).reduce((a, b) => {
/******/ 				if (!satisfy(requiredVersion, b)) return a;
/******/ 				return !a || versionLt(a, b) ? b : a;
/******/ 			}, 0);
/******/ 			return key && versions[key]
/******/ 		};
/******/ 		var findSingletonVersionKey = (scope, key, eager) => {
/******/ 			var versions = eager ? eagerOnly(scope[key]) : scope[key];
/******/ 			return Object.keys(versions).reduce((a, b) => {
/******/ 				return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 			}, 0);
/******/ 		};
/******/ 		var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 			return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 		};
/******/ 		var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion, eager) => {
/******/ 			var versions = scope[key];
/******/ 			return "No satisfying version (" + rangeToString(requiredVersion) + ")" + (eager ? " for eager consumption" : "") + " of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 				"Available versions: " + Object.keys(versions).map((key) => {
/******/ 				return key + " from " + versions[key].from;
/******/ 			}).join(", ");
/******/ 		};
/******/ 		var fail = (msg) => {
/******/ 			throw new Error(msg);
/******/ 		}
/******/ 		var failAsNotExist = (scopeName, key) => {
/******/ 			return fail("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		}
/******/ 		var warn = /*#__PURE__*/ (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var init = (fn) => (function(scopeName, key, eager, c, d) {
/******/ 			var promise = __webpack_require__.I(scopeName);
/******/ 			if (promise && promise.then && !eager) {
/******/ 				return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], key, false, c, d));
/******/ 			}
/******/ 			return fn(scopeName, __webpack_require__.S[scopeName], key, eager, c, d);
/******/ 		});
/******/ 		
/******/ 		var useFallback = (scopeName, key, fallback) => {
/******/ 			return fallback ? fallback() : failAsNotExist(scopeName, key);
/******/ 		}
/******/ 		var load = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager))
/******/ 			return get(findLatestVersion(scope, key, eager));
/******/ 		});
/******/ 		var loadStrictVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var satisfyingVersion = findSatisfyingVersion(scope, key, requiredVersion, eager);
/******/ 			if (satisfyingVersion) return get(satisfyingVersion);
/******/ 			if (fallback) return fallback();
/******/ 			fail(getInvalidVersionMessage(scope, scopeName, key, requiredVersion, eager));
/******/ 		});
/******/ 		var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key, eager, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var loadStrictSingletonVersion = /*#__PURE__*/ init((scopeName, scope, key, eager, requiredVersion, fallback) => {
/******/ 			if (!exists(scope, key)) return useFallback(scopeName, key, fallback);
/******/ 			var version = findSingletonVersionKey(scope, key, eager);
/******/ 			if (!satisfy(requiredVersion, version)) {
/******/ 				fail(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 			}
/******/ 			return get(scope[key][version]);
/******/ 		});
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react/react": () => (loadSingletonVersion("default", "react", true, [1,17,0,0], () => (() => (__webpack_require__(/*! react */ "./node_modules/react/index.js")))))
/******/ 		};
/******/ 		var initialConsumes = ["webpack/sharing/consume/default/react/react"];
/******/ 		initialConsumes.forEach((id) => {
/******/ 			__webpack_require__.m[id] = (module) => {
/******/ 				// Handle case when module is used sync
/******/ 				installedModules[id] = 0;
/******/ 				delete __webpack_require__.c[id];
/******/ 				var factory = moduleToHandlerMapping[id]();
/******/ 				if(typeof factory !== "function") throw new Error("Shared module is not available for eager consumption: " + id);
/******/ 				module.exports = factory();
/******/ 			}
/******/ 		});
/******/ 		var chunkMapping = {
/******/ 			"PaymentApp": [
/******/ 				"webpack/sharing/consume/default/react/react"
/******/ 			]
/******/ 		};
/******/ 		var startedInstallModules = {};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 					if(!startedInstallModules[id]) {
/******/ 					var onFactory = (factory) => {
/******/ 						installedModules[id] = 0;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					startedInstallModules[id] = true;
/******/ 					var onError = (error) => {
/******/ 						delete installedModules[id];
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							delete __webpack_require__.c[id];
/******/ 							throw error;
/******/ 						}
/******/ 					};
/******/ 					try {
/******/ 						var promise = moduleToHandlerMapping[id]();
/******/ 						if(promise.then) {
/******/ 							promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 						} else onFactory(promise);
/******/ 					} catch(e) { onError(e); }
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"PaymentApp": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpayment_app"] = self["webpackChunkpayment_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/PaymentApp");
/******/ 	PaymentApp = __webpack_exports__;
/******/ 	
/******/ })()
;