import axios from 'axios';

// const baseURL = 'https://jsonplaceholder.typicode.com';
const baseURL = 'https://agile-everglades-70301.herokuapp.com/api';

axios.defaults.withCredentials = true;

const httpReq = axios.create({
  baseURL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
// const authHttpReq = axios.create({
//     baseURL,
// });
// authHttpReq.defaults.headers.common['Authorization'] = `Bearer: ${AUTH_TOKEN}`;

export default httpReq;
// export default { httpReq, authHttpReq };
