function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { u as useRouter, c as createRouter, a as createWebHashHistory } from './vue-router-D7n6q_Jd.js';
import { m as microApp } from './@micro-zoe-C8607JNh.js';

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
    const router = useRouter();
    const loadChild = async () => {
      await router.push("/child");
    };
    const loadChildWord = async () => {
      await router.push("/childWord");
    };
    const skip = async () => {
      await router.push("/other");
    };
    return (_ctx, _cache) => {
      const _component_el_button = Vue.resolveComponent("el-button");
      const _component_router_view = Vue.resolveComponent("router-view");
      return Vue.openBlock(), Vue.createElementBlock("section", _hoisted_1, [
        Vue.createVNode(_component_el_button, { onClick: loadChildWord }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("加载子应用预览word")
          ]),
          _: 1
        }),
        Vue.createVNode(_component_el_button, { onClick: loadChild }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("加载子应用")
          ]),
          _: 1
        }),
        Vue.createVNode(_component_el_button, { onClick: skip }, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("调整other")
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
  // {
  //   path: "/",
  //   redirect: "/main"
  // },
  {
    path: "/child",
    name: "child",
    component: async () => await __vitePreload(() => import('./index-CtuF38Xz.js'),true?__vite__mapDeps([]):void 0,import.meta.url)
  },
  {
    path: "/childWord",
    name: "childWord",
    component: async () => await __vitePreload(() => import('./index-B2L9jig5.js'),true?__vite__mapDeps([]):void 0,import.meta.url)
  },
  {
    path: "/other",
    name: "other",
    component: async () => await __vitePreload(() => import('./index-CZPThGM4.js'),true?__vite__mapDeps([]):void 0,import.meta.url)
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});

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
          console.log("excludeChecker url=includes===", url.includes("other"));
          return url.includes("other");
        },
        // loader(code: any, url: any) {
        //   console.log("global loader==code====", code);
        //   console.log("global loader==url====", url);
        //   if ((url || "").indexOf("/xxx/antd.min.js") >= 0) {
        //     return `window.antd = antd;`;
        //   }
        //   return code;
        // },
        processHtml(code, url, options) {
          console.log("global processHtml==code====", code);
          console.log("global processHtml==url====", url);
          console.log("global processHtml==options====", options);
          const regex = /<title>(.*?)<\/title>/g;
          const res = code.replace(regex, function(match) {
            return `<script>
            debugger;
            window.frameElement.contentWindow.Vue = window.rawWindow.Vue;
            window.frameElement.contentWindow.VueDemi = window.rawWindow.VueDemi;
            window.frameElement.contentWindow.axios = window.rawWindow.axios;
            window.frameElement.contentWindow.ElementPlus = window.rawWindow.ElementPlus;
            window.frameElement.contentWindow.ElementPlusIconsVue = window.rawWindow.ElementPlusIconsVue;
            window.frameElement.contentWindow.Pinia = window.rawWindow.Pinia;
            <\/script>` + match;
          });
          console.log("sssss====", res);
          return res;
        }
      }
    ]
  }
});
const pinia = Pinia.createPinia();
const app = Vue.createApp(_sfc_main);
app.use(router);
app.use(ElementPlus);
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
