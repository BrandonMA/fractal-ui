import { useLocation } from '../../ReactRouter';
export function usePathIsActive(path) {
    var pathname = useLocation().pathname;
    if (path != null) {
        return path === pathname;
    }
    return false;
}
//# sourceMappingURL=usePathIsActive.js.map