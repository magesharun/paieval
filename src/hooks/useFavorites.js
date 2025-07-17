import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favorites/favoritesReducer';

export const useFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
    const loading = useSelector((state) => state.favorites.loading);
    const error = useSelector((state) => state.favorites.error);

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            dispatch(removeFavorite(id));
        } else {
            dispatch(addFavorite(id));
        }
    };

    return {
        favorites,
        loading,
        error,
        toggleFavorite,
        isFavorite: (id) => favorites.includes(id)
    };
};
