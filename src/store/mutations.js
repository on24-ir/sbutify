import initialState from './state'

export default {
  setError (state, errInf) {
    state.error = true
    state.errorCod = errInf.code;
    state.errorMessage = errInf.message;
  },
  resetError (state) {
    state.error = false
    state.errorMessage = ''
    state.errorCod = 0
  },
  reset (state) {
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
}
