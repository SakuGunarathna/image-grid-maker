import axios from 'axios';

export const get = (url, config) => axios.get(url, config);

export const post = (url, body, config) => axios.post(url, body, config);

export const patch = (url, body, config) => axios.patch(url, body, config);