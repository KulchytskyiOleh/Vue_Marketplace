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
    state.isLogin = false;
    return (
      httpReq
        .post('/login', {
          email,
          password,
        })
        .then((resp) => {
          if (resp) {
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
          state.isLogin = false;
          console.log(error.response.data.message);
        })
    );
  },
};
export const getters = {
  userSuccessLogIn() {
    return state.isLogin;
  },
};
