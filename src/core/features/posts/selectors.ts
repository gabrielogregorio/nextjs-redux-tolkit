import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectPosts = (state: RootState) => state.posts;

export const postSelector = createSelector(selectPosts, (state) => state);
