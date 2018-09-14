import Vue from 'vue'
import Vuex from 'vuex'


import home from './home'
import login from './login'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        login,
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: []
});