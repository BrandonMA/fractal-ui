import { TabBarPosition } from '../types/TabBarPosition';

export function getTabBarAbsolutePosition(position: TabBarPosition | undefined, value = 0): string {
    const finalPosition = position ?? 'bottom';
    return `${finalPosition}: ${value}px`;
}
