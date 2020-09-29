import { matchPath, useLocation } from '../../ReactRouter';
import { useActivePath } from './useActivePath';
export function useMatch(path) {
    var active = useActivePath(path);
    var location = useLocation();
    if (active === true) {
        return [true, 1];
    }
    else {
        var match = matchPath(location.pathname, {
            path: path
        });
        if (match != null) {
            var stackRouteTitles = location.pathname.substring(1).split('/'); // Remove initial / before split.
            return [true, stackRouteTitles.length];
        }
        return [match != null, 0];
    }
}
//# sourceMappingURL=useMatch.js.map