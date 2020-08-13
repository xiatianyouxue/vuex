const state = {
  userinfo1: ''
}
const mutations = {
  saveInfo (state, name) {
    state.userinfo1 = name
  }
}
const actions = {
  saveInfo ({ commit }, name) {
    commit('saveInfo', name)
  }
}
const getters = {
  getUserInfo1: state => state.userinfo1
}
export default {
  namespaced: true, // 使用命名空间，这样只在局部使用
  state,
  mutations,
  actions,
  getters
}
