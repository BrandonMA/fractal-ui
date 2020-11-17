import { useMemo } from 'react';
import { createTabBarConfig } from '../util';
import { TabBarConfig } from '../types';

export function useCreateTabBarConfig(config?: Partial<TabBarConfig>): TabBarConfig {
    return useMemo(() => createTabBarConfig(config), [config]);
}
