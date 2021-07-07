module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eOhz");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KSgJ":
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ "M1sZ":
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eOhz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__("KSgJ");

// EXTERNAL MODULE: ./components/Avatar.js
var Avatar = __webpack_require__("wtrr");

// CONCATENATED MODULE: ./components/HeaderOption.js


function HeaderOption({
  Icon,
  title,
  selected
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500
      hover:border-blue-500 pb-3 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
      className: "h-4"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "hidden sm:inline-flex",
      children: title
    })]
  });
}
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__("M1sZ");

// CONCATENATED MODULE: ./components/HeaderOptions.js





function HeaderOptions() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex w-full justify-evenly text-gray-700 text-sm lg:text-base \r lg:justify-start lg:space-x-36 lg:pl-52 border-b",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex space-x-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: outline_["SearchIcon"],
        title: "All",
        selected: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: outline_["PhotographIcon"],
        title: "Images"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: outline_["PlayIcon"],
        title: "Videos"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: outline_["NewspaperIcon"],
        title: "News"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: solid_["MapIcon"],
        title: "Maps"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOption, {
        Icon: outline_["DotsVerticalIcon"],
        title: "More"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex space-x-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "link",
        children: "Settings"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "link",
        children: "Tools"
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/Header.js









function Header() {
  const router = Object(router_["useRouter"])();
  const searchInputRef = Object(external_react_["useRef"])(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: "sticky top-0 bg-white",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex w-full p-6 items-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        src: "https://google-next-js-clone.vercel.app/_next/image?url=https%3A%2F%2Fwww.google.co.uk%2Fimages%2Fbranding%2Fgooglelogo%2F2x%2Fgooglelogo_color_272x92dp.png&w=384&q=75",
        height: 40,
        width: 120,
        className: "cursor-pointer",
        onClick: () => router.push('/')
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        className: "flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          ref: searchInputRef,
          className: "flex-grow w-full focus:outline-none",
          type: "text",
          defaultValue: router.query.term
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(solid_["XIcon"], {
          className: "h-7 sm:mr-3  text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125",
          onClick: () => {
            searchInputRef.current.value = "";
          }
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(solid_["MicrophoneIcon"], {
          className: "mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(solid_["SearchIcon"], {
          className: "h-6 text-blue-500 hidden sm:inline-flex"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          hidden: true,
          type: "submit",
          onClick: search,
          children: "Search"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Avatar["a" /* default */], {
        className: "ml-auto h-10",
        url: "https://lh3.googleusercontent.com/ogw/ADea4I5Oum87-iz0EBPeQ6fgiSgWcGAs8jNFKSfJgodA=s32-c-mo"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderOptions, {})]
  });
}

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./Response.js
/* harmony default export */ var Response = ({
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [{
      "title": "Google Custom Search - youtube",
      "totalResults": "470000000",
      "searchTerms": "youtube",
      "count": 10,
      "startIndex": 1,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "9bc67f2b2ef848ce2"
    }],
    "nextPage": [{
      "title": "Google Custom Search - youtube",
      "totalResults": "470000000",
      "searchTerms": "youtube",
      "count": 10,
      "startIndex": 11,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "9bc67f2b2ef848ce2"
    }]
  },
  "context": {
    "title": "Google"
  },
  "searchInformation": {
    "searchTime": 0.521138,
    "formattedSearchTime": "0.52",
    "totalResults": "470000000",
    "formattedTotalResults": "470,000,000"
  },
  "items": [{
    "kind": "customsearch#result",
    "title": "YouTube - Home | Facebook",
    "htmlTitle": "\u003cb\u003eYouTube\u003c/b\u003e - Home | Facebook",
    "link": "https://www.google.com/appserve/mkt/p/AM7kBiUhEUCzmhZFNvDHzHyWMkJg6XXmViBUZg4-aNLn-9h-jWOhNmECkd6Ht25b3JamxVGsoB56ZqAHE4VL6ZzPSrm3geaG9yNyz_fcVPQ9wf2bgoH-NWWG",
    "displayLink": "www.google.com",
    "snippet": "YouTube. 86434294 likes · 122218 talking about this. The latest and greatest \nmusic videos, trends and channels from YouTube.",
    "htmlSnippet": "\u003cb\u003eYouTube\u003c/b\u003e. 86434294 likes · 122218 talking about this. The latest and greatest \u003cbr\u003e\nmusic videos, trends and channels from \u003cb\u003eYouTube\u003c/b\u003e.",
    "cacheId": "13Qsseo8MqMJ",
    "formattedUrl": "https://www.google.com/.../ AM7kBiUhEUCzmhZFNvDHzHyWMkJg6XXmViBUZg4-aNLn-9h- ...",
    "htmlFormattedUrl": "https://www.google.com/.../ AM7kBiUhEUCzmhZFNvDHzHyWMkJg6XXmViBUZg4-aNLn-9h- ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStn-PkdJB5Eu6VVWKPSDxhntoXbI4wgIbcEdmBrudu66ITahHomzs_rc9l",
        "width": "300",
        "height": "168"
      }],
      "organization": [{
        "image": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=7270241753"
      }],
      "metatags": [{
        "al:android:url": "fb://page/7270241753?referrer=app_link",
        "referrer": "default",
        "og:image": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=7270241753",
        "al:ios:app_name": "Facebook",
        "og:title": "YouTube",
        "al:android:package": "com.facebook.katana",
        "al:ios:url": "fb://page/?id=7270241753",
        "og:url": "https://www.facebook.com/youtube/",
        "og:description": "YouTube. 86,434,294 likes · 122,218 talking about this. The latest and greatest music videos, trends and channels from YouTube.",
        "al:android:app_name": "Facebook",
        "al:ios:app_store_id": "284882215"
      }],
      "cse_image": [{
        "src": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10159227080931754"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "YouTube Studio",
    "htmlTitle": "\u003cb\u003eYouTube\u003c/b\u003e Studio",
    "link": "https://www.google.com/appserve/mkt/p/AHANi0bpRBeTbZQ_YjYsHCYnOMR0Zxtf4Ix1TQ3clMqch6YARhFiVamlOgbHYossenBCyCmeU0NjbSZobD2TSQ",
    "displayLink": "www.google.com",
    "snippet": "to continue to YouTube. Email or phone. Forgot email? Type the text you hear or \nsee. Not your computer? Use a private browsing window to sign in. Learn more.",
    "htmlSnippet": "to continue to \u003cb\u003eYouTube\u003c/b\u003e. Email or phone. Forgot email? Type the text you hear or \u003cbr\u003e\nsee. Not your computer? Use a private browsing window to sign in. Learn more.",
    "formattedUrl": "https://www.google.com/.../AHANi0bpRBeTbZQ_ YjYsHCYnOMR0Zxtf4Ix1TQ3clMqch6YARhFiVamlOgbHYossenBCyCm...",
    "htmlFormattedUrl": "https://www.google.com/.../AHANi0bpRBeTbZQ_ YjYsHCYnOMR0Zxtf4Ix1TQ3clMqch6YARhFiVamlOgbHYossenBCyCm...",
    "pagemap": {
      "metatags": [{
        "viewport": "width=device-width, initial-scale=1",
        "format-detection": "telephone=no"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "YouTube Advertising - Online Video Advertising Campaigns",
    "htmlTitle": "\u003cb\u003eYouTube\u003c/b\u003e Advertising - Online Video Advertising Campaigns",
    "link": "https://www.google.com/ads/video",
    "displayLink": "www.google.com",
    "snippet": "Video advertising on YouTube works, and you only pay when people watch your \nvideo ads. Get started with online video advertising campaigns today.",
    "htmlSnippet": "Video advertising on \u003cb\u003eYouTube\u003c/b\u003e works, and you only pay when people watch your \u003cbr\u003e\nvideo ads. Get started with online video advertising campaigns today.",
    "cacheId": "rMIF4oIiBdMJ",
    "formattedUrl": "https://www.google.com/ads/video",
    "htmlFormattedUrl": "https://www.google.com/ads/video",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLclRpwBaEXl00pGNXmFrzr0EhHUzmPVsC0uWJKLj0S2mnNRRIqg_qYt-t",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT",
        "theme-color": "#ffffff",
        "og:type": "website",
        "twitter:card": "summary_large_image",
        "twitter:title": "Online Video Advertising Campaigns – YouTube Advertising",
        "og:site_name": "YouTube Advertising",
        "og:title": "Online Video Advertising Campaigns – YouTube Advertising",
        "og:description": "Video advertising on YouTube works, and you only pay when people watch your video ads. Get started with online video advertising campaigns today.",
        "twitter:creator": "@YouTube",
        "twitter:image:src": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT",
        "twitter:site": "@YouTube",
        "viewport": "width=device-width, initial-scale=1.0",
        "twitter:description": "Video advertising on YouTube works, and you only pay when people watch your video ads. Get started with online video advertising campaigns today.",
        "og:url": "https://www.youtube.com/ads/"
      }],
      "cse_image": [{
        "src": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Childish Gambino - This Is America (Official Video) - YouTube",
    "htmlTitle": "Childish Gambino - This Is America (Official Video) - \u003cb\u003eYouTube\u003c/b\u003e",
    "link": "https://www.google.com/appserve/mkt/proof/p/AL8lKjM4__8cUi1ZbKUv0HhFDGddqxsl4VXkVxLGfbsi12zPHqxXWjFjdGnIT-CsI8ZDtl8HkbP5V6cKR5qTcGyjEBk4n1TM7ryJAFg7hCHj2zlLmcDdMayjdY01k8UUEW1y3shBXQ?disableTrackingProofPage=true",
    "displayLink": "www.google.com",
    "snippet": "May 5, 2018 ... \"This Is America\" by Childish GambinoListen to Childish Gambino: https://\nChildishGambino.lnk.to/listenYDWatch more Childish Gambino ...",
    "htmlSnippet": "May 5, 2018 \u003cb\u003e...\u003c/b\u003e &quot;This Is America&quot; by Childish GambinoListen to Childish Gambino: https://\u003cbr\u003e\nChildishGambino.lnk.to/listenYDWatch more Childish Gambino&nbsp;...",
    "formattedUrl": "https://www.google.com/.../AL8lKjM4__ 8cUi1ZbKUv0HhFDGddqxsl4VXkVxLGfbsi12zPHqxXWjFjdGnIT- ...",
    "htmlFormattedUrl": "https://www.google.com/.../AL8lKjM4__ 8cUi1ZbKUv0HhFDGddqxsl4VXkVxLGfbsi12zPHqxXWjFjdGnIT- ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTIWxVq6KB6lUdvIT11SobgeKcaaX3mPa9DpT79CVBDfd00htrurk9bSOlJ",
        "width": "300",
        "height": "168"
      }],
      "imageobject": [{
        "width": "1280",
        "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/maxresdefault.jpg",
        "height": "720"
      }],
      "person": [{
        "name": "ChildishGambinoVEVO",
        "url": "http://www.youtube.com/user/ChildishGambinoVEVO"
      }],
      "metatags": [{
        "og:image": "https://i.ytimg.com/vi/VYOjWnS4cMY/maxresdefault.jpg",
        "theme-color": "rgba(255,255,255,0.98)",
        "og:image:width": "1280",
        "twitter:card": "player",
        "og:site_name": "YouTube",
        "al:android:package": "com.google.android.youtube",
        "title": "Childish Gambino - This Is America (Official Video)",
        "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=VYOjWnS4cMY&feature=applinks",
        "og:description": "\"This Is America\" by Childish GambinoListen to Childish Gambino: https://ChildishGambino.lnk.to/listenYDWatch more Childish Gambino videos: https://ChildishG...",
        "al:ios:app_store_id": "544007664",
        "twitter:site": "@youtube",
        "og:video:type": "text/html",
        "og:video:height": "720",
        "og:video:url": "https://www.youtube.com/embed/VYOjWnS4cMY",
        "og:type": "video.other",
        "al:ios:app_name": "YouTube",
        "og:title": "Childish Gambino - This Is America (Official Video)",
        "og:image:height": "720",
        "al:web:url": "http://www.youtube.com/watch?v=VYOjWnS4cMY&feature=applinks",
        "og:video:secure_url": "https://www.youtube.com/embed/VYOjWnS4cMY",
        "og:video:tag": "this is america",
        "og:video:width": "1280",
        "al:android:url": "vnd.youtube://www.youtube.com/watch?v=VYOjWnS4cMY&feature=applinks",
        "fb:app_id": "87741124305",
        "og:url": "https://www.youtube.com/watch?v=VYOjWnS4cMY",
        "al:android:app_name": "YouTube"
      }],
      "videoobject": [{
        "embedurl": "https://www.youtube.com/embed/VYOjWnS4cMY",
        "playertype": "HTML5 Flash",
        "isfamilyfriendly": "true",
        "uploaddate": "2018-05-05",
        "description": "\"This Is America\" by Childish GambinoListen to Childish Gambino: https://ChildishGambino.lnk.to/listenYDWatch more Childish Gambino videos: https://ChildishG...",
        "videoid": "VYOjWnS4cMY",
        "url": "https://www.youtube.com/watch?v=VYOjWnS4cMY",
        "duration": "PT4M5S",
        "unlisted": "False",
        "name": "Childish Gambino - This Is America (Official Video)",
        "paid": "False",
        "width": "1280",
        "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CD,CF,CG,CH,CI,CL,CM,CN,CO,CR,CU,CV,CW,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH,ER,ES,ET...",
        "genre": "Music",
        "interactioncount": "767893012",
        "channelid": "UCjYO25ZVJT523TD1iYHzcbw",
        "datepublished": "2018-05-05",
        "thumbnailurl": "https://i.ytimg.com/vi/VYOjWnS4cMY/maxresdefault.jpg",
        "height": "720"
      }],
      "cse_image": [{
        "src": "https://i.ytimg.com/vi/VYOjWnS4cMY/maxresdefault.jpg"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Drive results with video advertising – YouTube Advertising",
    "htmlTitle": "Drive results with video advertising – \u003cb\u003eYouTube\u003c/b\u003e Advertising",
    "link": "https://www.google.com/ads/video/advertisers/guide.html",
    "displayLink": "www.google.com",
    "snippet": "Learn how YouTube advertising can help you build awareness, grow \nconsideration and drive action for your business. Follow this guide to learn best \npractices ...",
    "htmlSnippet": "Learn how \u003cb\u003eYouTube\u003c/b\u003e advertising can help you build awareness, grow \u003cbr\u003e\nconsideration and drive action for your business. Follow this guide to learn best \u003cbr\u003e\npractices&nbsp;...",
    "cacheId": "Q4hJAyBEpIgJ",
    "formattedUrl": "https://www.google.com/ads/video/advertisers/guide.html",
    "htmlFormattedUrl": "https://www.google.com/ads/video/advertisers/guide.html",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLclRpwBaEXl00pGNXmFrzr0EhHUzmPVsC0uWJKLj0S2mnNRRIqg_qYt-t",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "og:image": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT",
        "theme-color": "#ffffff",
        "og:type": "website",
        "twitter:card": "summary_large_image",
        "twitter:title": "Drive results with video advertising – YouTube Advertising",
        "og:site_name": "YouTube Advertising",
        "og:title": "Drive results with video advertising – YouTube Advertising",
        "og:description": "Learn how YouTube advertising can help you build awareness, grow consideration and drive action for your business. Follow this guide to learn best practices about goal based buying on YouTube.",
        "twitter:creator": "@YouTube",
        "twitter:image:src": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT",
        "twitter:site": "@YouTube",
        "viewport": "width=device-width, initial-scale=1.0",
        "twitter:description": "Learn how YouTube advertising can help you build awareness, grow consideration and drive action for your business. Follow this guide to learn best practices about goal based buying on YouTube.",
        "og:url": "https://www.youtube.com/ads/running-a-video-ad/"
      }],
      "cse_image": [{
        "src": "https://lh3.googleusercontent.com/dnspVvClU1nGYmQNDj27pRwido644L2TmnP7rD_wXRFAXgxufpI_9IGm8ZBAlkDJFZ4U492nqDWp_5RteT0kmlDnrwR6n5MLIUvT"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Coachella: 20 Years in the Desert | YouTube Originals - YouTube",
    "htmlTitle": "Coachella: 20 Years in the Desert | \u003cb\u003eYouTube\u003c/b\u003e Originals - \u003cb\u003eYouTube\u003c/b\u003e",
    "link": "https://www.google.com/appserve/mkt/p/AM7kBiXsYLyPQ9TR-6fr8AMrQA5a2sDRhCFbb5-bzhTc6mTGkapTkzXIuME-xx7sGEkdj2bxSY81y42gutctujAqKlpQzfxwcbqVNe_wwVlWPSTLklD-Dt0OLOr-q1OR1-c",
    "displayLink": "www.google.com",
    "snippet": "Apr 10, 2020 ... Coachella: 20 Years in the Desert | YouTube Originals ... Watch it free with ads or \nget YouTube Premium to watch ad-free with exclusive bonus ...",
    "htmlSnippet": "Apr 10, 2020 \u003cb\u003e...\u003c/b\u003e Coachella: 20 Years in the Desert | \u003cb\u003eYouTube\u003c/b\u003e Originals ... Watch it free with ads or \u003cbr\u003e\nget \u003cb\u003eYouTube\u003c/b\u003e Premium to watch ad-free with exclusive bonus&nbsp;...",
    "formattedUrl": "https://www.google.com/.../AM7kBiXsYLyPQ9TR- 6fr8AMrQA5a2sDRhCFbb5-bzhTc6mTGkapTkzXIuME- ...",
    "htmlFormattedUrl": "https://www.google.com/.../AM7kBiXsYLyPQ9TR- 6fr8AMrQA5a2sDRhCFbb5-bzhTc6mTGkapTkzXIuME- ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lB7EQoDJ9jx7NSV0slTyv_HdxdQj3sCWNiLlVvqg3rTQ1Uo3N5hdvoQ",
        "width": "300",
        "height": "168"
      }],
      "imageobject": [{
        "width": "1280",
        "url": "https://i.ytimg.com/vi/jjwilAja7Lc/maxresdefault.jpg",
        "height": "720"
      }],
      "broadcastevent": [{
        "islivebroadcast": "True",
        "enddate": "2020-04-10T20:45:43+00:00",
        "startdate": "2020-04-10T19:00:10+00:00"
      }],
      "person": [{
        "name": "Coachella",
        "url": "http://www.youtube.com/user/coachella"
      }],
      "metatags": [{
        "og:image": "https://i.ytimg.com/vi/jjwilAja7Lc/maxresdefault.jpg",
        "theme-color": "rgba(255,255,255,0.98)",
        "og:image:width": "1280",
        "og:type": "video.other",
        "og:site_name": "YouTube",
        "al:ios:app_name": "YouTube",
        "og:title": "Coachella: 20 Years in the Desert | YouTube Originals",
        "og:image:height": "720",
        "al:android:package": "com.google.android.youtube",
        "title": "Coachella: 20 Years in the Desert | YouTube Originals",
        "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=jjwilAja7Lc&feature=applinks",
        "al:web:url": "http://www.youtube.com/watch?v=jjwilAja7Lc&feature=applinks",
        "og:video:secure_url": "https://www.youtube.com/embed/jjwilAja7Lc",
        "og:video:tag": "full episode",
        "og:description": "A documentary feature two decades in the making, “Coachella: 20 Years in the Desert” opens up the vault for the very first time to present the legendary perf...",
        "og:video:width": "1280",
        "al:ios:app_store_id": "544007664",
        "al:android:url": "vnd.youtube://www.youtube.com/watch?v=jjwilAja7Lc&feature=applinks",
        "fb:app_id": "87741124305",
        "og:video:type": "text/html",
        "og:video:height": "720",
        "og:video:url": "https://www.youtube.com/embed/jjwilAja7Lc",
        "og:url": "https://www.youtube.com/watch?v=jjwilAja7Lc",
        "al:android:app_name": "YouTube"
      }],
      "videoobject": [{
        "embedurl": "https://www.youtube.com/embed/jjwilAja7Lc",
        "playertype": "HTML5 Flash",
        "isfamilyfriendly": "true",
        "uploaddate": "2020-04-10",
        "description": "A documentary feature two decades in the making, “Coachella: 20 Years in the Desert” opens up the vault for the very first time to present the legendary perf...",
        "videoid": "jjwilAja7Lc",
        "url": "https://www.youtube.com/watch?v=jjwilAja7Lc",
        "duration": "PT103M38S",
        "unlisted": "False",
        "name": "Coachella: 20 Years in the Desert | YouTube Originals",
        "paid": "False",
        "width": "1280",
        "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
        "genre": "Film & Animation",
        "interactioncount": "2915784",
        "channelid": "UCHF66aWLOxBW4l6VkSrS3cQ",
        "datepublished": "2020-04-10",
        "thumbnailurl": "https://i.ytimg.com/vi/jjwilAja7Lc/maxresdefault.jpg",
        "height": "720"
      }],
      "cse_image": [{
        "src": "https://i.ytimg.com/vi/jjwilAja7Lc/maxresdefault.jpg"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Stadia YouTube Channel",
    "htmlTitle": "Stadia \u003cb\u003eYouTube\u003c/b\u003e Channel",
    "link": "https://www.google.com/appserve/mkt/p/AFnwnKXVYo415iLV5077jZ0V9ur-jUjA7mhZTVp91_NUfR19OZKkvJ6UnmP86NwJvez8UEsNZNgl3c4yNVuyikKL5kkj08JxjCD20PU1oPUEXW19r0kFv3eDIsEsF76aO3lhHuoblT1nvog4FxU_LOJ6EyRuB4ypGjgsnS0-0qLEAPPncx2RBFsAIxxAsilVkrYETKcbjIVtJm1YKQL0hSe6uEFsn_5XzS8nHy_u4ee2LT4yJ_2fi609bRPTb3UdHJUBYCWRWwiUrszG",
    "displayLink": "www.google.com",
    "snippet": "Play for everyone. Try Stadia for free today and start playing games on screens \nyou already own.",
    "htmlSnippet": "Play for everyone. Try Stadia for free today and start playing games on screens \u003cbr\u003e\nyou already own.",
    "formattedUrl": "https://www.google.com/.../AFnwnKXVYo415iLV5077jZ0V9ur- jUjA7mhZTVp91_ ...",
    "htmlFormattedUrl": "https://www.google.com/.../AFnwnKXVYo415iLV5077jZ0V9ur- jUjA7mhZTVp91_ ...",
    "pagemap": {
      "hcard": [{
        "fn": "Stadia",
        "nickname": "Stadia",
        "url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg"
      }],
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuRfh0BFdxY7H8Vp8GXeHUxoRpoLmElPdENofINxg9I3-3aNtIzxjF-ZA",
        "width": "225",
        "height": "225"
      }],
      "imageobject": [{
        "width": "900",
        "url": "https://yt3.ggpht.com/ytc/AAUvwnhntGERDQ6ktZyiHWZIYrepYwJHd6WHxQYKkGJ8=s900-c-k-c0x00ffffff-no-rj",
        "height": "900"
      }],
      "person": [{
        "name": "Stadia",
        "url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg"
      }],
      "metatags": [{
        "og:image": "https://yt3.ggpht.com/ytc/AAUvwnhntGERDQ6ktZyiHWZIYrepYwJHd6WHxQYKkGJ8=s900-c-k-c0x00ffffff-no-rj",
        "twitter:app:url:iphone": "vnd.youtube://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "twitter:app:id:googleplay": "com.google.android.youtube",
        "theme-color": "rgba(255,255,255,0.98)",
        "og:image:width": "900",
        "twitter:card": "summary",
        "og:site_name": "YouTube",
        "twitter:url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "twitter:app:url:ipad": "vnd.youtube://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "al:android:package": "com.google.android.youtube",
        "twitter:app:name:googleplay": "YouTube",
        "al:ios:url": "vnd.youtube://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "twitter:app:id:iphone": "544007664",
        "og:description": "Play for everyone. Try Stadia for free today and start playing games on screens you already own.",
        "al:ios:app_store_id": "544007664",
        "twitter:image": "https://yt3.ggpht.com/ytc/AAUvwnhntGERDQ6ktZyiHWZIYrepYwJHd6WHxQYKkGJ8=s900-c-k-c0x00ffffff-no-rj",
        "twitter:site": "@youtube",
        "og:type": "profile",
        "twitter:title": "Stadia",
        "al:ios:app_name": "YouTube",
        "og:title": "Stadia",
        "og:image:height": "900",
        "twitter:app:id:ipad": "544007664",
        "al:web:url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg?feature=applinks",
        "og:video:tag": "Google Stadia",
        "al:android:url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg?feature=applinks",
        "fb:app_id": "87741124305",
        "twitter:app:url:googleplay": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "twitter:app:name:ipad": "YouTube",
        "twitter:description": "Play for everyone. Try Stadia for free today and start playing games on screens you already own.",
        "og:url": "https://www.youtube.com/channel/UCQKyy9Wl7hsVn1BP7BC53Yg",
        "al:android:app_name": "YouTube",
        "twitter:app:name:iphone": "YouTube"
      }],
      "cse_image": [{
        "src": "https://yt3.ggpht.com/ytc/AAUvwnhntGERDQ6ktZyiHWZIYrepYwJHd6WHxQYKkGJ8=s900-c-k-c0x00ffffff-no-rj"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Google Account",
    "htmlTitle": "Google Account",
    "link": "https://www.google.com/account/about/",
    "displayLink": "www.google.com",
    "snippet": "Google services, from Chrome to YouTube, work better and help you do more \nwhen you're signed in. Your account gives you access to helpful features like \nAutofill ...",
    "htmlSnippet": "Google services, from Chrome to \u003cb\u003eYouTube\u003c/b\u003e, work better and help you do more \u003cbr\u003e\nwhen you&#39;re signed in. Your account gives you access to helpful features like \u003cbr\u003e\nAutofill&nbsp;...",
    "cacheId": "uTrx5HJU9IsJ",
    "formattedUrl": "https://www.google.com/account/about/",
    "htmlFormattedUrl": "https://www.google.com/account/about/",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0aX3XKMC29RnMOuH5t0BpQs52AndkGU5CTzJhSLMw0k9_xAsoT0SrCyyc",
        "width": "225",
        "height": "225"
      }],
      "metatags": [{
        "referrer": "no-referrer",
        "viewport": "initial-scale=1, minimum-scale=1, width=device-width"
      }],
      "cse_image": [{
        "src": "https://lh3.googleusercontent.com/V3oyG2WIt-S7sKXhfG6eXZ6VLFF4wG24k_kIh9DnGhtyRUS0VgPxD45cY87-Yf3-JUa9MBo-ZlAvRpv--Pl2d2UOIGDEtqnm03M4"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Drake - Nice For What - YouTube",
    "htmlTitle": "Drake - Nice For What - \u003cb\u003eYouTube\u003c/b\u003e",
    "link": "https://www.google.com/appserve/mkt/proof/p/AL8lKjNuXu10H_1fbjVeOhT2JJEJvz6xZmQDpOnTcWWW31iUzoXxQgBTnV5UTbmrWCA5xXuEPyacBeXXy2e75InlrWv9wYZv3hMKy36LOAsq_T90f3L1NANfdqMgCsy2Iw9CJ9Q?disableTrackingProofPage=true",
    "displayLink": "www.google.com",
    "snippet": "Apr 6, 2018 ... Music video by Drake performing Nice For What. © 2018 Young Money/Cash \nMoney Records.",
    "htmlSnippet": "Apr 6, 2018 \u003cb\u003e...\u003c/b\u003e Music video by Drake performing Nice For What. © 2018 Young Money/Cash \u003cbr\u003e\nMoney Records.",
    "cacheId": "OPkjiiBdFpkJ",
    "formattedUrl": "https://www.google.com/.../AL8lKjNuXu10H_ 1fbjVeOhT2JJEJvz6xZmQDpOnTcWWW31iUzoXxQgBTnV5UTbmrWC...",
    "htmlFormattedUrl": "https://www.google.com/.../AL8lKjNuXu10H_ 1fbjVeOhT2JJEJvz6xZmQDpOnTcWWW31iUzoXxQgBTnV5UTbmrWC...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszsgAFypbSifWW07Y1Nx2uuoOJ34D9yRAYtRi2D5hNf93ULUQ_YNaoROU",
        "width": "300",
        "height": "168"
      }],
      "imageobject": [{
        "width": "1280",
        "url": "https://i.ytimg.com/vi/U9BwWKXjVaI/maxresdefault.jpg",
        "height": "720"
      }],
      "person": [{
        "name": "DrakeVEVO",
        "url": "http://www.youtube.com/user/DrakeVEVO"
      }],
      "metatags": [{
        "og:image": "https://i.ytimg.com/vi/U9BwWKXjVaI/maxresdefault.jpg",
        "twitter:app:url:iphone": "vnd.youtube://www.youtube.com/watch?v=U9BwWKXjVaI&feature=applinks",
        "twitter:app:id:googleplay": "com.google.android.youtube",
        "theme-color": "rgba(255, 255, 255, 0.98)",
        "og:image:width": "1280",
        "twitter:card": "player",
        "og:site_name": "YouTube",
        "twitter:url": "https://www.youtube.com/watch?v=U9BwWKXjVaI",
        "twitter:app:url:ipad": "vnd.youtube://www.youtube.com/watch?v=U9BwWKXjVaI&feature=applinks",
        "al:android:package": "com.google.android.youtube",
        "twitter:app:name:googleplay": "YouTube",
        "title": "Drake - Nice For What",
        "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=U9BwWKXjVaI&feature=applinks",
        "twitter:app:id:iphone": "544007664",
        "og:description": "Music video by Drake performing Nice For What. © 2018 Young Money/Cash Money Records",
        "al:ios:app_store_id": "544007664",
        "twitter:image": "https://i.ytimg.com/vi/U9BwWKXjVaI/maxresdefault.jpg",
        "twitter:player": "https://www.youtube.com/embed/U9BwWKXjVaI",
        "twitter:player:height": "720",
        "twitter:site": "@youtube",
        "og:video:type": "text/html",
        "og:video:height": "720",
        "og:video:url": "https://www.youtube.com/embed/U9BwWKXjVaI",
        "og:type": "video.other",
        "twitter:title": "Drake - Nice For What",
        "al:ios:app_name": "YouTube",
        "og:title": "Drake - Nice For What",
        "og:image:height": "720",
        "twitter:app:id:ipad": "544007664",
        "al:web:url": "http://www.youtube.com/watch?v=U9BwWKXjVaI&feature=applinks",
        "og:video:secure_url": "https://www.youtube.com/embed/U9BwWKXjVaI",
        "og:video:tag": "Drake",
        "og:video:width": "1280",
        "al:android:url": "vnd.youtube://www.youtube.com/watch?v=U9BwWKXjVaI&feature=applinks",
        "fb:app_id": "87741124305",
        "twitter:app:url:googleplay": "https://www.youtube.com/watch?v=U9BwWKXjVaI",
        "twitter:app:name:ipad": "YouTube",
        "twitter:description": "Music video by Drake performing Nice For What. © 2018 Young Money/Cash Money Records",
        "og:url": "https://www.youtube.com/watch?v=U9BwWKXjVaI",
        "twitter:player:width": "1280",
        "al:android:app_name": "YouTube",
        "twitter:app:name:iphone": "YouTube"
      }],
      "videoobject": [{
        "embedurl": "https://www.youtube.com/embed/U9BwWKXjVaI",
        "playertype": "HTML5 Flash",
        "isfamilyfriendly": "true",
        "uploaddate": "2018-04-06",
        "description": "Music video by Drake performing Nice For What. © 2018 Young Money/Cash Money Records",
        "videoid": "U9BwWKXjVaI",
        "url": "https://www.youtube.com/watch?v=U9BwWKXjVaI",
        "duration": "PT4M23S",
        "unlisted": "False",
        "name": "Drake - Nice For What",
        "paid": "False",
        "width": "1280",
        "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
        "genre": "Music",
        "interactioncount": "371892099",
        "channelid": "UCQznUf1SjfDqx65hX3zRDiA",
        "datepublished": "2018-04-06",
        "thumbnailurl": "https://i.ytimg.com/vi/U9BwWKXjVaI/maxresdefault.jpg",
        "height": "720"
      }],
      "cse_image": [{
        "src": "https://i.ytimg.com/vi/U9BwWKXjVaI/maxresdefault.jpg"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Elton John - Rocket Man (Official Music Video) - YouTube",
    "htmlTitle": "Elton John - Rocket Man (Official Music Video) - \u003cb\u003eYouTube\u003c/b\u003e",
    "link": "https://www.google.com/appserve/mkt/proof/p/AL8lKjNYNh-21i2QcuGajSumcJ8X8Op9uLKpn096Tbc-YTCQq7Nq4BNDSDhByeK_NzYm4whSTr12oxvxIOIB7cHo5bTkIU65nvqxyPg9pZyuB1DuhFd2cP2SWZALOA1vJKg?disableTrackingProofPage=true",
    "displayLink": "www.google.com",
    "snippet": "May 22, 2017 ... The Cut, proudly supported by YouTube, invited filmmakers to create the first \nofficial music videos for three of Elton's most famous songs: ...",
    "htmlSnippet": "May 22, 2017 \u003cb\u003e...\u003c/b\u003e The Cut, proudly supported by \u003cb\u003eYouTube\u003c/b\u003e, invited filmmakers to create the first \u003cbr\u003e\nofficial music videos for three of Elton&#39;s most famous songs:&nbsp;...",
    "formattedUrl": "https://www.google.com/.../AL8lKjNYNh- 21i2QcuGajSumcJ8X8Op9uLKpn096Tbc-YTCQq7Nq4BNDSDhByeK_ ...",
    "htmlFormattedUrl": "https://www.google.com/.../AL8lKjNYNh- 21i2QcuGajSumcJ8X8Op9uLKpn096Tbc-YTCQq7Nq4BNDSDhByeK_ ...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYoiEw-4em3OFhwDPomVW14uer5FSvvaBCPJkKDc_qFhOPL_EOHOwfdRCx",
        "width": "300",
        "height": "168"
      }],
      "imageobject": [{
        "width": "1280",
        "url": "https://i.ytimg.com/vi/DtVBCG6ThDk/maxresdefault.jpg",
        "height": "720"
      }],
      "person": [{
        "name": "EltonJohnVEVO",
        "url": "http://www.youtube.com/user/EltonJohnVEVO"
      }],
      "metatags": [{
        "og:image": "https://i.ytimg.com/vi/DtVBCG6ThDk/maxresdefault.jpg",
        "theme-color": "rgba(255,255,255,0.98)",
        "og:image:width": "1280",
        "twitter:card": "player",
        "og:site_name": "YouTube",
        "al:android:package": "com.google.android.youtube",
        "title": "Elton John - Rocket Man (Official Music Video)",
        "al:ios:url": "vnd.youtube://www.youtube.com/watch?v=DtVBCG6ThDk&feature=applinks",
        "og:description": "In his own interpretation of Elton John’s iconic hit, Iranian filmmaker and refugee Majid Adin reimagines “Rocket Man” to tell a new story of adventure, lone...",
        "al:ios:app_store_id": "544007664",
        "twitter:site": "@youtube",
        "og:video:type": "text/html",
        "og:video:height": "720",
        "og:video:url": "https://www.youtube.com/embed/DtVBCG6ThDk",
        "og:type": "video.other",
        "al:ios:app_name": "YouTube",
        "og:title": "Elton John - Rocket Man (Official Music Video)",
        "og:image:height": "720",
        "al:web:url": "http://www.youtube.com/watch?v=DtVBCG6ThDk&feature=applinks",
        "og:video:secure_url": "https://www.youtube.com/embed/DtVBCG6ThDk",
        "og:video:tag": "Elton John",
        "og:video:width": "1280",
        "al:android:url": "vnd.youtube://www.youtube.com/watch?v=DtVBCG6ThDk&feature=applinks",
        "fb:app_id": "87741124305",
        "og:url": "https://www.youtube.com/watch?v=DtVBCG6ThDk",
        "al:android:app_name": "YouTube"
      }],
      "videoobject": [{
        "embedurl": "https://www.youtube.com/embed/DtVBCG6ThDk",
        "playertype": "HTML5 Flash",
        "isfamilyfriendly": "true",
        "uploaddate": "2017-05-22",
        "description": "In his own interpretation of Elton John’s iconic hit, Iranian filmmaker and refugee Majid Adin reimagines “Rocket Man” to tell a new story of adventure, lone...",
        "videoid": "DtVBCG6ThDk",
        "url": "https://www.youtube.com/watch?v=DtVBCG6ThDk",
        "duration": "PT4M43S",
        "unlisted": "False",
        "name": "Elton John - Rocket Man (Official Music Video)",
        "paid": "False",
        "width": "1280",
        "regionsallowed": "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
        "genre": "Music",
        "interactioncount": "90216147",
        "channelid": "UCI8Ry7NdFNLel-S8dWU7mDA",
        "datepublished": "2017-05-22",
        "thumbnailurl": "https://i.ytimg.com/vi/DtVBCG6ThDk/maxresdefault.jpg",
        "height": "720"
      }],
      "cse_image": [{
        "src": "https://i.ytimg.com/vi/DtVBCG6ThDk/maxresdefault.jpg"
      }]
    }
  }]
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/PaginationButtons.js





function PaginationButtons() {
  const router = Object(router_["useRouter"])();
  const startIndex = Number(router.query.start) || 0;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex max-w-lg justify-between text-blue-700 mb-10",
    children: [startIndex >= 10 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/search?term=${router.query.term}&start=${startIndex - 10}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-grow flex-col items-center cursor-pointer hover:underline",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(solid_["ChevronLeftIcon"], {
          className: "h-5"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Previous"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: `/search?term=${router.query.term}&start=${startIndex + 10}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-grow flex-col items-center cursor-pointer hover:underline",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(solid_["ChevronRightIcon"], {
          className: "h-5"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Next"
        })]
      })
    })]
  });
}
// CONCATENATED MODULE: ./components/SearchResults.js




function SearchResults({
  results
}) {
  var _results$searchInform, _results$searchInform2, _results$items;

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "text-gray-600 text-md mb-5 mt-3",
      children: ["About ", (_results$searchInform = results.searchInformation) === null || _results$searchInform === void 0 ? void 0 : _results$searchInform.formattedTotalResults, " results (", (_results$searchInform2 = results.searchInformation) === null || _results$searchInform2 === void 0 ? void 0 : _results$searchInform2.formattedSearchTime, "seconds)"]
    }), (_results$items = results.items) === null || _results$items === void 0 ? void 0 : _results$items.map(result => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "max-w-xl mb-8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "group",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: result.link,
          className: "text-sml line-clamp-1",
          children: result.formattedUrl
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: result.link,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            className: "truncate text-xl text-blue-800 font-medium group-hover:underline",
            children: result.title
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "line-clamp-2",
        children: result.snippet
      })]
    }, result.link)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PaginationButtons, {})]
  });
}

/* harmony default export */ var components_SearchResults = (SearchResults);
// CONCATENATED MODULE: ./pages/search.js








function search_search({
  results
}) {
  const router = Object(router_["useRouter"])();
  const API_KEY = 'AIzaSyCuDP--5SRRvDAJUDyl2nWdgRtT9tzucFk'; // CONTEXT KEY - https://cse.google.com/cse/create/new

  const CONTEXT_KEY = '4f8603e9d79751957';
  console.log(results);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [router.query.term, " - Google Search"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "https://www.freepngimg.com/thumb/google/67060-play-photos-search-google-account-png-file-hd.png"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_SearchResults, {
      results: results
    })]
  });
}

/* harmony default export */ var pages_search = __webpack_exports__["default"] = (search_search);
async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || '0';
  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBTMzu9JUWP97LgZLg7zR_9OVwuhaDyZZc&cx=9bc67f2b2ef848ce2&q=${context.query.term}&start=${startIndex}`).then(response => response.json()); //Returning the results to client  after SERVER SIDE RENDERING

  return {
    props: {
      results: data
    }
  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wtrr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Avatar({
  url,
  className
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    loading: "lazy",
    className: `h-7.3 rounded-full  cursor-pointer transition duration-150 transform hover:scale-110 ${className}`,
    src: url,
    alt: "profile picture"
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });