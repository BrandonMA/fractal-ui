import { TabBarConfig } from '../types/TabBarConfig';

export function createTabBarConfig(config?: Partial<TabBarConfig>): Readonly<TabBarConfig> {
    return Object.freeze<TabBarConfig>({
        tabBarVariant: config?.tabBarVariant ?? 'basic',
        activeItemColor: config?.activeItemColor ?? '#1281FF',
        inactiveItemColor: config?.inactiveItemColor ?? '#999999',
        tabBarBackgroundColor: config?.tabBarBackgroundColor ?? 'white',
        highlightItemColor: config?.highlightItemColor
    });
}
