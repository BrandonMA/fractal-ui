import { matchPath, useLocation } from '../../ReactRouter';
import { useMemo } from 'react';
var defaultPositiveValue = [true, 1];
var defaultNegativeValue = [false, 0];
export function useMatch(path) {
    var pathname = useLocation().pathname;
    return useMemo(function () {
        if (pathname === path) {
            return defaultPositiveValue;
        }
        else {
            var match = matchPath(pathname, {
                path: path
            });
            if (match != null) {
                var stackRouteTitles = pathname.substring(1).split('/'); // Remove initial / before split.
                return [true, stackRouteTitles.length];
            }
            else {
                return defaultNegativeValue;
            }
        }
    }, [pathname, path]);
}
//# sourceMappingURL=useMatch.js.map