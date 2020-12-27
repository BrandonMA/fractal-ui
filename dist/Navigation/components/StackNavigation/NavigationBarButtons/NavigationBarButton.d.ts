export interface NavigationBarButtonProps {
    children: (color: string, size: number) => JSX.Element;
    onPress?: () => void;
}
export declare function NavigationBarButton(props: NavigationBarButtonProps): JSX.Element;
