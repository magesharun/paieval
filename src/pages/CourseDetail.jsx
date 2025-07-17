import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import { useContext } from 'react';

const CourseDetail = () => {
    const { id } = useParams();
    const { courses } = useContext(CourseContext);
    const course = courses.find((c) => c.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-detail">
            <h2>{course.title}</h2>
            <div className="course-info">
                <p><strong>Description:</strong> {course.description}</p>
                <p><strong>Duration:</strong> {course.duration} hours</p>
                <p><strong>Price:</strong> ${course.price}</p>
            </div>
            <div className="course-content">
                <h3>Course Content</h3>
                <ul>
                    {course.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseDetail;
