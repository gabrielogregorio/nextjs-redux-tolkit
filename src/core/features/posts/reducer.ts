import { createReducer } from '@reduxjs/toolkit';
import { useAppSelector } from '../../hooks/useRedux';
import { addLikeType, postStateType } from '../../types/posts';
import { meSelector } from '../me';
import { getPosts, addLike } from './actions';

const initialState: postStateType = {
  data: {
    posts: {
      allIds: [],
      byId: {}
    }
  },
  loading: false,
  error: false
};

export const postReducer = createReducer(initialState, (action) => {
  action
    // Usa os estados do createAsyncThunk()
    .addCase(getPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(getPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getPosts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    })
    .addCase(addLike, (state, { payload: { idUser, idPost } }: any) => {
      if (state.data.posts.byId[idPost].likes.includes(idUser)) {
        state.data.posts.byId[idPost].likes = state.data.posts.byId[
          idPost
        ].likes.filter((id) => id !== idUser);
      } else {
        state.data.posts.byId[idPost].likes.push(idUser);
      }
    });
});

export default postReducer;
