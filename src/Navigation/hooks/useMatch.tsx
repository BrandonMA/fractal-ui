import { matchPath, useLocation } from '../../ReactRouter';
import { useActivePath } from './useActivePath';

export function useMatch(path: string | undefined): [boolean, number] {
    const active = useActivePath(path);
    const location = useLocation();

    if (active) {
        return [true, 1];
    } else {
        const match = matchPath(location.pathname, {
            path
        });
        if (match != null) {
            const stackRouteTitles = location.pathname.substring(1).split('/'); // Remove initial / before split.
            return [true, stackRouteTitles.length];
        }
        return [match != null, 0];
    }
}
