import { TabBarPosition } from '../types/TabBarPosition';

export function getValueForPosition<T>(position: TabBarPosition, bottom: T, left: T, right: T): T {
    switch (position) {
        case 'bottom':
            return bottom;
        case 'left':
            return left;
        case 'right':
            return right;
    }
}
