import { TabBarLayoutProps } from '../types/TabBarLayoutProps';

export function applyDimensionBasedOnTabBarPosition(props: TabBarLayoutProps): string {
    if (props.tabBarPosition === 'left' || props.tabBarPosition === 'right') {
        return 'height: 100%;';
    } else {
        return 'width: 100%';
    }
}
