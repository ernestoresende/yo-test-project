import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://yo-test-token-server.herokuapp.com',
});
