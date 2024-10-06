import axios from 'axios';
import { CardType } from '../constants/types';

const API_URL = import.meta.env.VITE_API_URL;

const getCards = async () => {
  const response = await axios.get(`${API_URL}`);

  return response.data;
}

const postCard = async (data: CardType) => {
  const response = await axios.post(`${API_URL}`, data);

  return response.data;
}

const putCard = async (id: string, data: CardType) => {
  const response = await axios.put(`${API_URL}/${id}`, data);

  return response.data;
}

const deleteCard = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
}

const updateIndexes = async (cards: CardType[]) => {
  const response = await axios.put(`${API_URL}/updateIndexes`, cards);

  return response.data;
}


export {
  getCards,
  postCard,
  putCard,
  deleteCard,
  updateIndexes,
}
