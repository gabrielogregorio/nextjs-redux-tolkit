import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectorMe = (state: RootState) => state.me;

export const meSelector = createSelector(selectorMe, (state) => state);
