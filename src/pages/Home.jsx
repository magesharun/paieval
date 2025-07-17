import React from 'react';
import { Link } from 'react-router-dom';
import CourseContext from '../context/CourseContext';
import CourseCard from '../components/courseCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { useContext, useState } from 'react';

const Home = () => {
    const { courses } = useContext(CourseContext);
    const [search, setSearch] = useState("");
    const [page, SetPage] = useState(1);
    const limit = 10;
    const filteredCourse = courses.filter((course) => {
        return course.title.toLowerCase().includes(search.toLowerCase());
    })
    const paginatedCourses = filteredCourse.slice((page - 1) * limit, page * limit);

    const featuredCourses = courses.slice(0, 3); // Show first 3 courses as featured

    return (
        <div className="home">
            <div className="hero-section">
                <h1>Welcome to Course Management</h1>
                <p>Discover our wide range of courses and start your learning journey today!</p>
                <Link to="/courses" className="cta-button">
                    Browse Courses
                </Link>
            </div>

            <div className="featured-courses">
                <h2>Featured Courses</h2>
                <div className="featured-grid">
                    {featuredCourses.map((course) => (
                        <div key={course.id} className="featured-card">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <Link to={`/course/${course.id}`} className="course-link">
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <SearchBar search={search} setSearch={setSearch} />
                <div className="course-list">
                    {paginatedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <Pagination
                    totalItems={filteredCourse.length}
                    itemsPerPage={limit}
                    currentPage={page}
                    onPageChange={(pageNumber) => SetPage(pageNumber)}
                />
            </div>
  return (
    <div>
        <SearchBar search={search} setSearch={setSearch} />
        <div className="course-list">
            {paginatedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
            ))}
        </div>
        <Pagination 
            totalItems={filteredCourse.length} 
            itemsPerPage={limit} 
            currentPage={page} 
            onPageChange={(pageNumber) => SetPage(pageNumber)} 
        />

    </div>
  )
}

export default Home