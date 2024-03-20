import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  const options = {
    url: BASE_URL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'ce3ddff04fmsh605a96982ef4b73p1fbc8fjsnb89161d9c37d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };