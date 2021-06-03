import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000' });

export const createPost = async (newPost) => {
	await api.post('/posts', newPost);
};

export const getPosts = async () => {
	await api.get('/posts');
};
