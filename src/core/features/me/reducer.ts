import { createReducer } from '@reduxjs/toolkit';
import { userStateType } from '../../types/me';
import { getMe } from './actions';

const initialState: userStateType = {
  data: { id: 0, name: '', url_profile: '' },
  loading: false,
  error: false
};

export const meReducer = createReducer(initialState, (action) => {
  action
    .addCase(getMe.pending, (state) => {
      state.loading = true;
    })
    .addCase(getMe.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getMe.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
});
