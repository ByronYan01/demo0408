const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {};


const _hoisted_1 = { class: "other" };

function _sfc_render(_ctx, _cache) {
  return (Vue.openBlock(), Vue.createElementBlock("div", _hoisted_1, "other"))
}
const index = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

export { index as default };
