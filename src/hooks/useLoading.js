import { useState, useCallback } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, []);

    const stopLoading = useCallback(() => {
        setIsLoading(false);
    }, []);

    const withLoading = useCallback(
        (promise) => {
            startLoading();
            return promise.finally(stopLoading);
        },
        [startLoading, stopLoading]
    );

    return {
        isLoading,
        startLoading,
        stopLoading,
        withLoading,
    };
};
