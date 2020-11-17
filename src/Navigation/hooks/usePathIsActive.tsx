import { useLocation } from '../../ReactRouter';

export function usePathIsActive(path: string | undefined): boolean {
    const { pathname } = useLocation();
    if (path != null) {
        return path === pathname;
    }
    return false;
}
