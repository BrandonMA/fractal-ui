import { createTabBarConfig, TabBarConfig } from '../types';
import { useMemo } from 'react';

export function useDefaultTabBarConfig(config?: Partial<TabBarConfig>): TabBarConfig {
    return useMemo(() => createTabBarConfig(config), []);
}
