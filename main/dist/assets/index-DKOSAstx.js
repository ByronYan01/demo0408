function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

const _hoisted_1 = { id: "app" };

const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "App",
  setup(__props) {
    const router = VueRouter.useRouter();
    const loadChild = async () => {
      await router.push("/child");
    };
    return (_ctx, _cache) => {
      const _component_el_button = Vue.resolveComponent("el-button");
      const _component_router_view = Vue.resolveComponent("router-view");
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1, [
        Vue.createVNode(_component_el_button, { onClick: loadChild }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("加载子应用")
          ]),
          _: 1
        }),
        Vue.createVNode(_component_router_view)
      ]);
    };
  }
});

const scriptRel = 'modulepreload';const assetsURL = function(dep, importerUrl) { return new URL(dep, importerUrl).href };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
    let promise = Promise.resolve();
    // @ts-expect-error true will be replaced with boolean later
    if (true && deps && deps.length > 0) {
        const links = document.getElementsByTagName('link');
        const cspNonceMeta = document.querySelector('meta[property=csp-nonce]');
        // `.nonce` should be used to get along with nonce hiding (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce#accessing_nonces_and_nonce_hiding)
        // Firefox 67-74 uses modern chunks and supports CSP nonce, but does not support `.nonce`
        // in that case fallback to getAttribute
        const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute('nonce');
        promise = Promise.all(deps.map((dep) => {
            // @ts-expect-error assetsURL is declared before preload.toString()
            dep = assetsURL(dep, importerUrl);
            if (dep in seen)
                return;
            seen[dep] = true;
            const isCss = dep.endsWith('.css');
            const cssSelector = isCss ? '[rel="stylesheet"]' : '';
            const isBaseRelative = !!importerUrl;
            // check if the file is already preloaded by SSR markup
            if (isBaseRelative) {
                // When isBaseRelative is true then we have `importerUrl` and `dep` is
                // already converted to an absolute URL by the `assetsURL` function
                for (let i = links.length - 1; i >= 0; i--) {
                    const link = links[i];
                    // The `links[i].href` is an absolute URL thanks to browser doing the work
                    // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                    if (link.href === dep && (!isCss || link.rel === 'stylesheet')) {
                        return;
                    }
                }
            }
            else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
                return;
            }
            const link = document.createElement('link');
            link.rel = isCss ? 'stylesheet' : scriptRel;
            if (!isCss) {
                link.as = 'script';
                link.crossOrigin = '';
            }
            link.href = dep;
            if (cspNonce) {
                link.setAttribute('nonce', cspNonce);
            }
            document.head.appendChild(link);
            if (isCss) {
                return new Promise((res, rej) => {
                    link.addEventListener('load', res);
                    link.addEventListener('error', () => rej(new Error(`Unable to preload CSS for ${dep}`)));
                });
            }
        }));
    }
    return promise
        .then(() => baseModule())
        .catch((err) => {
        const e = new Event('vite:preloadError', { cancelable: true });
        // @ts-expect-error custom payload
        e.payload = err;
        window.dispatchEvent(e);
        if (!e.defaultPrevented) {
            throw err;
        }
    });
};

const routers = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/child",
    name: "child",
    component: async () => await __vitePreload(() => import('./index-mAgFXmhV.js'),true?__vite__mapDeps([]):void 0,import.meta.url)
  }
];
const router$1 = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routers
});

const version = "1.0.0-rc.4";
const isBrowser = typeof window !== "undefined";
const globalThis = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : Function("return this")();
const noopFalse = () => false;
const isArray = Array.isArray;
const assign = Object.assign;
const rawDefineProperty = Object.defineProperty;
const rawDefineProperties = Object.defineProperties;
const rawToString = Object.prototype.toString;
const rawHasOwnProperty = Object.prototype.hasOwnProperty;
const toTypeString = (value) => rawToString.call(value);
function isUndefined(target) {
  return target === void 0;
}
function isNull(target) {
  return target === null;
}
function isString(target) {
  return typeof target === "string";
}
function isBoolean(target) {
  return typeof target === "boolean";
}
function isNumber(target) {
  return typeof target === "number";
}
function isFunction(target) {
  return typeof target === "function";
}
function isPlainObject(target) {
  return toTypeString(target) === "[object Object]";
}
function isObject(target) {
  return !isNull(target) && typeof target === "object";
}
function isPromise(target) {
  return toTypeString(target) === "[object Promise]";
}
function isBoundFunction(target) {
  return isFunction(target) && target.name.indexOf("bound ") === 0 && !target.hasOwnProperty("prototype");
}
function isConstructor(target) {
  var _a;
  if (isFunction(target)) {
    const targetStr = target.toString();
    return ((_a = target.prototype) === null || _a === void 0 ? void 0 : _a.constructor) === target && Object.getOwnPropertyNames(target.prototype).length > 1 || /^function\s+[A-Z]/.test(targetStr) || /^class\s+/.test(targetStr);
  }
  return false;
}
function isShadowRoot(target) {
  return typeof ShadowRoot !== "undefined" && target instanceof ShadowRoot;
}
function isURL(target) {
  var _a;
  return target instanceof URL || !!((_a = target) === null || _a === void 0 ? void 0 : _a.href);
}
function isElement(target) {
  var _a;
  return target instanceof Element || isString((_a = target) === null || _a === void 0 ? void 0 : _a.tagName);
}
function isNode(target) {
  var _a;
  return target instanceof Node || isNumber((_a = target) === null || _a === void 0 ? void 0 : _a.nodeType);
}
function isLinkElement(target) {
  return toTypeString(target) === "[object HTMLLinkElement]";
}
function isStyleElement(target) {
  return toTypeString(target) === "[object HTMLStyleElement]";
}
function isScriptElement(target) {
  return toTypeString(target) === "[object HTMLScriptElement]";
}
function isDivElement(target) {
  return toTypeString(target) === "[object HTMLDivElement]";
}
function isImageElement(target) {
  return toTypeString(target) === "[object HTMLImageElement]";
}
function isBaseElement(target) {
  return toTypeString(target) === "[object HTMLBaseElement]";
}
function isMicroAppBody(target) {
  return isElement(target) && target.tagName.toUpperCase() === "MICRO-APP-BODY";
}
function isProxyDocument(target) {
  return toTypeString(target) === "[object ProxyDocument]";
}
function includes(target, searchElement, fromIndex) {
  if (target == null) {
    throw new TypeError("includes target is null or undefined");
  }
  const O = Object(target);
  const len = parseInt(O.length, 10) || 0;
  if (len === 0)
    return false;
  fromIndex = parseInt(fromIndex, 10) || 0;
  let i = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0);
  while (i < len) {
    if (searchElement === O[i] || searchElement !== searchElement && O[i] !== O[i]) {
      return true;
    }
    i++;
  }
  return false;
}
function logError(msg, appName = null, ...rest) {
  const appNameTip = appName && isString(appName) ? ` app ${appName}:` : "";
  if (isString(msg)) {
    console.error(`[micro-app]${appNameTip} ${msg}`, ...rest);
  } else {
    console.error(`[micro-app]${appNameTip}`, msg, ...rest);
  }
}
function logWarn(msg, appName = null, ...rest) {
  const appNameTip = appName && isString(appName) ? ` app ${appName}:` : "";
  if (isString(msg)) {
    console.warn(`[micro-app]${appNameTip} ${msg}`, ...rest);
  } else {
    console.warn(`[micro-app]${appNameTip}`, msg, ...rest);
  }
}
function defer(fn, ...args) {
  Promise.resolve().then(fn.bind(null, ...args));
}
const createURL = /* @__PURE__ */ function() {
  class Location extends URL {
  }
  return (path, base) => {
    return base ? new Location("" + path, base) : new Location("" + path);
  };
}();
function addProtocol(url) {
  return url.startsWith("//") ? `${globalThis.location.protocol}${url}` : url;
}
function formatAppURL(url, appName = null) {
  if (!isString(url) || !url)
    return "";
  try {
    const { origin, pathname, search } = createURL(addProtocol(url), (window.rawWindow || window).location.href);
    if (/\.(\w+)$/.test(pathname)) {
      return `${origin}${pathname}${search}`;
    }
    const fullPath = `${origin}${pathname}/`.replace(/\/\/$/, "/");
    return /^https?:\/\//.test(fullPath) ? `${fullPath}${search}` : "";
  } catch (e) {
    logError(e, appName);
    return "";
  }
}
function formatAppName(name) {
  if (!isString(name) || !name)
    return "";
  return name.replace(/(^\d+)|([^\w\d-_])/gi, "");
}
function getEffectivePath(url) {
  const { origin, pathname } = createURL(url);
  if (/\.(\w+)$/.test(pathname)) {
    const fullPath = `${origin}${pathname}`;
    const pathArr = fullPath.split("/");
    pathArr.pop();
    return pathArr.join("/") + "/";
  }
  return `${origin}${pathname}/`.replace(/\/\/$/, "/");
}
function CompletionPath(path, baseURI) {
  if (!path || /^((((ht|f)tps?)|file):)?\/\//.test(path) || /^(data|blob):/.test(path))
    return path;
  return createURL(path, getEffectivePath(addProtocol(baseURI))).toString();
}
function getLinkFileDir(linkPath) {
  const pathArr = linkPath.split("/");
  pathArr.pop();
  return addProtocol(pathArr.join("/") + "/");
}
function promiseStream(promiseList, successCb, errorCb, finallyCb) {
  let finishedNum = 0;
  function isFinished() {
    if (++finishedNum === promiseList.length && finallyCb)
      finallyCb();
  }
  promiseList.forEach((p, i) => {
    if (isPromise(p)) {
      p.then((res) => {
        successCb({ data: res, index: i });
        isFinished();
      }).catch((err) => {
        errorCb({ error: err, index: i });
        isFinished();
      });
    } else {
      successCb({ data: p, index: i });
      isFinished();
    }
  });
}
function isSupportModuleScript() {
  const s = document.createElement("script");
  return "noModule" in s;
}
function createNonceSrc() {
  return "inline-" + Math.random().toString(36).substr(2, 15);
}
function unique(array) {
  return array.filter(function(item) {
    return item in this ? false : this[item] = true;
  }, /* @__PURE__ */ Object.create(null));
}
const requestIdleCallback = globalThis.requestIdleCallback || function(fn) {
  const lastTime = Date.now();
  return setTimeout(function() {
    fn({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - lastTime));
      }
    });
  }, 1);
};
function promiseRequestIdle(callback) {
  return new Promise((resolve) => {
    requestIdleCallback(() => {
      callback(resolve);
    });
  });
}
let currentMicroAppName = null;
function setCurrentAppName(appName) {
  currentMicroAppName = appName;
}
function getCurrentAppName() {
  return currentMicroAppName;
}
let preventSetAppName = false;
function removeDomScope(force) {
  setCurrentAppName(null);
  if (force && !preventSetAppName) {
    preventSetAppName = true;
    defer(() => {
      preventSetAppName = false;
    });
  }
}
function throttleDeferForSetAppName(appName) {
  if (currentMicroAppName !== appName && !preventSetAppName) {
    setCurrentAppName(appName);
    defer(() => {
      setCurrentAppName(null);
    });
  }
}
function pureCreateElement(tagName, options) {
  const element = (window.rawDocument || document).createElement(tagName, options);
  if (element.__MICRO_APP_NAME__)
    delete element.__MICRO_APP_NAME__;
  element.__PURE_ELEMENT__ = true;
  return element;
}
function isInvalidQuerySelectorKey(key) {
  return !key || /(^\d)|([^\w\d-_\u4e00-\u9fa5])/gi.test(key);
}
function isUniqueElement(key) {
  return /^body$/i.test(key) || /^head$/i.test(key) || /^html$/i.test(key) || /^title$/i.test(key) || /^:root$/i.test(key);
}
function getRootContainer(target) {
  return isShadowRoot(target) ? target.host : target;
}
function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, "") : "";
}
function isFireFox() {
  return navigator.userAgent.indexOf("Firefox") > -1;
}
function parseQuery(search) {
  const result = {};
  const queryList = search.split("&");
  for (const queryItem of queryList) {
    const eqPos = queryItem.indexOf("=");
    const key = eqPos < 0 ? queryItem : queryItem.slice(0, eqPos);
    const value = eqPos < 0 ? null : queryItem.slice(eqPos + 1);
    if (key in result) {
      let currentValue = result[key];
      if (!isArray(currentValue)) {
        currentValue = result[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}
function stringifyQuery(queryObject) {
  let result = "";
  for (const key in queryObject) {
    const value = queryObject[key];
    if (isNull(value)) {
      result += (result.length ? "&" : "") + key;
    } else {
      const valueList = isArray(value) ? value : [value];
      valueList.forEach((value2) => {
        if (!isUndefined(value2)) {
          result += (result.length ? "&" : "") + key;
          if (!isNull(value2))
            result += "=" + value2;
        }
      });
    }
  }
  return result;
}
function useSetRecord() {
  const handlers = /* @__PURE__ */ new Set();
  function add(handler) {
    handlers.add(handler);
    return () => {
      if (handlers.has(handler))
        return handlers.delete(handler);
      return false;
    };
  }
  return {
    add,
    list: () => handlers
  };
}
function useMapRecord() {
  const data = /* @__PURE__ */ new Map();
  function add(key, value) {
    data.set(key, value);
    return () => {
      if (data.has(key))
        return data.delete(key);
      return false;
    };
  }
  return {
    add,
    get: (key) => data.get(key),
    delete: (key) => {
      if (data.has(key))
        return data.delete(key);
      return false;
    }
  };
}
function getAttributes(element) {
  const attr = element.attributes;
  const attrMap = /* @__PURE__ */ new Map();
  for (let i = 0; i < attr.length; i++) {
    attrMap.set(attr[i].name, attr[i].value);
  }
  return attrMap;
}
function injectFiberTask(fiberTasks, callback) {
  if (fiberTasks) {
    fiberTasks.push(() => promiseRequestIdle((resolve) => {
      callback();
      resolve();
    }));
  } else {
    callback();
  }
}
function serialExecFiberTasks(tasks) {
  return (tasks === null || tasks === void 0 ? void 0 : tasks.reduce((pre, next) => pre.then(next), Promise.resolve())) || null;
}
function isInlineScript(address) {
  return address.startsWith("inline-");
}
function execMicroAppGlobalHook(fn, appName, hookName, ...args) {
  try {
    isFunction(fn) && fn(...args);
  } catch (e) {
    logError(`An error occurred in app ${appName} window.${hookName} 
`, null, e);
  }
}
function clearDOM($dom) {
  while ($dom === null || $dom === void 0 ? void 0 : $dom.firstChild) {
    $dom.removeChild($dom.firstChild);
  }
}
function getBaseHTMLElement() {
  var _a;
  return ((_a = window.rawWindow) === null || _a === void 0 ? void 0 : _a.HTMLElement) || window.HTMLElement;
}
function formatEventInfo(event, element) {
  Object.defineProperties(event, {
    currentTarget: {
      get() {
        return element;
      }
    },
    target: {
      get() {
        return element;
      }
    }
  });
}
function dispatchLifecyclesEvent(element, appName, lifecycleName, error) {
  var _a;
  if (!element) {
    return logError(`element does not exist in lifecycle ${lifecycleName}`, appName);
  }
  element = getRootContainer(element);
  removeDomScope();
  const detail = assign({
    name: appName,
    container: element
  }, error && {
    error
  });
  const event = new CustomEvent(lifecycleName, {
    detail
  });
  formatEventInfo(event, element);
  if (isFunction((_a = microApp.options.lifeCycles) === null || _a === void 0 ? void 0 : _a[lifecycleName])) {
    microApp.options.lifeCycles[lifecycleName](event);
  }
  element.dispatchEvent(event);
}
function dispatchCustomEventToMicroApp(app, eventName, detail = {}) {
  var _a;
  const event = new CustomEvent(eventName, {
    detail
  });
  (_a = app.sandBox) === null || _a === void 0 ? void 0 : _a.microAppWindow.dispatchEvent(event);
}
function fetchSource(url, appName = null, options = {}) {
  removeDomScope();
  if (isFunction(microApp.options.fetch)) {
    return microApp.options.fetch(url, options, appName);
  }
  return window.fetch(url, options).then((res) => {
    return res.text();
  });
}
class HTMLLoader {
  static getInstance() {
    if (!this.instance) {
      this.instance = new HTMLLoader();
    }
    return this.instance;
  }
  /**
   * run logic of load and format html
   * @param successCb success callback
   * @param errorCb error callback, type: (err: Error, meetFetchErr: boolean) => void
   */
  run(app, successCb) {
    const appName = app.name;
    const htmlUrl = app.ssrUrl || app.url;
    const htmlPromise = htmlUrl.includes(".js") ? Promise.resolve(`<micro-app-head><script src='${htmlUrl}'></script></micro-app-head><micro-app-body></micro-app-body>`) : fetchSource(htmlUrl, appName, { cache: "no-cache" });
    htmlPromise.then((htmlStr) => {
      if (!htmlStr) {
        const msg = "html is empty, please check in detail";
        app.onerror(new Error(msg));
        return logError(msg, appName);
      }
      htmlStr = this.formatHTML(htmlUrl, htmlStr, appName);
      successCb(htmlStr, app);
    }).catch((e) => {
      logError(`Failed to fetch data from ${app.url}, micro-app stop rendering`, appName, e);
      app.onLoadError(e);
    });
  }
  formatHTML(htmlUrl, htmlStr, appName) {
    return this.processHtml(htmlUrl, htmlStr, appName, microApp.options.plugins).replace(/<head[^>]*>[\s\S]*?<\/head>/i, (match) => {
      return match.replace(/<head/i, "<micro-app-head").replace(/<\/head>/i, "</micro-app-head>");
    }).replace(/<body[^>]*>[\s\S]*?<\/body>/i, (match) => {
      return match.replace(/<body/i, "<micro-app-body").replace(/<\/body>/i, "</micro-app-body>");
    });
  }
  processHtml(url, code, appName, plugins) {
    var _a;
    if (!plugins)
      return code;
    const mergedPlugins = [];
    plugins.global && mergedPlugins.push(...plugins.global);
    ((_a = plugins.modules) === null || _a === void 0 ? void 0 : _a[appName]) && mergedPlugins.push(...plugins.modules[appName]);
    if (mergedPlugins.length > 0) {
      return mergedPlugins.reduce((preCode, plugin) => {
        if (isPlainObject(plugin) && isFunction(plugin.processHtml)) {
          return plugin.processHtml(preCode, url);
        }
        return preCode;
      }, code);
    }
    return code;
  }
}
const rootSelectorREG = /(^|\s+)(html|:root)(?=[\s>~[.#:]+|$)/;
const bodySelectorREG = /(^|\s+)((html[\s>~]+body)|body)(?=[\s>~[.#:]+|$)/;
function parseError(msg, linkPath) {
  msg = linkPath ? `${linkPath} ${msg}` : msg;
  const err = new Error(msg);
  err.reason = msg;
  if (linkPath) {
    err.filename = linkPath;
  }
  throw err;
}
class CSSParser {
  constructor() {
    this.cssText = "";
    this.prefix = "";
    this.baseURI = "";
    this.linkPath = "";
    this.result = "";
    this.scopecssDisable = false;
    this.scopecssDisableSelectors = [];
    this.scopecssDisableNextLine = false;
    this.mediaRule = this.createMatcherForRuleWithChildRule(/^@media *([^{]+)/, "@media");
    this.supportsRule = this.createMatcherForRuleWithChildRule(/^@supports *([^{]+)/, "@supports");
    this.documentRule = this.createMatcherForRuleWithChildRule(/^@([-\w]+)?document *([^{]+)/, "@document");
    this.hostRule = this.createMatcherForRuleWithChildRule(/^@host\s*/, "@host");
    this.importRule = this.createMatcherForNoneBraceAtRule("import");
    this.charsetRule = this.createMatcherForNoneBraceAtRule("charset");
    this.namespaceRule = this.createMatcherForNoneBraceAtRule("namespace");
    this.containerRule = this.createMatcherForRuleWithChildRule(/^@container *([^{]+)/, "@container");
  }
  exec(cssText, prefix, baseURI, linkPath) {
    this.cssText = cssText;
    this.prefix = prefix;
    this.baseURI = baseURI;
    this.linkPath = linkPath || "";
    this.matchRules();
    return isFireFox() ? decodeURIComponent(this.result) : this.result;
  }
  reset() {
    this.cssText = this.prefix = this.baseURI = this.linkPath = this.result = "";
    this.scopecssDisable = this.scopecssDisableNextLine = false;
    this.scopecssDisableSelectors = [];
  }
  // core action for match rules
  matchRules() {
    this.matchLeadingSpaces();
    this.matchComments();
    while (this.cssText.length && this.cssText.charAt(0) !== "}" && (this.matchAtRule() || this.matchStyleRule())) {
      this.matchComments();
    }
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule
  matchStyleRule() {
    const selectors = this.formatSelector(true);
    this.scopecssDisableNextLine = false;
    if (!selectors)
      return parseError("selector missing", this.linkPath);
    this.recordResult(selectors);
    this.matchComments();
    this.styleDeclarations();
    this.matchLeadingSpaces();
    return true;
  }
  formatSelector(skip) {
    const m = this.commonMatch(/^[^{]+/, skip);
    if (!m)
      return false;
    return m[0].replace(/(^|,[\n\s]*)([^,]+)/g, (_, separator, selector) => {
      selector = trim(selector);
      if (!(this.scopecssDisableNextLine || this.scopecssDisable && (!this.scopecssDisableSelectors.length || this.scopecssDisableSelectors.includes(selector)) || rootSelectorREG.test(selector))) {
        if (bodySelectorREG.test(selector)) {
          selector = selector.replace(bodySelectorREG, this.prefix + " micro-app-body");
        } else {
          selector = this.prefix + " " + selector;
        }
      }
      return separator + selector;
    });
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
  styleDeclarations() {
    if (!this.matchOpenBrace())
      return parseError("Declaration missing '{'", this.linkPath);
    this.matchAllDeclarations();
    if (!this.matchCloseBrace())
      return parseError("Declaration missing '}'", this.linkPath);
    return true;
  }
  matchAllDeclarations(nesting = 1) {
    let cssValue = this.commonMatch(/^(?:url\(["']?(?:[^)"'}]+)["']?\)|[^{}/])*/, true)[0];
    if (cssValue) {
      if (!this.scopecssDisableNextLine && (!this.scopecssDisable || this.scopecssDisableSelectors.length)) {
        cssValue = cssValue.replace(/url\(["']?([^)"']+)["']?\)/gm, (all, $1) => {
          if (/^((data|blob):|#)/.test($1) || /^(https?:)?\/\//.test($1)) {
            return all;
          }
          if (/^((\.\.?\/)|[^/])/.test($1) && this.linkPath) {
            this.baseURI = getLinkFileDir(this.linkPath);
          }
          return `url("${CompletionPath($1, this.baseURI)}")`;
        });
      }
      this.recordResult(cssValue);
    }
    this.scopecssDisableNextLine = false;
    if (!this.cssText)
      return;
    if (this.cssText.charAt(0) === "}") {
      if (!nesting)
        return;
      if (nesting > 1) {
        this.commonMatch(/}+/);
      }
      return this.matchAllDeclarations(nesting - 1);
    }
    if (this.cssText.charAt(0) === "/") {
      if (this.cssText.charAt(1) === "*") {
        this.matchComments();
      } else {
        this.commonMatch(/\/+/);
      }
    }
    if (this.cssText.charAt(0) === "{") {
      this.commonMatch(/{+\s*/);
      nesting++;
    }
    return this.matchAllDeclarations(nesting);
  }
  matchAtRule() {
    if (this.cssText[0] !== "@")
      return false;
    this.scopecssDisableNextLine = false;
    return this.keyframesRule() || this.mediaRule() || this.customMediaRule() || this.supportsRule() || this.importRule() || this.charsetRule() || this.namespaceRule() || this.containerRule() || this.documentRule() || this.pageRule() || this.hostRule() || this.fontFaceRule();
  }
  // :global is CSS Modules rule, it will be converted to normal syntax
  // private matchGlobalRule (): boolean | void {
  //   if (this.cssText[0] !== ':') return false
  //   // reset scopecssDisableNextLine
  //   this.scopecssDisableNextLine = false
  //   return this.globalRule()
  // }
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSKeyframesRule
  keyframesRule() {
    if (!this.commonMatch(/^@([-\w]+)?keyframes\s*/))
      return false;
    if (!this.commonMatch(/^[^{]+/))
      return parseError("@keyframes missing name", this.linkPath);
    this.matchComments();
    if (!this.matchOpenBrace())
      return parseError("@keyframes missing '{'", this.linkPath);
    this.matchComments();
    while (this.keyframeRule()) {
      this.matchComments();
    }
    if (!this.matchCloseBrace())
      return parseError("@keyframes missing '}'", this.linkPath);
    this.matchLeadingSpaces();
    return true;
  }
  keyframeRule() {
    let r;
    const valList = [];
    while (r = this.commonMatch(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      valList.push(r[1]);
      this.commonMatch(/^,\s*/);
    }
    if (!valList.length)
      return false;
    this.styleDeclarations();
    this.matchLeadingSpaces();
    return true;
  }
  // https://github.com/postcss/postcss-custom-media
  customMediaRule() {
    if (!this.commonMatch(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/))
      return false;
    this.matchLeadingSpaces();
    return true;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSPageRule
  pageRule() {
    if (!this.commonMatch(/^@page */))
      return false;
    this.formatSelector(false);
    this.scopecssDisableNextLine = false;
    return this.commonHandlerForAtRuleWithSelfRule("page");
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSFontFaceRule
  fontFaceRule() {
    if (!this.commonMatch(/^@font-face\s*/))
      return false;
    return this.commonHandlerForAtRuleWithSelfRule("font-face");
  }
  // common matcher for @media, @supports, @document, @host, :global, @container
  createMatcherForRuleWithChildRule(reg, name) {
    return () => {
      if (!this.commonMatch(reg))
        return false;
      if (!this.matchOpenBrace())
        return parseError(`${name} missing '{'`, this.linkPath);
      this.matchComments();
      this.matchRules();
      if (!this.matchCloseBrace())
        return parseError(`${name} missing '}'`, this.linkPath);
      this.matchLeadingSpaces();
      return true;
    };
  }
  // common matcher for @import, @charset, @namespace
  createMatcherForNoneBraceAtRule(name) {
    const reg = new RegExp("^@" + name + "\\s*([^;]+);");
    return () => {
      if (!this.commonMatch(reg))
        return false;
      this.matchLeadingSpaces();
      return true;
    };
  }
  // common handler for @font-face, @page
  commonHandlerForAtRuleWithSelfRule(name) {
    if (!this.matchOpenBrace())
      return parseError(`@${name} missing '{'`, this.linkPath);
    this.matchAllDeclarations();
    if (!this.matchCloseBrace())
      return parseError(`@${name} missing '}'`, this.linkPath);
    this.matchLeadingSpaces();
    return true;
  }
  // match and slice comments
  matchComments() {
    while (this.matchComment())
      ;
  }
  // css comment
  matchComment() {
    if (this.cssText.charAt(0) !== "/" || this.cssText.charAt(1) !== "*")
      return false;
    this.scopecssDisableNextLine = false;
    let i = 2;
    while (this.cssText.charAt(i) !== "" && (this.cssText.charAt(i) !== "*" || this.cssText.charAt(i + 1) !== "/"))
      ++i;
    i += 2;
    if (this.cssText.charAt(i - 1) === "") {
      return parseError("End of comment missing", this.linkPath);
    }
    let commentText = this.cssText.slice(2, i - 2);
    this.recordResult(`/*${commentText}*/`);
    commentText = trim(commentText.replace(/^\s*!/, ""));
    if (commentText === "scopecss-disable-next-line") {
      this.scopecssDisableNextLine = true;
    } else if (/^scopecss-disable/.test(commentText)) {
      if (commentText === "scopecss-disable") {
        this.scopecssDisable = true;
      } else {
        this.scopecssDisable = true;
        const ignoreRules = commentText.replace("scopecss-disable", "").split(",");
        ignoreRules.forEach((rule) => {
          this.scopecssDisableSelectors.push(trim(rule));
        });
      }
    } else if (commentText === "scopecss-enable") {
      this.scopecssDisable = false;
      this.scopecssDisableSelectors = [];
    }
    this.cssText = this.cssText.slice(i);
    this.matchLeadingSpaces();
    return true;
  }
  commonMatch(reg, skip = false) {
    const matchArray = reg.exec(this.cssText);
    if (!matchArray)
      return;
    const matchStr = matchArray[0];
    this.cssText = this.cssText.slice(matchStr.length);
    if (!skip)
      this.recordResult(matchStr);
    return matchArray;
  }
  matchOpenBrace() {
    return this.commonMatch(/^{\s*/);
  }
  matchCloseBrace() {
    return this.commonMatch(/^}/);
  }
  // match and slice the leading spaces
  matchLeadingSpaces() {
    this.commonMatch(/^\s*/);
  }
  // splice string
  recordResult(strFragment) {
    if (isFireFox()) {
      this.result += encodeURIComponent(strFragment);
    } else {
      this.result += strFragment;
    }
  }
}
function commonAction(styleElement, appName, prefix, baseURI, linkPath) {
  if (!styleElement.__MICRO_APP_HAS_SCOPED__) {
    styleElement.__MICRO_APP_HAS_SCOPED__ = true;
    let result = null;
    try {
      result = parser.exec(styleElement.textContent, prefix, baseURI, linkPath);
      parser.reset();
    } catch (e) {
      parser.reset();
      logError("An error occurred while parsing CSS:\n", appName, e);
    }
    if (result)
      styleElement.textContent = result;
  }
}
let parser;
function scopedCSS(styleElement, app, linkPath) {
  if (app.scopecss) {
    const prefix = createPrefix(app.name);
    if (!parser)
      parser = new CSSParser();
    if (styleElement.textContent) {
      commonAction(styleElement, app.name, prefix, app.url, linkPath);
    } else {
      const observer = new MutationObserver(function() {
        observer.disconnect();
        if (styleElement.textContent && !styleElement.hasAttribute("data-styled")) {
          commonAction(styleElement, app.name, prefix, app.url, linkPath);
        }
      });
      observer.observe(styleElement, { childList: true });
    }
  }
  return styleElement;
}
function createPrefix(appName, reg = false) {
  const regCharacter = reg ? "\\" : "";
  return `${microApp.tagName}${regCharacter}[name=${appName}${regCharacter}]`;
}
function eventHandler(event, element) {
  Object.defineProperties(event, {
    currentTarget: {
      get() {
        return element;
      }
    },
    srcElement: {
      get() {
        return element;
      }
    },
    target: {
      get() {
        return element;
      }
    }
  });
}
function dispatchOnLoadEvent(element) {
  const event = new CustomEvent("load");
  eventHandler(event, element);
  if (isFunction(element.onload)) {
    element.onload(event);
  } else {
    element.dispatchEvent(event);
  }
}
function dispatchOnErrorEvent(element) {
  const event = new CustomEvent("error");
  eventHandler(event, element);
  if (isFunction(element.onerror)) {
    element.onerror(event);
  } else {
    element.dispatchEvent(event);
  }
}
function createSourceCenter() {
  const linkList = /* @__PURE__ */ new Map();
  const scriptList = /* @__PURE__ */ new Map();
  function createSourceHandler(targetList) {
    return {
      setInfo(address, info) {
        targetList.set(address, info);
      },
      getInfo(address) {
        var _a;
        return (_a = targetList.get(address)) !== null && _a !== void 0 ? _a : null;
      },
      hasInfo(address) {
        return targetList.has(address);
      },
      deleteInfo(address) {
        return targetList.delete(address);
      }
    };
  }
  return {
    link: createSourceHandler(linkList),
    script: Object.assign(Object.assign({}, createSourceHandler(scriptList)), { deleteInlineInfo(addressList) {
      addressList.forEach((address) => {
        if (isInlineScript(address)) {
          scriptList.delete(address);
        }
      });
    } })
  };
}
var sourceCenter = createSourceCenter();
function getExistParseCode(appName, prefix, linkInfo) {
  const appSpace = linkInfo.appSpace;
  for (const item in appSpace) {
    if (item !== appName) {
      const appSpaceData = appSpace[item];
      if (appSpaceData.parsedCode) {
        return appSpaceData.parsedCode.replace(new RegExp(createPrefix(item, true), "g"), prefix);
      }
    }
  }
}
function setConvertStyleAttr(convertStyle, attrs) {
  attrs.forEach((value, key) => {
    if (key === "rel")
      return;
    if (key === "href")
      key = "data-origin-href";
    globalEnv.rawSetAttribute.call(convertStyle, key, value);
  });
}
function extractLinkFromHtml(link, parent, app, isDynamic = false) {
  const rel = link.getAttribute("rel");
  let href = link.getAttribute("href");
  let replaceComment = null;
  if (rel === "stylesheet" && href) {
    href = CompletionPath(href, app.url);
    let linkInfo = sourceCenter.link.getInfo(href);
    const appSpaceData = {
      attrs: getAttributes(link)
    };
    if (!linkInfo) {
      linkInfo = {
        code: "",
        appSpace: {
          [app.name]: appSpaceData
        }
      };
    } else {
      linkInfo.appSpace[app.name] = linkInfo.appSpace[app.name] || appSpaceData;
    }
    sourceCenter.link.setInfo(href, linkInfo);
    if (!isDynamic) {
      app.source.links.add(href);
      replaceComment = document.createComment(`link element with href=${href} move to micro-app-head as style element`);
      linkInfo.appSpace[app.name].placeholder = replaceComment;
    } else {
      return { address: href, linkInfo };
    }
  } else if (rel && ["prefetch", "preload", "prerender"].includes(rel)) {
    if (isDynamic) {
      replaceComment = document.createComment(`link element with rel=${rel}${href ? " & href=" + href : ""} removed by micro-app`);
    } else {
      parent === null || parent === void 0 ? void 0 : parent.removeChild(link);
    }
  } else if (href) {
    globalEnv.rawSetAttribute.call(link, "href", CompletionPath(href, app.url));
  }
  if (isDynamic) {
    return { replaceComment };
  } else if (replaceComment) {
    return parent === null || parent === void 0 ? void 0 : parent.replaceChild(replaceComment, link);
  }
}
function fetchLinksFromHtml(wrapElement, app, microAppHead, fiberStyleResult) {
  const styleList = Array.from(app.source.links);
  const fetchLinkPromise = styleList.map((address) => {
    const linkInfo = sourceCenter.link.getInfo(address);
    return linkInfo.code ? linkInfo.code : fetchSource(address, app.name);
  });
  const fiberLinkTasks = fiberStyleResult ? [] : null;
  promiseStream(fetchLinkPromise, (res) => {
    injectFiberTask(fiberLinkTasks, () => fetchLinkSuccess(styleList[res.index], res.data, microAppHead, app));
  }, (err) => {
    logError(err, app.name);
  }, () => {
    if (fiberStyleResult) {
      fiberStyleResult.then(() => {
        fiberLinkTasks.push(() => Promise.resolve(app.onLoad({ html: wrapElement })));
        serialExecFiberTasks(fiberLinkTasks);
      });
    } else {
      app.onLoad({ html: wrapElement });
    }
  });
}
function fetchLinkSuccess(address, code, microAppHead, app) {
  const linkInfo = sourceCenter.link.getInfo(address);
  linkInfo.code = code;
  const appSpaceData = linkInfo.appSpace[app.name];
  const placeholder = appSpaceData.placeholder;
  if (placeholder) {
    const convertStyle = pureCreateElement("style");
    handleConvertStyle(app, address, convertStyle, linkInfo, appSpaceData.attrs);
    if (placeholder.parentNode) {
      placeholder.parentNode.replaceChild(convertStyle, placeholder);
    } else {
      microAppHead.appendChild(convertStyle);
    }
    appSpaceData.placeholder = null;
  }
}
function handleConvertStyle(app, address, convertStyle, linkInfo, attrs) {
  if (app.scopecss) {
    const appSpaceData = linkInfo.appSpace[app.name];
    appSpaceData.prefix = appSpaceData.prefix || createPrefix(app.name);
    if (!appSpaceData.parsedCode) {
      const existParsedCode = getExistParseCode(app.name, appSpaceData.prefix, linkInfo);
      if (!existParsedCode) {
        convertStyle.textContent = linkInfo.code;
        scopedCSS(convertStyle, app, address);
      } else {
        convertStyle.textContent = existParsedCode;
      }
      appSpaceData.parsedCode = convertStyle.textContent;
    } else {
      convertStyle.textContent = appSpaceData.parsedCode;
    }
  } else {
    convertStyle.textContent = linkInfo.code;
  }
  setConvertStyleAttr(convertStyle, attrs);
}
function formatDynamicLink(address, app, linkInfo, originLink) {
  const convertStyle = pureCreateElement("style");
  const handleDynamicLink = () => {
    handleConvertStyle(app, address, convertStyle, linkInfo, linkInfo.appSpace[app.name].attrs);
    dispatchOnLoadEvent(originLink);
  };
  if (linkInfo.code) {
    defer(handleDynamicLink);
  } else {
    fetchSource(address, app.name).then((data) => {
      linkInfo.code = data;
      handleDynamicLink();
    }).catch((err) => {
      logError(err, app.name);
      dispatchOnErrorEvent(originLink);
    });
  }
  return convertStyle;
}
var ObservedAttrName;
(function(ObservedAttrName2) {
  ObservedAttrName2["NAME"] = "name";
  ObservedAttrName2["URL"] = "url";
})(ObservedAttrName || (ObservedAttrName = {}));
var appStates;
(function(appStates2) {
  appStates2["CREATED"] = "created";
  appStates2["LOADING"] = "loading";
  appStates2["LOAD_FAILED"] = "load_failed";
  appStates2["BEFORE_MOUNT"] = "before_mount";
  appStates2["MOUNTING"] = "mounting";
  appStates2["MOUNTED"] = "mounted";
  appStates2["UNMOUNT"] = "unmount";
})(appStates || (appStates = {}));
var lifeCycles;
(function(lifeCycles2) {
  lifeCycles2["CREATED"] = "created";
  lifeCycles2["BEFOREMOUNT"] = "beforemount";
  lifeCycles2["MOUNTED"] = "mounted";
  lifeCycles2["UNMOUNT"] = "unmount";
  lifeCycles2["ERROR"] = "error";
  lifeCycles2["BEFORESHOW"] = "beforeshow";
  lifeCycles2["AFTERSHOW"] = "aftershow";
  lifeCycles2["AFTERHIDDEN"] = "afterhidden";
})(lifeCycles || (lifeCycles = {}));
var microGlobalEvent;
(function(microGlobalEvent2) {
  microGlobalEvent2["ONMOUNT"] = "onmount";
  microGlobalEvent2["ONUNMOUNT"] = "onunmount";
})(microGlobalEvent || (microGlobalEvent = {}));
var keepAliveStates;
(function(keepAliveStates2) {
  keepAliveStates2["KEEP_ALIVE_SHOW"] = "keep_alive_show";
  keepAliveStates2["KEEP_ALIVE_HIDDEN"] = "keep_alive_hidden";
})(keepAliveStates || (keepAliveStates = {}));
var MicroAppConfig;
(function(MicroAppConfig2) {
  MicroAppConfig2["DESTROY"] = "destroy";
  MicroAppConfig2["DESTORY"] = "destory";
  MicroAppConfig2["INLINE"] = "inline";
  MicroAppConfig2["DISABLESCOPECSS"] = "disableScopecss";
  MicroAppConfig2["DISABLESANDBOX"] = "disableSandbox";
  MicroAppConfig2["DISABLE_SCOPECSS"] = "disable-scopecss";
  MicroAppConfig2["DISABLE_SANDBOX"] = "disable-sandbox";
  MicroAppConfig2["DISABLE_MEMORY_ROUTER"] = "disable-memory-router";
  MicroAppConfig2["DISABLE_PATCH_REQUEST"] = "disable-patch-request";
  MicroAppConfig2["KEEP_ROUTER_STATE"] = "keep-router-state";
  MicroAppConfig2["HIDDEN_ROUTER"] = "hidden-router";
  MicroAppConfig2["KEEP_ALIVE"] = "keep-alive";
  MicroAppConfig2["CLEAR_DATA"] = "clear-data";
  MicroAppConfig2["SSR"] = "ssr";
  MicroAppConfig2["FIBER"] = "fiber";
})(MicroAppConfig || (MicroAppConfig = {}));
const PREFETCH_LEVEL = [1, 2, 3];
const DEFAULT_ROUTER_MODE = "search";
const ROUTER_MODE_NATIVE = "native";
const ROUTER_MODE_NATIVE_SCOPE = "native-scope";
const ROUTER_MODE_PURE = "pure";
const ROUTER_MODE_LIST = [
  DEFAULT_ROUTER_MODE,
  ROUTER_MODE_NATIVE,
  ROUTER_MODE_NATIVE_SCOPE,
  ROUTER_MODE_PURE
];
const SCOPE_WINDOW_EVENT = [
  "popstate",
  "hashchange",
  "load",
  "beforeunload",
  "unload",
  "unmount",
  "appstate-change",
  "statechange",
  "mounted"
];
const SCOPE_WINDOW_ON_EVENT = [
  "onpopstate",
  "onhashchange",
  "onload",
  "onbeforeunload",
  "onunload",
  "onerror"
];
const SCOPE_DOCUMENT_EVENT = [
  "DOMContentLoaded",
  "readystatechange"
];
const SCOPE_DOCUMENT_ON_EVENT = [
  "onreadystatechange"
];
const GLOBAL_KEY_TO_WINDOW = [
  "window",
  "self",
  "globalThis"
];
const RAW_GLOBAL_TARGET = ["rawWindow", "rawDocument"];
const GLOBAL_CACHED_KEY = "window,self,globalThis,document,Document,Array,Object,String,Boolean,Math,Number,Symbol,Date,Function,Proxy,WeakMap,WeakSet,Set,Map,Reflect,Element,Node,RegExp,Error,TypeError,JSON,isNaN,parseFloat,parseInt,performance,console,decodeURI,encodeURI,decodeURIComponent,encodeURIComponent,navigator,undefined,location,history";
const scriptTypes = ["text/javascript", "text/ecmascript", "application/javascript", "application/ecmascript", "module", "systemjs-module", "systemjs-importmap"];
function isTypeModule(app, scriptInfo) {
  return scriptInfo.appSpace[app.name].module && (!app.useSandbox || app.iframe);
}
function isSpecialScript(app, scriptInfo) {
  const attrs = scriptInfo.appSpace[app.name].attrs;
  return attrs.has("id");
}
function isInlineMode(app, scriptInfo) {
  return app.inline || scriptInfo.appSpace[app.name].inline || isTypeModule(app, scriptInfo) || isSpecialScript(app, scriptInfo);
}
function getEffectWindow(app) {
  return app.iframe ? app.sandBox.microAppWindow : globalEnv.rawWindow;
}
function code2Function(app, code) {
  const targetWindow = getEffectWindow(app);
  return new targetWindow.Function(code);
}
function getExistParseResult(app, scriptInfo, currentCode) {
  const appSpace = scriptInfo.appSpace;
  for (const item in appSpace) {
    if (item !== app.name) {
      const appSpaceData = appSpace[item];
      if (appSpaceData.parsedCode === currentCode && appSpaceData.parsedFunction) {
        return appSpaceData.parsedFunction;
      }
    }
  }
}
function getParsedFunction(app, scriptInfo, parsedCode) {
  return getExistParseResult(app, scriptInfo, parsedCode) || code2Function(app, parsedCode);
}
function getUniqueNonceSrc() {
  const nonceStr = createNonceSrc();
  if (sourceCenter.script.hasInfo(nonceStr)) {
    return getUniqueNonceSrc();
  }
  return nonceStr;
}
function setConvertScriptAttr(convertScript, attrs) {
  attrs.forEach((value, key) => {
    if (key === "type" && value === "module" || key === "defer" || key === "async")
      return;
    if (key === "src")
      key = "data-origin-src";
    globalEnv.rawSetAttribute.call(convertScript, key, value);
  });
}
function isWrapInSandBox(app, scriptInfo) {
  return app.useSandbox && !isTypeModule(app, scriptInfo);
}
function getSandboxType(app, scriptInfo) {
  return isWrapInSandBox(app, scriptInfo) ? app.iframe ? "iframe" : "with" : "disable";
}
function extractScriptElement(script, parent, app, isDynamic = false) {
  var _a;
  let replaceComment = null;
  let src = script.getAttribute("src");
  if (src)
    src = CompletionPath(src, app.url);
  if (script.hasAttribute("exclude") || checkExcludeUrl(src, app.name)) {
    replaceComment = document.createComment("script element with exclude attribute removed by micro-app");
  } else if (script.type && !scriptTypes.includes(script.type) || script.hasAttribute("ignore") || checkIgnoreUrl(src, app.name)) {
    if ((_a = globalEnv.rawDocument) === null || _a === void 0 ? void 0 : _a.currentScript) {
      delete globalEnv.rawDocument.currentScript;
    }
    return null;
  } else if (globalEnv.supportModuleScript && script.noModule || !globalEnv.supportModuleScript && script.type === "module") {
    replaceComment = document.createComment(`${script.noModule ? "noModule" : "module"} script ignored by micro-app`);
  } else if (src) {
    let scriptInfo = sourceCenter.script.getInfo(src);
    const appSpaceData = {
      async: script.hasAttribute("async"),
      defer: script.defer || script.type === "module",
      module: script.type === "module",
      inline: script.hasAttribute("inline"),
      pure: script.hasAttribute("pure"),
      attrs: getAttributes(script)
    };
    if (!scriptInfo) {
      scriptInfo = {
        code: "",
        isExternal: true,
        appSpace: {
          [app.name]: appSpaceData
        }
      };
    } else {
      scriptInfo.appSpace[app.name] = scriptInfo.appSpace[app.name] || appSpaceData;
    }
    sourceCenter.script.setInfo(src, scriptInfo);
    if (!isDynamic) {
      app.source.scripts.add(src);
      replaceComment = document.createComment(`script with src='${src}' extract by micro-app`);
    } else {
      return { address: src, scriptInfo };
    }
  } else if (script.textContent) {
    const nonceStr = getUniqueNonceSrc();
    const scriptInfo = {
      code: script.textContent,
      isExternal: false,
      appSpace: {
        [app.name]: {
          async: false,
          defer: script.type === "module",
          module: script.type === "module",
          inline: script.hasAttribute("inline"),
          pure: script.hasAttribute("pure"),
          attrs: getAttributes(script)
        }
      }
    };
    if (!isDynamic) {
      app.source.scripts.add(nonceStr);
      sourceCenter.script.setInfo(nonceStr, scriptInfo);
      replaceComment = document.createComment("inline script extract by micro-app");
    } else {
      return { address: nonceStr, scriptInfo };
    }
  } else if (!isDynamic) {
    replaceComment = document.createComment("script element removed by micro-app");
  }
  if (isDynamic) {
    return { replaceComment };
  } else {
    return parent === null || parent === void 0 ? void 0 : parent.replaceChild(replaceComment, script);
  }
}
function getAssetsPlugins(appName) {
  var _a, _b, _c;
  const globalPlugins = ((_a = microApp.options.plugins) === null || _a === void 0 ? void 0 : _a.global) || [];
  const modulePlugins = ((_c = (_b = microApp.options.plugins) === null || _b === void 0 ? void 0 : _b.modules) === null || _c === void 0 ? void 0 : _c[appName]) || [];
  return [...globalPlugins, ...modulePlugins];
}
function checkExcludeUrl(address, appName) {
  if (!address)
    return false;
  const plugins = getAssetsPlugins(appName) || [];
  return plugins.some((plugin) => {
    if (!plugin.excludeChecker)
      return false;
    return plugin.excludeChecker(address);
  });
}
function checkIgnoreUrl(address, appName) {
  if (!address)
    return false;
  const plugins = getAssetsPlugins(appName) || [];
  return plugins.some((plugin) => {
    if (!plugin.ignoreChecker)
      return false;
    return plugin.ignoreChecker(address);
  });
}
function fetchScriptsFromHtml(wrapElement, app) {
  const scriptList = Array.from(app.source.scripts);
  const fetchScriptPromise = [];
  const fetchScriptPromiseInfo = [];
  for (const address of scriptList) {
    const scriptInfo = sourceCenter.script.getInfo(address);
    const appSpaceData = scriptInfo.appSpace[app.name];
    if (!appSpaceData.defer && !appSpaceData.async || app.isPrefetch && !app.isPrerender) {
      fetchScriptPromise.push(scriptInfo.code ? scriptInfo.code : fetchSource(address, app.name));
      fetchScriptPromiseInfo.push([address, scriptInfo]);
    }
  }
  const fiberScriptTasks = app.isPrefetch || app.fiber ? [] : null;
  if (fetchScriptPromise.length) {
    promiseStream(fetchScriptPromise, (res) => {
      injectFiberTask(fiberScriptTasks, () => fetchScriptSuccess(fetchScriptPromiseInfo[res.index][0], fetchScriptPromiseInfo[res.index][1], res.data, app));
    }, (err) => {
      logError(err, app.name);
    }, () => {
      if (fiberScriptTasks) {
        fiberScriptTasks.push(() => Promise.resolve(app.onLoad({ html: wrapElement })));
        serialExecFiberTasks(fiberScriptTasks);
      } else {
        app.onLoad({ html: wrapElement });
      }
    });
  } else {
    app.onLoad({ html: wrapElement });
  }
}
function fetchScriptSuccess(address, scriptInfo, code, app) {
  scriptInfo.code = code;
  if (app.isPrefetch && app.prefetchLevel === 2) {
    const appSpaceData = scriptInfo.appSpace[app.name];
    if (!appSpaceData.parsedCode) {
      appSpaceData.parsedCode = bindScope(address, app, code, scriptInfo);
      appSpaceData.sandboxType = getSandboxType(app, scriptInfo);
      if (!isInlineMode(app, scriptInfo)) {
        try {
          appSpaceData.parsedFunction = getParsedFunction(app, scriptInfo, appSpaceData.parsedCode);
        } catch (err) {
          logError("Something went wrong while handling preloaded resources", app.name, "\n", err);
        }
      }
    }
  }
}
function execScripts(app, initHook) {
  const fiberScriptTasks = app.fiber ? [] : null;
  const scriptList = Array.from(app.source.scripts);
  const deferScriptPromise = [];
  const deferScriptInfo = [];
  for (const address of scriptList) {
    const scriptInfo = sourceCenter.script.getInfo(address);
    const appSpaceData = scriptInfo.appSpace[app.name];
    if (appSpaceData.defer || appSpaceData.async) {
      if (scriptInfo.isExternal && !scriptInfo.code && !isTypeModule(app, scriptInfo)) {
        deferScriptPromise.push(fetchSource(address, app.name));
      } else {
        deferScriptPromise.push(scriptInfo.code);
      }
      deferScriptInfo.push([address, scriptInfo]);
      isTypeModule(app, scriptInfo) && (initHook.moduleCount = initHook.moduleCount ? ++initHook.moduleCount : 1);
    } else {
      injectFiberTask(fiberScriptTasks, () => {
        runScript(address, app, scriptInfo);
        initHook(false);
      });
    }
  }
  if (deferScriptPromise.length) {
    promiseStream(deferScriptPromise, (res) => {
      const scriptInfo = deferScriptInfo[res.index][1];
      scriptInfo.code = scriptInfo.code || res.data;
    }, (err) => {
      initHook.errorCount = initHook.errorCount ? ++initHook.errorCount : 1;
      logError(err, app.name);
    }, () => {
      deferScriptInfo.forEach(([address, scriptInfo]) => {
        if (isString(scriptInfo.code)) {
          injectFiberTask(fiberScriptTasks, () => {
            runScript(address, app, scriptInfo, initHook);
            !isTypeModule(app, scriptInfo) && initHook(false);
          });
        }
      });
      if (fiberScriptTasks) {
        fiberScriptTasks.push(() => Promise.resolve(initHook(isUndefined(initHook.moduleCount) || initHook.errorCount === deferScriptPromise.length)));
        serialExecFiberTasks(fiberScriptTasks);
      } else {
        initHook(isUndefined(initHook.moduleCount) || initHook.errorCount === deferScriptPromise.length);
      }
    });
  } else {
    if (fiberScriptTasks) {
      fiberScriptTasks.push(() => Promise.resolve(initHook(true)));
      serialExecFiberTasks(fiberScriptTasks);
    } else {
      initHook(true);
    }
  }
}
function runScript(address, app, scriptInfo, callback, replaceElement) {
  try {
    actionsBeforeRunScript(app);
    const appSpaceData = scriptInfo.appSpace[app.name];
    const sandboxType = getSandboxType(app, scriptInfo);
    if (!appSpaceData.parsedCode || appSpaceData.sandboxType !== sandboxType) {
      appSpaceData.parsedCode = bindScope(address, app, scriptInfo.code, scriptInfo);
      appSpaceData.sandboxType = sandboxType;
      appSpaceData.parsedFunction = null;
    }
    if (isInlineMode(app, scriptInfo)) {
      const scriptElement = replaceElement || pureCreateElement("script");
      runCode2InlineScript(address, appSpaceData.parsedCode, isTypeModule(app, scriptInfo), scriptElement, appSpaceData.attrs, callback);
      if (!replaceElement) {
        const parent = app.iframe ? app.sandBox.microBody : app.querySelector("micro-app-body");
        parent === null || parent === void 0 ? void 0 : parent.appendChild(scriptElement);
      }
    } else {
      runParsedFunction(app, scriptInfo);
    }
  } catch (e) {
    console.error(`[micro-app from ${replaceElement ? "runDynamicScript" : "runScript"}] app ${app.name}: `, e, address);
    throw e;
  }
}
function runDynamicRemoteScript(address, app, scriptInfo, originScript) {
  const replaceElement = isInlineMode(app, scriptInfo) ? pureCreateElement("script") : document.createComment("dynamic script extract by micro-app");
  const dispatchScriptOnLoadEvent = () => dispatchOnLoadEvent(originScript);
  const runDynamicScript = () => {
    const descriptor = Object.getOwnPropertyDescriptor(globalEnv.rawDocument, "currentScript");
    if (!descriptor || descriptor.configurable) {
      Object.defineProperty(globalEnv.rawDocument, "currentScript", {
        value: originScript,
        configurable: true
      });
    }
    runScript(address, app, scriptInfo, dispatchScriptOnLoadEvent, replaceElement);
    !isTypeModule(app, scriptInfo) && dispatchScriptOnLoadEvent();
  };
  if (scriptInfo.code || isTypeModule(app, scriptInfo)) {
    defer(runDynamicScript);
  } else {
    fetchSource(address, app.name).then((code) => {
      scriptInfo.code = code;
      runDynamicScript();
    }).catch((err) => {
      logError(err, app.name);
      dispatchOnErrorEvent(originScript);
    });
  }
  return replaceElement;
}
function runDynamicInlineScript(address, app, scriptInfo) {
  const replaceElement = isInlineMode(app, scriptInfo) ? pureCreateElement("script") : document.createComment("dynamic script extract by micro-app");
  runScript(address, app, scriptInfo, void 0, replaceElement);
  return replaceElement;
}
function runCode2InlineScript(address, code, module, scriptElement, attrs, callback) {
  if (module) {
    globalEnv.rawSetAttribute.call(scriptElement, "type", "module");
    if (isInlineScript(address)) {
      scriptElement.textContent = code;
    } else {
      scriptElement.src = address;
    }
    if (callback) {
      const onloadHandler = () => {
        callback.moduleCount && callback.moduleCount--;
        callback(callback.moduleCount === 0);
      };
      if (isInlineScript(address)) {
        defer(onloadHandler);
      } else {
        scriptElement.onload = onloadHandler;
      }
    }
  } else {
    scriptElement.textContent = code;
  }
  setConvertScriptAttr(scriptElement, attrs);
}
function runParsedFunction(app, scriptInfo) {
  const appSpaceData = scriptInfo.appSpace[app.name];
  if (!appSpaceData.parsedFunction) {
    appSpaceData.parsedFunction = getParsedFunction(app, scriptInfo, appSpaceData.parsedCode);
  }
  appSpaceData.parsedFunction.call(getEffectWindow(app));
}
function bindScope(address, app, code, scriptInfo) {
  if (isPlainObject(microApp.options.plugins)) {
    code = usePlugins(address, code, app.name, microApp.options.plugins);
  }
  if (isWrapInSandBox(app, scriptInfo)) {
    return app.iframe ? `(function(window,self,global,location){;${code}
${isInlineScript(address) ? "" : `//# sourceURL=${address}
`}}).call(window.__MICRO_APP_SANDBOX__.proxyWindow,window.__MICRO_APP_SANDBOX__.proxyWindow,window.__MICRO_APP_SANDBOX__.proxyWindow,window.__MICRO_APP_SANDBOX__.proxyWindow,window.__MICRO_APP_SANDBOX__.proxyLocation);` : `;(function(proxyWindow){with(proxyWindow.__MICRO_APP_WINDOW__){(function(${GLOBAL_CACHED_KEY}){;${code}
${isInlineScript(address) ? "" : `//# sourceURL=${address}
`}}).call(proxyWindow,${GLOBAL_CACHED_KEY})}})(window.__MICRO_APP_PROXY_WINDOW__);`;
  }
  return code;
}
function actionsBeforeRunScript(app) {
  setActiveProxyWindow(app);
}
function setActiveProxyWindow(app) {
  if (app.sandBox) {
    globalEnv.rawWindow.__MICRO_APP_PROXY_WINDOW__ = app.sandBox.proxyWindow;
  }
}
function usePlugins(address, code, appName, plugins) {
  var _a;
  const newCode = processCode(plugins.global, code, address);
  return processCode((_a = plugins.modules) === null || _a === void 0 ? void 0 : _a[appName], newCode, address);
}
function processCode(configs, code, address) {
  if (!isArray(configs)) {
    return code;
  }
  return configs.reduce((preCode, config) => {
    if (isPlainObject(config) && isFunction(config.loader)) {
      return config.loader(preCode, address);
    }
    return preCode;
  }, code);
}
function flatChildren(parent, app, microAppHead, fiberStyleTasks) {
  const children = Array.from(parent.children);
  children.length && children.forEach((child) => {
    flatChildren(child, app, microAppHead, fiberStyleTasks);
  });
  for (const dom of children) {
    if (isLinkElement(dom)) {
      if (dom.hasAttribute("exclude") || checkExcludeUrl(dom.getAttribute("href"), app.name)) {
        parent.replaceChild(document.createComment("link element with exclude attribute ignored by micro-app"), dom);
      } else if (!(dom.hasAttribute("ignore") || checkIgnoreUrl(dom.getAttribute("href"), app.name))) {
        extractLinkFromHtml(dom, parent, app);
      } else if (dom.hasAttribute("href")) {
        globalEnv.rawSetAttribute.call(dom, "href", CompletionPath(dom.getAttribute("href"), app.url));
      }
    } else if (isStyleElement(dom)) {
      if (dom.hasAttribute("exclude")) {
        parent.replaceChild(document.createComment("style element with exclude attribute ignored by micro-app"), dom);
      } else if (app.scopecss && !dom.hasAttribute("ignore")) {
        injectFiberTask(fiberStyleTasks, () => scopedCSS(dom, app));
      }
    } else if (isScriptElement(dom)) {
      extractScriptElement(dom, parent, app);
    } else if (isImageElement(dom) && dom.hasAttribute("src")) {
      globalEnv.rawSetAttribute.call(dom, "src", CompletionPath(dom.getAttribute("src"), app.url));
    }
  }
}
function extractSourceDom(htmlStr, app) {
  const wrapElement = app.parseHtmlString(htmlStr);
  const microAppHead = globalEnv.rawElementQuerySelector.call(wrapElement, "micro-app-head");
  const microAppBody = globalEnv.rawElementQuerySelector.call(wrapElement, "micro-app-body");
  if (!microAppHead || !microAppBody) {
    const msg = `element ${microAppHead ? "body" : "head"} is missing`;
    app.onerror(new Error(msg));
    return logError(msg, app.name);
  }
  const fiberStyleTasks = app.isPrefetch || app.fiber ? [] : null;
  flatChildren(wrapElement, app, microAppHead, fiberStyleTasks);
  const fiberStyleResult = serialExecFiberTasks(fiberStyleTasks);
  if (app.source.links.size) {
    fetchLinksFromHtml(wrapElement, app, microAppHead, fiberStyleResult);
  } else if (fiberStyleResult) {
    fiberStyleResult.then(() => app.onLoad({ html: wrapElement }));
  } else {
    app.onLoad({ html: wrapElement });
  }
  if (app.source.scripts.size) {
    fetchScriptsFromHtml(wrapElement, app);
  } else {
    app.onLoad({ html: wrapElement });
  }
}
class EventCenter {
  constructor() {
    this.eventList = /* @__PURE__ */ new Map();
    this.queue = [];
    this.recordStep = {};
    this.process = () => {
      var _a, _b;
      let name;
      const temRecordStep = this.recordStep;
      const queue = this.queue;
      this.recordStep = {};
      this.queue = [];
      while (name = queue.shift()) {
        const eventInfo = this.eventList.get(name);
        const tempData = eventInfo.tempData;
        const force = eventInfo.force;
        eventInfo.tempData = null;
        eventInfo.force = false;
        let resArr;
        if (force || !this.isEqual(eventInfo.data, tempData)) {
          eventInfo.data = tempData || eventInfo.data;
          for (const f of eventInfo.callbacks) {
            const res = f(eventInfo.data);
            res && (resArr !== null && resArr !== void 0 ? resArr : resArr = []).push(res);
          }
          (_b = (_a = temRecordStep[name]).dispatchDataEvent) === null || _b === void 0 ? void 0 : _b.call(_a);
          temRecordStep[name].nextStepList.forEach((nextStep) => nextStep(resArr));
        }
      }
    };
  }
  // whether the name is legal
  isLegalName(name) {
    if (!name) {
      logError("event-center: Invalid name");
      return false;
    }
    return true;
  }
  // add appName to queue
  enqueue(name, nextStep, dispatchDataEvent) {
    if (this.recordStep[name]) {
      this.recordStep[name].nextStepList.push(nextStep);
      dispatchDataEvent && (this.recordStep[name].dispatchDataEvent = dispatchDataEvent);
    } else {
      this.recordStep[name] = {
        nextStepList: [nextStep],
        dispatchDataEvent
      };
    }
    !this.queue.includes(name) && this.queue.push(name) === 1 && defer(this.process);
  }
  /**
   * In react, each setState will trigger setData, so we need a filter operation to avoid repeated trigger
   */
  isEqual(oldData, newData) {
    if (!newData || Object.keys(oldData).length !== Object.keys(newData).length)
      return false;
    for (const key in oldData) {
      if (Object.prototype.hasOwnProperty.call(oldData, key)) {
        if (oldData[key] !== newData[key])
          return false;
      }
    }
    return true;
  }
  /**
   * add listener
   * @param name event name
   * @param f listener
   * @param autoTrigger If there is cached data when first bind listener, whether it needs to trigger, default is false
   */
  on(name, f, autoTrigger = false) {
    if (this.isLegalName(name)) {
      if (!isFunction(f)) {
        return logError("event-center: Invalid callback function");
      }
      let eventInfo = this.eventList.get(name);
      if (!eventInfo) {
        eventInfo = {
          data: {},
          callbacks: /* @__PURE__ */ new Set()
        };
        this.eventList.set(name, eventInfo);
      } else if (autoTrigger && Object.keys(eventInfo.data).length && (!this.queue.includes(name) || this.isEqual(eventInfo.data, eventInfo.tempData))) {
        f(eventInfo.data);
      }
      eventInfo.callbacks.add(f);
    }
  }
  // remove listener, but the data is not cleared
  off(name, f) {
    if (this.isLegalName(name)) {
      const eventInfo = this.eventList.get(name);
      if (eventInfo) {
        if (isFunction(f)) {
          eventInfo.callbacks.delete(f);
        } else {
          eventInfo.callbacks.clear();
        }
      }
    }
  }
  /**
   * clearData
   */
  clearData(name) {
    if (this.isLegalName(name)) {
      const eventInfo = this.eventList.get(name);
      if (eventInfo) {
        eventInfo.data = {};
      }
    }
  }
  // dispatch data
  dispatch(name, data, nextStep, force, dispatchDataEvent) {
    if (this.isLegalName(name)) {
      if (!isPlainObject(data)) {
        return logError("event-center: data must be object");
      }
      let eventInfo = this.eventList.get(name);
      if (eventInfo) {
        eventInfo.tempData = assign({}, eventInfo.tempData || eventInfo.data, data);
        !eventInfo.force && (eventInfo.force = !!force);
      } else {
        eventInfo = {
          data,
          callbacks: /* @__PURE__ */ new Set()
        };
        this.eventList.set(name, eventInfo);
        eventInfo.force = true;
      }
      this.enqueue(name, nextStep, dispatchDataEvent);
    }
  }
  // get data
  getData(name) {
    var _a;
    const eventInfo = this.eventList.get(name);
    return (_a = eventInfo === null || eventInfo === void 0 ? void 0 : eventInfo.data) !== null && _a !== void 0 ? _a : null;
  }
}
const eventCenter = new EventCenter();
function createEventName(appName, fromBaseApp) {
  if (!isString(appName) || !appName)
    return "";
  return fromBaseApp ? `__from_base_app_${appName}__` : `__from_micro_app_${appName}__`;
}
class EventCenterForGlobal {
  /**
   * add listener of global data
   * @param cb listener
   * @param autoTrigger If there is cached data when first bind listener, whether it needs to trigger, default is false
   */
  addGlobalDataListener(cb, autoTrigger) {
    const appName = this.appName;
    if (appName) {
      cb.__APP_NAME__ = appName;
      cb.__AUTO_TRIGGER__ = autoTrigger;
    }
    eventCenter.on("global", cb, autoTrigger);
  }
  /**
   * remove listener of global data
   * @param cb listener
   */
  removeGlobalDataListener(cb) {
    isFunction(cb) && eventCenter.off("global", cb);
  }
  /**
   * dispatch global data
   * @param data data
   */
  setGlobalData(data, nextStep, force) {
    removeDomScope();
    eventCenter.dispatch("global", data, (resArr) => isFunction(nextStep) && nextStep(resArr), force);
  }
  forceSetGlobalData(data, nextStep) {
    this.setGlobalData(data, nextStep, true);
  }
  /**
   * get global data
   */
  getGlobalData() {
    return eventCenter.getData("global");
  }
  /**
   * clear global data
   */
  clearGlobalData() {
    eventCenter.clearData("global");
  }
  /**
   * clear all listener of global data
   * if appName exists, only the specified functions is cleared
   * if appName not exists, only clear the base app functions
   */
  clearGlobalDataListener() {
    const appName = this.appName;
    const eventInfo = eventCenter.eventList.get("global");
    if (eventInfo) {
      for (const cb of eventInfo.callbacks) {
        if (appName && appName === cb.__APP_NAME__ || !(appName || cb.__APP_NAME__)) {
          eventInfo.callbacks.delete(cb);
        }
      }
    }
  }
}
class EventCenterForBaseApp extends EventCenterForGlobal {
  /**
   * add listener
   * @param appName app.name
   * @param cb listener
   * @param autoTrigger If there is cached data when first bind listener, whether it needs to trigger, default is false
   */
  addDataListener(appName, cb, autoTrigger) {
    eventCenter.on(createEventName(formatAppName(appName), false), cb, autoTrigger);
  }
  /**
   * remove listener
   * @param appName app.name
   * @param cb listener
   */
  removeDataListener(appName, cb) {
    isFunction(cb) && eventCenter.off(createEventName(formatAppName(appName), false), cb);
  }
  /**
   * get data from micro app or base app
   * @param appName app.name
   * @param fromBaseApp whether get data from base app, default is false
   */
  getData(appName, fromBaseApp = false) {
    return eventCenter.getData(createEventName(formatAppName(appName), fromBaseApp));
  }
  /**
   * Dispatch data to the specified micro app
   * @param appName app.name
   * @param data data
   */
  setData(appName, data, nextStep, force) {
    eventCenter.dispatch(createEventName(formatAppName(appName), true), data, (resArr) => isFunction(nextStep) && nextStep(resArr), force);
  }
  forceSetData(appName, data, nextStep) {
    this.setData(appName, data, nextStep, true);
  }
  /**
   * clear data from base app
   * @param appName app.name
   * @param fromBaseApp whether clear data from child app, default is true
   */
  clearData(appName, fromBaseApp = true) {
    eventCenter.clearData(createEventName(formatAppName(appName), fromBaseApp));
  }
  /**
   * clear all listener for specified micro app
   * @param appName app.name
   */
  clearDataListener(appName) {
    eventCenter.off(createEventName(formatAppName(appName), false));
  }
}
class EventCenterForMicroApp extends EventCenterForGlobal {
  constructor(appName) {
    super();
    this.appName = formatAppName(appName);
    !this.appName && logError(`Invalid appName ${appName}`);
  }
  /**
   * add listener, monitor the data sent by the base app
   * @param cb listener
   * @param autoTrigger If there is cached data when first bind listener, whether it needs to trigger, default is false
   */
  addDataListener(cb, autoTrigger) {
    cb.__AUTO_TRIGGER__ = autoTrigger;
    eventCenter.on(createEventName(this.appName, true), cb, autoTrigger);
  }
  /**
   * remove listener
   * @param cb listener
   */
  removeDataListener(cb) {
    isFunction(cb) && eventCenter.off(createEventName(this.appName, true), cb);
  }
  /**
   * get data from base app
   */
  getData(fromBaseApp = true) {
    return eventCenter.getData(createEventName(this.appName, fromBaseApp));
  }
  /**
   * dispatch data to base app
   * @param data data
   */
  dispatch(data, nextStep, force) {
    removeDomScope();
    eventCenter.dispatch(createEventName(this.appName, false), data, (resArr) => isFunction(nextStep) && nextStep(resArr), force, () => {
      const app = appInstanceMap.get(this.appName);
      if ((app === null || app === void 0 ? void 0 : app.container) && isPlainObject(data)) {
        const event = new CustomEvent("datachange", {
          detail: {
            data: eventCenter.getData(createEventName(this.appName, false))
          }
        });
        getRootContainer(app.container).dispatchEvent(event);
      }
    });
  }
  forceDispatch(data, nextStep) {
    this.dispatch(data, nextStep, true);
  }
  /**
   * clear data from child app
   * @param fromBaseApp whether clear data from base app, default is false
   */
  clearData(fromBaseApp = false) {
    eventCenter.clearData(createEventName(this.appName, fromBaseApp));
  }
  /**
   * clear all listeners
   */
  clearDataListener() {
    eventCenter.off(createEventName(this.appName, true));
  }
}
function recordDataCenterSnapshot(microAppEventCenter) {
  var _a, _b;
  if (microAppEventCenter) {
    microAppEventCenter.umdDataListeners = {
      global: new Set((_a = microAppEventCenter.umdDataListeners) === null || _a === void 0 ? void 0 : _a.global),
      normal: new Set((_b = microAppEventCenter.umdDataListeners) === null || _b === void 0 ? void 0 : _b.normal)
    };
    const globalEventInfo = eventCenter.eventList.get("global");
    if (globalEventInfo) {
      for (const cb of globalEventInfo.callbacks) {
        if (microAppEventCenter.appName === cb.__APP_NAME__) {
          microAppEventCenter.umdDataListeners.global.add(cb);
        }
      }
    }
    const subAppEventInfo = eventCenter.eventList.get(createEventName(microAppEventCenter.appName, true));
    if (subAppEventInfo) {
      for (const cb of subAppEventInfo.callbacks) {
        microAppEventCenter.umdDataListeners.normal.add(cb);
      }
    }
  }
}
function rebuildDataCenterSnapshot(microAppEventCenter) {
  if (microAppEventCenter === null || microAppEventCenter === void 0 ? void 0 : microAppEventCenter.umdDataListeners) {
    for (const cb of microAppEventCenter.umdDataListeners.global) {
      microAppEventCenter.addGlobalDataListener(cb, cb.__AUTO_TRIGGER__);
    }
    for (const cb of microAppEventCenter.umdDataListeners.normal) {
      microAppEventCenter.addDataListener(cb, cb.__AUTO_TRIGGER__);
    }
    resetDataCenterSnapshot(microAppEventCenter);
  }
}
function resetDataCenterSnapshot(microAppEventCenter) {
  microAppEventCenter === null || microAppEventCenter === void 0 ? true : delete microAppEventCenter.umdDataListeners;
}
class AppManager {
  constructor() {
    this.appInstanceMap = appInstanceMap;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new AppManager();
    }
    return this.instance;
  }
  get(appName) {
    return this.appInstanceMap.get(appName);
  }
  set(appName, app) {
    this.appInstanceMap.set(appName, app);
  }
  getAll() {
    return Array.from(this.appInstanceMap.values());
  }
  clear() {
    this.appInstanceMap.clear();
  }
}
function unmountNestedApp() {
  releaseUnmountOfNestedApp();
  AppManager.getInstance().getAll().forEach((app) => {
    app.container && getRootContainer(app.container).disconnectedCallback();
  });
  !window.__MICRO_APP_UMD_MODE__ && AppManager.getInstance().clear();
}
function releaseUnmountOfNestedApp() {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.removeEventListener("unmount", unmountNestedApp, false);
  }
}
function initEnvOfNestedApp() {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    releaseUnmountOfNestedApp();
    window.addEventListener("unmount", unmountNestedApp, false);
  }
}
function isBoundedFunction(value) {
  if (isBoolean(value.__MICRO_APP_IS_BOUND_FUNCTION__))
    return value.__MICRO_APP_IS_BOUND_FUNCTION__;
  return value.__MICRO_APP_IS_BOUND_FUNCTION__ = isBoundFunction(value);
}
function isConstructorFunction(value) {
  if (isBoolean(value.__MICRO_APP_IS_CONSTRUCTOR__))
    return value.__MICRO_APP_IS_CONSTRUCTOR__;
  return value.__MICRO_APP_IS_CONSTRUCTOR__ = isConstructor(value);
}
function bindFunctionToRawTarget(value, rawTarget, key = "WINDOW") {
  if (isFunction(value) && !isConstructorFunction(value) && !isBoundedFunction(value)) {
    const cacheKey = `__MICRO_APP_BOUND_${key}_FUNCTION__`;
    if (value[cacheKey])
      return value[cacheKey];
    const bindRawObjectValue = value.bind(rawTarget);
    for (const key2 in value) {
      bindRawObjectValue[key2] = value[key2];
    }
    if (value.hasOwnProperty("prototype")) {
      rawDefineProperty(bindRawObjectValue, "prototype", {
        value: value.prototype,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    return value[cacheKey] = bindRawObjectValue;
  }
  return value;
}
function patchDocument(appName, microAppWindow, sandbox) {
  const { proxyDocument, documentEffect } = createProxyDocument(appName, sandbox);
  const MicroDocument = createMicroDocument(appName, proxyDocument);
  rawDefineProperties(microAppWindow, {
    document: {
      configurable: false,
      enumerable: true,
      get() {
        return proxyDocument;
      }
    },
    Document: {
      configurable: false,
      enumerable: false,
      get() {
        return MicroDocument;
      }
    }
  });
  return documentEffect;
}
function createProxyDocument(appName, sandbox) {
  const eventListenerMap = /* @__PURE__ */ new Map();
  const sstEventListenerMap = /* @__PURE__ */ new Map();
  let onClickHandler = null;
  let sstOnClickHandler = null;
  const { rawDocument, rawCreateElement, rawCreateElementNS, rawAddEventListener, rawRemoveEventListener } = globalEnv;
  function createElement(tagName, options) {
    const element = rawCreateElement.call(rawDocument, tagName, options);
    element.__MICRO_APP_NAME__ = appName;
    return element;
  }
  function createElementNS(namespaceURI, name, options) {
    const element = rawCreateElementNS.call(rawDocument, namespaceURI, name, options);
    element.__MICRO_APP_NAME__ = appName;
    return element;
  }
  function addEventListener(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if (listenerList) {
      listenerList.add(listener);
    } else {
      eventListenerMap.set(type, /* @__PURE__ */ new Set([listener]));
    }
    listener && (listener.__MICRO_APP_MARK_OPTIONS__ = options);
    rawAddEventListener.call(rawDocument, type, listener, options);
  }
  function removeEventListener(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if ((listenerList === null || listenerList === void 0 ? void 0 : listenerList.size) && listenerList.has(listener)) {
      listenerList.delete(listener);
    }
    rawRemoveEventListener.call(rawDocument, type, listener, options);
  }
  const reset = () => {
    sstEventListenerMap.clear();
    sstOnClickHandler = null;
  };
  const record = () => {
    sstOnClickHandler = onClickHandler || sstOnClickHandler;
    eventListenerMap.forEach((listenerList, type) => {
      if (listenerList.size) {
        const cacheList = sstEventListenerMap.get(type) || [];
        sstEventListenerMap.set(type, /* @__PURE__ */ new Set([...cacheList, ...listenerList]));
      }
    });
  };
  const rebuild = () => {
    if (sstOnClickHandler && !onClickHandler)
      proxyDocument.onclick = sstOnClickHandler;
    sstEventListenerMap.forEach((listenerList, type) => {
      for (const listener of listenerList) {
        proxyDocument.addEventListener(type, listener, listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_MARK_OPTIONS__);
      }
    });
    reset();
  };
  const release = () => {
    if (isFunction(onClickHandler)) {
      rawRemoveEventListener.call(rawDocument, "click", onClickHandler);
    }
    onClickHandler = null;
    if (eventListenerMap.size) {
      eventListenerMap.forEach((listenerList, type) => {
        for (const listener of listenerList) {
          rawRemoveEventListener.call(rawDocument, type, listener);
        }
      });
      eventListenerMap.clear();
    }
  };
  const genProxyDocumentProps = () => {
    var _a;
    const builtInProxyProps = /* @__PURE__ */ new Map([
      ["onclick", (value) => {
        if (isFunction(onClickHandler)) {
          rawRemoveEventListener.call(rawDocument, "click", onClickHandler, false);
        }
        if (isFunction(value)) {
          rawAddEventListener.call(rawDocument, "click", value, false);
        }
        onClickHandler = value;
      }]
    ]);
    const customProxyDocumentProps = ((_a = microApp.options) === null || _a === void 0 ? void 0 : _a.customProxyDocumentProps) || /* @__PURE__ */ new Map();
    const mergedProxyDocumentProps2 = new Map([
      ...builtInProxyProps,
      ...customProxyDocumentProps
    ]);
    return mergedProxyDocumentProps2;
  };
  const mergedProxyDocumentProps = genProxyDocumentProps();
  const proxyDocument = new Proxy(rawDocument, {
    get: (target, key) => {
      var _a;
      throttleDeferForSetAppName(appName);
      if (key === "createElement")
        return createElement;
      if (key === "createElementNS")
        return createElementNS;
      if (key === Symbol.toStringTag)
        return "ProxyDocument";
      if (key === "defaultView")
        return sandbox.proxyWindow;
      if (key === "onclick")
        return onClickHandler;
      if (key === "addEventListener")
        return addEventListener;
      if (key === "removeEventListener")
        return removeEventListener;
      if (key === "microAppElement")
        return (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.container;
      if (key === "__MICRO_APP_NAME__")
        return appName;
      return bindFunctionToRawTarget(Reflect.get(target, key), rawDocument, "DOCUMENT");
    },
    set: (target, key, value) => {
      if (mergedProxyDocumentProps.has(key)) {
        const proxyCallback = mergedProxyDocumentProps.get(key);
        proxyCallback(value);
      } else if (key !== "microAppElement") {
        Reflect.set(target, key, value);
      }
      return true;
    }
  });
  return {
    proxyDocument,
    documentEffect: {
      reset,
      record,
      rebuild,
      release
    }
  };
}
function createMicroDocument(appName, proxyDocument) {
  const { rawDocument, rawRootDocument } = globalEnv;
  class MicroDocument {
    static [Symbol.hasInstance](target) {
      let proto = target;
      while (proto) {
        proto = Object.getPrototypeOf(proto);
        if (proto === MicroDocument.prototype) {
          return true;
        }
      }
      return target === proxyDocument || target instanceof rawRootDocument;
    }
  }
  Object.setPrototypeOf(MicroDocument, rawRootDocument);
  Object.setPrototypeOf(MicroDocument.prototype, new Proxy(rawRootDocument.prototype, {
    get(target, key) {
      throttleDeferForSetAppName(appName);
      return bindFunctionToRawTarget(Reflect.get(target, key), rawDocument, "DOCUMENT");
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      return true;
    }
  }));
  return MicroDocument;
}
function patchWindow(appName, microAppWindow, sandbox) {
  patchWindowProperty(microAppWindow);
  createProxyWindow(appName, microAppWindow, sandbox);
  return patchWindowEffect(microAppWindow, appName);
}
function patchWindowProperty(microAppWindow) {
  const rawWindow = globalEnv.rawWindow;
  Object.getOwnPropertyNames(rawWindow).filter((key) => {
    return /^on/.test(key) && !SCOPE_WINDOW_ON_EVENT.includes(key);
  }).forEach((eventName) => {
    const { enumerable, writable, set } = Object.getOwnPropertyDescriptor(rawWindow, eventName) || {
      enumerable: true,
      writable: true
    };
    rawDefineProperty(microAppWindow, eventName, {
      enumerable,
      configurable: true,
      get: () => rawWindow[eventName],
      set: (writable !== null && writable !== void 0 ? writable : !!set) ? (value) => {
        rawWindow[eventName] = value;
      } : void 0
    });
  });
}
function createProxyWindow(appName, microAppWindow, sandbox) {
  const rawWindow = globalEnv.rawWindow;
  const descriptorTargetMap = /* @__PURE__ */ new Map();
  const proxyWindow = new Proxy(microAppWindow, {
    get: (target, key) => {
      throttleDeferForSetAppName(appName);
      if (Reflect.has(target, key) || isString(key) && /^__MICRO_APP_/.test(key) || includes(sandbox.scopeProperties, key)) {
        if (includes(RAW_GLOBAL_TARGET, key))
          removeDomScope();
        return Reflect.get(target, key);
      }
      return bindFunctionToRawTarget(Reflect.get(rawWindow, key), rawWindow);
    },
    set: (target, key, value) => {
      if (includes(sandbox.rawWindowScopeKeyList, key)) {
        Reflect.set(rawWindow, key, value);
      } else if (
        // target.hasOwnProperty has been rewritten
        !rawHasOwnProperty.call(target, key) && rawHasOwnProperty.call(rawWindow, key) && !includes(sandbox.scopeProperties, key)
      ) {
        const descriptor = Object.getOwnPropertyDescriptor(rawWindow, key);
        const { configurable, enumerable, writable, set } = descriptor;
        rawDefineProperty(target, key, {
          value,
          configurable,
          enumerable,
          writable: writable !== null && writable !== void 0 ? writable : !!set
        });
        sandbox.injectedKeys.add(key);
      } else {
        if (!Reflect.has(target, key) || includes(sandbox.scopeProperties, key)) {
          sandbox.injectedKeys.add(key);
        }
        Reflect.set(target, key, value);
      }
      if ((includes(sandbox.escapeProperties, key) || // TODO: staticEscapeProperties 合并到 escapeProperties
      includes(sandbox.staticEscapeProperties, key) && !Reflect.has(rawWindow, key)) && !includes(sandbox.scopeProperties, key)) {
        !Reflect.has(rawWindow, key) && sandbox.escapeKeys.add(key);
        Reflect.set(rawWindow, key, value);
      }
      return true;
    },
    has: (target, key) => {
      if (includes(sandbox.scopeProperties, key)) {
        if (sandbox.injectedKeys.has(key)) {
          return Reflect.has(target, key);
        }
        return !!target[key];
      }
      return Reflect.has(target, key) || Reflect.has(rawWindow, key);
    },
    // Object.getOwnPropertyDescriptor(window, key)
    getOwnPropertyDescriptor: (target, key) => {
      if (rawHasOwnProperty.call(target, key)) {
        descriptorTargetMap.set(key, "target");
        return Object.getOwnPropertyDescriptor(target, key);
      }
      if (rawHasOwnProperty.call(rawWindow, key)) {
        descriptorTargetMap.set(key, "rawWindow");
        const descriptor = Object.getOwnPropertyDescriptor(rawWindow, key);
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      }
      return void 0;
    },
    // Object.defineProperty(window, key, Descriptor)
    defineProperty: (target, key, value) => {
      const from = descriptorTargetMap.get(key);
      if (from === "rawWindow") {
        return Reflect.defineProperty(rawWindow, key, value);
      }
      return Reflect.defineProperty(target, key, value);
    },
    // Object.getOwnPropertyNames(window)
    ownKeys: (target) => {
      return unique(Reflect.ownKeys(rawWindow).concat(Reflect.ownKeys(target)));
    },
    deleteProperty: (target, key) => {
      if (rawHasOwnProperty.call(target, key)) {
        sandbox.injectedKeys.has(key) && sandbox.injectedKeys.delete(key);
        sandbox.escapeKeys.has(key) && Reflect.deleteProperty(rawWindow, key);
        return Reflect.deleteProperty(target, key);
      }
      return true;
    }
  });
  sandbox.proxyWindow = proxyWindow;
}
function patchWindowEffect(microAppWindow, appName) {
  const eventListenerMap = /* @__PURE__ */ new Map();
  const sstEventListenerMap = /* @__PURE__ */ new Map();
  const intervalIdMap = /* @__PURE__ */ new Map();
  const timeoutIdMap = /* @__PURE__ */ new Map();
  const { rawWindow, rawAddEventListener, rawRemoveEventListener, rawDispatchEvent, rawSetInterval, rawSetTimeout, rawClearInterval, rawClearTimeout } = globalEnv;
  function getEventTarget(type) {
    var _a;
    if (SCOPE_WINDOW_EVENT.includes(type) && ((_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.container)) {
      return getRootContainer(appInstanceMap.get(appName).container);
    }
    return rawWindow;
  }
  microAppWindow.addEventListener = function(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if (listenerList) {
      listenerList.add(listener);
    } else {
      eventListenerMap.set(type, /* @__PURE__ */ new Set([listener]));
    }
    listener && (listener.__MICRO_APP_MARK_OPTIONS__ = options);
    rawAddEventListener.call(getEventTarget(type), type, listener, options);
  };
  microAppWindow.removeEventListener = function(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if ((listenerList === null || listenerList === void 0 ? void 0 : listenerList.size) && listenerList.has(listener)) {
      listenerList.delete(listener);
    }
    rawRemoveEventListener.call(getEventTarget(type), type, listener, options);
  };
  microAppWindow.dispatchEvent = function(event) {
    return rawDispatchEvent.call(getEventTarget(event === null || event === void 0 ? void 0 : event.type), event);
  };
  microAppWindow.setInterval = function(handler, timeout, ...args) {
    const intervalId = rawSetInterval.call(rawWindow, handler, timeout, ...args);
    intervalIdMap.set(intervalId, { handler, timeout, args });
    return intervalId;
  };
  microAppWindow.setTimeout = function(handler, timeout, ...args) {
    const timeoutId = rawSetTimeout.call(rawWindow, handler, timeout, ...args);
    timeoutIdMap.set(timeoutId, { handler, timeout, args });
    return timeoutId;
  };
  microAppWindow.clearInterval = function(intervalId) {
    intervalIdMap.delete(intervalId);
    rawClearInterval.call(rawWindow, intervalId);
  };
  microAppWindow.clearTimeout = function(timeoutId) {
    timeoutIdMap.delete(timeoutId);
    rawClearTimeout.call(rawWindow, timeoutId);
  };
  const reset = () => {
    sstEventListenerMap.clear();
  };
  const record = () => {
    eventListenerMap.forEach((listenerList, type) => {
      if (listenerList.size) {
        const cacheList = sstEventListenerMap.get(type) || [];
        sstEventListenerMap.set(type, /* @__PURE__ */ new Set([...cacheList, ...listenerList]));
      }
    });
  };
  const rebuild = () => {
    sstEventListenerMap.forEach((listenerList, type) => {
      for (const listener of listenerList) {
        microAppWindow.addEventListener(type, listener, listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_MARK_OPTIONS__);
      }
    });
    reset();
  };
  const release = (clearTimer) => {
    if (eventListenerMap.size) {
      eventListenerMap.forEach((listenerList, type) => {
        for (const listener of listenerList) {
          rawRemoveEventListener.call(getEventTarget(type), type, listener);
        }
      });
      eventListenerMap.clear();
    }
    if (clearTimer) {
      intervalIdMap.forEach((_, intervalId) => {
        rawClearInterval.call(rawWindow, intervalId);
      });
      timeoutIdMap.forEach((_, timeoutId) => {
        rawClearTimeout.call(rawWindow, timeoutId);
      });
      intervalIdMap.clear();
      timeoutIdMap.clear();
    }
  };
  return {
    reset,
    record,
    rebuild,
    release
  };
}
function setMicroState(appName, microState) {
  if (isRouterModeSearch(appName)) {
    const rawState = globalEnv.rawWindow.history.state;
    const additionalState = {
      microAppState: assign({}, rawState === null || rawState === void 0 ? void 0 : rawState.microAppState, {
        [appName]: microState
      })
    };
    return assign({}, rawState, additionalState);
  }
  return microState;
}
function removeMicroState(appName, rawState) {
  if (isRouterModeSearch(appName)) {
    if (isPlainObject(rawState === null || rawState === void 0 ? void 0 : rawState.microAppState)) {
      if (!isUndefined(rawState.microAppState[appName])) {
        delete rawState.microAppState[appName];
      }
      if (!Object.keys(rawState.microAppState).length) {
        delete rawState.microAppState;
      }
    }
    return assign({}, rawState);
  }
  return rawState;
}
function getMicroState(appName) {
  var _a;
  const rawState = globalEnv.rawWindow.history.state;
  if (isRouterModeSearch(appName)) {
    return ((_a = rawState === null || rawState === void 0 ? void 0 : rawState.microAppState) === null || _a === void 0 ? void 0 : _a[appName]) || null;
  }
  return rawState;
}
const ENC_AD_RE = /&/g;
const ENC_EQ_RE = /=/g;
const DEC_AD_RE = /%M1/g;
const DEC_EQ_RE = /%M2/g;
function encodeMicroPath(path) {
  return encodeURIComponent(commonDecode(path).replace(ENC_AD_RE, "%M1").replace(ENC_EQ_RE, "%M2"));
}
function decodeMicroPath(path) {
  return commonDecode(path).replace(DEC_AD_RE, "&").replace(DEC_EQ_RE, "=");
}
function commonDecode(path) {
  try {
    const decPath = decodeURIComponent(path);
    if (path === decPath || DEC_AD_RE.test(decPath) || DEC_EQ_RE.test(decPath))
      return decPath;
    return commonDecode(decPath);
  } catch (_a) {
    return path;
  }
}
function formatQueryAppName(appName) {
  return appName;
}
function getMicroPathFromURL(appName) {
  var _a, _b;
  if (isRouterModePure(appName))
    return null;
  const rawLocation = globalEnv.rawWindow.location;
  if (isRouterModeSearch(appName)) {
    const queryObject = getQueryObjectFromURL(rawLocation.search, rawLocation.hash);
    const microPath = ((_a = queryObject.hashQuery) === null || _a === void 0 ? void 0 : _a[formatQueryAppName(appName)]) || ((_b = queryObject.searchQuery) === null || _b === void 0 ? void 0 : _b[formatQueryAppName(appName)]);
    return isString(microPath) ? decodeMicroPath(microPath) : null;
  }
  return rawLocation.pathname + rawLocation.search + rawLocation.hash;
}
function setMicroPathToURL(appName, targetLocation) {
  const targetFullPath = targetLocation.pathname + targetLocation.search + targetLocation.hash;
  let isAttach2Hash = false;
  if (isRouterModeSearch(appName)) {
    let { pathname, search, hash } = globalEnv.rawWindow.location;
    const queryObject = getQueryObjectFromURL(search, hash);
    const encodedMicroPath = encodeMicroPath(targetFullPath);
    if (hash && !search) {
      isAttach2Hash = true;
      if (queryObject.hashQuery) {
        queryObject.hashQuery[formatQueryAppName(appName)] = encodedMicroPath;
      } else {
        queryObject.hashQuery = {
          [formatQueryAppName(appName)]: encodedMicroPath
        };
      }
      const baseHash = hash.includes("?") ? hash.slice(0, hash.indexOf("?") + 1) : hash + "?";
      hash = baseHash + stringifyQuery(queryObject.hashQuery);
    } else {
      if (queryObject.searchQuery) {
        queryObject.searchQuery[formatQueryAppName(appName)] = encodedMicroPath;
      } else {
        queryObject.searchQuery = {
          [formatQueryAppName(appName)]: encodedMicroPath
        };
      }
      search = "?" + stringifyQuery(queryObject.searchQuery);
    }
    return {
      fullPath: pathname + search + hash,
      isAttach2Hash
    };
  }
  return {
    fullPath: targetFullPath,
    isAttach2Hash
  };
}
function removeMicroPathFromURL(appName, targetLocation) {
  var _a, _b, _c, _d;
  let { pathname, search, hash } = targetLocation || globalEnv.rawWindow.location;
  let isAttach2Hash = false;
  if (isRouterModeSearch(appName)) {
    const queryObject = getQueryObjectFromURL(search, hash);
    if ((_a = queryObject.hashQuery) === null || _a === void 0 ? void 0 : _a[formatQueryAppName(appName)]) {
      isAttach2Hash = true;
      (_b = queryObject.hashQuery) === null || _b === void 0 ? true : delete _b[formatQueryAppName(appName)];
      const hashQueryStr = stringifyQuery(queryObject.hashQuery);
      hash = hash.slice(0, hash.indexOf("?") + Number(Boolean(hashQueryStr))) + hashQueryStr;
    } else if ((_c = queryObject.searchQuery) === null || _c === void 0 ? void 0 : _c[formatQueryAppName(appName)]) {
      (_d = queryObject.searchQuery) === null || _d === void 0 ? true : delete _d[formatQueryAppName(appName)];
      const searchQueryStr = stringifyQuery(queryObject.searchQuery);
      search = searchQueryStr ? "?" + searchQueryStr : "";
    }
  }
  return {
    fullPath: pathname + search + hash,
    isAttach2Hash
  };
}
function getQueryObjectFromURL(search, hash) {
  const queryObject = {};
  if (search !== "" && search !== "?") {
    queryObject.searchQuery = parseQuery(search.slice(1));
  }
  if (hash.includes("?")) {
    queryObject.hashQuery = parseQuery(hash.slice(hash.indexOf("?") + 1));
  }
  return queryObject;
}
function getNoHashMicroPathFromURL(appName, baseUrl) {
  const microPath = getMicroPathFromURL(appName);
  if (!microPath)
    return "";
  const formatLocation = createURL(microPath, baseUrl);
  return formatLocation.origin + formatLocation.pathname + formatLocation.search;
}
function isEffectiveApp(appName) {
  const app = appInstanceMap.get(appName);
  return !!(app && !app.isPrefetch);
}
function isRouterModeSearch(appName) {
  const app = appInstanceMap.get(appName);
  return !!(app && app.sandBox && app.routerMode === DEFAULT_ROUTER_MODE);
}
function isRouterModeNative(appName) {
  const app = appInstanceMap.get(appName);
  return !!(app && app.sandBox && app.routerMode === ROUTER_MODE_NATIVE);
}
function isRouterModeNativeScope(appName) {
  const app = appInstanceMap.get(appName);
  return !!(app && app.sandBox && app.routerMode === ROUTER_MODE_NATIVE_SCOPE);
}
function isRouterModePure(appName) {
  const app = appInstanceMap.get(appName);
  return !!(app && app.sandBox && app.routerMode === ROUTER_MODE_PURE);
}
function isRouterModeCustom(appName) {
  return isRouterModeNative(appName) || isRouterModeNativeScope(appName);
}
function getRouterMode(mode, inlineDisableMemoryRouter) {
  const routerMode = inlineDisableMemoryRouter && ROUTER_MODE_NATIVE || mode || microApp.options["disable-memory-router"] && ROUTER_MODE_NATIVE || microApp.options["router-mode"] || DEFAULT_ROUTER_MODE;
  return ROUTER_MODE_LIST.includes(routerMode) ? routerMode : DEFAULT_ROUTER_MODE;
}
function addHistoryListener(appName) {
  const rawWindow = globalEnv.rawWindow;
  const popStateHandler = (e) => {
    if (getActiveApps({
      excludeHiddenApp: true,
      excludePreRender: true
    }).includes(appName) && !e.onlyForBrowser) {
      updateMicroLocationWithEvent(appName, getMicroPathFromURL(appName));
    }
  };
  rawWindow.addEventListener("popstate", popStateHandler);
  return () => {
    rawWindow.removeEventListener("popstate", popStateHandler);
  };
}
function updateMicroLocationWithEvent(appName, targetFullPath) {
  const app = appInstanceMap.get(appName);
  const proxyWindow = app.sandBox.proxyWindow;
  const microAppWindow = app.sandBox.microAppWindow;
  let isHashChange = false;
  const oldHref = proxyWindow.location.href;
  if (targetFullPath) {
    const oldHash = proxyWindow.location.hash;
    updateMicroLocation(appName, targetFullPath, microAppWindow.location);
    isHashChange = proxyWindow.location.hash !== oldHash;
  }
  dispatchPopStateEventToMicroApp(appName, proxyWindow, microAppWindow);
  if (isHashChange)
    dispatchHashChangeEventToMicroApp(appName, proxyWindow, microAppWindow, oldHref);
  removeDomScope();
}
function dispatchPopStateEventToMicroApp(appName, proxyWindow, microAppWindow) {
  const newPopStateEvent = new PopStateEvent("popstate", { state: getMicroState(appName) });
  microAppWindow.dispatchEvent(newPopStateEvent);
  if (!isIframeSandbox(appName)) {
    isFunction(proxyWindow.onpopstate) && proxyWindow.onpopstate(newPopStateEvent);
  }
}
function dispatchHashChangeEventToMicroApp(appName, proxyWindow, microAppWindow, oldHref) {
  const newHashChangeEvent = new HashChangeEvent("hashchange", {
    newURL: proxyWindow.location.href,
    oldURL: oldHref
  });
  microAppWindow.dispatchEvent(newHashChangeEvent);
  if (!isIframeSandbox(appName)) {
    isFunction(proxyWindow.onhashchange) && proxyWindow.onhashchange(newHashChangeEvent);
  }
}
function dispatchNativePopStateEvent(onlyForBrowser) {
  const event = new PopStateEvent("popstate", { state: null });
  if (onlyForBrowser)
    event.onlyForBrowser = true;
  globalEnv.rawWindow.dispatchEvent(event);
}
function dispatchNativeHashChangeEvent(oldHref) {
  const newHashChangeEvent = new HashChangeEvent("hashchange", {
    newURL: globalEnv.rawWindow.location.href,
    oldURL: oldHref
  });
  globalEnv.rawWindow.dispatchEvent(newHashChangeEvent);
}
function dispatchNativeEvent(appName, onlyForBrowser, oldHref) {
  removeDomScope();
  if (isEffectiveApp(appName)) {
    dispatchNativePopStateEvent(onlyForBrowser);
    if (oldHref) {
      dispatchNativeHashChangeEvent(oldHref);
    }
  }
}
function createMicroHistory(appName, microLocation) {
  const rawHistory = globalEnv.rawWindow.history;
  function getMicroHistoryMethod(methodName) {
    return function(...rests) {
      var _a, _b, _c;
      if (isString(rests[2]) || isURL(rests[2])) {
        const targetLocation = createURL(rests[2], microLocation.href);
        const targetFullPath = targetLocation.pathname + targetLocation.search + targetLocation.hash;
        if (!isRouterModePure(appName)) {
          navigateWithNativeEvent(appName, methodName, setMicroPathToURL(appName, targetLocation), true, setMicroState(appName, rests[0]), rests[1]);
        }
        if (targetFullPath !== microLocation.fullPath) {
          updateMicroLocation(appName, targetFullPath, microLocation);
        }
        (_c = (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : (_b = _a.sandBox).updateIframeBase) === null || _c === void 0 ? void 0 : _c.call(_b);
      } else {
        nativeHistoryNavigate(appName, methodName, rests[2], rests[0], rests[1]);
      }
    };
  }
  const pushState = getMicroHistoryMethod("pushState");
  const replaceState = getMicroHistoryMethod("replaceState");
  if (isIframeSandbox(appName))
    return { pushState, replaceState };
  return new Proxy(rawHistory, {
    get(target, key) {
      if (key === "state") {
        return getMicroState(appName);
      } else if (key === "pushState") {
        return pushState;
      } else if (key === "replaceState") {
        return replaceState;
      }
      return bindFunctionToRawTarget(Reflect.get(target, key), target, "HISTORY");
    },
    set(target, key, value) {
      Reflect.set(target, key, value);
      return true;
    }
  });
}
function nativeHistoryNavigate(appName, methodName, fullPath, state = null, title = "") {
  if (isEffectiveApp(appName)) {
    const method = methodName === "pushState" ? globalEnv.rawPushState : globalEnv.rawReplaceState;
    method.call(globalEnv.rawWindow.history, state, title, fullPath);
  }
}
function navigateWithNativeEvent(appName, methodName, result, onlyForBrowser, state, title) {
  if (isEffectiveApp(appName)) {
    const rawLocation = globalEnv.rawWindow.location;
    const oldFullPath = rawLocation.pathname + rawLocation.search + rawLocation.hash;
    const oldHref = result.isAttach2Hash && oldFullPath !== result.fullPath ? rawLocation.href : null;
    nativeHistoryNavigate(appName, methodName, result.fullPath, state, title);
    if (oldFullPath !== result.fullPath && isRouterModeSearch(appName)) {
      dispatchNativeEvent(appName, onlyForBrowser, oldHref);
    }
  }
}
function attachRouteToBrowserURL(appName, result, state) {
  navigateWithNativeEvent(appName, "replaceState", result, true, state);
}
function reWriteHistoryMethod(method) {
  const rawWindow = globalEnv.rawWindow;
  return function(...rests) {
    var _a;
    if (((_a = rawWindow.history.state) === null || _a === void 0 ? void 0 : _a.microAppState) && (!isPlainObject(rests[0]) || !rests[0].microAppState) && (isString(rests[2]) || isURL(rests[2]))) {
      const currentHref = rawWindow.location.href;
      const targetLocation = createURL(rests[2], currentHref);
      if (targetLocation.href === currentHref) {
        rests[0] = assign({}, rests[0], {
          microAppState: rawWindow.history.state.microAppState
        });
      }
    }
    method.apply(rawWindow.history, rests);
    getActiveApps({
      excludeHiddenApp: true,
      excludePreRender: true
    }).forEach((appName) => {
      if (isRouterModeSearch(appName) && !getMicroPathFromURL(appName)) {
        const app = appInstanceMap.get(appName);
        attachRouteToBrowserURL(appName, setMicroPathToURL(appName, app.sandBox.proxyWindow.location), setMicroState(appName, getMicroState(appName)));
      }
    });
    removeDomScope();
  };
}
function patchHistory() {
  const rawWindow = globalEnv.rawWindow;
  rawWindow.history.pushState = reWriteHistoryMethod(globalEnv.rawPushState);
  rawWindow.history.replaceState = reWriteHistoryMethod(globalEnv.rawReplaceState);
}
function releasePatchHistory() {
  const rawWindow = globalEnv.rawWindow;
  rawWindow.history.pushState = globalEnv.rawPushState;
  rawWindow.history.replaceState = globalEnv.rawReplaceState;
}
function createRouterApi() {
  function navigateWithRawHistory(appName, methodName, targetLocation, state) {
    navigateWithNativeEvent(appName, methodName, setMicroPathToURL(appName, targetLocation), false, setMicroState(appName, state !== null && state !== void 0 ? state : null));
    removeDomScope();
  }
  function handleNavigate(appName, app, to, replace) {
    const microLocation = app.sandBox.proxyWindow.location;
    const targetLocation = createURL(to.path, microLocation.href);
    const currentFullPath = microLocation.pathname + microLocation.search + microLocation.hash;
    const targetFullPath = targetLocation.pathname + targetLocation.search + targetLocation.hash;
    if (currentFullPath !== targetFullPath || getMicroPathFromURL(appName) !== targetFullPath) {
      if (!isRouterModePure(appName)) {
        const methodName = replace && to.replace !== false || to.replace === true ? "replaceState" : "pushState";
        navigateWithRawHistory(appName, methodName, targetLocation, to.state);
      }
      if (isRouterModeCustom(appName) || isRouterModePure(appName)) {
        updateMicroLocationWithEvent(appName, targetFullPath);
      }
    }
  }
  function createNavigationMethod(replace) {
    return function(to) {
      return new Promise((resolve, reject) => {
        const appName = formatAppName(to.name);
        if (appName && isString(to.path)) {
          if (getActiveApps({ excludeHiddenApp: true, excludePreRender: true }).includes(appName)) {
            const app = appInstanceMap.get(appName);
            resolve(app.sandBox.sandboxReady.then(() => handleNavigate(appName, app, to, replace)));
          } else {
            reject(logError("navigation failed, app does not exist or is inactive"));
          }
        } else {
          reject(logError(`navigation failed, name & path are required when use router.${replace ? "replace" : "push"}`));
        }
      });
    };
  }
  function createRawHistoryMethod(methodName) {
    return function(...rests) {
      return globalEnv.rawWindow.history[methodName](...rests);
    };
  }
  const beforeGuards = useSetRecord();
  const afterGuards = useSetRecord();
  function runGuards(appName, to, from, guards) {
    removeDomScope();
    for (const guard of guards) {
      if (isFunction(guard)) {
        guard(to, from, appName);
      } else if (isPlainObject(guard) && isFunction(guard[appName])) {
        guard[appName](to, from);
      }
    }
  }
  function executeNavigationGuard2(appName, to, from) {
    router2.current.set(appName, to);
    runGuards(appName, to, from, beforeGuards.list());
    requestIdleCallback(() => {
      runGuards(appName, to, from, afterGuards.list());
    });
  }
  function clearRouterWhenUnmount2(appName) {
    router2.current.delete(appName);
  }
  function commonHandlerForAttachToURL(appName) {
    if (isRouterModeSearch(appName)) {
      const app = appInstanceMap.get(appName);
      attachRouteToBrowserURL(appName, setMicroPathToURL(appName, app.sandBox.proxyWindow.location), setMicroState(appName, getMicroState(appName)));
    }
  }
  function attachToURL(appName) {
    appName = formatAppName(appName);
    if (appName && getActiveApps().includes(appName)) {
      commonHandlerForAttachToURL(appName);
    }
  }
  function attachAllToURL({ includeHiddenApp = false, includePreRender = false }) {
    getActiveApps({
      excludeHiddenApp: !includeHiddenApp,
      excludePreRender: !includePreRender
    }).forEach((appName) => commonHandlerForAttachToURL(appName));
  }
  function createDefaultPageApi() {
    const defaultPageRecord = useMapRecord();
    function setDefaultPage(options) {
      const appName = formatAppName(options.name);
      if (!appName || !options.path) {
        return noopFalse;
      }
      return defaultPageRecord.add(appName, options.path);
    }
    function removeDefaultPage(appName) {
      appName = formatAppName(appName);
      if (!appName)
        return false;
      return defaultPageRecord.delete(appName);
    }
    return {
      setDefaultPage,
      removeDefaultPage,
      getDefaultPage: defaultPageRecord.get
    };
  }
  function createBaseRouterApi() {
    let baseRouterProxy = null;
    function setBaseAppRouter(baseRouter) {
      if (isObject(baseRouter)) {
        baseRouterProxy = new Proxy(baseRouter, {
          get(target, key) {
            removeDomScope();
            return bindFunctionToRawTarget(Reflect.get(target, key), target, "BASEROUTER");
          },
          set(target, key, value) {
            Reflect.set(target, key, value);
            return true;
          }
        });
      }
    }
    return {
      setBaseAppRouter,
      getBaseAppRouter: () => baseRouterProxy
    };
  }
  const router2 = Object.assign(Object.assign({
    current: /* @__PURE__ */ new Map(),
    encode: encodeMicroPath,
    decode: decodeMicroPath,
    push: createNavigationMethod(false),
    replace: createNavigationMethod(true),
    go: createRawHistoryMethod("go"),
    back: createRawHistoryMethod("back"),
    forward: createRawHistoryMethod("forward"),
    beforeEach: beforeGuards.add,
    afterEach: afterGuards.add,
    attachToURL,
    attachAllToURL
  }, createDefaultPageApi()), createBaseRouterApi());
  return {
    router: router2,
    executeNavigationGuard: executeNavigationGuard2,
    clearRouterWhenUnmount: clearRouterWhenUnmount2
  };
}
const { router, executeNavigationGuard, clearRouterWhenUnmount } = createRouterApi();
const escape2RawWindowKeys = [
  "getComputedStyle",
  "visualViewport",
  "matchMedia",
  // 'DOMParser',
  "ResizeObserver",
  "IntersectionObserver"
];
const escape2RawWindowRegExpKeys = [
  /animationFrame$/i,
  /mutationObserver$/i,
  /height$|width$/i,
  /offset$/i,
  // /event$/i,
  /selection$/i,
  /^range/i,
  /^screen/i,
  /^scroll/i,
  /X$|Y$/
];
const uniqueDocumentElement = [
  "body",
  "head",
  "html",
  "title"
];
const hijackMicroLocationKeys = [
  "host",
  "hostname",
  "port",
  "protocol",
  "origin"
];
const proxy2RawDocOrShadowKeys = [
  "childElementCount",
  "children",
  "firstElementChild",
  "firstChild",
  "lastElementChild",
  "activeElement",
  "fullscreenElement",
  "pictureInPictureElement",
  "pointerLockElement",
  "styleSheets"
];
const proxy2RawDocOrShadowMethods = [
  "append",
  "contains",
  "replaceChildren",
  "createRange",
  "getSelection",
  "elementFromPoint",
  "elementsFromPoint",
  "getAnimations"
];
const proxy2RawDocumentKeys = [
  "characterSet",
  "compatMode",
  "contentType",
  "designMode",
  "dir",
  "doctype",
  "embeds",
  "fullscreenEnabled",
  "hidden",
  "implementation",
  "lastModified",
  "pictureInPictureEnabled",
  "plugins",
  "readyState",
  "referrer",
  "visibilityState",
  "fonts"
];
const proxy2RawDocumentMethods = [
  "execCommand",
  "createRange",
  "exitFullscreen",
  "exitPictureInPicture",
  "getElementsByTagNameNS",
  "hasFocus",
  "prepend"
];
const locationKeys = ["href", "pathname", "search", "hash", "host", "hostname", "port", "protocol", "search"];
const guardLocationKeys = [...locationKeys, "origin", "fullPath"];
function createMicroLocation(appName, url, microAppWindow, childStaticLocation, browserHost, childHost) {
  const rawWindow = globalEnv.rawWindow;
  const rawLocation = rawWindow.location;
  const isIframe = !!microAppWindow;
  const withLocation = createURL(url);
  function getTarget() {
    return isIframe ? microAppWindow.location : withLocation;
  }
  function commonHandler(value, methodName) {
    const targetLocation = createURL(value, proxyLocation.href);
    if (targetLocation.origin === proxyLocation.origin) {
      const setMicroPathResult = setMicroPathToURL(appName, targetLocation);
      if (isRouterModeSearch(appName)) {
        if (targetLocation.pathname === proxyLocation.pathname && targetLocation.search === proxyLocation.search) {
          let oldHref = null;
          if (targetLocation.hash !== proxyLocation.hash) {
            if (setMicroPathResult.isAttach2Hash)
              oldHref = rawLocation.href;
            nativeHistoryNavigate(appName, methodName, setMicroPathResult.fullPath);
          }
          if (targetLocation.hash) {
            dispatchNativeEvent(appName, false, oldHref);
          } else {
            reload2();
          }
          return void 0;
        } else if (setMicroPathResult.isAttach2Hash) {
          nativeHistoryNavigate(appName, methodName, setMicroPathResult.fullPath);
          reload2();
          return void 0;
        }
      }
      return setMicroPathResult.fullPath;
    }
    return value;
  }
  function handleForPathNameAndSearch(targetPath, key) {
    const targetLocation = createURL(targetPath, url);
    if (targetLocation[key] === proxyLocation[key] && proxyLocation.hash) {
      dispatchNativeEvent(appName, false);
    } else {
      nativeHistoryNavigate(appName, targetLocation[key] === proxyLocation[key] ? "replaceState" : "pushState", setMicroPathToURL(appName, targetLocation).fullPath);
      reload2();
    }
  }
  const createLocationMethod = (locationMethodName) => {
    return function(value) {
      if (isEffectiveApp(appName)) {
        const targetPath = commonHandler(value, locationMethodName === "assign" ? "pushState" : "replaceState");
        if (targetPath) {
          rawLocation[locationMethodName](createURL(targetPath, rawLocation.origin).href);
        }
      }
    };
  };
  const assign2 = createLocationMethod("assign");
  const replace = createLocationMethod("replace");
  const reload2 = (forcedReload) => rawLocation.reload(forcedReload);
  rawDefineProperty(getTarget(), "fullPath", {
    enumerable: true,
    configurable: true,
    get: () => proxyLocation.pathname + proxyLocation.search + proxyLocation.hash
  });
  const proxyLocation = new Proxy({}, {
    get: (_, key) => {
      const target = getTarget();
      if (key === "assign")
        return assign2;
      if (key === "replace")
        return replace;
      if (key === "reload")
        return reload2;
      if (key === "self")
        return target;
      if (key === "fullPath")
        return target.fullPath;
      if (isRouterModeNative(appName)) {
        return bindFunctionToRawTarget(Reflect.get(rawLocation, key), rawLocation, "LOCATION");
      }
      if (isIframe) {
        if (hijackMicroLocationKeys.includes(key)) {
          return childStaticLocation[key];
        }
        if (key === "href") {
          return target[key].replace(browserHost, childHost);
        }
      }
      return bindFunctionToRawTarget(Reflect.get(target, key), target, "LOCATION");
    },
    set: (_, key, value) => {
      if (isEffectiveApp(appName)) {
        const target = getTarget();
        if (key === "href") {
          const targetPath = commonHandler(value, "pushState");
          if (targetPath) {
            rawLocation.href = createURL(targetPath, rawLocation.origin).href;
          }
        } else if (key === "pathname") {
          if (isRouterModeCustom(appName)) {
            rawLocation.pathname = value;
          } else {
            const targetPath = ("/" + value).replace(/^\/+/, "/") + proxyLocation.search + proxyLocation.hash;
            handleForPathNameAndSearch(targetPath, "pathname");
          }
        } else if (key === "search") {
          if (isRouterModeCustom(appName)) {
            rawLocation.search = value;
          } else {
            const targetPath = proxyLocation.pathname + ("?" + value).replace(/^\?+/, "?") + proxyLocation.hash;
            handleForPathNameAndSearch(targetPath, "search");
          }
        } else if (key === "hash") {
          if (isRouterModeCustom(appName)) {
            rawLocation.hash = value;
          } else {
            const targetPath = proxyLocation.pathname + proxyLocation.search + ("#" + value).replace(/^#+/, "#");
            const targetLocation = createURL(targetPath, url);
            if (targetLocation.hash !== proxyLocation.hash) {
              navigateWithNativeEvent(appName, "pushState", setMicroPathToURL(appName, targetLocation), false);
            }
          }
        } else {
          Reflect.set(target, key, value);
        }
      }
      return true;
    }
  });
  return proxyLocation;
}
function createGuardLocation(appName, microLocation) {
  const guardLocation = assign({ name: appName }, microLocation);
  for (const key of guardLocationKeys)
    guardLocation[key] = microLocation[key];
  return guardLocation;
}
function autoTriggerNavigationGuard(appName, microLocation) {
  executeNavigationGuard(appName, createGuardLocation(appName, microLocation), createGuardLocation(appName, microLocation));
}
function updateMicroLocation(appName, path, microLocation, type) {
  var _a;
  const from = createGuardLocation(appName, microLocation);
  const newLocation = createURL(path, microLocation.href);
  if (isIframeSandbox(appName)) {
    const microAppWindow = appInstanceMap.get(appName).sandBox.microAppWindow;
    (_a = microAppWindow.rawReplaceState) === null || _a === void 0 ? void 0 : _a.call(microAppWindow.history, getMicroState(appName), "", newLocation.href);
  } else {
    let targetHref = newLocation.href;
    if (microLocation.self.origin !== newLocation.origin) {
      targetHref = targetHref.replace(newLocation.origin, microLocation.self.origin);
    }
    microLocation.self.href = targetHref;
  }
  const to = createGuardLocation(appName, microLocation);
  if (type === "auto" || from.fullPath !== to.fullPath && type !== "prevent") {
    executeNavigationGuard(appName, to, from);
  }
}
function createMicroRouter(appName, url) {
  const microLocation = createMicroLocation(appName, url);
  return {
    microLocation,
    microHistory: createMicroHistory(appName, microLocation)
  };
}
function initRouteStateWithURL(appName, microLocation, defaultPage) {
  const microPath = getMicroPathFromURL(appName);
  if (microPath) {
    updateMicroLocation(appName, microPath, microLocation, "auto");
  } else {
    updateBrowserURLWithLocation(appName, microLocation, defaultPage);
  }
}
function updateBrowserURLWithLocation(appName, microLocation, defaultPage) {
  if (defaultPage)
    updateMicroLocation(appName, defaultPage, microLocation, "prevent");
  if (!isRouterModePure(appName)) {
    attachRouteToBrowserURL(appName, setMicroPathToURL(appName, microLocation), setMicroState(appName, null));
  }
  autoTriggerNavigationGuard(appName, microLocation);
}
function clearRouteStateFromURL(appName, url, microLocation, keepRouteState) {
  if (!isRouterModeCustom(appName)) {
    if (!keepRouteState) {
      const { pathname, search, hash } = createURL(url);
      updateMicroLocation(appName, pathname + search + hash, microLocation, "prevent");
    }
    if (!isRouterModePure(appName)) {
      removePathFromBrowser(appName);
    }
  }
  clearRouterWhenUnmount(appName);
}
function removePathFromBrowser(appName) {
  attachRouteToBrowserURL(appName, removeMicroPathFromURL(appName), removeMicroState(appName, globalEnv.rawWindow.history.state));
}
class BaseSandbox {
  constructor() {
    this.rawWindowScopeKeyList = [
      "location"
    ];
    this.staticEscapeProperties = [
      "System",
      "__cjsWrapper"
    ];
    this.staticScopeProperties = [
      "webpackJsonp",
      "webpackHotUpdate",
      "Vue",
      // TODO: 是否可以和constants/SCOPE_WINDOW_ON_EVENT合并
      "onpopstate",
      "onhashchange"
    ];
    this.scopeProperties = Array.from(this.staticScopeProperties);
    this.escapeProperties = [];
    this.injectedKeys = /* @__PURE__ */ new Set();
    this.escapeKeys = /* @__PURE__ */ new Set();
    this.injectReactHMRProperty();
  }
  // adapter for react
  injectReactHMRProperty() {
  }
}
class CustomWindow {
}
function fixBabelPolyfill6() {
  if (globalEnv.rawWindow._babelPolyfill)
    globalEnv.rawWindow._babelPolyfill = false;
}
function patchElementTree(container, appName) {
  const children = Array.from(container.children);
  children.length && children.forEach((child) => {
    patchElementTree(child, appName);
  });
  for (const child of children) {
    updateElementInfo(child, appName);
  }
}
function updateElementInfo(node, appName) {
  var _a, _b;
  const proxyWindow = (_b = (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.sandBox) === null || _b === void 0 ? void 0 : _b.proxyWindow;
  if (isNode(node) && !node.__MICRO_APP_NAME__ && !node.__PURE_ELEMENT__ && proxyWindow) {
    rawDefineProperties(node, {
      baseURI: {
        configurable: true,
        // if disable-memory-router or router-mode='disable', href point to base app
        get: () => proxyWindow.location.href
      },
      __MICRO_APP_NAME__: {
        configurable: true,
        writable: true,
        value: appName
      }
    });
  }
  return node;
}
function createMicroFetch(url, target) {
  const rawFetch = !isUndefined(target) ? target : globalEnv.rawWindow.fetch;
  if (!isFunction(rawFetch))
    return rawFetch;
  return function microFetch(input, init, ...rests) {
    if (isString(input) || isURL(input)) {
      input = createURL(input, url).toString();
    }
    removeDomScope();
    return rawFetch.call(globalEnv.rawWindow, input, init, ...rests);
  };
}
function createMicroXMLHttpRequest(url, target) {
  const rawXMLHttpRequest = !isUndefined(target) ? target : globalEnv.rawWindow.XMLHttpRequest;
  if (!isConstructor(rawXMLHttpRequest))
    return rawXMLHttpRequest;
  return class MicroXMLHttpRequest extends rawXMLHttpRequest {
    open(method, reqUrl, ...rests) {
      if (isString(reqUrl) && !/^f(ile|tp):\/\//.test(reqUrl) || isURL(reqUrl)) {
        reqUrl = createURL(reqUrl, url).toString();
      }
      removeDomScope();
      super.open(method, reqUrl, ...rests);
    }
  };
}
function useMicroEventSource() {
  let eventSourceMap;
  function createMicroEventSource2(appName, url, target) {
    const rawEventSource = !isUndefined(target) ? target : globalEnv.rawWindow.EventSource;
    if (!isConstructor(rawEventSource))
      return rawEventSource;
    return class MicroEventSource extends rawEventSource {
      constructor(eventSourceUrl, eventSourceInitDict, ...rests) {
        if (isString(eventSourceUrl) || isURL(eventSourceUrl)) {
          eventSourceUrl = createURL(eventSourceUrl, url).toString();
        }
        removeDomScope();
        super(eventSourceUrl, eventSourceInitDict, ...rests);
        if (eventSourceMap) {
          const eventSourceList = eventSourceMap.get(appName);
          if (eventSourceList) {
            eventSourceList.add(this);
          } else {
            eventSourceMap.set(appName, /* @__PURE__ */ new Set([this]));
          }
        } else {
          eventSourceMap = /* @__PURE__ */ new Map([[appName, /* @__PURE__ */ new Set([this])]]);
        }
      }
      close() {
        var _a;
        super.close();
        (_a = eventSourceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.delete(this);
      }
    };
  }
  function clearMicroEventSource2(appName) {
    const eventSourceList = eventSourceMap === null || eventSourceMap === void 0 ? void 0 : eventSourceMap.get(appName);
    if (eventSourceList === null || eventSourceList === void 0 ? void 0 : eventSourceList.size) {
      eventSourceList.forEach((item) => {
        item.close();
      });
      eventSourceList.clear();
    }
  }
  return {
    createMicroEventSource: createMicroEventSource2,
    clearMicroEventSource: clearMicroEventSource2
  };
}
const { createMicroEventSource, clearMicroEventSource } = useMicroEventSource();
class WithSandBox extends BaseSandbox {
  constructor(appName, url) {
    super();
    this.active = false;
    this.microAppWindow = new CustomWindow();
    this.patchWith((resolve) => {
      this.getSpecialProperties(appName);
      this.patchRouter(appName, url, this.microAppWindow);
      this.windowEffect = patchWindow(appName, this.microAppWindow, this);
      this.documentEffect = patchDocument(appName, this.microAppWindow, this);
      this.setMappingPropertiesWithRawDescriptor(this.microAppWindow);
      this.initStaticGlobalKeys(appName, url, this.microAppWindow);
      resolve();
    });
  }
  /**
   * open sandbox and perform some initial actions
   * @param umdMode is umd mode
   * @param baseroute base route for child
   * @param defaultPage default page when mount child base on virtual router
   * @param disablePatchRequest prevent patchRequestApi
   */
  start({ umdMode, baseroute, defaultPage, disablePatchRequest }) {
    if (this.active)
      return;
    this.active = true;
    this.initRouteState(defaultPage);
    this.removeHistoryListener = addHistoryListener(this.microAppWindow.__MICRO_APP_NAME__);
    if (isRouterModeCustom(this.microAppWindow.__MICRO_APP_NAME__)) {
      this.microAppWindow.__MICRO_APP_BASE_ROUTE__ = this.microAppWindow.__MICRO_APP_BASE_URL__ = baseroute;
    }
    if (!umdMode) {
      this.initGlobalKeysWhenStart(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.__MICRO_APP_URL__, this.microAppWindow, disablePatchRequest);
    }
    if (++globalEnv.activeSandbox === 1) {
      patchElementAndDocument();
      patchHistory();
    }
    if (++WithSandBox.activeCount === 1) {
      initEnvOfNestedApp();
    }
    fixBabelPolyfill6();
  }
  /**
   * close sandbox and perform some clean up actions
   * @param umdMode is umd mode
   * @param keepRouteState prevent reset route
   * @param destroy completely destroy, delete cache resources
   * @param clearData clear data from base app
   */
  stop({ umdMode, keepRouteState, destroy, clearData }) {
    var _a;
    if (!this.active)
      return;
    this.recordAndReleaseEffect({ umdMode, clearData, destroy }, !umdMode || destroy);
    this.clearRouteState(keepRouteState);
    (_a = this.removeHistoryListener) === null || _a === void 0 ? void 0 : _a.call(this);
    if (!umdMode || destroy) {
      clearMicroEventSource(this.microAppWindow.__MICRO_APP_NAME__);
      this.injectedKeys.forEach((key) => {
        Reflect.deleteProperty(this.microAppWindow, key);
      });
      this.injectedKeys.clear();
      this.escapeKeys.forEach((key) => {
        Reflect.deleteProperty(globalEnv.rawWindow, key);
      });
      this.escapeKeys.clear();
    }
    if (--globalEnv.activeSandbox === 0) {
      releasePatchElementAndDocument();
      releasePatchHistory();
    }
    if (--WithSandBox.activeCount === 0)
      ;
    this.active = false;
  }
  /**
   * inject global properties to microAppWindow
   * TODO: 设置为只读变量
   * @param appName app name
   * @param url app url
   * @param microAppWindow micro window
   */
  initStaticGlobalKeys(appName, url, microAppWindow) {
    microAppWindow.__MICRO_APP_ENVIRONMENT__ = true;
    microAppWindow.__MICRO_APP_NAME__ = appName;
    microAppWindow.__MICRO_APP_URL__ = url;
    microAppWindow.__MICRO_APP_PUBLIC_PATH__ = getEffectivePath(url);
    microAppWindow.__MICRO_APP_BASE_ROUTE__ = "";
    microAppWindow.__MICRO_APP_WINDOW__ = microAppWindow;
    microAppWindow.__MICRO_APP_PRE_RENDER__ = false;
    microAppWindow.__MICRO_APP_UMD_MODE__ = false;
    microAppWindow.__MICRO_APP_PROXY_WINDOW__ = this.proxyWindow;
    microAppWindow.__MICRO_APP_SANDBOX__ = this;
    microAppWindow.__MICRO_APP_SANDBOX_TYPE__ = "with";
    microAppWindow.rawWindow = globalEnv.rawWindow;
    microAppWindow.rawDocument = globalEnv.rawDocument;
    microAppWindow.microApp = assign(new EventCenterForMicroApp(appName), {
      removeDomScope,
      pureCreateElement,
      router
    });
  }
  /**
   * Record global effect and then release (effect: global event, timeout, data listener)
   * Scenes:
   * 1. unmount of default/umd app
   * 2. hidden keep-alive app
   * 3. after init prerender app
   * @param options {
   *  @param clearData clear data from base app
   *  @param isPrerender is prerender app
   *  @param keepAlive is keep-alive app
   * }
   * @param preventRecord prevent record effect events
   */
  recordAndReleaseEffect(options, preventRecord = false) {
    if (preventRecord) {
      this.resetEffectSnapshot();
    } else {
      this.recordEffectSnapshot();
    }
    this.releaseGlobalEffect(options);
  }
  /**
   * reset effect snapshot data in default mode or destroy
   * Scenes:
   *  1. unmount hidden keep-alive app manually
   *  2. unmount prerender app manually
   */
  resetEffectSnapshot() {
    this.windowEffect.reset();
    this.documentEffect.reset();
    resetDataCenterSnapshot(this.microAppWindow.microApp);
  }
  /**
   * record umd snapshot before the first execution of umdHookMount
   * Scenes:
   * 1. exec umdMountHook in umd mode
   * 2. hidden keep-alive app
   * 3. after init prerender app
   */
  recordEffectSnapshot() {
    this.windowEffect.record();
    this.documentEffect.record();
    recordDataCenterSnapshot(this.microAppWindow.microApp);
  }
  // rebuild umd snapshot before remount umd app
  rebuildEffectSnapshot() {
    this.windowEffect.rebuild();
    this.documentEffect.rebuild();
    rebuildDataCenterSnapshot(this.microAppWindow.microApp);
  }
  /**
   * clear global event, timeout, data listener
   * Scenes:
   * 1. unmount of default/umd app
   * 2. hidden keep-alive app
   * 3. after init prerender app
   * @param umdMode is umd mode
   * @param clearData clear data from base app
   * @param isPrerender is prerender app
   * @param keepAlive is keep-alive app
   * @param destroy completely destroy
   */
  releaseGlobalEffect({ umdMode = false, clearData = false, isPrerender = false, keepAlive = false, destroy = false }) {
    var _a, _b, _c;
    this.windowEffect.release(!umdMode && !keepAlive && !isPrerender || destroy);
    this.documentEffect.release();
    (_a = this.microAppWindow.microApp) === null || _a === void 0 ? void 0 : _a.clearDataListener();
    (_b = this.microAppWindow.microApp) === null || _b === void 0 ? void 0 : _b.clearGlobalDataListener();
    if (clearData) {
      microApp.clearData(this.microAppWindow.__MICRO_APP_NAME__);
      (_c = this.microAppWindow.microApp) === null || _c === void 0 ? void 0 : _c.clearData();
    }
  }
  /**
   * get scopeProperties and escapeProperties from plugins & adapter
   * @param appName app name
   */
  getSpecialProperties(appName) {
    var _a;
    if (isPlainObject(microApp.options.plugins)) {
      this.commonActionForSpecialProperties(microApp.options.plugins.global);
      this.commonActionForSpecialProperties((_a = microApp.options.plugins.modules) === null || _a === void 0 ? void 0 : _a[appName]);
    }
  }
  // common action for global plugins and module plugins
  commonActionForSpecialProperties(plugins) {
    if (isArray(plugins)) {
      for (const plugin of plugins) {
        if (isPlainObject(plugin)) {
          if (isArray(plugin.scopeProperties)) {
            this.scopeProperties = this.scopeProperties.concat(plugin.scopeProperties);
          }
          if (isArray(plugin.escapeProperties)) {
            this.escapeProperties = this.escapeProperties.concat(plugin.escapeProperties);
          }
        }
      }
    }
  }
  // set __MICRO_APP_PRE_RENDER__ state
  setPreRenderState(state) {
    this.microAppWindow.__MICRO_APP_PRE_RENDER__ = state;
  }
  markUmdMode(state) {
    this.microAppWindow.__MICRO_APP_UMD_MODE__ = state;
  }
  patchWith(cb) {
    this.sandboxReady = new Promise((resolve) => cb(resolve));
  }
  // properties associated with the native window
  setMappingPropertiesWithRawDescriptor(microAppWindow) {
    let topValue, parentValue;
    const rawWindow = globalEnv.rawWindow;
    if (rawWindow === rawWindow.parent) {
      topValue = parentValue = this.proxyWindow;
    } else {
      topValue = rawWindow.top;
      parentValue = rawWindow.parent;
    }
    rawDefineProperties(microAppWindow, {
      top: this.createDescriptorForMicroAppWindow("top", topValue),
      parent: this.createDescriptorForMicroAppWindow("parent", parentValue)
    });
    GLOBAL_KEY_TO_WINDOW.forEach((key) => {
      rawDefineProperty(microAppWindow, key, this.createDescriptorForMicroAppWindow(key, this.proxyWindow));
    });
  }
  createDescriptorForMicroAppWindow(key, value) {
    const { configurable = true, enumerable = true, writable, set } = Object.getOwnPropertyDescriptor(globalEnv.rawWindow, key) || { writable: true };
    const descriptor = {
      value,
      configurable,
      enumerable,
      writable: writable !== null && writable !== void 0 ? writable : !!set
    };
    return descriptor;
  }
  /**
   * init global properties of microAppWindow when exec sandBox.start
   * @param microAppWindow micro window
   * @param appName app name
   * @param url app url
   * @param disablePatchRequest prevent rewrite request method of child app
   */
  initGlobalKeysWhenStart(appName, url, microAppWindow, disablePatchRequest) {
    microAppWindow.hasOwnProperty = (key) => rawHasOwnProperty.call(microAppWindow, key) || rawHasOwnProperty.call(globalEnv.rawWindow, key);
    this.setHijackProperty(appName, microAppWindow);
    if (!disablePatchRequest)
      this.patchRequestApi(appName, url, microAppWindow);
    this.setScopeProperties(microAppWindow);
  }
  // set hijack Properties to microAppWindow
  setHijackProperty(appName, microAppWindow) {
    let modifiedEval, modifiedImage;
    rawDefineProperties(microAppWindow, {
      eval: {
        configurable: true,
        enumerable: false,
        get() {
          throttleDeferForSetAppName(appName);
          return modifiedEval || globalEnv.rawWindow.eval;
        },
        set: (value) => {
          modifiedEval = value;
        }
      },
      Image: {
        configurable: true,
        enumerable: false,
        get() {
          throttleDeferForSetAppName(appName);
          return modifiedImage || globalEnv.ImageProxy;
        },
        set: (value) => {
          modifiedImage = value;
        }
      }
    });
  }
  // rewrite fetch, XMLHttpRequest, EventSource
  patchRequestApi(appName, url, microAppWindow) {
    let microFetch = createMicroFetch(url);
    let microXMLHttpRequest = createMicroXMLHttpRequest(url);
    let microEventSource = createMicroEventSource(appName, url);
    rawDefineProperties(microAppWindow, {
      fetch: {
        configurable: true,
        enumerable: true,
        get() {
          return microFetch;
        },
        set(value) {
          microFetch = createMicroFetch(url, value);
        }
      },
      XMLHttpRequest: {
        configurable: true,
        enumerable: true,
        get() {
          return microXMLHttpRequest;
        },
        set(value) {
          microXMLHttpRequest = createMicroXMLHttpRequest(url, value);
        }
      },
      EventSource: {
        configurable: true,
        enumerable: true,
        get() {
          return microEventSource;
        },
        set(value) {
          microEventSource = createMicroEventSource(appName, url, value);
        }
      }
    });
  }
  /**
   * Init scope keys to microAppWindow, prevent fall to rawWindow from with(microAppWindow)
   * like: if (!xxx) {}
   * NOTE:
   * 1. Symbol.unscopables cannot affect undefined keys
   * 2. Doesn't use for window.xxx because it fall to proxyWindow
   */
  setScopeProperties(microAppWindow) {
    this.scopeProperties.forEach((key) => {
      Reflect.set(microAppWindow, key, microAppWindow[key]);
    });
  }
  // set location & history for memory router
  patchRouter(appName, url, microAppWindow) {
    const { microLocation, microHistory } = createMicroRouter(appName, url);
    rawDefineProperties(microAppWindow, {
      location: {
        configurable: false,
        enumerable: true,
        get() {
          return microLocation;
        },
        set: (value) => {
          globalEnv.rawWindow.location = value;
        }
      },
      history: {
        configurable: true,
        enumerable: true,
        get() {
          return microHistory;
        }
      }
    });
  }
  initRouteState(defaultPage) {
    initRouteStateWithURL(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.location, defaultPage);
  }
  clearRouteState(keepRouteState) {
    clearRouteStateFromURL(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.__MICRO_APP_URL__, this.microAppWindow.location, keepRouteState);
  }
  setRouteInfoForKeepAliveApp() {
    updateBrowserURLWithLocation(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.location);
  }
  removeRouteInfoForKeepAliveApp() {
    removePathFromBrowser(this.microAppWindow.__MICRO_APP_NAME__);
  }
  /**
   * Format all html elements when init
   * @param container micro app container
   */
  patchStaticElement(container) {
    patchElementTree(container, this.microAppWindow.__MICRO_APP_NAME__);
  }
  /**
   * action before exec scripts when mount
   * Actions:
   * 1. patch static elements from html
   * @param container micro app container
   */
  actionBeforeExecScripts(container) {
    this.patchStaticElement(container);
  }
  setStaticAppState(state) {
    this.microAppWindow.__MICRO_APP_STATE__ = state;
  }
}
WithSandBox.activeCount = 0;
function patchRouter(appName, url, microAppWindow, browserHost) {
  const childStaticLocation = createURL(url);
  const childHost = childStaticLocation.protocol + "//" + childStaticLocation.host;
  const childFullPath = childStaticLocation.pathname + childStaticLocation.search + childStaticLocation.hash;
  const microHistory = microAppWindow.history;
  microAppWindow.rawReplaceState = microHistory.replaceState;
  assign(microHistory, createMicroHistory(appName, microAppWindow.location));
  updateMicroLocation(appName, childFullPath, microAppWindow.location, "prevent");
  return createMicroLocation(appName, url, microAppWindow, childStaticLocation, browserHost, childHost);
}
function patchWindow$1(appName, microAppWindow, sandbox) {
  patchWindowProperty$1(appName, microAppWindow);
  createProxyWindow$1(microAppWindow, sandbox);
  return patchWindowEffect$1(microAppWindow);
}
function patchWindowProperty$1(appName, microAppWindow) {
  const rawWindow = globalEnv.rawWindow;
  escape2RawWindowKeys.forEach((key) => {
    microAppWindow[key] = bindFunctionToRawTarget(rawWindow[key], rawWindow);
  });
  Object.getOwnPropertyNames(microAppWindow).filter((key) => {
    escape2RawWindowRegExpKeys.some((reg) => {
      if (reg.test(key) && key in microAppWindow.parent) {
        if (isFunction(rawWindow[key])) {
          microAppWindow[key] = bindFunctionToRawTarget(rawWindow[key], rawWindow);
        } else {
          const { configurable, enumerable } = Object.getOwnPropertyDescriptor(microAppWindow, key) || {
            configurable: true,
            enumerable: true
          };
          if (configurable) {
            rawDefineProperty(microAppWindow, key, {
              configurable,
              enumerable,
              get: () => rawWindow[key],
              set: (value) => {
                rawWindow[key] = value;
              }
            });
          }
        }
        return true;
      }
      return false;
    });
    return /^on/.test(key) && !SCOPE_WINDOW_ON_EVENT.includes(key);
  }).forEach((eventName) => {
    const { enumerable, writable, set } = Object.getOwnPropertyDescriptor(microAppWindow, eventName) || {
      enumerable: true,
      writable: true
    };
    try {
      rawDefineProperty(microAppWindow, eventName, {
        enumerable,
        configurable: true,
        get: () => rawWindow[eventName],
        set: (writable !== null && writable !== void 0 ? writable : !!set) ? (value) => {
          rawWindow[eventName] = isFunction(value) ? value.bind(microAppWindow) : value;
        } : void 0
      });
    } catch (e) {
      logWarn(e, appName);
    }
  });
}
function createProxyWindow$1(microAppWindow, sandbox) {
  const rawWindow = globalEnv.rawWindow;
  const customProperties = /* @__PURE__ */ new Set();
  const proxyWindow = new Proxy(microAppWindow, {
    get: (target, key) => {
      if (key === "location") {
        return sandbox.proxyLocation;
      }
      if (includes(GLOBAL_KEY_TO_WINDOW, key)) {
        return proxyWindow;
      }
      if (customProperties.has(key)) {
        return Reflect.get(target, key);
      }
      if (includes(sandbox.escapeProperties, key) && !Reflect.has(target, key)) {
        return bindFunctionToRawTarget(Reflect.get(rawWindow, key), rawWindow);
      }
      return bindFunctionToRawTarget(Reflect.get(target, key), target);
    },
    set: (target, key, value) => {
      if (key === "location") {
        return Reflect.set(rawWindow, key, value);
      }
      if (!Reflect.has(target, key)) {
        customProperties.add(key);
      }
      Reflect.set(target, key, value);
      if (includes(sandbox.escapeProperties, key)) {
        !Reflect.has(rawWindow, key) && sandbox.escapeKeys.add(key);
        Reflect.set(rawWindow, key, value);
      }
      return true;
    },
    has: (target, key) => key in target,
    deleteProperty: (target, key) => {
      if (Reflect.has(target, key)) {
        sandbox.escapeKeys.has(key) && Reflect.deleteProperty(rawWindow, key);
        return Reflect.deleteProperty(target, key);
      }
      return true;
    }
  });
  sandbox.proxyWindow = proxyWindow;
}
function patchWindowEffect$1(microAppWindow) {
  const { rawWindow, rawAddEventListener, rawRemoveEventListener } = globalEnv;
  const eventListenerMap = /* @__PURE__ */ new Map();
  const sstEventListenerMap = /* @__PURE__ */ new Map();
  function getEventTarget(type) {
    return SCOPE_WINDOW_EVENT.includes(type) ? microAppWindow : rawWindow;
  }
  microAppWindow.addEventListener = function(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if (listenerList) {
      listenerList.add(listener);
    } else {
      eventListenerMap.set(type, /* @__PURE__ */ new Set([listener]));
    }
    listener && (listener.__MICRO_APP_MARK_OPTIONS__ = options);
    rawAddEventListener.call(getEventTarget(type), type, listener, options);
  };
  microAppWindow.removeEventListener = function(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if ((listenerList === null || listenerList === void 0 ? void 0 : listenerList.size) && listenerList.has(listener)) {
      listenerList.delete(listener);
    }
    rawRemoveEventListener.call(getEventTarget(type), type, listener, options);
  };
  const reset = () => {
    sstEventListenerMap.clear();
  };
  const record = () => {
    eventListenerMap.forEach((listenerList, type) => {
      if (listenerList.size) {
        const cacheList = sstEventListenerMap.get(type) || [];
        sstEventListenerMap.set(type, /* @__PURE__ */ new Set([...cacheList, ...listenerList]));
      }
    });
  };
  const rebuild = () => {
    sstEventListenerMap.forEach((listenerList, type) => {
      for (const listener of listenerList) {
        microAppWindow.addEventListener(type, listener, listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_MARK_OPTIONS__);
      }
    });
    reset();
  };
  const release = () => {
    if (eventListenerMap.size) {
      eventListenerMap.forEach((listenerList, type) => {
        for (const listener of listenerList) {
          rawRemoveEventListener.call(getEventTarget(type), type, listener);
        }
      });
      eventListenerMap.clear();
    }
  };
  return {
    reset,
    record,
    rebuild,
    release
  };
}
function patchDocument$1(appName, microAppWindow, sandbox) {
  patchDocumentPrototype(appName, microAppWindow);
  patchDocumentProperty(appName, microAppWindow, sandbox);
  return patchDocumentEffect(appName, microAppWindow);
}
function patchDocumentPrototype(appName, microAppWindow) {
  const rawDocument = globalEnv.rawDocument;
  const microRootDocument = microAppWindow.Document;
  const microDocument = microAppWindow.document;
  const rawMicroCreateElement = microRootDocument.prototype.createElement;
  const rawMicroCreateElementNS = microRootDocument.prototype.createElementNS;
  const rawMicroCreateTextNode = microRootDocument.prototype.createTextNode;
  const rawMicroCreateDocumentFragment = microRootDocument.prototype.createDocumentFragment;
  const rawMicroCreateComment = microRootDocument.prototype.createComment;
  const rawMicroQuerySelector = microRootDocument.prototype.querySelector;
  const rawMicroQuerySelectorAll = microRootDocument.prototype.querySelectorAll;
  const rawMicroGetElementById = microRootDocument.prototype.getElementById;
  const rawMicroGetElementsByClassName = microRootDocument.prototype.getElementsByClassName;
  const rawMicroGetElementsByTagName = microRootDocument.prototype.getElementsByTagName;
  const rawMicroGetElementsByName = microRootDocument.prototype.getElementsByName;
  const rawMicroElementFromPoint = microRootDocument.prototype.elementFromPoint;
  const rawMicroCaretRangeFromPoint = microRootDocument.prototype.caretRangeFromPoint;
  microRootDocument.prototype.caretRangeFromPoint = function caretRangeFromPoint(x, y) {
    const element = rawMicroElementFromPoint.call(rawDocument, x, y);
    const range = rawMicroCaretRangeFromPoint.call(rawDocument, x, y);
    updateElementInfo(element, appName);
    return range;
  };
  microRootDocument.prototype.createElement = function createElement(tagName, options) {
    const element = rawMicroCreateElement.call(this, tagName, options);
    return updateElementInfo(element, appName);
  };
  microRootDocument.prototype.createElementNS = function createElementNS(namespaceURI, name, options) {
    const element = rawMicroCreateElementNS.call(this, namespaceURI, name, options);
    return updateElementInfo(element, appName);
  };
  microRootDocument.prototype.createTextNode = function createTextNode(data) {
    const element = rawMicroCreateTextNode.call(this, data);
    return updateElementInfo(element, appName);
  };
  microRootDocument.prototype.createDocumentFragment = function createDocumentFragment() {
    const element = rawMicroCreateDocumentFragment.call(this);
    return updateElementInfo(element, appName);
  };
  microRootDocument.prototype.createComment = function createComment(data) {
    const element = rawMicroCreateComment.call(this, data);
    return updateElementInfo(element, appName);
  };
  function getDefaultRawTarget(target) {
    return microDocument !== target ? target : rawDocument;
  }
  function querySelector(selectors) {
    var _a, _b;
    if (!selectors || isUniqueElement(selectors) || microDocument !== this) {
      const _this = getDefaultRawTarget(this);
      return rawMicroQuerySelector.call(_this, selectors);
    }
    return (_b = (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.querySelector(selectors)) !== null && _b !== void 0 ? _b : null;
  }
  function querySelectorAll(selectors) {
    var _a, _b;
    if (!selectors || isUniqueElement(selectors) || microDocument !== this) {
      const _this = getDefaultRawTarget(this);
      return rawMicroQuerySelectorAll.call(_this, selectors);
    }
    return (_b = (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selectors)) !== null && _b !== void 0 ? _b : [];
  }
  microRootDocument.prototype.querySelector = querySelector;
  microRootDocument.prototype.querySelectorAll = querySelectorAll;
  microRootDocument.prototype.getElementById = function getElementById(key) {
    const _this = getDefaultRawTarget(this);
    if (isInvalidQuerySelectorKey(key)) {
      return rawMicroGetElementById.call(_this, key);
    }
    try {
      return querySelector.call(this, `#${key}`);
    } catch (_a) {
      return rawMicroGetElementById.call(_this, key);
    }
  };
  microRootDocument.prototype.getElementsByClassName = function getElementsByClassName(key) {
    const _this = getDefaultRawTarget(this);
    if (isInvalidQuerySelectorKey(key)) {
      return rawMicroGetElementsByClassName.call(_this, key);
    }
    try {
      return querySelectorAll.call(this, `.${key}`);
    } catch (_a) {
      return rawMicroGetElementsByClassName.call(_this, key);
    }
  };
  microRootDocument.prototype.getElementsByTagName = function getElementsByTagName(key) {
    const _this = getDefaultRawTarget(this);
    if (isUniqueElement(key) || isInvalidQuerySelectorKey(key)) {
      return rawMicroGetElementsByTagName.call(_this, key);
    } else if (/^script|base$/i.test(key)) {
      return rawMicroGetElementsByTagName.call(microDocument, key);
    }
    try {
      return querySelectorAll.call(this, key);
    } catch (_a) {
      return rawMicroGetElementsByTagName.call(_this, key);
    }
  };
  microRootDocument.prototype.getElementsByName = function getElementsByName(key) {
    const _this = getDefaultRawTarget(this);
    if (isInvalidQuerySelectorKey(key)) {
      return rawMicroGetElementsByName.call(_this, key);
    }
    try {
      return querySelectorAll.call(this, `[name=${key}]`);
    } catch (_a) {
      return rawMicroGetElementsByName.call(_this, key);
    }
  };
}
function patchDocumentProperty(appName, microAppWindow, sandbox) {
  const rawDocument = globalEnv.rawDocument;
  const microRootDocument = microAppWindow.Document;
  const microDocument = microAppWindow.document;
  const getCommonDescriptor = (key, getter) => {
    const { enumerable } = Object.getOwnPropertyDescriptor(microRootDocument.prototype, key) || {
      enumerable: true
    };
    return {
      configurable: true,
      enumerable,
      get: getter
    };
  };
  const createDescriptors = () => {
    const result = {};
    const descList = [
      // if disable-memory-router or router-mode='disable', href point to base app
      ["documentURI", () => sandbox.proxyLocation.href],
      ["URL", () => sandbox.proxyLocation.href],
      ["documentElement", () => rawDocument.documentElement],
      ["scrollingElement", () => rawDocument.scrollingElement],
      ["forms", () => microRootDocument.prototype.querySelectorAll.call(microDocument, "form")],
      ["images", () => microRootDocument.prototype.querySelectorAll.call(microDocument, "img")],
      ["links", () => microRootDocument.prototype.querySelectorAll.call(microDocument, "a")],
      // unique keys of micro-app
      ["microAppElement", () => {
        var _a;
        return (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.container;
      }],
      ["__MICRO_APP_NAME__", () => appName]
    ];
    descList.forEach((desc) => {
      result[desc[0]] = getCommonDescriptor(desc[0], desc[1]);
    });
    proxy2RawDocOrShadowKeys.forEach((key) => {
      result[key] = getCommonDescriptor(key, () => rawDocument[key]);
    });
    proxy2RawDocOrShadowMethods.forEach((key) => {
      result[key] = getCommonDescriptor(key, () => bindFunctionToRawTarget(rawDocument[key], rawDocument, "DOCUMENT"));
    });
    proxy2RawDocumentKeys.forEach((key) => {
      result[key] = getCommonDescriptor(key, () => rawDocument[key]);
    });
    proxy2RawDocumentMethods.forEach((key) => {
      result[key] = getCommonDescriptor(key, () => bindFunctionToRawTarget(rawDocument[key], rawDocument, "DOCUMENT"));
    });
    return result;
  };
  rawDefineProperties(microRootDocument.prototype, createDescriptors());
  uniqueDocumentElement.forEach((tagName) => {
    rawDefineProperty(microDocument, tagName, {
      enumerable: true,
      configurable: true,
      get: () => {
        throttleDeferForSetAppName(appName);
        return rawDocument[tagName];
      },
      set: (value) => {
        rawDocument[tagName] = value;
      }
    });
  });
}
function patchDocumentEffect(appName, microAppWindow) {
  const { rawDocument, rawAddEventListener, rawRemoveEventListener } = globalEnv;
  const eventListenerMap = /* @__PURE__ */ new Map();
  const sstEventListenerMap = /* @__PURE__ */ new Map();
  let onClickHandler = null;
  let sstOnClickHandler = null;
  const microRootDocument = microAppWindow.Document;
  const microDocument = microAppWindow.document;
  function getEventTarget(type, bindTarget) {
    return SCOPE_DOCUMENT_EVENT.includes(type) ? bindTarget : rawDocument;
  }
  microRootDocument.prototype.addEventListener = function(type, listener, options) {
    const handler = isFunction(listener) ? listener.__MICRO_APP_BOUND_FUNCTION__ = listener.__MICRO_APP_BOUND_FUNCTION__ || listener.bind(this) : listener;
    const listenerList = eventListenerMap.get(type);
    if (listenerList) {
      listenerList.add(listener);
    } else {
      eventListenerMap.set(type, /* @__PURE__ */ new Set([listener]));
    }
    listener && (listener.__MICRO_APP_MARK_OPTIONS__ = options);
    rawAddEventListener.call(getEventTarget(type, this), type, handler, options);
  };
  microRootDocument.prototype.removeEventListener = function(type, listener, options) {
    const listenerList = eventListenerMap.get(type);
    if ((listenerList === null || listenerList === void 0 ? void 0 : listenerList.size) && listenerList.has(listener)) {
      listenerList.delete(listener);
    }
    const handler = (listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_BOUND_FUNCTION__) || listener;
    rawRemoveEventListener.call(getEventTarget(type, this), type, handler, options);
  };
  function createSetterHandler(eventName) {
    if (eventName === "onclick") {
      return (value) => {
        if (isFunction(onClickHandler)) {
          rawRemoveEventListener.call(rawDocument, "click", onClickHandler, false);
        }
        if (isFunction(value)) {
          onClickHandler = value.bind(microDocument);
          rawAddEventListener.call(rawDocument, "click", onClickHandler, false);
        } else {
          onClickHandler = value;
        }
      };
    }
    return (value) => {
      rawDocument[eventName] = isFunction(value) ? value.bind(microDocument) : value;
    };
  }
  Object.getOwnPropertyNames(microRootDocument.prototype).filter((key) => /^on/.test(key) && !SCOPE_DOCUMENT_ON_EVENT.includes(key)).forEach((eventName) => {
    const { enumerable, writable, set } = Object.getOwnPropertyDescriptor(microRootDocument.prototype, eventName) || {
      enumerable: true,
      writable: true
    };
    try {
      rawDefineProperty(microRootDocument.prototype, eventName, {
        enumerable,
        configurable: true,
        get: () => {
          if (eventName === "onclick")
            return onClickHandler;
          return rawDocument[eventName];
        },
        set: (writable !== null && writable !== void 0 ? writable : !!set) ? createSetterHandler(eventName) : void 0
      });
    } catch (e) {
      logWarn(e, appName);
    }
  });
  const reset = () => {
    sstEventListenerMap.clear();
    sstOnClickHandler = null;
  };
  const record = () => {
    sstOnClickHandler = onClickHandler || sstOnClickHandler;
    eventListenerMap.forEach((listenerList, type) => {
      if (listenerList.size) {
        const cacheList = sstEventListenerMap.get(type) || [];
        sstEventListenerMap.set(type, /* @__PURE__ */ new Set([...cacheList, ...listenerList]));
      }
    });
  };
  const rebuild = () => {
    if (sstOnClickHandler && !onClickHandler)
      microDocument.onclick = sstOnClickHandler;
    sstEventListenerMap.forEach((listenerList, type) => {
      for (const listener of listenerList) {
        microDocument.addEventListener(type, listener, listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_MARK_OPTIONS__);
      }
    });
    reset();
  };
  const release = () => {
    if (isFunction(onClickHandler)) {
      rawRemoveEventListener.call(rawDocument, "click", onClickHandler);
    }
    onClickHandler = null;
    if (eventListenerMap.size) {
      eventListenerMap.forEach((listenerList, type) => {
        for (const listener of listenerList) {
          rawRemoveEventListener.call(getEventTarget(type, microDocument), type, (listener === null || listener === void 0 ? void 0 : listener.__MICRO_APP_BOUND_FUNCTION__) || listener);
        }
      });
      eventListenerMap.clear();
    }
  };
  return {
    reset,
    record,
    rebuild,
    release
  };
}
function patchElement(appName, url, microAppWindow, sandbox) {
  patchIframeNode(appName, microAppWindow, sandbox);
  patchIframeAttribute(url, microAppWindow);
}
function patchIframeNode(appName, microAppWindow, sandbox) {
  const rawRootElement = globalEnv.rawRootElement;
  const rawDocument = globalEnv.rawDocument;
  const microDocument = microAppWindow.document;
  const microRootNode = microAppWindow.Node;
  const microRootElement = microAppWindow.Element;
  const rawMicroAppendChild = microRootNode.prototype.appendChild;
  const rawMicroInsertBefore = microRootNode.prototype.insertBefore;
  const rawMicroReplaceChild = microRootNode.prototype.replaceChild;
  const rawMicroRemoveChild = microRootNode.prototype.removeChild;
  const rawMicroAppend = microRootElement.prototype.append;
  const rawMicroPrepend = microRootElement.prototype.prepend;
  const rawMicroInsertAdjacentElement = microRootElement.prototype.insertAdjacentElement;
  const rawMicroCloneNode = microRootNode.prototype.cloneNode;
  const rawInnerHTMLDesc = Object.getOwnPropertyDescriptor(microRootElement.prototype, "innerHTML");
  const rawParentNodeDesc = Object.getOwnPropertyDescriptor(microRootNode.prototype, "parentNode");
  const rawOwnerDocumentDesc = Object.getOwnPropertyDescriptor(microRootNode.prototype, "ownerDocument");
  const isPureNode = (target) => {
    return (isScriptElement(target) || isBaseElement(target)) && target.__PURE_ELEMENT__;
  };
  const getRawTarget = (parent) => {
    if (parent === sandbox.microHead) {
      return rawDocument.head;
    } else if (parent === sandbox.microBody) {
      return rawDocument.body;
    }
    return parent;
  };
  microRootNode.prototype.getRootNode = function getRootNode() {
    return microDocument;
  };
  microRootNode.prototype.appendChild = function appendChild(node) {
    updateElementInfo(node, appName);
    if (isPureNode(node)) {
      return rawMicroAppendChild.call(this, node);
    }
    return rawRootElement.prototype.appendChild.call(getRawTarget(this), node);
  };
  microRootNode.prototype.insertBefore = function insertBefore(node, child) {
    updateElementInfo(node, appName);
    if (isPureNode(node)) {
      return rawMicroInsertBefore.call(this, node, child);
    }
    return rawRootElement.prototype.insertBefore.call(getRawTarget(this), node, child);
  };
  microRootNode.prototype.replaceChild = function replaceChild(node, child) {
    updateElementInfo(node, appName);
    if (isPureNode(node)) {
      return rawMicroReplaceChild.call(this, node, child);
    }
    return rawRootElement.prototype.replaceChild.call(getRawTarget(this), node, child);
  };
  microRootNode.prototype.removeChild = function removeChild(oldChild) {
    if (isPureNode(oldChild) || this.contains(oldChild)) {
      return rawMicroRemoveChild.call(this, oldChild);
    }
    return rawRootElement.prototype.removeChild.call(getRawTarget(this), oldChild);
  };
  microRootElement.prototype.append = function append(...nodes) {
    let i = 0;
    let hasPureNode = false;
    while (i < nodes.length) {
      nodes[i] = isNode(nodes[i]) ? nodes[i] : microDocument.createTextNode(nodes[i]);
      if (isPureNode(nodes[i]))
        hasPureNode = true;
      i++;
    }
    if (hasPureNode) {
      return rawMicroAppend.call(this, ...nodes);
    }
    return rawRootElement.prototype.append.call(getRawTarget(this), ...nodes);
  };
  microRootElement.prototype.prepend = function prepend(...nodes) {
    let i = 0;
    let hasPureNode = false;
    while (i < nodes.length) {
      nodes[i] = isNode(nodes[i]) ? nodes[i] : microDocument.createTextNode(nodes[i]);
      if (isPureNode(nodes[i]))
        hasPureNode = true;
      i++;
    }
    if (hasPureNode) {
      return rawMicroPrepend.call(this, ...nodes);
    }
    return rawRootElement.prototype.prepend.call(getRawTarget(this), ...nodes);
  };
  microRootElement.prototype.insertAdjacentElement = function insertAdjacentElement(where, element) {
    updateElementInfo(element, appName);
    if (isPureNode(element)) {
      return rawMicroInsertAdjacentElement.call(this, where, element);
    }
    return rawRootElement.prototype.insertAdjacentElement.call(getRawTarget(this), where, element);
  };
  microRootNode.prototype.cloneNode = function cloneNode(deep) {
    const clonedNode = rawMicroCloneNode.call(this, deep);
    return updateElementInfo(clonedNode, appName);
  };
  rawDefineProperty(microRootNode.prototype, "ownerDocument", {
    configurable: true,
    enumerable: true,
    get() {
      return this.__PURE_ELEMENT__ ? rawOwnerDocumentDesc.get.call(this) : microDocument;
    }
  });
  rawDefineProperty(microRootElement.prototype, "innerHTML", {
    configurable: true,
    enumerable: true,
    get() {
      return rawInnerHTMLDesc.get.call(this);
    },
    set(code) {
      rawInnerHTMLDesc.set.call(this, code);
      Array.from(this.children).forEach((child) => {
        if (isElement(child)) {
          updateElementInfo(child, appName);
        }
      });
    }
  });
  rawDefineProperty(microRootNode.prototype, "parentNode", {
    configurable: true,
    enumerable: true,
    get() {
      var _a, _b, _c;
      throttleDeferForSetAppName(appName);
      const result = rawParentNodeDesc.get.call(this);
      if (isMicroAppBody(result) && ((_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.container)) {
        return ((_c = (_b = microApp.options).getRootElementParentNode) === null || _c === void 0 ? void 0 : _c.call(_b, this, appName)) || globalEnv.rawDocument.body;
      }
      return result;
    }
  });
  const ImageProxy = new Proxy(microAppWindow.Image, {
    construct(Target, args) {
      const elementImage = new Target(...args);
      updateElementInfo(elementImage, appName);
      return elementImage;
    }
  });
  rawDefineProperty(microAppWindow, "Image", {
    configurable: true,
    writable: true,
    value: ImageProxy
  });
}
function patchIframeAttribute(url, microAppWindow) {
  const microRootElement = microAppWindow.Element;
  const rawMicroSetAttribute = microRootElement.prototype.setAttribute;
  microRootElement.prototype.setAttribute = function setAttribute(key, value) {
    if ((key === "src" || key === "srcset") && /^(img|script)$/i.test(this.tagName) || key === "href" && /^link$/i.test(this.tagName)) {
      value = CompletionPath(value, url);
    }
    rawMicroSetAttribute.call(this, key, value);
  };
  const protoAttrList = [
    [microAppWindow.HTMLImageElement.prototype, "src"],
    [microAppWindow.HTMLScriptElement.prototype, "src"],
    [microAppWindow.HTMLLinkElement.prototype, "href"]
  ];
  protoAttrList.forEach(([target, attr]) => {
    const { enumerable, configurable, get, set } = Object.getOwnPropertyDescriptor(target, attr) || {
      enumerable: true,
      configurable: true
    };
    rawDefineProperty(target, attr, {
      enumerable,
      configurable,
      get: function() {
        return get === null || get === void 0 ? void 0 : get.call(this);
      },
      set: function(value) {
        set === null || set === void 0 ? void 0 : set.call(this, CompletionPath(value, url));
      }
    });
  });
}
class IframeSandbox {
  constructor(appName, url) {
    this.active = false;
    this.escapeProperties = [];
    this.escapeKeys = /* @__PURE__ */ new Set();
    this.updateIframeBase = () => {
      var _a;
      (_a = this.baseElement) === null || _a === void 0 ? void 0 : _a.setAttribute("href", createURL(this.url).origin + this.proxyLocation.pathname);
    };
    this.appName = appName;
    this.url = url;
    const rawLocation = globalEnv.rawWindow.location;
    const browserHost = rawLocation.protocol + "//" + rawLocation.host;
    this.deleteIframeElement = this.createIframeElement(appName, browserHost + rawLocation.pathname);
    this.microAppWindow = this.iframe.contentWindow;
    this.patchIframe(this.microAppWindow, (resolve) => {
      this.createIframeTemplate(this.microAppWindow);
      this.getSpecialProperties(appName);
      this.proxyLocation = patchRouter(appName, url, this.microAppWindow, browserHost);
      this.windowEffect = patchWindow$1(appName, this.microAppWindow, this);
      this.documentEffect = patchDocument$1(appName, this.microAppWindow, this);
      patchElement(appName, url, this.microAppWindow, this);
      this.initStaticGlobalKeys(appName, url, this.microAppWindow);
      resolve();
    });
  }
  /**
   * create iframe for sandbox
   * @param appName app name
   * @param browserPath browser origin
   * @returns release callback
   */
  createIframeElement(appName, browserPath) {
    this.iframe = pureCreateElement("iframe");
    const iframeAttrs = {
      src: microApp.options.iframeSrc || browserPath,
      style: "display: none",
      id: appName
    };
    Object.keys(iframeAttrs).forEach((key) => this.iframe.setAttribute(key, iframeAttrs[key]));
    globalEnv.rawDocument.body.appendChild(this.iframe);
    return () => defer(() => {
      var _a, _b;
      (_b = (_a = this.iframe) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(this.iframe);
      this.iframe = null;
    });
  }
  start({ baseroute, defaultPage, disablePatchRequest }) {
    if (this.active)
      return;
    this.active = true;
    this.initRouteState(defaultPage);
    this.removeHistoryListener = addHistoryListener(this.microAppWindow.__MICRO_APP_NAME__);
    if (isRouterModeCustom(this.microAppWindow.__MICRO_APP_NAME__)) {
      this.microAppWindow.__MICRO_APP_BASE_ROUTE__ = this.microAppWindow.__MICRO_APP_BASE_URL__ = baseroute;
    }
    if (!disablePatchRequest) {
      this.createIframeBase();
    }
    if (++globalEnv.activeSandbox === 1) {
      patchElementAndDocument();
      patchHistory();
    }
    if (++IframeSandbox.activeCount === 1)
      ;
  }
  stop({ umdMode, keepRouteState, destroy, clearData }) {
    var _a;
    if (!this.active)
      return;
    this.recordAndReleaseEffect({ clearData }, !umdMode || destroy);
    this.clearRouteState(keepRouteState);
    (_a = this.removeHistoryListener) === null || _a === void 0 ? void 0 : _a.call(this);
    if (!umdMode || destroy) {
      this.deleteIframeElement();
      this.escapeKeys.forEach((key) => {
        Reflect.deleteProperty(globalEnv.rawWindow, key);
      });
      this.escapeKeys.clear();
    }
    if (--globalEnv.activeSandbox === 0) {
      releasePatchElementAndDocument();
      releasePatchHistory();
    }
    if (--IframeSandbox.activeCount === 0)
      ;
    this.active = false;
  }
  /**
   * create static properties
   * NOTE:
   *  1. execute as early as possible
   *  2. run after patchRouter & createProxyWindow
   * TODO: 设置为只读变量
   */
  initStaticGlobalKeys(appName, url, microAppWindow) {
    microAppWindow.__MICRO_APP_ENVIRONMENT__ = true;
    microAppWindow.__MICRO_APP_NAME__ = appName;
    microAppWindow.__MICRO_APP_URL__ = url;
    microAppWindow.__MICRO_APP_PUBLIC_PATH__ = getEffectivePath(url);
    microAppWindow.__MICRO_APP_BASE_ROUTE__ = "";
    microAppWindow.__MICRO_APP_WINDOW__ = microAppWindow;
    microAppWindow.__MICRO_APP_PRE_RENDER__ = false;
    microAppWindow.__MICRO_APP_UMD_MODE__ = false;
    microAppWindow.__MICRO_APP_PROXY_WINDOW__ = this.proxyWindow;
    microAppWindow.__MICRO_APP_SANDBOX__ = this;
    microAppWindow.__MICRO_APP_SANDBOX_TYPE__ = "iframe";
    microAppWindow.rawWindow = globalEnv.rawWindow;
    microAppWindow.rawDocument = globalEnv.rawDocument;
    microAppWindow.microApp = assign(new EventCenterForMicroApp(appName), {
      removeDomScope,
      pureCreateElement,
      location: this.proxyLocation,
      router
    });
  }
  /**
   * Record global effect and then release (effect: global event, timeout, data listener)
   * Scenes:
   * 1. unmount of default/umd app
   * 2. hidden keep-alive app
   * 3. after init prerender app
   * @param options {
   *  @param clearData clear data from base app
   *  @param isPrerender is prerender app
   *  @param keepAlive is keep-alive app
   * }
   * @param preventRecord prevent record effect events (default or destroy)
   */
  recordAndReleaseEffect(options, preventRecord = false) {
    if (preventRecord) {
      this.resetEffectSnapshot();
    } else {
      this.recordEffectSnapshot();
    }
    this.releaseGlobalEffect(options);
  }
  /**
   * reset effect snapshot data in default mode or destroy
   * Scenes:
   *  1. unmount hidden keep-alive app manually
   *  2. unmount prerender app manually
   */
  resetEffectSnapshot() {
    var _a, _b;
    (_a = this.windowEffect) === null || _a === void 0 ? void 0 : _a.reset();
    (_b = this.documentEffect) === null || _b === void 0 ? void 0 : _b.reset();
    resetDataCenterSnapshot(this.microAppWindow.microApp);
  }
  /**
   * record umd snapshot before the first execution of umdHookMount
   * Scenes:
   * 1. exec umdMountHook in umd mode
   * 2. hidden keep-alive app
   * 3. after init prerender app
   */
  recordEffectSnapshot() {
    var _a, _b;
    (_a = this.windowEffect) === null || _a === void 0 ? void 0 : _a.record();
    (_b = this.documentEffect) === null || _b === void 0 ? void 0 : _b.record();
    recordDataCenterSnapshot(this.microAppWindow.microApp);
  }
  // rebuild umd snapshot before remount umd app
  rebuildEffectSnapshot() {
    var _a, _b;
    (_a = this.windowEffect) === null || _a === void 0 ? void 0 : _a.rebuild();
    (_b = this.documentEffect) === null || _b === void 0 ? void 0 : _b.rebuild();
    rebuildDataCenterSnapshot(this.microAppWindow.microApp);
  }
  /**
   * clear global event, timeout, data listener
   * Scenes:
   * 1. unmount of normal/umd app
   * 2. hidden keep-alive app
   * 3. after init prerender app
   * @param clearData clear data from base app
   * @param isPrerender is prerender app
   * @param keepAlive is keep-alive app
   */
  releaseGlobalEffect({ clearData = false }) {
    var _a, _b, _c, _d, _e;
    (_a = this.windowEffect) === null || _a === void 0 ? void 0 : _a.release();
    (_b = this.documentEffect) === null || _b === void 0 ? void 0 : _b.release();
    (_c = this.microAppWindow.microApp) === null || _c === void 0 ? void 0 : _c.clearDataListener();
    (_d = this.microAppWindow.microApp) === null || _d === void 0 ? void 0 : _d.clearGlobalDataListener();
    if (clearData) {
      microApp.clearData(this.microAppWindow.__MICRO_APP_NAME__);
      (_e = this.microAppWindow.microApp) === null || _e === void 0 ? void 0 : _e.clearData();
    }
  }
  // set __MICRO_APP_PRE_RENDER__ state
  setPreRenderState(state) {
    this.microAppWindow.__MICRO_APP_PRE_RENDER__ = state;
  }
  // record umdMode
  markUmdMode(state) {
    this.microAppWindow.__MICRO_APP_UMD_MODE__ = state;
  }
  // TODO: RESTRUCTURE
  patchIframe(microAppWindow, cb) {
    const oldMicroDocument = microAppWindow.document;
    this.sandboxReady = new Promise((resolve) => {
      (function iframeLocationReady() {
        setTimeout(() => {
          try {
            if (microAppWindow.document === oldMicroDocument && true) {
              iframeLocationReady();
            } else {
              microAppWindow.stop();
              cb(resolve);
            }
          } catch (e) {
            iframeLocationReady();
          }
        }, 0);
      })();
    });
  }
  // TODO: RESTRUCTURE
  createIframeTemplate(microAppWindow) {
    const microDocument = microAppWindow.document;
    clearDOM(microDocument);
    const html = microDocument.createElement("html");
    html.innerHTML = "<head></head><body></body>";
    microDocument.appendChild(html);
    this.microBody = microDocument.body;
    this.microHead = microDocument.head;
  }
  /**
   * baseElement will complete the relative address of element according to the URL
   * e.g: a image link script fetch ajax EventSource
   */
  createIframeBase() {
    this.baseElement = pureCreateElement("base");
    this.updateIframeBase();
    this.microHead.appendChild(this.baseElement);
  }
  /**
   * get escapeProperties from plugins & adapter
   * @param appName app name
   */
  getSpecialProperties(appName) {
    var _a;
    if (isPlainObject(microApp.options.plugins)) {
      this.commonActionForSpecialProperties(microApp.options.plugins.global);
      this.commonActionForSpecialProperties((_a = microApp.options.plugins.modules) === null || _a === void 0 ? void 0 : _a[appName]);
    }
  }
  // common action for global plugins and module plugins
  commonActionForSpecialProperties(plugins) {
    if (isArray(plugins)) {
      for (const plugin of plugins) {
        if (isPlainObject(plugin)) {
          if (isArray(plugin.escapeProperties)) {
            this.escapeProperties = this.escapeProperties.concat(plugin.escapeProperties);
          }
        }
      }
    }
  }
  initRouteState(defaultPage) {
    initRouteStateWithURL(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.location, defaultPage);
  }
  clearRouteState(keepRouteState) {
    clearRouteStateFromURL(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.__MICRO_APP_URL__, this.microAppWindow.location, keepRouteState);
  }
  setRouteInfoForKeepAliveApp() {
    updateBrowserURLWithLocation(this.microAppWindow.__MICRO_APP_NAME__, this.microAppWindow.location);
  }
  removeRouteInfoForKeepAliveApp() {
    removePathFromBrowser(this.microAppWindow.__MICRO_APP_NAME__);
  }
  /**
   * Format all html elements when init
   * @param container micro app container
   */
  patchStaticElement(container) {
    patchElementTree(container, this.microAppWindow.__MICRO_APP_NAME__);
  }
  /**
   * action before exec scripts when mount
   * Actions:
   * 1. patch static elements from html
   * @param container micro app container
   */
  actionBeforeExecScripts(container) {
    this.patchStaticElement(container);
  }
  setStaticAppState(state) {
    this.microAppWindow.__MICRO_APP_STATE__ = state;
  }
}
IframeSandbox.activeCount = 0;
const appInstanceMap = /* @__PURE__ */ new Map();
class CreateApp {
  constructor({ name, url, container, scopecss, useSandbox, inline, iframe, ssrUrl, isPrefetch, prefetchLevel, routerMode }) {
    this.state = appStates.CREATED;
    this.keepAliveState = null;
    this.loadSourceLevel = 0;
    this.umdHookMount = null;
    this.umdHookUnmount = null;
    this.lifeCycleState = null;
    this.umdMode = false;
    this.sandBox = null;
    this.fiber = false;
    appInstanceMap.set(name, this);
    this.name = name;
    this.url = url;
    this.useSandbox = useSandbox;
    this.scopecss = this.useSandbox && scopecss;
    this.iframe = iframe !== null && iframe !== void 0 ? iframe : false;
    this.inline = this.getInlineModeState(inline);
    this.routerMode = routerMode || DEFAULT_ROUTER_MODE;
    this.container = container !== null && container !== void 0 ? container : null;
    this.ssrUrl = ssrUrl !== null && ssrUrl !== void 0 ? ssrUrl : "";
    this.isPrefetch = isPrefetch !== null && isPrefetch !== void 0 ? isPrefetch : false;
    this.isPrerender = prefetchLevel === 3;
    this.prefetchLevel = prefetchLevel;
    this.source = { html: null, links: /* @__PURE__ */ new Set(), scripts: /* @__PURE__ */ new Set() };
    this.loadSourceCode();
    this.createSandbox();
  }
  // Load resources
  loadSourceCode() {
    this.setAppState(appStates.LOADING);
    HTMLLoader.getInstance().run(this, extractSourceDom);
  }
  /**
   * When resource is loaded, mount app if it is not prefetch or unmount
   * defaultPage disablePatchRequest routerMode baseroute is only for prerender app
   */
  onLoad({
    html,
    // below params is only for prerender app
    defaultPage,
    routerMode,
    baseroute,
    disablePatchRequest
  }) {
    var _a;
    if (++this.loadSourceLevel === 2) {
      this.source.html = html;
      if (!this.isPrefetch && !this.isUnmounted()) {
        getRootContainer(this.container).mount(this);
      } else if (this.isPrerender) {
        const container = pureCreateElement("div");
        container.setAttribute("prerender", "true");
        (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.setPreRenderState(true);
        this.mount({
          container,
          inline: this.inline,
          fiber: true,
          defaultPage: defaultPage || "",
          disablePatchRequest: disablePatchRequest !== null && disablePatchRequest !== void 0 ? disablePatchRequest : false,
          routerMode,
          baseroute: baseroute || ""
        });
      }
    }
  }
  /**
   * Error loading HTML
   * @param e Error
   */
  onLoadError(e) {
    this.loadSourceLevel = -1;
    if (!this.isUnmounted()) {
      this.onerror(e);
      this.setAppState(appStates.LOAD_FAILED);
    }
  }
  /**
   * mount app
   * @param container app container
   * @param inline run js in inline mode
   * @param routerMode virtual router mode
   * @param defaultPage default page of virtual router
   * @param baseroute route prefix, default is ''
   * @param disablePatchRequest prevent rewrite request method of child app
   * @param fiber run js in fiber mode
   */
  mount({ container, inline, routerMode, defaultPage, baseroute, disablePatchRequest, fiber }) {
    if (this.loadSourceLevel !== 2) {
      this.container = container;
      this.isPrerender = false;
      dispatchCustomEventToMicroApp(this, "statechange", {
        appState: appStates.LOADING
      });
      return this.setAppState(appStates.LOADING);
    }
    this.createSandbox();
    this.setAppState(appStates.BEFORE_MOUNT);
    const nextAction = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (this.isPrerender && isDivElement(this.container) && this.container.hasAttribute("prerender")) {
        (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.rebuildEffectSnapshot();
        this.cloneContainer(container, this.container, false);
        this.container = container;
        (_b = this.preRenderEvents) === null || _b === void 0 ? void 0 : _b.forEach((cb) => cb());
        this.isPrerender = false;
        this.preRenderEvents = null;
        router.attachToURL(this.name);
        (_c = this.sandBox) === null || _c === void 0 ? void 0 : _c.setPreRenderState(false);
      } else {
        this.container = container;
        this.inline = this.getInlineModeState(inline);
        this.fiber = fiber;
        this.routerMode = routerMode;
        const dispatchBeforeMount = () => {
          this.setLifeCycleState(lifeCycles.BEFOREMOUNT);
          dispatchLifecyclesEvent(this.container, this.name, lifeCycles.BEFOREMOUNT);
        };
        if (this.isPrerender) {
          ((_d = this.preRenderEvents) !== null && _d !== void 0 ? _d : this.preRenderEvents = []).push(dispatchBeforeMount);
        } else {
          dispatchBeforeMount();
        }
        this.setAppState(appStates.MOUNTING);
        dispatchCustomEventToMicroApp(this, "statechange", {
          appState: appStates.MOUNTING
        });
        this.cloneContainer(this.container, this.source.html, !this.umdMode);
        (_e = this.sandBox) === null || _e === void 0 ? void 0 : _e.start({
          umdMode: this.umdMode,
          baseroute,
          defaultPage,
          disablePatchRequest
        });
        if (!this.umdMode) {
          (_f = this.sandBox) === null || _f === void 0 ? void 0 : _f.actionBeforeExecScripts(this.container);
          execScripts(this, (isFinished) => {
            if (!this.umdMode) {
              const { mount, unmount } = this.getUmdLibraryHooks();
              this.umdHookUnmount = unmount;
              if (isFunction(mount) && isFunction(unmount)) {
                this.umdHookMount = mount;
                this.sandBox.markUmdMode(this.umdMode = true);
                try {
                  this.handleMounted(this.umdHookMount(microApp.getData(this.name, true)));
                } catch (e) {
                  logError("An error occurred in window.mount \n", this.name, e);
                }
              } else if (isFinished === true) {
                this.handleMounted();
              }
            }
          });
        } else {
          (_g = this.sandBox) === null || _g === void 0 ? void 0 : _g.rebuildEffectSnapshot();
          try {
            this.handleMounted(this.umdHookMount(microApp.getData(this.name, true)));
          } catch (e) {
            logError("An error occurred in window.mount \n", this.name, e);
          }
        }
      }
    };
    this.sandBox ? this.sandBox.sandboxReady.then(nextAction) : nextAction();
  }
  /**
   * handle for promise umdHookMount
   * @param umdHookMountResult result of umdHookMount
   */
  handleMounted(umdHookMountResult) {
    var _a, _b;
    const dispatchAction = () => {
      if (isPromise(umdHookMountResult)) {
        umdHookMountResult.then(() => this.dispatchMountedEvent()).catch((e) => {
          logError("An error occurred in window.mount \n", this.name, e);
          this.dispatchMountedEvent();
        });
      } else {
        this.dispatchMountedEvent();
      }
    };
    if (this.isPrerender) {
      (_a = this.preRenderEvents) === null || _a === void 0 ? void 0 : _a.push(dispatchAction);
      (_b = this.sandBox) === null || _b === void 0 ? void 0 : _b.recordAndReleaseEffect({ isPrerender: true });
    } else {
      dispatchAction();
    }
  }
  /**
   * dispatch mounted event when app run finished
   */
  dispatchMountedEvent() {
    var _a;
    if (!this.isUnmounted()) {
      this.setAppState(appStates.MOUNTED);
      execMicroAppGlobalHook(this.getMicroAppGlobalHook(microGlobalEvent.ONMOUNT), this.name, microGlobalEvent.ONMOUNT, microApp.getData(this.name, true));
      dispatchCustomEventToMicroApp(this, "statechange", {
        appState: appStates.MOUNTED
      });
      dispatchCustomEventToMicroApp(this, "mounted");
      this.setLifeCycleState(lifeCycles.MOUNTED);
      dispatchLifecyclesEvent(this.container, this.name, lifeCycles.MOUNTED);
      if (this.isHidden()) {
        (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.recordAndReleaseEffect({ keepAlive: true });
      }
    }
  }
  /**
   * unmount app
   * NOTE:
   *  1. do not add any params on account of unmountApp
   * @param destroy completely destroy, delete cache resources
   * @param clearData clear data of dateCenter
   * @param keepRouteState keep route state when unmount, default is false
   * @param unmountcb callback of unmount
   */
  unmount({ destroy, clearData, keepRouteState, unmountcb }) {
    var _a;
    destroy = destroy || this.state === appStates.LOAD_FAILED;
    this.setAppState(appStates.UNMOUNT);
    let umdHookUnmountResult = null;
    try {
      umdHookUnmountResult = (_a = this.umdHookUnmount) === null || _a === void 0 ? void 0 : _a.call(this, microApp.getData(this.name, true));
    } catch (e) {
      logError("An error occurred in window.unmount \n", this.name, e);
    }
    dispatchCustomEventToMicroApp(this, "statechange", {
      appState: appStates.UNMOUNT
    });
    dispatchCustomEventToMicroApp(this, "unmount");
    execMicroAppGlobalHook(this.getMicroAppGlobalHook(microGlobalEvent.ONUNMOUNT), this.name, microGlobalEvent.ONUNMOUNT);
    this.handleUnmounted({
      destroy,
      clearData,
      keepRouteState,
      unmountcb,
      umdHookUnmountResult
    });
  }
  /**
   * handle for promise umdHookUnmount
   * @param destroy completely destroy, delete cache resources
   * @param clearData clear data of dateCenter
   * @param keepRouteState keep route state when unmount, default is false
   * @param unmountcb callback of unmount
   * @param umdHookUnmountResult result of umdHookUnmount
   */
  handleUnmounted({ destroy, clearData, keepRouteState, unmountcb, umdHookUnmountResult }) {
    const nextAction = () => this.actionsForUnmount({
      destroy,
      clearData,
      keepRouteState,
      unmountcb
    });
    if (isPromise(umdHookUnmountResult)) {
      removeDomScope();
      umdHookUnmountResult.then(nextAction).catch(nextAction);
    } else {
      nextAction();
    }
  }
  /**
   * actions for unmount app
   * @param destroy completely destroy, delete cache resources
   * @param clearData clear data of dateCenter
   * @param keepRouteState keep route state when unmount, default is false
   * @param unmountcb callback of unmount
   */
  actionsForUnmount({ destroy, clearData, keepRouteState, unmountcb }) {
    var _a;
    if (this.umdMode && this.container && !destroy) {
      this.cloneContainer(this.source.html, this.container, false);
    }
    (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.stop({
      umdMode: this.umdMode,
      keepRouteState: keepRouteState && !destroy,
      destroy,
      clearData: clearData || destroy
    });
    this.setLifeCycleState(lifeCycles.UNMOUNT);
    dispatchLifecyclesEvent(this.container, this.name, lifeCycles.UNMOUNT);
    this.clearOptions(destroy);
    unmountcb === null || unmountcb === void 0 ? void 0 : unmountcb();
  }
  clearOptions(destroy) {
    this.container.innerHTML = "";
    this.container = null;
    this.isPrerender = false;
    this.preRenderEvents = null;
    this.setKeepAliveState(null);
    if (this.iframe && !this.umdMode)
      this.sandBox = null;
    if (destroy)
      this.actionsForCompletelyDestroy();
    removeDomScope();
  }
  // actions for completely destroy
  actionsForCompletelyDestroy() {
    var _a, _b;
    (_b = (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.deleteIframeElement) === null || _b === void 0 ? void 0 : _b.call(_a);
    sourceCenter.script.deleteInlineInfo(this.source.scripts);
    appInstanceMap.delete(this.name);
  }
  // hidden app when disconnectedCallback called with keep-alive
  hiddenKeepAliveApp(callback) {
    var _a, _b;
    this.setKeepAliveState(keepAliveStates.KEEP_ALIVE_HIDDEN);
    dispatchCustomEventToMicroApp(this, "appstate-change", {
      appState: "afterhidden"
    });
    this.setLifeCycleState(lifeCycles.AFTERHIDDEN);
    dispatchLifecyclesEvent(this.container, this.name, lifeCycles.AFTERHIDDEN);
    if (isRouterModeSearch(this.name)) {
      (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.removeRouteInfoForKeepAliveApp();
    }
    if (this.loadSourceLevel !== 2) {
      getRootContainer(this.container).unmount();
    } else {
      this.container = this.cloneContainer(pureCreateElement("div"), this.container, false);
      (_b = this.sandBox) === null || _b === void 0 ? void 0 : _b.recordAndReleaseEffect({ keepAlive: true });
    }
    callback === null || callback === void 0 ? void 0 : callback();
  }
  // show app when connectedCallback called with keep-alive
  showKeepAliveApp(container) {
    var _a, _b;
    (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.rebuildEffectSnapshot();
    dispatchCustomEventToMicroApp(this, "appstate-change", {
      appState: "beforeshow"
    });
    dispatchLifecyclesEvent(container, this.name, lifeCycles.BEFORESHOW);
    this.setKeepAliveState(keepAliveStates.KEEP_ALIVE_SHOW);
    this.container = this.cloneContainer(container, this.container, false);
    if (isRouterModeSearch(this.name)) {
      (_b = this.sandBox) === null || _b === void 0 ? void 0 : _b.setRouteInfoForKeepAliveApp();
    }
    dispatchCustomEventToMicroApp(this, "appstate-change", {
      appState: "aftershow"
    });
    this.setLifeCycleState(lifeCycles.AFTERSHOW);
    dispatchLifecyclesEvent(this.container, this.name, lifeCycles.AFTERSHOW);
  }
  /**
   * app rendering error
   * @param e Error
   */
  onerror(e) {
    this.setLifeCycleState(lifeCycles.ERROR);
    dispatchCustomEventToMicroApp(this, "statechange", {
      appState: appStates.LOAD_FAILED
    });
    dispatchLifecyclesEvent(this.container, this.name, lifeCycles.ERROR, e);
  }
  /**
   * Parse htmlString to DOM
   * NOTE: iframe sandbox will use DOMParser of iframeWindow, with sandbox will use DOMParser of base app
   * @param htmlString DOMString
   * @returns parsed DOM
   */
  parseHtmlString(htmlString) {
    var _a;
    const DOMParser = ((_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.proxyWindow) ? this.sandBox.proxyWindow.DOMParser : globalEnv.rawWindow.DOMParser;
    return new DOMParser().parseFromString(htmlString, "text/html").body;
  }
  /**
   * clone origin elements to target
   * @param origin Cloned element
   * @param target Accept cloned elements
   * @param deep deep clone or transfer dom
   */
  cloneContainer(target, origin, deep) {
    if (origin) {
      target.innerHTML = "";
      Array.from(deep ? this.parseHtmlString(origin.innerHTML).childNodes : origin.childNodes).forEach((node) => {
        target.appendChild(node);
      });
    }
    return target;
  }
  /**
   * Scene:
   *  1. create app
   *  2. remount of default mode with iframe sandbox
   *    In default mode with iframe sandbox, unmount app will delete iframeElement & sandBox, and create sandBox when mount again, used to solve the problem that module script cannot be execute when append it again
   */
  createSandbox() {
    if (this.useSandbox && !this.sandBox) {
      this.sandBox = this.iframe ? new IframeSandbox(this.name, this.url) : new WithSandBox(this.name, this.url);
    }
  }
  // set app state
  setAppState(state) {
    var _a;
    this.state = state;
    (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.setStaticAppState(state);
  }
  // get app state
  getAppState() {
    return this.state;
  }
  // set app lifeCycleState
  setLifeCycleState(state) {
    this.lifeCycleState = state;
  }
  // get app lifeCycleState
  getLifeCycleState() {
    return this.lifeCycleState || "";
  }
  // set keep-alive state
  setKeepAliveState(state) {
    this.keepAliveState = state;
  }
  // get keep-alive state
  getKeepAliveState() {
    return this.keepAliveState;
  }
  // is app unmounted
  isUnmounted() {
    return appStates.UNMOUNT === this.state;
  }
  // is app already hidden
  isHidden() {
    return keepAliveStates.KEEP_ALIVE_HIDDEN === this.keepAliveState;
  }
  // get umd library, if it not exist, return empty object
  getUmdLibraryHooks() {
    if (!this.isUnmounted() && this.sandBox) {
      const libraryName = getRootContainer(this.container).getAttribute("library") || `micro-app-${this.name}`;
      const proxyWindow = this.sandBox.proxyWindow;
      if (isObject(proxyWindow[libraryName])) {
        return proxyWindow[libraryName];
      }
      return {
        mount: proxyWindow.mount,
        unmount: proxyWindow.unmount
      };
    }
    return {};
  }
  getMicroAppGlobalHook(eventName) {
    var _a, _b;
    const listener = (_b = (_a = this.sandBox) === null || _a === void 0 ? void 0 : _a.proxyWindow) === null || _b === void 0 ? void 0 : _b[eventName];
    return isFunction(listener) ? listener : null;
  }
  querySelector(selectors) {
    return this.container ? globalEnv.rawElementQuerySelector.call(this.container, selectors) : null;
  }
  querySelectorAll(selectors) {
    return this.container ? globalEnv.rawElementQuerySelectorAll.call(this.container, selectors) : [];
  }
  /**
   * NOTE:
   * 1. If the iframe sandbox no longer enforces the use of inline mode in the future, the way getElementsByTagName retrieves the script from the iframe by default needs to be changed, because in non inline mode, the script in the iframe may be empty
   * @param inline inline mode config
   */
  getInlineModeState(inline) {
    var _a;
    return (_a = this.iframe || inline) !== null && _a !== void 0 ? _a : false;
  }
}
function isIframeSandbox(appName) {
  var _a, _b;
  return (_b = (_a = appInstanceMap.get(appName)) === null || _a === void 0 ? void 0 : _a.iframe) !== null && _b !== void 0 ? _b : false;
}
const dynamicElementInMicroAppMap = /* @__PURE__ */ new WeakMap();
function getMappingNode(node) {
  var _a;
  return (_a = dynamicElementInMicroAppMap.get(node)) !== null && _a !== void 0 ? _a : node;
}
function handleNewNode(child, app) {
  if (dynamicElementInMicroAppMap.has(child)) {
    return dynamicElementInMicroAppMap.get(child);
  } else if (isStyleElement(child)) {
    if (child.hasAttribute("exclude")) {
      const replaceComment = document.createComment("style element with exclude attribute ignored by micro-app");
      dynamicElementInMicroAppMap.set(child, replaceComment);
      return replaceComment;
    } else if (app.scopecss && !child.hasAttribute("ignore")) {
      return scopedCSS(child, app);
    }
    return child;
  } else if (isLinkElement(child)) {
    if (child.hasAttribute("exclude") || checkExcludeUrl(child.getAttribute("href"), app.name)) {
      const linkReplaceComment = document.createComment("link element with exclude attribute ignored by micro-app");
      dynamicElementInMicroAppMap.set(child, linkReplaceComment);
      return linkReplaceComment;
    } else if (child.hasAttribute("ignore") || checkIgnoreUrl(child.getAttribute("href"), app.name) || child.href && isFunction(microApp.options.excludeAssetFilter) && microApp.options.excludeAssetFilter(child.href)) {
      return child;
    }
    const { address, linkInfo, replaceComment } = extractLinkFromHtml(child, null, app, true);
    if (address && linkInfo) {
      const replaceStyle = formatDynamicLink(address, app, linkInfo, child);
      dynamicElementInMicroAppMap.set(child, replaceStyle);
      return replaceStyle;
    } else if (replaceComment) {
      dynamicElementInMicroAppMap.set(child, replaceComment);
      return replaceComment;
    }
    return child;
  } else if (isScriptElement(child)) {
    if (child.src && isFunction(microApp.options.excludeAssetFilter) && microApp.options.excludeAssetFilter(child.src)) {
      return child;
    }
    const { replaceComment, address, scriptInfo } = extractScriptElement(child, null, app, true) || {};
    if (address && scriptInfo) {
      const replaceElement = scriptInfo.isExternal ? runDynamicRemoteScript(address, app, scriptInfo, child) : runDynamicInlineScript(address, app, scriptInfo);
      dynamicElementInMicroAppMap.set(child, replaceElement);
      return replaceElement;
    } else if (replaceComment) {
      dynamicElementInMicroAppMap.set(child, replaceComment);
      return replaceComment;
    }
    return child;
  }
  return child;
}
function invokePrototypeMethod(app, rawMethod, parent, targetChild, passiveChild) {
  const hijackParent = getHijackParent(parent, targetChild, app);
  if (hijackParent) {
    if (!isIframeSandbox(app.name) && isMicroAppBody(hijackParent) && rawMethod !== globalEnv.rawRemoveChild) {
      const descriptor = Object.getOwnPropertyDescriptor(targetChild, "parentNode");
      if ((!descriptor || descriptor.configurable) && !targetChild.__MICRO_APP_HAS_DPN__) {
        rawDefineProperties(targetChild, {
          parentNode: {
            configurable: true,
            get() {
              var _a, _b;
              const result = globalEnv.rawParentNodeDesc.get.call(this);
              if (isMicroAppBody(result) && app.container) {
                return ((_b = (_a = microApp.options).getRootElementParentNode) === null || _b === void 0 ? void 0 : _b.call(_a, this, app.name)) || document.body;
              }
              return result;
            }
          },
          __MICRO_APP_HAS_DPN__: {
            configurable: true,
            get: () => true
          }
        });
      }
    }
    if (passiveChild && !hijackParent.contains(passiveChild)) {
      if (rawMethod === globalEnv.rawInsertBefore && parent.contains(passiveChild)) {
        const indexOfParent = Array.from(parent.childNodes).indexOf(passiveChild);
        if (hijackParent.childNodes[indexOfParent]) {
          return invokeRawMethod(rawMethod, hijackParent, targetChild, hijackParent.childNodes[indexOfParent]);
        }
      }
      return globalEnv.rawAppendChild.call(hijackParent, targetChild);
    } else if (rawMethod === globalEnv.rawRemoveChild && !hijackParent.contains(targetChild)) {
      if (parent.contains(targetChild)) {
        return rawMethod.call(parent, targetChild);
      }
      return targetChild;
    }
    return invokeRawMethod(rawMethod, hijackParent, targetChild, passiveChild);
  }
  return invokeRawMethod(rawMethod, parent, targetChild, passiveChild);
}
function getHijackParent(parent, targetChild, app) {
  if (app) {
    if (parent === document.head) {
      if (app.iframe && isScriptElement(targetChild)) {
        return app.sandBox.microHead;
      }
      return app.querySelector("micro-app-head");
    }
    if (parent === document.body || parent === document.body.parentNode) {
      if (app.iframe && isScriptElement(targetChild)) {
        return app.sandBox.microBody;
      }
      return app.querySelector("micro-app-body");
    }
    if (app.iframe && isScriptElement(targetChild)) {
      return app.sandBox.microBody;
    }
  }
  return null;
}
function invokeRawMethod(rawMethod, parent, targetChild, passiveChild) {
  if (isPendMethod(rawMethod)) {
    return rawMethod.call(parent, targetChild);
  }
  return rawMethod.call(parent, targetChild, passiveChild);
}
function isPendMethod(method) {
  return method === globalEnv.rawAppend || method === globalEnv.rawPrepend;
}
function completePathDynamic(app, newChild) {
  if (isElement(newChild)) {
    if (/^(img|script)$/i.test(newChild.tagName)) {
      if (newChild.hasAttribute("src")) {
        globalEnv.rawSetAttribute.call(newChild, "src", CompletionPath(newChild.getAttribute("src"), app.url));
      }
      if (newChild.hasAttribute("srcset")) {
        globalEnv.rawSetAttribute.call(newChild, "srcset", CompletionPath(newChild.getAttribute("srcset"), app.url));
      }
    } else if (/^link$/i.test(newChild.tagName) && newChild.hasAttribute("href")) {
      globalEnv.rawSetAttribute.call(newChild, "href", CompletionPath(newChild.getAttribute("href"), app.url));
    }
  }
}
function commonElementHandler(parent, newChild, passiveChild, rawMethod) {
  const currentAppName = getCurrentAppName();
  if (isNode(newChild) && !newChild.__PURE_ELEMENT__ && (newChild.__MICRO_APP_NAME__ || currentAppName)) {
    newChild.__MICRO_APP_NAME__ = newChild.__MICRO_APP_NAME__ || currentAppName;
    const app = appInstanceMap.get(newChild.__MICRO_APP_NAME__);
    if (isStyleElement(newChild)) {
      const isShadowNode = parent.getRootNode();
      const isShadowEnvironment = isShadowNode instanceof ShadowRoot;
      isShadowEnvironment && newChild.setAttribute("ignore", "true");
    }
    if (app === null || app === void 0 ? void 0 : app.container) {
      completePathDynamic(app, newChild);
      return invokePrototypeMethod(app, rawMethod, parent, handleNewNode(newChild, app), passiveChild && getMappingNode(passiveChild));
    }
  }
  if (rawMethod === globalEnv.rawAppend || rawMethod === globalEnv.rawPrepend) {
    return rawMethod.call(parent, newChild);
  }
  return rawMethod.call(parent, newChild, passiveChild);
}
function patchElementAndDocument() {
  patchDocument$2();
  const rawRootElement = globalEnv.rawRootElement;
  const rawRootNode = globalEnv.rawRootNode;
  rawRootElement.prototype.appendChild = function appendChild(newChild) {
    return commonElementHandler(this, newChild, null, globalEnv.rawAppendChild);
  };
  rawRootElement.prototype.insertBefore = function insertBefore(newChild, refChild) {
    return commonElementHandler(this, newChild, refChild, globalEnv.rawInsertBefore);
  };
  rawRootElement.prototype.replaceChild = function replaceChild(newChild, oldChild) {
    return commonElementHandler(this, newChild, oldChild, globalEnv.rawReplaceChild);
  };
  rawRootElement.prototype.append = function append(...nodes) {
    let i = 0;
    while (i < nodes.length) {
      let node = nodes[i];
      node = isNode(node) ? node : globalEnv.rawCreateTextNode.call(globalEnv.rawDocument, node);
      commonElementHandler(this, markElement(node), null, globalEnv.rawAppend);
      i++;
    }
  };
  rawRootElement.prototype.prepend = function prepend(...nodes) {
    let i = nodes.length;
    while (i > 0) {
      let node = nodes[i - 1];
      node = isNode(node) ? node : globalEnv.rawCreateTextNode.call(globalEnv.rawDocument, node);
      commonElementHandler(this, markElement(node), null, globalEnv.rawPrepend);
      i--;
    }
  };
  rawRootElement.prototype.removeChild = function removeChild(oldChild) {
    if (oldChild === null || oldChild === void 0 ? void 0 : oldChild.__MICRO_APP_NAME__) {
      const app = appInstanceMap.get(oldChild.__MICRO_APP_NAME__);
      if (app === null || app === void 0 ? void 0 : app.container) {
        return invokePrototypeMethod(app, globalEnv.rawRemoveChild, this, getMappingNode(oldChild));
      }
      try {
        return globalEnv.rawRemoveChild.call(this, oldChild);
      } catch (_a) {
        return (oldChild === null || oldChild === void 0 ? void 0 : oldChild.parentNode) && globalEnv.rawRemoveChild.call(oldChild.parentNode, oldChild);
      }
    }
    return globalEnv.rawRemoveChild.call(this, oldChild);
  };
  rawRootElement.prototype.insertAdjacentElement = function(where, element) {
    var _a;
    if ((element === null || element === void 0 ? void 0 : element.__MICRO_APP_NAME__) && isElement(element)) {
      const app = appInstanceMap.get(element.__MICRO_APP_NAME__);
      if (app === null || app === void 0 ? void 0 : app.container) {
        const processedEle = handleNewNode(element, app);
        if (!isElement(processedEle))
          return element;
        const realParent = (_a = getHijackParent(this, processedEle, app)) !== null && _a !== void 0 ? _a : this;
        return globalEnv.rawInsertAdjacentElement.call(realParent, where, processedEle);
      }
    }
    return globalEnv.rawInsertAdjacentElement.call(this, where, element);
  };
  rawRootElement.prototype.cloneNode = function cloneNode(deep) {
    const clonedNode = globalEnv.rawCloneNode.call(this, deep);
    this.__MICRO_APP_NAME__ && (clonedNode.__MICRO_APP_NAME__ = this.__MICRO_APP_NAME__);
    return clonedNode;
  };
  function getQueryTarget(target) {
    const currentAppName = getCurrentAppName();
    if ((target === document.body || target === document.head) && currentAppName) {
      const app = appInstanceMap.get(currentAppName);
      if (app === null || app === void 0 ? void 0 : app.container) {
        if (target === document.body) {
          return app.querySelector("micro-app-body");
        } else if (target === document.head) {
          return app.querySelector("micro-app-head");
        }
      }
    }
    return target;
  }
  rawRootElement.prototype.querySelector = function querySelector(selectors) {
    var _a;
    return globalEnv.rawElementQuerySelector.call((_a = getQueryTarget(this)) !== null && _a !== void 0 ? _a : this, selectors);
  };
  rawRootElement.prototype.querySelectorAll = function querySelectorAll(selectors) {
    var _a;
    return globalEnv.rawElementQuerySelectorAll.call((_a = getQueryTarget(this)) !== null && _a !== void 0 ? _a : this, selectors);
  };
  rawRootElement.prototype.setAttribute = function setAttribute(key, value) {
    const appName = this.__MICRO_APP_NAME__ || getCurrentAppName();
    if (appName && appInstanceMap.has(appName) && ((key === "src" || key === "srcset") && /^(img|script|video|audio|source|embed)$/i.test(this.tagName) || key === "href" && /^link$/i.test(this.tagName))) {
      const app = appInstanceMap.get(appName);
      value = CompletionPath(value, app.url);
    }
    globalEnv.rawSetAttribute.call(this, key, value);
  };
  rawDefineProperty(rawRootElement.prototype, "innerHTML", {
    configurable: true,
    enumerable: true,
    get() {
      return globalEnv.rawInnerHTMLDesc.get.call(this);
    },
    set(code) {
      globalEnv.rawInnerHTMLDesc.set.call(this, code);
      const currentAppName = getCurrentAppName();
      Array.from(this.children).forEach((child) => {
        if (isElement(child) && currentAppName) {
          child.__MICRO_APP_NAME__ = currentAppName;
        }
      });
    }
  });
  rawDefineProperty(rawRootNode.prototype, "parentNode", {
    configurable: true,
    enumerable: true,
    get() {
      var _a, _b, _c;
      const currentAppName = getCurrentAppName();
      if (currentAppName && this === globalEnv.rawDocument.firstElementChild) {
        const microDocument = (_c = (_b = (_a = appInstanceMap.get(currentAppName)) === null || _a === void 0 ? void 0 : _a.sandBox) === null || _b === void 0 ? void 0 : _b.proxyWindow) === null || _c === void 0 ? void 0 : _c.document;
        if (microDocument)
          return microDocument;
      }
      const result = globalEnv.rawParentNodeDesc.get.call(this);
      return result;
    }
  });
}
function markElement(element) {
  const currentAppName = getCurrentAppName();
  if (currentAppName)
    element.__MICRO_APP_NAME__ = currentAppName;
  return element;
}
function patchDocument$2() {
  const rawDocument = globalEnv.rawDocument;
  const rawRootDocument = globalEnv.rawRootDocument;
  function getBindTarget(target) {
    return isProxyDocument(target) ? rawDocument : target;
  }
  rawRootDocument.prototype.createElement = function createElement(tagName, options) {
    const element = globalEnv.rawCreateElement.call(getBindTarget(this), tagName, options);
    return markElement(element);
  };
  rawRootDocument.prototype.createElementNS = function createElementNS(namespaceURI, name, options) {
    const element = globalEnv.rawCreateElementNS.call(getBindTarget(this), namespaceURI, name, options);
    return markElement(element);
  };
  rawRootDocument.prototype.createDocumentFragment = function createDocumentFragment() {
    const element = globalEnv.rawCreateDocumentFragment.call(getBindTarget(this));
    return markElement(element);
  };
  rawRootDocument.prototype.createComment = function createComment(data) {
    const element = globalEnv.rawCreateComment.call(getBindTarget(this), data);
    return markElement(element);
  };
  function querySelector(selectors) {
    var _a, _b;
    const _this = getBindTarget(this);
    const currentAppName = getCurrentAppName();
    if (!currentAppName || !selectors || isUniqueElement(selectors) || // ISSUE: https://github.com/micro-zoe/micro-app/issues/56
    rawDocument !== _this) {
      return globalEnv.rawQuerySelector.call(_this, selectors);
    }
    return (_b = (_a = appInstanceMap.get(currentAppName)) === null || _a === void 0 ? void 0 : _a.querySelector(selectors)) !== null && _b !== void 0 ? _b : null;
  }
  function querySelectorAll(selectors) {
    var _a, _b;
    const _this = getBindTarget(this);
    const currentAppName = getCurrentAppName();
    if (!currentAppName || !selectors || isUniqueElement(selectors) || rawDocument !== _this) {
      return globalEnv.rawQuerySelectorAll.call(_this, selectors);
    }
    return (_b = (_a = appInstanceMap.get(currentAppName)) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selectors)) !== null && _b !== void 0 ? _b : [];
  }
  rawRootDocument.prototype.querySelector = querySelector;
  rawRootDocument.prototype.querySelectorAll = querySelectorAll;
  rawRootDocument.prototype.getElementById = function getElementById(key) {
    const _this = getBindTarget(this);
    if (!getCurrentAppName() || isInvalidQuerySelectorKey(key)) {
      return globalEnv.rawGetElementById.call(_this, key);
    }
    try {
      return querySelector.call(_this, `#${key}`);
    } catch (_a) {
      return globalEnv.rawGetElementById.call(_this, key);
    }
  };
  rawRootDocument.prototype.getElementsByClassName = function getElementsByClassName(key) {
    const _this = getBindTarget(this);
    if (!getCurrentAppName() || isInvalidQuerySelectorKey(key)) {
      return globalEnv.rawGetElementsByClassName.call(_this, key);
    }
    try {
      return querySelectorAll.call(_this, `.${key}`);
    } catch (_a) {
      return globalEnv.rawGetElementsByClassName.call(_this, key);
    }
  };
  rawRootDocument.prototype.getElementsByTagName = function getElementsByTagName(key) {
    var _a;
    const _this = getBindTarget(this);
    const currentAppName = getCurrentAppName();
    if (!currentAppName || isUniqueElement(key) || isInvalidQuerySelectorKey(key) || !((_a = appInstanceMap.get(currentAppName)) === null || _a === void 0 ? void 0 : _a.inline) && /^script$/i.test(key)) {
      return globalEnv.rawGetElementsByTagName.call(_this, key);
    }
    try {
      return querySelectorAll.call(_this, key);
    } catch (_b) {
      return globalEnv.rawGetElementsByTagName.call(_this, key);
    }
  };
  rawRootDocument.prototype.getElementsByName = function getElementsByName(key) {
    const _this = getBindTarget(this);
    if (!getCurrentAppName() || isInvalidQuerySelectorKey(key)) {
      return globalEnv.rawGetElementsByName.call(_this, key);
    }
    try {
      return querySelectorAll.call(_this, `[name=${key}]`);
    } catch (_a) {
      return globalEnv.rawGetElementsByName.call(_this, key);
    }
  };
}
function releasePatchDocument() {
  const rawRootDocument = globalEnv.rawRootDocument;
  rawRootDocument.prototype.createElement = globalEnv.rawCreateElement;
  rawRootDocument.prototype.createElementNS = globalEnv.rawCreateElementNS;
  rawRootDocument.prototype.createDocumentFragment = globalEnv.rawCreateDocumentFragment;
  rawRootDocument.prototype.querySelector = globalEnv.rawQuerySelector;
  rawRootDocument.prototype.querySelectorAll = globalEnv.rawQuerySelectorAll;
  rawRootDocument.prototype.getElementById = globalEnv.rawGetElementById;
  rawRootDocument.prototype.getElementsByClassName = globalEnv.rawGetElementsByClassName;
  rawRootDocument.prototype.getElementsByTagName = globalEnv.rawGetElementsByTagName;
  rawRootDocument.prototype.getElementsByName = globalEnv.rawGetElementsByName;
}
function releasePatchElementAndDocument() {
  removeDomScope();
  releasePatchDocument();
  const rawRootElement = globalEnv.rawRootElement;
  const rawRootNode = globalEnv.rawRootNode;
  rawRootElement.prototype.appendChild = globalEnv.rawAppendChild;
  rawRootElement.prototype.insertBefore = globalEnv.rawInsertBefore;
  rawRootElement.prototype.replaceChild = globalEnv.rawReplaceChild;
  rawRootElement.prototype.removeChild = globalEnv.rawRemoveChild;
  rawRootElement.prototype.append = globalEnv.rawAppend;
  rawRootElement.prototype.prepend = globalEnv.rawPrepend;
  rawRootElement.prototype.cloneNode = globalEnv.rawCloneNode;
  rawRootElement.prototype.querySelector = globalEnv.rawElementQuerySelector;
  rawRootElement.prototype.querySelectorAll = globalEnv.rawElementQuerySelectorAll;
  rawRootElement.prototype.setAttribute = globalEnv.rawSetAttribute;
  rawDefineProperty(rawRootElement.prototype, "innerHTML", globalEnv.rawInnerHTMLDesc);
  rawDefineProperty(rawRootNode.prototype, "parentNode", globalEnv.rawParentNodeDesc);
}
let hasRejectMicroAppStyle = false;
function rejectMicroAppStyle() {
  if (!hasRejectMicroAppStyle) {
    hasRejectMicroAppStyle = true;
    const style = pureCreateElement("style");
    globalEnv.rawSetAttribute.call(style, "type", "text/css");
    style.textContent = `
${microApp.tagName}, micro-app-body { display: block; } 
micro-app-head { display: none; }`;
    globalEnv.rawDocument.head.appendChild(style);
  }
}
const globalEnv = {
  // active sandbox count
  activeSandbox: 0
};
function initGlobalEnv() {
  if (isBrowser) {
    const rawWindow = window.rawWindow || Function("return window")();
    const rawDocument = window.rawDocument || Function("return document")();
    const rawRootDocument = rawWindow.Document || Function("return Document")();
    const rawRootElement = rawWindow.Element;
    const rawRootNode = rawWindow.Node;
    const rawRootEventTarget = rawWindow.EventTarget;
    const rawSetAttribute = rawRootElement.prototype.setAttribute;
    const rawAppendChild = rawRootElement.prototype.appendChild;
    const rawInsertBefore = rawRootElement.prototype.insertBefore;
    const rawReplaceChild = rawRootElement.prototype.replaceChild;
    const rawRemoveChild = rawRootElement.prototype.removeChild;
    const rawAppend = rawRootElement.prototype.append;
    const rawPrepend = rawRootElement.prototype.prepend;
    const rawCloneNode = rawRootElement.prototype.cloneNode;
    const rawElementQuerySelector = rawRootElement.prototype.querySelector;
    const rawElementQuerySelectorAll = rawRootElement.prototype.querySelectorAll;
    const rawInsertAdjacentElement = rawRootElement.prototype.insertAdjacentElement;
    const rawInnerHTMLDesc = Object.getOwnPropertyDescriptor(rawRootElement.prototype, "innerHTML");
    const rawParentNodeDesc = Object.getOwnPropertyDescriptor(rawRootNode.prototype, "parentNode");
    const rawCreateElement = rawRootDocument.prototype.createElement;
    const rawCreateElementNS = rawRootDocument.prototype.createElementNS;
    const rawCreateTextNode = rawRootDocument.prototype.createTextNode;
    const rawCreateDocumentFragment = rawRootDocument.prototype.createDocumentFragment;
    const rawCreateComment = rawRootDocument.prototype.createComment;
    const rawQuerySelector = rawRootDocument.prototype.querySelector;
    const rawQuerySelectorAll = rawRootDocument.prototype.querySelectorAll;
    const rawGetElementById = rawRootDocument.prototype.getElementById;
    const rawGetElementsByClassName = rawRootDocument.prototype.getElementsByClassName;
    const rawGetElementsByTagName = rawRootDocument.prototype.getElementsByTagName;
    const rawGetElementsByName = rawRootDocument.prototype.getElementsByName;
    const ImageProxy = new Proxy(Image, {
      construct(Target, args) {
        const elementImage = new Target(...args);
        const currentAppName = getCurrentAppName();
        if (currentAppName)
          elementImage.__MICRO_APP_NAME__ = currentAppName;
        return elementImage;
      }
    });
    const rawSetInterval = rawWindow.setInterval;
    const rawSetTimeout = rawWindow.setTimeout;
    const rawClearInterval = rawWindow.clearInterval;
    const rawClearTimeout = rawWindow.clearTimeout;
    const rawPushState = rawWindow.history.pushState;
    const rawReplaceState = rawWindow.history.replaceState;
    const rawAddEventListener = rawRootEventTarget.prototype.addEventListener;
    const rawRemoveEventListener = rawRootEventTarget.prototype.removeEventListener;
    const rawDispatchEvent = rawRootEventTarget.prototype.dispatchEvent;
    window.__MICRO_APP_BASE_APPLICATION__ = true;
    assign(globalEnv, {
      supportModuleScript: isSupportModuleScript(),
      // common global vars
      rawWindow,
      rawDocument,
      rawRootDocument,
      rawRootElement,
      rawRootNode,
      // source/patch
      rawSetAttribute,
      rawAppendChild,
      rawInsertBefore,
      rawReplaceChild,
      rawRemoveChild,
      rawAppend,
      rawPrepend,
      rawCloneNode,
      rawElementQuerySelector,
      rawElementQuerySelectorAll,
      rawInsertAdjacentElement,
      rawInnerHTMLDesc,
      rawParentNodeDesc,
      rawCreateElement,
      rawCreateElementNS,
      rawCreateDocumentFragment,
      rawCreateTextNode,
      rawCreateComment,
      rawQuerySelector,
      rawQuerySelectorAll,
      rawGetElementById,
      rawGetElementsByClassName,
      rawGetElementsByTagName,
      rawGetElementsByName,
      ImageProxy,
      // sandbox/effect
      rawSetInterval,
      rawSetTimeout,
      rawClearInterval,
      rawClearTimeout,
      rawPushState,
      rawReplaceState,
      rawAddEventListener,
      rawRemoveEventListener,
      rawDispatchEvent
    });
    rejectMicroAppStyle();
  }
}
function defineElement(tagName) {
  class MicroAppElement extends getBaseHTMLElement() {
    constructor() {
      super(...arguments);
      this.isWaiting = false;
      this.cacheData = null;
      this.connectedCount = 0;
      this.connectStateMap = /* @__PURE__ */ new Map();
      this.appName = "";
      this.appUrl = "";
      this.ssrUrl = "";
      this.version = version;
      this.handleAttributeUpdate = () => {
        this.isWaiting = false;
        const formatAttrName = formatAppName(this.getAttribute("name"));
        const formatAttrUrl = formatAppURL(this.getAttribute("url"), this.appName);
        if (this.legalAttribute("name", formatAttrName) && this.legalAttribute("url", formatAttrUrl)) {
          const oldApp = appInstanceMap.get(formatAttrName);
          if (formatAttrName !== this.appName && oldApp) {
            if (!oldApp.isUnmounted() && !oldApp.isHidden() && !oldApp.isPrefetch) {
              this.setAttribute("name", this.appName);
              return logError(`app name conflict, an app named ${formatAttrName} is running`);
            }
          }
          if (formatAttrName !== this.appName || formatAttrUrl !== this.appUrl) {
            if (formatAttrName === this.appName) {
              this.unmount(true, () => {
                this.actionsForAttributeChange(formatAttrName, formatAttrUrl, oldApp);
              });
            } else if (this.getKeepAliveModeResult()) {
              this.handleHiddenKeepAliveApp();
              this.actionsForAttributeChange(formatAttrName, formatAttrUrl, oldApp);
            } else {
              this.unmount(false, () => {
                this.actionsForAttributeChange(formatAttrName, formatAttrUrl, oldApp);
              });
            }
          }
        } else if (formatAttrName !== this.appName) {
          this.setAttribute("name", this.appName);
        }
      };
    }
    static get observedAttributes() {
      return ["name", "url"];
    }
    // 👇 Configuration
    // name: app name
    // url: html address
    // shadowDom: use shadowDOM, default is false
    // destroy: whether delete cache resources when unmount, default is false
    // inline: whether js runs in inline script mode, default is false
    // disableScopecss: whether disable css scoped, default is false
    // disableSandbox: whether disable sandbox, default is false
    // baseRoute: route prefix, default is ''
    // keep-alive: open keep-alive mode
    connectedCallback() {
      const cacheCount = ++this.connectedCount;
      this.connectStateMap.set(cacheCount, true);
      const effectiveApp = this.appName && this.appUrl;
      defer(() => {
        if (this.connectStateMap.get(cacheCount)) {
          dispatchLifecyclesEvent(this, this.appName, lifeCycles.CREATED);
          effectiveApp && this.handleConnected();
        }
      });
    }
    disconnectedCallback() {
      this.connectStateMap.set(this.connectedCount, false);
      this.handleDisconnected();
    }
    /**
     * Re render app from the command line
     * MicroAppElement.reload(destroy)
     */
    reload(destroy) {
      return new Promise((resolve) => {
        const handleAfterReload = () => {
          this.removeEventListener(lifeCycles.MOUNTED, handleAfterReload);
          this.removeEventListener(lifeCycles.AFTERSHOW, handleAfterReload);
          resolve(true);
        };
        this.addEventListener(lifeCycles.MOUNTED, handleAfterReload);
        this.addEventListener(lifeCycles.AFTERSHOW, handleAfterReload);
        this.handleDisconnected(destroy, () => {
          this.handleConnected();
        });
      });
    }
    /**
     * common action for unmount
     * @param destroy reload param
     */
    handleDisconnected(destroy = false, callback) {
      const app = appInstanceMap.get(this.appName);
      if (app && !app.isUnmounted() && !app.isHidden()) {
        if (this.getKeepAliveModeResult() && !destroy) {
          this.handleHiddenKeepAliveApp(callback);
        } else {
          this.unmount(destroy, callback);
        }
      }
    }
    attributeChangedCallback(attr, _oldVal, newVal) {
      if (this.legalAttribute(attr, newVal) && this[attr === ObservedAttrName.NAME ? "appName" : "appUrl"] !== newVal) {
        if (attr === ObservedAttrName.URL && (!this.appUrl || !this.connectStateMap.get(this.connectedCount))) {
          newVal = formatAppURL(newVal, this.appName);
          if (!newVal) {
            return logError(`Invalid attribute url ${newVal}`, this.appName);
          }
          this.appUrl = newVal;
          this.handleInitialNameAndUrl();
        } else if (attr === ObservedAttrName.NAME && (!this.appName || !this.connectStateMap.get(this.connectedCount))) {
          const formatNewName = formatAppName(newVal);
          if (!formatNewName) {
            return logError(`Invalid attribute name ${newVal}`, this.appName);
          }
          if (this.cacheData) {
            microApp.setData(formatNewName, this.cacheData);
            this.cacheData = null;
          }
          this.appName = formatNewName;
          if (formatNewName !== newVal) {
            this.setAttribute("name", this.appName);
          }
          this.handleInitialNameAndUrl();
        } else if (!this.isWaiting) {
          this.isWaiting = true;
          defer(this.handleAttributeUpdate);
        }
      }
    }
    // handle for connectedCallback run before attributeChangedCallback
    handleInitialNameAndUrl() {
      this.connectStateMap.get(this.connectedCount) && this.handleConnected();
    }
    /**
     * first mount of this app
     */
    handleConnected() {
      if (!this.appName || !this.appUrl)
        return;
      if (this.getDisposeResult("shadowDOM") && !this.shadowRoot && isFunction(this.attachShadow)) {
        this.attachShadow({ mode: "open" });
      }
      this.updateSsrUrl(this.appUrl);
      if (appInstanceMap.has(this.appName)) {
        const oldApp = appInstanceMap.get(this.appName);
        const oldAppUrl = oldApp.ssrUrl || oldApp.url;
        const targetUrl = this.ssrUrl || this.appUrl;
        if (oldApp.isHidden() && oldApp.url === this.appUrl) {
          this.handleShowKeepAliveApp(oldApp);
        } else if (oldAppUrl === targetUrl && (oldApp.isUnmounted() || oldApp.isPrefetch && this.sameCoreOptions(oldApp))) {
          this.handleMount(oldApp);
        } else if (oldApp.isPrefetch || oldApp.isUnmounted()) {
          this.handleCreateApp();
        } else {
          logError(`app name conflict, an app named: ${this.appName} with url: ${oldAppUrl} is running`);
        }
      } else {
        this.handleCreateApp();
      }
    }
    // remount app or create app if attribute url or name change
    actionsForAttributeChange(formatAttrName, formatAttrUrl, oldApp) {
      var _a;
      this.updateSsrUrl(formatAttrUrl);
      this.appName = formatAttrName;
      this.appUrl = formatAttrUrl;
      ((_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this).innerHTML = "";
      if (formatAttrName !== this.getAttribute("name")) {
        this.setAttribute("name", this.appName);
      }
      if (oldApp) {
        if (oldApp.isHidden()) {
          if (oldApp.url === this.appUrl) {
            this.handleShowKeepAliveApp(oldApp);
          } else {
            logError(`app name conflict, an app named ${this.appName} is running`);
          }
        } else if (oldApp.url === this.appUrl && oldApp.ssrUrl === this.ssrUrl) {
          this.handleMount(oldApp);
        } else {
          this.handleCreateApp();
        }
      } else {
        this.handleCreateApp();
      }
    }
    /**
     * judge the attribute is legal
     * @param name attribute name
     * @param val attribute value
     */
    legalAttribute(name, val) {
      if (!isString(val) || !val) {
        logError(`unexpected attribute ${name}, please check again`, this.appName);
        return false;
      }
      return true;
    }
    // create app instance
    handleCreateApp() {
      const createAppInstance = () => {
        var _a;
        return new CreateApp({
          name: this.appName,
          url: this.appUrl,
          container: (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this,
          scopecss: this.useScopecss(),
          useSandbox: this.useSandbox(),
          inline: this.getDisposeResult("inline"),
          iframe: this.getDisposeResult("iframe"),
          ssrUrl: this.ssrUrl,
          routerMode: this.getMemoryRouterMode()
        });
      };
      const oldApp = appInstanceMap.get(this.appName);
      if (oldApp) {
        if (oldApp.isPrerender) {
          this.unmount(true, createAppInstance);
        } else {
          oldApp.actionsForCompletelyDestroy();
          createAppInstance();
        }
      } else {
        createAppInstance();
      }
    }
    /**
     * mount app
     * some serious note before mount:
     * 1. is prefetch ?
     * 2. is remount in another container ?
     * 3. is remount with change properties of the container ?
     */
    handleMount(app) {
      app.isPrefetch = false;
      app.setAppState(appStates.BEFORE_MOUNT);
      defer(() => this.mount(app));
    }
    /**
     * public mount action for micro_app_element & create_app
     */
    mount(app) {
      var _a;
      app.mount({
        container: (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this,
        inline: this.getDisposeResult("inline"),
        routerMode: this.getMemoryRouterMode(),
        baseroute: this.getBaseRouteCompatible(),
        defaultPage: this.getDefaultPage(),
        disablePatchRequest: this.getDisposeResult("disable-patch-request"),
        fiber: this.getDisposeResult("fiber")
      });
    }
    /**
     * unmount app
     * @param destroy delete cache resources when unmount
     * @param unmountcb callback
     */
    unmount(destroy, unmountcb) {
      const app = appInstanceMap.get(this.appName);
      if (app && !app.isUnmounted()) {
        app.unmount({
          destroy: destroy || this.getDestroyCompatibleResult(),
          clearData: this.getDisposeResult("clear-data"),
          keepRouteState: this.getDisposeResult("keep-router-state"),
          unmountcb
        });
      }
    }
    // hidden app when disconnectedCallback called with keep-alive
    handleHiddenKeepAliveApp(callback) {
      const app = appInstanceMap.get(this.appName);
      if (app && !app.isUnmounted() && !app.isHidden()) {
        app.hiddenKeepAliveApp(callback);
      }
    }
    // show app when connectedCallback called with keep-alive
    handleShowKeepAliveApp(app) {
      defer(() => {
        var _a;
        return app.showKeepAliveApp((_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this);
      });
    }
    /**
     * Get configuration
     * Global setting is lowest priority
     * @param name Configuration item name
     */
    getDisposeResult(name) {
      return (this.compatibleProperties(name) || !!microApp.options[name]) && this.compatibleDisableProperties(name);
    }
    // compatible of disableScopecss & disableSandbox
    compatibleProperties(name) {
      if (name === "disable-scopecss") {
        return this.hasAttribute("disable-scopecss") || this.hasAttribute("disableScopecss");
      } else if (name === "disable-sandbox") {
        return this.hasAttribute("disable-sandbox") || this.hasAttribute("disableSandbox");
      }
      return this.hasAttribute(name);
    }
    // compatible of disableScopecss & disableSandbox
    compatibleDisableProperties(name) {
      if (name === "disable-scopecss") {
        return this.getAttribute("disable-scopecss") !== "false" && this.getAttribute("disableScopecss") !== "false";
      } else if (name === "disable-sandbox") {
        return this.getAttribute("disable-sandbox") !== "false" && this.getAttribute("disableSandbox") !== "false";
      }
      return this.getAttribute(name) !== "false";
    }
    useScopecss() {
      return !(this.getDisposeResult("disable-scopecss") || this.getDisposeResult("shadowDOM"));
    }
    useSandbox() {
      return !this.getDisposeResult("disable-sandbox");
    }
    /**
     * Determine whether the core options of the existApp is consistent with the new one
     */
    sameCoreOptions(app) {
      return app.scopecss === this.useScopecss() && app.useSandbox === this.useSandbox() && app.iframe === this.getDisposeResult("iframe");
    }
    /**
     * 2021-09-08
     * get baseRoute
     * getAttribute('baseurl') is compatible writing of versions below 0.3.1
     */
    getBaseRouteCompatible() {
      var _a, _b;
      return (_b = (_a = this.getAttribute("baseroute")) !== null && _a !== void 0 ? _a : this.getAttribute("baseurl")) !== null && _b !== void 0 ? _b : "";
    }
    // compatible of destroy
    getDestroyCompatibleResult() {
      return this.getDisposeResult("destroy") || this.getDisposeResult("destory");
    }
    /**
     * destroy has priority over destroy keep-alive
     */
    getKeepAliveModeResult() {
      return this.getDisposeResult("keep-alive") && !this.getDestroyCompatibleResult();
    }
    /**
     * change ssrUrl in ssr mode
     */
    updateSsrUrl(baseUrl) {
      if (this.getDisposeResult("ssr")) {
        if (this.getDisposeResult("disable-memory-router") || this.getDisposeResult("disableSandbox")) {
          const rawLocation = globalEnv.rawWindow.location;
          this.ssrUrl = CompletionPath(rawLocation.pathname + rawLocation.search, baseUrl);
        } else {
          let targetPath = getNoHashMicroPathFromURL(this.appName, baseUrl);
          const defaultPagePath = this.getDefaultPage();
          if (!targetPath && defaultPagePath) {
            const targetLocation = createURL(defaultPagePath, baseUrl);
            targetPath = targetLocation.origin + targetLocation.pathname + targetLocation.search;
          }
          this.ssrUrl = targetPath;
        }
      } else if (this.ssrUrl) {
        this.ssrUrl = "";
      }
    }
    /**
     * get config of default page
     */
    getDefaultPage() {
      return router.getDefaultPage(this.appName) || this.getAttribute("default-page") || this.getAttribute("defaultPage") || "";
    }
    /**
     * get config of router-mode
     * @returns router-mode
     */
    getMemoryRouterMode() {
      return getRouterMode(
        this.getAttribute("router-mode"),
        // is micro-app element set disable-memory-router, like <micro-app disable-memory-router></micro-app>
        this.compatibleProperties("disable-memory-router") && this.compatibleDisableProperties("disable-memory-router")
      );
    }
    /**
     * rewrite micro-app.setAttribute, process attr data
     * @param key attr name
     * @param value attr value
     */
    setAttribute(key, value) {
      if (key === "data") {
        if (isPlainObject(value)) {
          const cloneValue = {};
          Object.getOwnPropertyNames(value).forEach((ownKey) => {
            if (!(isString(ownKey) && ownKey.indexOf("__") === 0)) {
              cloneValue[ownKey] = value[ownKey];
            }
          });
          this.data = cloneValue;
        } else if (value !== "[object Object]") {
          logWarn("property data must be an object", this.appName);
        }
      } else {
        globalEnv.rawSetAttribute.call(this, key, value);
      }
    }
    /**
     * Data from the base application
     */
    set data(value) {
      if (this.appName) {
        microApp.setData(this.appName, value);
      } else {
        this.cacheData = value;
      }
    }
    /**
     * get data only used in jsx-custom-event once
     */
    get data() {
      if (this.appName) {
        return microApp.getData(this.appName, true);
      } else if (this.cacheData) {
        return this.cacheData;
      }
      return null;
    }
    /**
     * get publicPath from a valid address,it can used in micro-app-devtools
     */
    get publicPath() {
      return getEffectivePath(this.appUrl);
    }
    /**
     * get baseRoute from attribute,it can used in micro-app-devtools
     */
    get baseRoute() {
      return this.getBaseRouteCompatible();
    }
  }
  globalEnv.rawWindow.customElements.define(tagName, MicroAppElement);
}
function preFetch(apps, delay) {
  if (!isBrowser) {
    return logError("preFetch is only supported in browser environment");
  }
  requestIdleCallback(() => {
    const delayTime = isNumber(delay) ? delay : microApp.options.prefetchDelay;
    setTimeout(() => {
      preFetchInSerial(apps);
    }, isNumber(delayTime) ? delayTime : 3e3);
  });
}
function preFetchInSerial(apps) {
  isFunction(apps) && (apps = apps());
  if (isArray(apps)) {
    apps.reduce((pre, next) => pre.then(() => preFetchAction(next)), Promise.resolve());
  }
}
function preFetchAction(options) {
  return promiseRequestIdle((resolve) => {
    var _a, _b, _c, _d, _e, _f;
    if (isPlainObject(options) && navigator.onLine) {
      options.name = formatAppName(options.name);
      options.url = formatAppURL(options.url, options.name);
      if (options.name && options.url && !appInstanceMap.has(options.name)) {
        const app = new CreateApp({
          name: options.name,
          url: options.url,
          isPrefetch: true,
          scopecss: !((_b = (_a = options["disable-scopecss"]) !== null && _a !== void 0 ? _a : options.disableScopecss) !== null && _b !== void 0 ? _b : microApp.options["disable-scopecss"]),
          useSandbox: !((_d = (_c = options["disable-sandbox"]) !== null && _c !== void 0 ? _c : options.disableSandbox) !== null && _d !== void 0 ? _d : microApp.options["disable-sandbox"]),
          inline: (_e = options.inline) !== null && _e !== void 0 ? _e : microApp.options.inline,
          iframe: (_f = options.iframe) !== null && _f !== void 0 ? _f : microApp.options.iframe,
          prefetchLevel: options.level && PREFETCH_LEVEL.includes(options.level) ? options.level : microApp.options.prefetchLevel && PREFETCH_LEVEL.includes(microApp.options.prefetchLevel) ? microApp.options.prefetchLevel : 2
        });
        const oldOnload = app.onLoad;
        const oldOnLoadError = app.onLoadError;
        app.onLoad = (onLoadParam) => {
          if (app.isPrerender) {
            assign(onLoadParam, {
              defaultPage: options["default-page"],
              /**
               * TODO: 预渲染支持disable-memory-router，默认渲染首页即可，文档中也要保留
               * 问题：
               *  1、如何确保子应用进行跳转时不影响到浏览器地址？？pure？？
               */
              routerMode: getRouterMode(options["router-mode"]),
              baseroute: options.baseroute,
              disablePatchRequest: options["disable-patch-request"]
            });
          }
          resolve();
          oldOnload.call(app, onLoadParam);
        };
        app.onLoadError = (...rests) => {
          resolve();
          oldOnLoadError.call(app, ...rests);
        };
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function getGlobalAssets(assets) {
  if (isPlainObject(assets)) {
    requestIdleCallback(() => {
      fetchGlobalResources(assets.js, "js", sourceCenter.script);
      fetchGlobalResources(assets.css, "css", sourceCenter.link);
    });
  }
}
function fetchGlobalResources(resources, suffix, sourceHandler) {
  if (isArray(resources)) {
    const effectiveResource = resources.filter((path) => isString(path) && path.includes(`.${suffix}`) && !sourceHandler.hasInfo(path));
    const fetchResourcePromise = effectiveResource.map((path) => fetchSource(path));
    promiseStream(fetchResourcePromise, (res) => {
      const path = effectiveResource[res.index];
      if (suffix === "js") {
        if (!sourceHandler.hasInfo(path)) {
          sourceHandler.setInfo(path, {
            code: res.data,
            isExternal: false,
            appSpace: {}
          });
        }
      } else {
        if (!sourceHandler.hasInfo(path)) {
          sourceHandler.setInfo(path, {
            code: res.data,
            appSpace: {}
          });
        }
      }
    }, (err) => {
      logError(err);
    });
  }
}
function getActiveApps({ excludeHiddenApp = false, excludePreRender = false } = {}) {
  const activeApps = [];
  appInstanceMap.forEach((app, appName) => {
    if (!app.isUnmounted() && (!app.isPrefetch || app.isPrerender && !excludePreRender) && (!excludeHiddenApp || !app.isHidden())) {
      activeApps.push(appName);
    }
  });
  return activeApps;
}
function getAllApps() {
  return Array.from(appInstanceMap.keys());
}
function unmountApp(appName, options) {
  const app = appInstanceMap.get(formatAppName(appName));
  return new Promise((resolve) => {
    if (app) {
      if (app.isUnmounted() || app.isPrefetch) {
        if (app.isPrerender) {
          app.unmount({
            destroy: !!(options === null || options === void 0 ? void 0 : options.destroy),
            clearData: !!(options === null || options === void 0 ? void 0 : options.clearData),
            keepRouteState: false,
            unmountcb: resolve.bind(null, true)
          });
        } else {
          if (options === null || options === void 0 ? void 0 : options.destroy)
            app.actionsForCompletelyDestroy();
          resolve(true);
        }
      } else if (app.isHidden()) {
        if (options === null || options === void 0 ? void 0 : options.destroy) {
          app.unmount({
            destroy: true,
            clearData: true,
            keepRouteState: true,
            unmountcb: resolve.bind(null, true)
          });
        } else if (options === null || options === void 0 ? void 0 : options.clearAliveState) {
          app.unmount({
            destroy: false,
            clearData: !!options.clearData,
            keepRouteState: true,
            unmountcb: resolve.bind(null, true)
          });
        } else {
          resolve(true);
        }
      } else {
        const container = getRootContainer(app.container);
        const unmountHandler = () => {
          container.removeEventListener(lifeCycles.UNMOUNT, unmountHandler);
          container.removeEventListener(lifeCycles.AFTERHIDDEN, afterhiddenHandler);
          resolve(true);
        };
        const afterhiddenHandler = () => {
          container.removeEventListener(lifeCycles.UNMOUNT, unmountHandler);
          container.removeEventListener(lifeCycles.AFTERHIDDEN, afterhiddenHandler);
          resolve(true);
        };
        container.addEventListener(lifeCycles.UNMOUNT, unmountHandler);
        container.addEventListener(lifeCycles.AFTERHIDDEN, afterhiddenHandler);
        if (options === null || options === void 0 ? void 0 : options.destroy) {
          let destroyAttrValue, destoryAttrValue;
          container.hasAttribute("destroy") && (destroyAttrValue = container.getAttribute("destroy"));
          container.hasAttribute("destory") && (destoryAttrValue = container.getAttribute("destory"));
          container.setAttribute("destroy", "true");
          container.parentNode.removeChild(container);
          container.removeAttribute("destroy");
          isString(destroyAttrValue) && container.setAttribute("destroy", destroyAttrValue);
          isString(destoryAttrValue) && container.setAttribute("destory", destoryAttrValue);
        } else if ((options === null || options === void 0 ? void 0 : options.clearAliveState) && container.hasAttribute("keep-alive")) {
          const keepAliveAttrValue = container.getAttribute("keep-alive");
          container.removeAttribute("keep-alive");
          let clearDataAttrValue = null;
          if (options.clearData) {
            clearDataAttrValue = container.getAttribute("clear-data");
            container.setAttribute("clear-data", "true");
          }
          container.parentNode.removeChild(container);
          container.setAttribute("keep-alive", keepAliveAttrValue);
          isString(clearDataAttrValue) && container.setAttribute("clear-data", clearDataAttrValue);
        } else {
          let clearDataAttrValue = null;
          if (options === null || options === void 0 ? void 0 : options.clearData) {
            clearDataAttrValue = container.getAttribute("clear-data");
            container.setAttribute("clear-data", "true");
          }
          container.parentNode.removeChild(container);
          isString(clearDataAttrValue) && container.setAttribute("clear-data", clearDataAttrValue);
        }
      }
    } else {
      logWarn(`app ${appName} does not exist`);
      resolve(false);
    }
  });
}
function unmountAllApps(options) {
  return Array.from(appInstanceMap.keys()).reduce((pre, next) => pre.then(() => unmountApp(next, options)), Promise.resolve(true));
}
function reload(appName, destroy) {
  return new Promise((resolve) => {
    const app = appInstanceMap.get(formatAppName(appName));
    if (app) {
      const rootContainer = app.container && getRootContainer(app.container);
      if (rootContainer) {
        resolve(rootContainer.reload(destroy));
      } else {
        logWarn(`app ${appName} is not rendered, cannot use reload`);
        resolve(false);
      }
    } else {
      logWarn(`app ${appName} does not exist`);
      resolve(false);
    }
  });
}
function renderApp(options) {
  return new Promise((resolve) => {
    if (!isPlainObject(options))
      return logError("renderApp options must be an object");
    const container = isElement(options.container) ? options.container : isString(options.container) ? document.querySelector(options.container) : null;
    if (!isElement(container))
      return logError("Target container is not a DOM element.");
    const microAppElement = pureCreateElement(microApp.tagName);
    for (const attr in options) {
      if (attr === "onDataChange") {
        if (isFunction(options[attr])) {
          microAppElement.addEventListener("datachange", options[attr]);
        }
      } else if (attr === "lifeCycles") {
        const lifeCycleConfig = options[attr];
        if (isPlainObject(lifeCycleConfig)) {
          for (const lifeName in lifeCycleConfig) {
            if (lifeName.toUpperCase() in lifeCycles && isFunction(lifeCycleConfig[lifeName])) {
              microAppElement.addEventListener(lifeName.toLowerCase(), lifeCycleConfig[lifeName]);
            }
          }
        }
      } else if (attr !== "container") {
        microAppElement.setAttribute(attr, options[attr]);
      }
    }
    const handleMount = () => {
      releaseListener();
      resolve(true);
    };
    const handleError = () => {
      releaseListener();
      resolve(false);
    };
    const releaseListener = () => {
      microAppElement.removeEventListener(lifeCycles.MOUNTED, handleMount);
      microAppElement.removeEventListener(lifeCycles.ERROR, handleError);
    };
    microAppElement.addEventListener(lifeCycles.MOUNTED, handleMount);
    microAppElement.addEventListener(lifeCycles.ERROR, handleError);
    container.appendChild(microAppElement);
  });
}
function getAppStatus(appName) {
  const app = appInstanceMap.get(formatAppName(appName));
  if (app) {
    return app.getLifeCycleState();
  } else {
    logWarn(`app ${appName} does not exist`);
  }
}
class MicroApp extends EventCenterForBaseApp {
  constructor() {
    super(...arguments);
    this.tagName = "micro-app";
    this.hasInit = false;
    this.options = {};
    this.router = router;
    this.preFetch = preFetch;
    this.unmountApp = unmountApp;
    this.unmountAllApps = unmountAllApps;
    this.getActiveApps = getActiveApps;
    this.getAllApps = getAllApps;
    this.reload = reload;
    this.renderApp = renderApp;
    this.getAppStatus = getAppStatus;
  }
  start(options) {
    var _a, _b;
    if (!isBrowser || !window.customElements) {
      return logError("micro-app is not supported in this environment");
    }
    if (this.hasInit) {
      return logError("microApp.start executed repeatedly");
    }
    this.hasInit = true;
    if (options === null || options === void 0 ? void 0 : options.tagName) {
      if (/^micro-app(-\S+)?/.test(options.tagName)) {
        this.tagName = options.tagName;
      } else {
        return logError(`${options.tagName} is invalid tagName`);
      }
    }
    initGlobalEnv();
    if (globalEnv.rawWindow.customElements.get(this.tagName)) {
      return logWarn(`element ${this.tagName} is already defined`);
    }
    if (isPlainObject(options)) {
      this.options = options;
      options["disable-scopecss"] = (_a = options["disable-scopecss"]) !== null && _a !== void 0 ? _a : options.disableScopecss;
      options["disable-sandbox"] = (_b = options["disable-sandbox"]) !== null && _b !== void 0 ? _b : options.disableSandbox;
      options.preFetchApps && preFetch(options.preFetchApps);
      options.globalAssets && getGlobalAssets(options.globalAssets);
      if (isPlainObject(options.plugins)) {
        const modules = options.plugins.modules;
        if (isPlainObject(modules)) {
          for (const appName in modules) {
            const formattedAppName = formatAppName(appName);
            if (formattedAppName && appName !== formattedAppName) {
              modules[formattedAppName] = modules[appName];
              delete modules[appName];
            }
          }
        }
      }
    }
    defineElement(this.tagName);
  }
}
const microApp = new MicroApp();

microApp.start({
  excludeAssetFilter(assetUrl) {
    console.log("assetUrl===", assetUrl);
    if (assetUrl === "xxx") {
      return true;
    }
    return false;
  },
  plugins: {
    global: [
      {
        excludeChecker(url) {
          console.log("excludeChecker url====", url);
          return false;
        },
        loader(code, url) {
          console.log("global loader==code====", code);
          console.log("global loader==url====", url);
          if ((url || "").indexOf("/xxx/antd.min.js") >= 0) {
            return `window.antd = antd;`;
          }
          return code;
        },
        processHtml(code, url, options) {
          console.log("global processHtml==code====", code);
          console.log("global processHtml==url====", url);
          console.log("global processHtml==options====", options);
          const res = code.replace(
            "<title>子应用child</title>",
            `
            <script>
            debugger;
            window.Vue = window.rawWindow.Vue;
            window.VueDemi = window.rawWindow.VueDemi;
            window.VueRouter = window.rawWindow.VueRouter;
            window.ElementPlus = window.rawWindow.ElementPlus;
            window.ElementPlusIconsVue = window.rawWindow.ElementPlusIconsVue;
            window.Pinia = window.rawWindow.Pinia;
            <\/script>
          <title>子应用child</title>
          `
          );
          console.log("sssss====", res);
          return res;
        }
      }
    ]
  }
});
const pinia = Pinia.createPinia();
const app = Vue.createApp(_sfc_main);
app.use(router$1);
app.use(ElementPlus);
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
