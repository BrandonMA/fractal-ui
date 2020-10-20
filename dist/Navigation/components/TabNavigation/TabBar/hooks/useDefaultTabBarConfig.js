import { createTabBarConfig } from '../types';
import { useMemo } from 'react';
export function useDefaultTabBarConfig(config) {
    return useMemo(function () { return createTabBarConfig(config); }, []);
}
//# sourceMappingURL=useDefaultTabBarConfig.js.map