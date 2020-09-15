import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        auth,
    },
    plugins: [
        createPersistedState({
            key: 'spotify',
            paths: ['auth'],
        }),
    ],
})
