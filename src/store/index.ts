import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;

// useAppSelector 的 hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
