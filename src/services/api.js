import axios from 'axios';

const API_KEY = '29584309-9c0a688f03f16b75df6cceeb7';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImagesWithQuery = (searchQuery, page) => {
  return axios.get(
    `?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safeSearch=false&page=${page}&per_page=12`
  );
};

export default fetchImagesWithQuery;
