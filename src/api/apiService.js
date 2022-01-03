import httpReq from '../api/httpRequests.js';

export default {
  userRegistration(email, password, name) {
    return httpReq.post('/register', {
      email,
      name,
      password,
    });
  },
};
