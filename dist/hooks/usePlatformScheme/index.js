import { useCallback, useLayoutEffect, useState } from 'react';
var darkMediaQuery = '(prefers-color-scheme: dark)';
export function usePlatformScheme() {
    var isDarkColorScheme = window.matchMedia && window.matchMedia(darkMediaQuery).matches;
    var _a = useState(isDarkColorScheme ? 'dark' : 'light'), colorScheme = _a[0], setColorScheme = _a[1];
    var eventListener = useCallback(function (event) {
        setColorScheme(event.matches ? 'dark' : 'light');
    }, []);
    useLayoutEffect(function () {
        window.matchMedia(darkMediaQuery).addEventListener('change', eventListener);
        return function () {
            window.matchMedia(darkMediaQuery).removeEventListener('change', eventListener);
        };
    }, [eventListener]);
    return colorScheme;
}
//# sourceMappingURL=index.js.map