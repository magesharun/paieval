import React from 'react';
import { useSearch } from '../hooks/useSearch';

const SearchInput = () => {
    const { searchTerm, handleSearchChange, clearSearch } = useSearch();

    return (
        <div className="search-input-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search courses..."
                className="search-input"
            />
            {searchTerm && (
                <button onClick={clearSearch} className="clear-search">
                    ✕
                </button>
            )}
        </div>
    );
};

export default SearchInput;