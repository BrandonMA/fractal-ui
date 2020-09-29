import { BasicTabBar } from '../TabBarVariants/BasicTabBar';
import { MiddleActionTabBar } from '../TabBarVariants/MiddleActionTabBar';
export function getTabBarComponent(variant) {
    if (variant === 'middle-action') {
        return MiddleActionTabBar;
    }
    else {
        return BasicTabBar;
    }
}
//# sourceMappingURL=getTabBarComponent.js.map