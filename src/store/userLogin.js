import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  isLogin: false,
  email: '',
  password: '',
};
export const mutation = {
  USER_LOGIN(state, payload) {
    state.email = payload.email;
    state.password = payload.password;
  },
};
export const actions = {
  loginUser({ commit }, email, password) {
    httpReq
      .post('/login', {
        email,
        password,
      })
      .then(() => {
        commit(USER_LOGIN, payload);
        state.isLogin = true;
        console.log('test');
        console.log(state.isLogin, 'state.isLogin');
        dispatch('notification/add', notification, { root: true });
      })
      .catch((error) => console.log(error, 'in catch'));
  },
};
