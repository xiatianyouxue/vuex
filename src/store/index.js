import Vue from 'vue'
import Vuex from 'vuex'
import saveinfo1 from './module/saveinfo1'
import saveinfo2 from './module/saveinfo2'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true, // 开启命名空间
  modules: {
    saveinfo1,
    saveinfo2
  }
})
