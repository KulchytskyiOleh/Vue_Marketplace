import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  isLogin: false,
  email: '',
  password: '',
};
export const mutations = {
  USER_LOGIN(state, { email, password }) {
    state.email = email;
    state.password = password;
  },
};
export const actions = {
  loginUser({ commit }, [email, password]) {
    httpReq
      .post('/login', {
        email,
        password,
      })
      .then((resp) => {
        if (resp) {
          console.log(resp, 'resp');
          commit('USER_LOGIN', { email, password });
          state.isLogin = true;
        }
      })
      // .then(() => {
      //   commit('USER_LOGIN', { email, password });
      //   state.isLogin = true;
      //   console.log(state.isLogin, 'state.isLogin');
      // })
      .catch((error) => {
        // error.response.data.message
      });
  },
};
