import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=42539657-384ed4c43443bb2978e732447&image_type=photo&orientation=horizontal&per_page=12&page=1';
// const API_KEY = '42539657-384ed4c43443bb2978e732447';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`&q=${query}&page=${page}`);
  return response.data;
};
