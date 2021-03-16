import React, { useCallback } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
var styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 16, translateY: 0 }
};
export function Switch(_a) {
    var value = _a.value, onValueChange = _a.onValueChange;
    var _b = useTheme(), colors = _b.colors, shadows = _b.shadows;
    var onPress = useCallback(function () {
        if (onValueChange) {
            onValueChange(!value);
        }
    }, [onValueChange, value]);
    return (React.createElement(Pressable, { flexDirection: 'row', height: 24, width: 40, borderRadius: 12, paddingLeft: 2, paddingRight: 2, onPress: onPress, alignItems: 'center', backgroundColor: colors.mainInteractiveColor },
        React.createElement(Layer, { initial: 'start', animate: value ? 'end' : 'start', variants: styleVariants, height: 20, width: 20, borderRadius: 10, backgroundColor: colors.white, boxShadow: shadows.mainShadow })));
}
//# sourceMappingURL=index.js.map