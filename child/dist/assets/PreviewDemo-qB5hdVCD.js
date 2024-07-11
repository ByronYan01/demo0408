import { a as axios } from './axios-_op_Y4Y8.js';
import { j as je } from './docx-preview-UhIjgJuz.js';
import { _ as _export_sfc } from './index-GqB_kMuD.js';
import './jszip-pARn4sNS.js';
import './vue-router-NfWjSH4I.js';

const _hoisted_1 = { class: "doc-render-box" };
const _sfc_main = /* @__PURE__ */ Vue.defineComponent({
  __name: "PreviewDemo",
  setup(__props) {
    const service = axios.create({
      baseURL: "http://localhost:3457/职场新人必读书5本推荐.docx",
      // baseURL: '/api/getDoc',
      timeout: 6e3
    });
    const refFile = Vue.ref(null);
    const goPreview = async () => {
      const { data } = await service({
        method: "get",
        responseType: "blob"
      });
      void je(data, refFile.value);
    };
    return (_ctx, _cache) => {
      return Vue.openBlock(), Vue.createElementBlock("div", null, [
        Vue.createElementVNode("button", { onClick: goPreview }, "预览 word 文件"),
        Vue.createElementVNode("button", {
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => _ctx.downLoad && _ctx.downLoad(...args))
        }, "下载 word 文件"),
        Vue.createElementVNode("div", _hoisted_1, [
          Vue.createElementVNode("div", {
            ref_key: "refFile",
            ref: refFile
          }, null, 512)
        ])
      ]);
    };
  }
});

const PreviewDemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec7cdd5d"]]);

export { PreviewDemo as default };
