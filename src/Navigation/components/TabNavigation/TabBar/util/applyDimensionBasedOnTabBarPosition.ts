import { LayoutProps } from '../../../../../Layout/types/LayoutProps';

export function applyDimensionBasedOnTabBarPosition(props: LayoutProps): string {
    if (props.tabBarPosition === 'left' || props.tabBarPosition === 'right') {
        return 'height: 100%;';
    } else {
        return 'width: 100%';
    }
}
