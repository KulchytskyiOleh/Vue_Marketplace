import axios from 'axios';

const baseURL = 'https://agile-everglades-70301.herokuapp.com/api/';

axios.defaults.withCredentials = true;

const httpReq = axios.create({
    baseURL,
});
const authHttpReq = axios.create({
    baseURL,
});
authHttpReq.defaults.headers.common['Authorization'] = `Bearer: ${AUTH_TOKEN}`;

export { httpReq, authHttpReq };