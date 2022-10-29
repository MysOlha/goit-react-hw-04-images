import axios from 'axios';

const API_KEY = '29767436-14c23983d91939ba59ac81ecb';

axios.defaults.baseURL = 'https://pixabay.com';

export async function fetchImages(query, page) {
  const queryParams = {
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: API_KEY,
  };

  const response = await axios.get('/api/', { params: queryParams });
  return response.data;
}
