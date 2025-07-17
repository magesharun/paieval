import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
                (id) => id !== action.payload
            );
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { addFavorite, removeFavorite, setLoading, setError } = favoritesSlice.actions;
export default favoritesSlice.reducer;
