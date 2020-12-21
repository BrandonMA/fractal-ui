import { RouteProps } from '../../../ReactRouter';
interface AnimatedRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}
export declare function AnimatedRoute(props: AnimatedRouteProps): JSX.Element;
export {};
