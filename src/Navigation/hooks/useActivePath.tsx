import { useLocation } from '../../NavigationItems';

export function useActivePath(path: string | undefined): 1 | 0 | undefined {
    const location = useLocation();
    if (path != null) {
        return path === location.pathname ? 1 : 0;
    }
    return undefined;
}
