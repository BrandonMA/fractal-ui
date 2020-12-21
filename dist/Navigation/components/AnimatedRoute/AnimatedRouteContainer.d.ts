import { match } from '../../../ReactRouter';
export interface AnimatedRouteContainerProps {
    match: match | null;
    children: JSX.Element;
}
export declare function AnimatedRouteContainer(props: AnimatedRouteContainerProps): JSX.Element;
