import { useState, useCallback } from 'react';

export const usePagination = ({
    totalItems,
    itemsPerPage = 10,
    initialPage = 1,
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const goToPage = useCallback((page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    }, [totalPages]);

    const nextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    }, [currentPage, totalPages]);

    const previousPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }, [currentPage]);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const paginatedItems = useCallback(
        (items) => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            return items.slice(startIndex, startIndex + itemsPerPage);
        },
        [currentPage, itemsPerPage]
    );

    return {
        currentPage,
        totalPages,
        goToPage,
        nextPage,
        previousPage,
        isFirstPage,
        isLastPage,
        paginatedItems,
    };
};
