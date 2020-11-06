import { matchPath, useLocation } from '../../ReactRouter';
import { useMemo } from 'react';

export function useMatch(path: string | undefined): [boolean, number] {
    const { pathname } = useLocation();
    return useMemo(() => {
        if (pathname === path) {
            return [true, 1];
        } else {
            const match = matchPath(pathname, {
                path
            });
            if (match != null) {
                const stackRouteTitles = pathname.substring(1).split('/'); // Remove initial / before split.
                return [true, stackRouteTitles.length];
            } else {
                return [false, 0];
            }
        }
    }, [pathname]);
}
