import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://apidev.ewally.com.br',
});

export default api;
