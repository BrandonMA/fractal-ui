import { TabBarLayoutProps } from '../types';

export function getTabBarSafeAreaPadding(props: TabBarLayoutProps): string {
    const { safeAreaInsets } = props;
    return `padding-bottom: ${safeAreaInsets.bottom}px`;
}
