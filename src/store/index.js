import Vue from 'vue';
import Vuex from 'vuex';
import * as login from '@/store/userLogin.js';
import * as register from '@/store/userRegister.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { register, login },
  state: {},
  mutations: {},
  actions: {},
});
