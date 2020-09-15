export default {
  setError ({ commit }, errInf) {
    commit('setError', errInf)
  },
  resetError ({ commit }) {
    commit('resetError')
  },
  reset ({ commit }) {
    commit('reset')
    commit('auth/reset')
  },
}
