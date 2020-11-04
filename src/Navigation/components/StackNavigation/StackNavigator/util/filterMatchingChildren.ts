import { NavigationRouteProps } from '../../../NavigationRoute';
import { matchPath, useLocation } from '../../../../../ReactRouter';

export function filterMatchingChildren(children: Array<JSX.Element>, location: ReturnType<typeof useLocation>): Array<JSX.Element> {
    return children.filter((child: JSX.Element) => {
        const props = child.props as NavigationRouteProps;
        const path = props.path ?? '/';

        const match = matchPath(location.pathname, {
            path
        });

        return match != null;
    });
}
