import { TabBarLayoutProps } from '../types';

export function applyTabBarInsets(props: TabBarLayoutProps): string {
    const { tabBarInsets } = props;
    return `padding-bottom: ${tabBarInsets.bottom}px`;
}
