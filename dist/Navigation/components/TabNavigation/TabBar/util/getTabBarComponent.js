import { BasicTabBar } from '../variants/BasicTabBar';
import { MiddleActionTabBar } from '../variants/MiddleActionTabBar';
export function getTabBarComponent(variant) {
    if (variant === 'middle-action') {
        return MiddleActionTabBar;
    }
    else {
        return BasicTabBar;
    }
}
//# sourceMappingURL=getTabBarComponent.js.map