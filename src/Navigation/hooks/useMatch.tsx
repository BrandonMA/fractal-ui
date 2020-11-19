import { matchPath, useLocation } from '../../ReactRouter';
import { useMemo } from 'react';

const defaultPositiveValue: [boolean, number] = [true, 1];
const defaultNegativeValue: [boolean, number] = [false, 0];

export function useMatch(path: string | undefined): [boolean, number] {
    const { pathname } = useLocation();

    return useMemo(() => {
        if (pathname === path) {
            return defaultPositiveValue;
        } else {
            const match = matchPath(pathname, {
                path
            });
            if (match != null) {
                const stackRouteTitles = pathname.substring(1).split('/'); // Remove initial / before split.
                return [true, stackRouteTitles.length];
            } else {
                return defaultNegativeValue;
            }
        }
    }, [pathname, path]);
}
