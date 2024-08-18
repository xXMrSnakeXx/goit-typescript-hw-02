import axios from 'axios';
const API_KEY = '-QddS-n0eezRam9JSXHG4eHU9X6gieVc1YDLIU7t5N4';
const BASE_URL = 'https://api.unsplash.com';

export interface Image {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
    description: string | null;
    user: {
        name: string; 
    };
    likes: number;
}

interface UnsplashApi{
    results: Image[];
    total_pages: number;
}

export const getPhotos = async (query: string, page: number): Promise<UnsplashApi> => {
    const response = await axios.get<UnsplashApi>(`${BASE_URL}/search/photos`, {
params: {
    query,
    page,
    per_page: 15,
    client_id: API_KEY,
},
    });
    return response.data;
}