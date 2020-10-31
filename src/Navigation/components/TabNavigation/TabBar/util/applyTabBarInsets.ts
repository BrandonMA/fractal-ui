import { TabBarLayoutProps } from '../types';

export function applyTabBarInsets(props: TabBarLayoutProps): string {
    const { tabBarInsets, tabBarPosition } = props;

    if (tabBarPosition === 'right') {
        return `padding: ${tabBarInsets.top}px ${tabBarInsets.right}px ${tabBarInsets.bottom}px 0px`;
    } else if (tabBarPosition === 'bottom') {
        return `padding-bottom: ${tabBarInsets.bottom}px`;
    } else if (tabBarPosition === 'top') {
        return `padding-top: ${tabBarInsets.top}px`;
    } else {
        return `padding: ${tabBarInsets.top}px 0px ${tabBarInsets.bottom}px ${tabBarInsets.left}px`;
    }
}
