import { TabBarPosition } from '../types/TabBarPosition';

export function getAbsolutePosition(position: TabBarPosition | undefined, value = 0): string {
    const finalPosition = position ?? 'bottom';
    return `${finalPosition}: ${value}px`;
}
