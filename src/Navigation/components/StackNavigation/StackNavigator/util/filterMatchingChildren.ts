import { NavigationRouteProps } from '../../../NavigationRoute';
import { matchPath } from '../../../../../ReactRouter';

export function filterMatchingChildren(children: Array<JSX.Element>): Array<JSX.Element> {
    return children.filter((child: JSX.Element) => {
        const props = child.props as NavigationRouteProps;
        const path = props.path ?? '/';

        const match = matchPath(location.pathname, {
            path
        });

        return match != null;
    });
}
