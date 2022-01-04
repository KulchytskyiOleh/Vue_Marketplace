import httpReq from '../api/httpRequests.js';

export default {
  userRegistration(email, password, name) {
    return httpReq.post('/posts', {
      email,
      name,
      password,
    });
  },
};
