import { useMemo } from 'react';
export function useTabBarInsets(position, hidden) {
    return useMemo(function () {
        var insets = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        insets[position] = hidden ? 0 : 60;
        return insets;
    }, [position, hidden]);
}
//# sourceMappingURL=useTabBarInsets.js.map