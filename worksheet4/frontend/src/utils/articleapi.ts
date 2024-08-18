import axiosInstance from './axiosinstance';
import { ArticlesInterface } from './types';

export const getArticles = async (): Promise<ArticlesInterface[]> => {
  try {
    const response = await axiosInstance.get('/articles/');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const createArticle = async (articleData: ArticlesInterface) => {
  try {
    const response = await axiosInstance.post('/articles/new', articleData);
    return response.data;
  } catch (error) {
    console.error('Error creating article:', error);
    throw error;
  }
};
