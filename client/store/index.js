import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        authUser: '',
    },
    mutations: {
        SET_USER(state,user) {
            state.authUser = user;
        },
    },
    actions:{
        nuxtServerInit({ commit }, { req, res }) {
        }
    }
})

export default store;