const state = {
  userinfo: ''
}
const mutations = {
  saveInfo (state, name) {
    state.userinfo = name
  }
}
const actions = {
  saveInfo ({ commit }, name) {
    console.log(name)
    commit('saveInfo', name)
  }
}
const getters = {
  getUserInfo: state => state.userinfo
}
export default {
  namespaced: true, // 使用命名空间，这样只在局部使用
  state,
  mutations,
  actions,
  getters
}
