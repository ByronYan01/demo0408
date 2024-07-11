const _hoisted_1 = { style: { "width": "100%", "height": "100%" } };

const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "index",
  setup(__props) {
    let appUrl = "";
    Vue.onBeforeMount(() => {
      appUrl = `http://${location.hostname}:3457`;
    });
    const createdFuc = () => {
      console.log("createdFuc====", window);
    };
    return (_ctx, _cache) => {
      const _component_micro_app = Vue.resolveComponent("micro-app");
      return Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, [
        Vue.createVNode(_component_micro_app, {
          name: "child",
          url: Vue.unref(appUrl),
          style: { "width": "100%", "height": "100%" },
          "default-page": "#/home/wordPreview",
          iframe: "",
          onCreated: createdFuc
        }, null, 8, ["url"])
      ]);
    };
  }
});

export { _sfc_main as default };
