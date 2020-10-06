import { TabBarItemVariant } from '../TabBarItemVariant';

export function getTabBarItemColorForState(
    active: boolean,
    activeColor?: string,
    inactiveColor?: string,
    variant?: TabBarItemVariant
): string {
    if (variant === 'circular') {
        return '#FFFFFF';
    } else {
        const finalActiveColor = activeColor ?? '#1281FF';
        const finalInactiveColor = inactiveColor ?? '#999999';
        return active ? finalActiveColor : finalInactiveColor;
    }
}
