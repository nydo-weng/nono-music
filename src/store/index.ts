import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux';

import counterReducer from './modules/counter';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

// useAppSelector 的 hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
