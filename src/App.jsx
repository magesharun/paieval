// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import CourseList from './pages/CourseList';

const CourseDetail = lazy(() => import('./pages/CourseDetail'));

const App = () => (
  <ThemeProvider>
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </FavouritesProvider>
  </ThemeProvider>
);

export default App;
