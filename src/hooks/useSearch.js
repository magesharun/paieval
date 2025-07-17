import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearchTerm(value);
        // Navigate to search results page with query parameter
        navigate(`/search?q=${encodeURIComponent(value)}`);
    }, [navigate]);

    const clearSearch = useCallback(() => {
        setSearchTerm('');
        navigate('/');
    }, [navigate]);

    return {
        searchTerm,
        setSearchTerm,
        handleSearchChange,
        clearSearch,
    };
};
