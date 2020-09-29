import { TabBarPosition } from '../types/TabBarPosition';

export function getTabBarPosition<H, V>(horizontal: H, vertical: V, position?: TabBarPosition): H | V {
    if (position === 'right' || position === 'left') {
        return vertical;
    } else {
        return horizontal;
    }
}
