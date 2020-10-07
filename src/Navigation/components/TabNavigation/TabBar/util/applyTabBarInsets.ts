import { LayoutProps } from '../../../../../Layout/types/LayoutProps';

export function applyTabBarInsets(props: LayoutProps): string {
    const insets = props.insets ?? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    if (props.tabBarPosition === 'right') {
        return `padding: ${insets.top}px ${insets.right}px ${insets.bottom}px 0px`;
    } else if (props.tabBarPosition === 'bottom') {
        return `padding-bottom: ${insets.bottom}px`;
    } else if (props.tabBarPosition === 'top') {
        return `padding-top: ${insets.top}px`;
    } else {
        return `padding: ${insets.top}px 0px ${insets.bottom}px ${insets.left}px`;
    }
}