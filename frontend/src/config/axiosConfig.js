import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.43.42:3001/',
});

export default instance;
