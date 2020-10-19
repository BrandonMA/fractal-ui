import { useContext } from 'react';
import { TabBarConfigContext, TabBarConfigContextType } from '../TabBarConfigProvider';

export function useTabBarConfig(): TabBarConfigContextType {
    return useContext(TabBarConfigContext);
}
