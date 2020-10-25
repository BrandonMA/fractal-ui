import { matchPath, useLocation } from '../../ReactRouter';
import { useLayoutEffect, useState } from 'react';

export function useMatch(path: string | undefined): [boolean, number] {
    const { pathname } = useLocation();
    const [matchValue, setMatchValue] = useState<[boolean, number]>([false, 0]);

    useLayoutEffect(() => {
        if (pathname === path) {
            setMatchValue([true, 1]);
        } else {
            const match = matchPath(pathname, {
                path
            });
            if (match != null) {
                const stackRouteTitles = pathname.substring(1).split('/'); // Remove initial / before split.
                setMatchValue([true, stackRouteTitles.length]);
            } else {
                setMatchValue([false, 0]);
            }
        }
    }, [pathname, path]);

    return matchValue;
}
