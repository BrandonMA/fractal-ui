import { useMemo } from 'react';
export function useTabBarInsets(position) {
    return useMemo(function () {
        var insets = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        insets[position] = 60;
        return insets;
    }, [position]);
}
//# sourceMappingURL=useTabBarInsets.js.map