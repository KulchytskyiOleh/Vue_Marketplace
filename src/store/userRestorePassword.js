import httpReq from '../api/httpRequests.js';
export const namespaced = true;
export const state = {
  email: '',
};
export const mutations = {
  RESTORE_PASSWORD(state, email) {
    state.email = email;
  },
};
export const actions = {
  restorePassword({ commit }, email) {
    console.log(email, 'email');
    return (
      httpReq
        .post('/restoreEmail', {
          email,
        })
        // .then((resp) => console.log(resp,'resp'))
        .then(() => {
          console.log(email, 'in then');
          commit('RESTORE_PASSWORD', email);
        })
        .catch((error) => console.log(error, 'in catch'))
    );
  },
};
