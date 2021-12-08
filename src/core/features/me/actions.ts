import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMe = createAsyncThunk('me/get', async () => {
  const me = await axios.get('http://127.0.0.1:3000/api/me');
  return me.data;
});
