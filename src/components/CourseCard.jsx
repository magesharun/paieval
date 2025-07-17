import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

const CourseCard = React.memo(({ course }) => {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <div className="course-card">
            <Link to={`/course/${course.id}`} className="course-link">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                    <span className="course-duration">{course.duration} hours</span>
                    <span className="course-price">${course.price}</span>
                </div>
            </Link>
            <button 
                onClick={() => toggleFavorite(course.id)}
                className={`favorite-btn ${isFavorite(course.id) ? 'active' : ''}`}
            >
                {isFavorite(course.id) ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
});

export default CourseCard;