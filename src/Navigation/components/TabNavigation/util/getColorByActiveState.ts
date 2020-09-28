import { TabItemVariant } from '../types/TabItemVariant';

export function getColorByActiveState(active: boolean, activeColor: string, inactiveColor: string, variant?: TabItemVariant): string {
    if (variant === 'circular') {
        return '#FFFFFF';
    } else {
        return active ? activeColor : inactiveColor;
    }
}
