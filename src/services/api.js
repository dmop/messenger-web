import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.danilopedrosa.com/v1',
  // baseURL: 'http://localhost:3333',
});

export default api;
