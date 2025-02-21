import { configureStore } from '@reduxjs/toolkit';
import { dogApi } from './redux/services/dogSrvc';

export const store = configureStore({
    reducer: {
        [dogApi.reducerPath]: dogApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dogApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch