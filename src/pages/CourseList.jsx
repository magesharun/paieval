import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import { useContext } from 'react';
import CourseCard from '../components/CourseCard';
import Paginate from '../utils/Paginate';

const CourseList = () => {
    const { courses, loading, error } = useContext(CourseContext);
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading courses...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="course-list">
            <h2>All Courses</h2>
            <div className="courses-grid">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            <Paginate />
        </div>
    );
};

export default CourseList;
