import { defineStore } from "pinia";
import type { DefineComponent } from "vue";
/* interface */
interface PiniaState {
  count: number;
  app_list: AppList[];
  is_mobile: boolean | undefined;
  currentPage: number;
  baseCom: Record<string, DefineComponent<any, any, any>>;
}
interface AppList {
  id: number;
  name: string;
  icon: string;
  router: string;
  current: boolean;
}

// 定义容器
// 参数1:容器的id,必须唯一,将来pinia会把所有的容器挂载到根容器
// 参数2:选项对象
export const useMainStore = defineStore("main", {
  /*
   *类似组件的data,用来存储全局状态
   *1.必须是函数:这是为了在服务端渲染的时候避免交叉请求导致的数据污染
   *2.必须是箭头函数,这是为了更好的TS类型推导
   */
  state: (): PiniaState => {
    return {
      count: 100,
      app_list: [], // 定义点击应用数据存储
      is_mobile: undefined,
      currentPage: 1,
      baseCom: {}
    };
  },
  /* 类似组件的computed,用来封装计算属性,有缓存的功能 */
  getters: {},
  /* 类似组件的methods,封装业务逻辑,修改state */
  actions: {
    // setAppCache(v: any) {
    //   this.app_list.push(v);
    // }
    setIsMobile(v: boolean) {
      this.is_mobile = v;
    },
    setBaseCom(v: Record<string, DefineComponent<any, any, any>>) {
      this.baseCom = v;
    }
  },
  persist: true
});
