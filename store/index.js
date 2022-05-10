import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function() {
    return new Vuex.Store({
        mutations: {
            SET_USERS(state, value) {
                state.users = value
            },
            SET_DETAIL(state, value) {
                state.detail_user = value
            }
        },
        
        store: {
            users: [],
            detail_user: null
        }
    })
}