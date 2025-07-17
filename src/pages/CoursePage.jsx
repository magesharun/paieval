import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import { useContext } from 'react';
import CourseCard from '../components/CourseCard';

const CoursePage = () => {
    const { id } = useParams();
    const { courses } = useContext(CourseContext);
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-page">
            <div className="course-header">
                <h1>{course.title}</h1>
                <div className="course-meta">
                    <span>Duration: {course.duration} hours</span>
                    <span>Price: ${course.price}</span>
                </div>
            </div>
            
            <div className="course-content">
                <div className="course-description">
                    <h2>Description</h2>
                    <p>{course.description}</p>
                </div>
                
                <div className="course-details">
                    <h2>Course Content</h2>
                    <ul>
                        {course.content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <CourseCard course={course} standalone />
        </div>
    );
};

export default CoursePage;