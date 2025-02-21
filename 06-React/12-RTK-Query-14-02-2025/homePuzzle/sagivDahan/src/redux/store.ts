import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import { dogsAPI } from './servicses/dogSrvc';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [dogsAPI.reducerPath]: dogsAPI.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogsAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch