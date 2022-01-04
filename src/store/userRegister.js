import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  email: '',
  name: '',
  password: '',
  errorMsg: '',
};
export const mutations = {
  USER_REGISTRATION(state, { email, userName, password }) {
    state.email = email;
    state.userName = userName;
    state.password = password;
  },
};
export const actions = {
  createNewUser({ commit, state }, [email, userName, password]) {
    return httpReq
      .post('/register', {
        email,
        name: userName,
        password,
      })
      .then(() => {
        commit('USER_REGISTRATION', { email, userName, password });
      })
      .catch((error) => {
        state.errorMsg = error.response.data.errors.email[0];
      });
  },
};
