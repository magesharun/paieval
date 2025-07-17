import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

const FavoriteSidebar = () => {
    const { favorites, toggleFavorite } = useFavorites();

    if (favorites.length === 0) {
        return (
            <div className="empty-favorites">
                <h3>No favorites yet</h3>
                <p>Add courses to your favorites by clicking the heart icon</p>
                <Link to="/courses" className="browse-courses">
                    Browse Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="favorite-sidebar">
            <h2>Favorites</h2>
            <div className="favorites-list">
                {favorites.map((courseId) => (
                    <CourseCard
                        key={courseId}
                        course={{
                            id: courseId,
                            title: `Course ${courseId}`,
                            description: 'Sample course description',
                            duration: 10,
                            price: 99.99
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FavoriteSidebar;