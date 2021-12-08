import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { addLikeType } from '../../types/posts';

// recebe uma string de tipo de ação e uma função redutora, retornando uma promisse
// Retorna um estate => pending, rejected, fulfilled
export const getPosts = createAsyncThunk('posts/get', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api');
  const promise1 = axios.get('http://127.0.0.1:3000/api');
  const promise2 = axios.get('http://127.0.0.1:3000/api');

  const data = await Promise.all([promise1, promise2]);

  console.log([data[0].data, data[1].data]);

  return response.data;
});

export const addLike = createAction<addLikeType>('posts/sendLike');
