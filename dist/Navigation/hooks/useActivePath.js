import { useLocation } from '../../ReactRouter';
export function useActivePath(path) {
    var location = useLocation();
    if (path != null) {
        return path === location.pathname ? true : false;
    }
    return false;
}
//# sourceMappingURL=useActivePath.js.map