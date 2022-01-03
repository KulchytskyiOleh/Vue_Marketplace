import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  email: '',
  userName: '',
  password: '',
};
export const mutation = {
  USER_REGISTRATION(state, payload) {
    state.email = payload.email;
    state.userName = payload.userName;
    state.password = payload.password;
  },
};
export const actions = {
  createNewUser({ commit }, email, userName, password) {
    httpReq
      .post('/register', {
        email,
        userName,
        password,
      })
      .then(() => {
        commit(USER_REGISTRATION, payload);
        dispatch('notification/add', notification, { root: true });
      })
      .catch((error) => console.log(error, 'in catch'));
  },
};
