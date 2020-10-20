import { BasicTabBarItem } from '../variants/BasicTabBarItem';
import { CircularTabBarItem } from '../variants/CircularTabBarItem';
export function getTabBarItemComponent(variant) {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
//# sourceMappingURL=getTabBarItemComponent.js.map