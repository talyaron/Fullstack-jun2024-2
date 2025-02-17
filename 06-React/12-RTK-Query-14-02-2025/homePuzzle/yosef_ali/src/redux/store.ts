import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import { pokemonApi } from './servicses/pokemonSrvc';
import { dogApi } from './servicses/dogService';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [dogApi.reducerPath]: dogApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogApi.middleware, pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch