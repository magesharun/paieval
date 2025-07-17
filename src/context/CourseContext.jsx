import React, { createContext } from 'react'
import {useEffect,useReducer} from 'react'

import {getCourses} from '../api/utils/mockApi';


const initialState = {
    courses: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_COURSES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_COURSES_SUCCESS':
            return {
                ...state,
                courses: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_COURSES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav !== action.payload)
            };
        default:
            return state;
    }
}

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const fetchCourses = async () => {
        dispatch({ type: 'FETCH_Courses_REQUESR' });
        try {
            const courses = await getCourses();
            dispatch({ type: 'FETCH_Courses_SUCCESS', payload: courses });
        } catch (error) {
            dispatch({ type: 'FETCH_Courses_FAILURE', payload: error.message });
        }
        };
        fetchCourses();
    }, []);             
  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  )
}

