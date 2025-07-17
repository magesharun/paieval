import React from 'react';
import { usePagination } from '../hooks/usePagination';
import { Link } from 'react-router-dom';

const Pagination = ({ totalItems, itemsPerPage = 10 }) => {
    const { currentPage, totalPages, goToPage, nextPage, previousPage, isFirstPage, isLastPage } = usePagination({
        totalItems,
        itemsPerPage,
    });

    if (totalPages <= 1) return null;

    return (
        <div className="pagination">
            <button 
                onClick={previousPage}
                disabled={isFirstPage}
                className={`page-btn ${isFirstPage ? 'disabled' : ''}`}
            >
                Previous
            </button>

            <div className="page-links">
                {[...Array(totalPages)].map((_, index) => (
                    <Link
                        key={index + 1}
                        to={`?page=${index + 1}`}
                        className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => goToPage(index + 1)}
                    >
                        {index + 1}
                    </Link>
                ))}
            </div>

            <button 
                onClick={nextPage}
                disabled={isLastPage}
                className={`page-btn ${isLastPage ? 'disabled' : ''}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;