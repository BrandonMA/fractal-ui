import { BasicTabBarItem } from '../TabBarItemVariants/BasicTabBarItem';
import { CircularTabBarItem } from '../TabBarItemVariants/CircularTabBarItem';
export function getTabBarItemComponent(variant) {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
//# sourceMappingURL=getTabBarItemComponent.js.map