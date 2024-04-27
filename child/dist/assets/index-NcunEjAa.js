const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "index",
  setup(__props) {
    const value = Vue.ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = Vue.resolveComponent("el-button");
      const _component_el_option = Vue.resolveComponent("el-option");
      const _component_el_select = Vue.resolveComponent("el-select");
      return Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, [
        Vue.createVNode(_component_el_button, null, {
          default: Vue.withCtx(() => [
            Vue.createTextVNode("test")
          ]),
          _: 1
        }),
        Vue.createVNode(_component_el_select, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          placeholder: "Select",
          size: "large",
          style: { "width": "240px" }
        }, {
          default: Vue.withCtx(() => [
            (Vue.openBlock(), Vue.createElementBlock(Vue.Fragment, null, Vue.renderList(options, (item) => {
              return Vue.createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});

export { _sfc_main as default };
