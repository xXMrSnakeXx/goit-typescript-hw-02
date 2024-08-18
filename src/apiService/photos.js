import axios from 'axios';
const API_KEY = '-QddS-n0eezRam9JSXHG4eHU9X6gieVc1YDLIU7t5N4';
const BASE_URL = 'https://api.unsplash.com';

export const getPhotos = async (query, page) => {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
params: {
    query,
    page,
    per_page: 15,
    client_id: API_KEY,
},
    });
    return response.data;
}