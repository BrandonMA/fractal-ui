import { useLocation } from '../../ReactRouter';
export function useActivePath(path) {
    var location = useLocation();
    if (path != null) {
        return path === location.pathname;
    }
    return false;
}
//# sourceMappingURL=useActivePath.js.map