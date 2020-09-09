import { matchPath, useLocation } from '../../NavigationItems';
import { useActivePath } from './useActivePath';

export function useMatch(path: string | undefined): [boolean, number] {
    const active = useActivePath(path);
    const location = useLocation();
    if (!active === true) {
        const match = matchPath(location.pathname, {
            path: `${path}`
        });
        if (match != null) {
            const stackRouteTitles = match.url.substring(1).split('/'); // Remove initial / before split.
            return [true, stackRouteTitles.length];
        }
        return [match != null, 1];
    }
    return [true, 1];
}
