import { NavigationBarProps, NavigationBarStyleProps } from '../types';

export function createNavigationBarStyleProps(props: NavigationBarProps): NavigationBarStyleProps {
    const { color, titleFontSize, backgroundColor, titleColor } = props;
    return {
        backgroundColor,
        color,
        titleColor,
        titleFontSize
    };
}
