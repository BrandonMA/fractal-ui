import { useCallback, useLayoutEffect, useState } from 'react';

const darkMediaQuery = '(prefers-color-scheme: dark)';

export function usePlatformScheme(): 'light' | 'dark' {
    const isDarkColorScheme = window.matchMedia && window.matchMedia(darkMediaQuery).matches;
    const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(isDarkColorScheme ? 'dark' : 'light');

    const eventListener = useCallback((event) => {
        setColorScheme(event.matches ? 'dark' : 'light');
    }, []);

    useLayoutEffect(() => {
        window.matchMedia(darkMediaQuery).addEventListener('change', eventListener);

        return () => {
            window.matchMedia(darkMediaQuery).removeEventListener('change', eventListener);
        };
    }, [eventListener]);

    return colorScheme;
}
