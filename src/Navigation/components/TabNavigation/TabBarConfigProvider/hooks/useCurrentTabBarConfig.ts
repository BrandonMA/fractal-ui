import { useContext } from 'react';
import { TabBarConfigContext, TabBarConfigContextType } from '../TabBarConfigProvider';

export function useCurrentTabBarConfig(): TabBarConfigContextType {
    return useContext(TabBarConfigContext);
}
