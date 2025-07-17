import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { toggleFavorite, isFavorite } = useFavorites();

    return (
        <div className="course-details">
            <div className="course-header">
                <h1>{course.title}</h1>
                <div className="course-meta">
                    <span className="course-duration">Duration: {course.duration} hours</span>
                    <span className="course-price">Price: ${course.price}</span>
                </div>
                <button 
                    onClick={() => toggleFavorite(course.id)}
                    className={`favorite-btn ${isFavorite(course.id) ? 'active' : ''}`}
                >
                    {isFavorite(course.id) ? "Remove from Favorites" : "Add to Favorites"}
                </button>
                <Link to="/" className="back-link">← Back to Courses</Link>
            </div>

            <div className="course-content">
                <div className="course-description">
                    <h2>Description</h2>
                    <p>{course.description}</p>
                </div>

                <div className="course-modules">
                    <h2>Course Modules</h2>
                    <ul className="module-list">
                        {course.modules.map((module, index) => (
                            <li key={index} className="module-item">
                                <h3>{module.title}</h3>
                                <p>{module.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;