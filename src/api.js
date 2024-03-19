import axios from 'axios';

const API_KEY = '42539657-384ed4c43443bb2978e732447';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const OPTIONS = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });
  const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
  return response.data;
};

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?key=42539657-384ed4c43443bb2978e732447&image_type=photo&orientation=horizontal&per_page=12&page=1';
// export const fetchImages = async (query, page) => {

//   const response = await axios.get(`&q=${query}&page=${page}`);
//   return response.data;
// };
