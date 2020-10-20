import { useLocation } from '../../ReactRouter';

export function useActivePath(path: string | undefined): boolean {
    const location = useLocation();
    if (path != null) {
        return path === location.pathname;
    }
    return false;
}
