import axios from 'axios';

const api = axios.create({
  baseURL: 'http://177.89.36.87:3333',
});

export default api;
