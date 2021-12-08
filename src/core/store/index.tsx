import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from '../features/counter';
import { meReducer } from '../features/me/reducer';
import { postReducer } from '../features/posts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    me: meReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
