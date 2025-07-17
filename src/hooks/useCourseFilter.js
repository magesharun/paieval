import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useCourseFilter = () => {
    const [filters, setFilters] = useState({
        category: '',
        priceRange: '',
        duration: '',
    });

    const courses = useSelector((state) => state.courses.courses);

    const updateFilter = useCallback((field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    }, []);

    const clearFilters = useCallback(() => {
        setFilters({
            category: '',
            priceRange: '',
            duration: '',
        });
    }, []);

    const filteredCourses = useCallback(() => {
        return courses.filter((course) => {
            const matchesCategory = !filters.category || course.category === filters.category;
            const matchesPrice = !filters.priceRange || course.price <= filters.priceRange;
            const matchesDuration = !filters.duration || course.duration <= filters.duration;

            return matchesCategory && matchesPrice && matchesDuration;
        });
    }, [courses, filters]);

    return {
        filters,
        updateFilter,
        clearFilters,
        filteredCourses,
    };
};
