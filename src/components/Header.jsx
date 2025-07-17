import React from 'react';
import SearchInput from './SearchInput';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

const Header = () => {
    const { favorites } = useFavorites();

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    CourseHub
                </Link>
                
                <nav className="nav-links">
                    <Link to="/courses" className="nav-link">
                        Courses
                    </Link>
                    <Link to="/favorites" className="nav-link">
                        Favorites ({favorites.length})
                    </Link>
                </nav>

                <div className="header-actions">
                    <SearchInput />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
