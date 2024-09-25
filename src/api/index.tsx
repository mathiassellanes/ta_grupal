import axios from 'axios';
import { CardType } from '../constants/types';

const API_URL = process.env.REACT_APP_API_URL;

const getCards = async () => {
  const response = await axios.get(`${API_URL}/cards`);

  return response.data;
}

const post = async (data: CardType) => {
  const response = await axios.post(`${API_URL}`, data);

  return response.data;
}

const put = async (id: string, data: CardType) => {
  const response = await axios.put(`${API_URL}/${id}`, data);

  return response.data;
}

const remove = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
}

const updateIndexes = async (cards: CardType[]) => {
  const response = await axios.put(`${API_URL}/updateIndexes`, cards);

  return response.data;
}


export {
  getCards,
  post,
  put,
  remove,
  updateIndexes,
}
