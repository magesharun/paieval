import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites/favoritesReducer';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
