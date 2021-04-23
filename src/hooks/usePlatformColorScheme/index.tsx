import { useCallback, useLayoutEffect, useState } from 'react';

const darkMediaQuery = '(prefers-color-scheme: dark)';

export function usePlatformColorScheme(): 'light' | 'dark' {
    const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

    const eventListener = useCallback((event) => {
        setColorScheme(event.matches ? 'dark' : 'light');
    }, []);

    useLayoutEffect(() => {
        const isDarkColorScheme = window.matchMedia && window.matchMedia(darkMediaQuery).matches;
        setColorScheme(isDarkColorScheme ? 'dark' : 'light');

        window.matchMedia(darkMediaQuery).addEventListener('change', eventListener);

        return () => {
            window.matchMedia(darkMediaQuery).removeEventListener('change', eventListener);
        };
    }, [eventListener]);

    return colorScheme;
}
