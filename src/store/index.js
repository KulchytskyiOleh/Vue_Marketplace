import Vue from 'vue';
import Vuex from 'vuex';
import * as login from '@/store/userLogin.js';
import * as userRegister from '@/store/userRegister.js';
import * as restorePas from '@/store/userRestorePassword.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { userRegister, login, restorePas },
  state: {},
  mutations: {},
  actions: {},
});
