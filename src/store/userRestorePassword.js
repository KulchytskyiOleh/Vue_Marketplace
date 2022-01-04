import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  email: '',
};
export const mutations = {
  RESTORE_PASSWORD(state, payload) {
    state.email = payload.email;
  },
};
export const actions = {
  restorePassword({ commit }, email) {
    httpReq
      .post('/restoreEmail', {
        email,
      })
      .then((resp) => console.log(resp,'resp'))
      .then(() => {
        commit('RESTORE_PASSWORD', payload);
      })
      .catch((error) => console.log(error, 'in catch'));
  },
};
