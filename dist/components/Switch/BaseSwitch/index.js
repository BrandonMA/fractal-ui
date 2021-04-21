var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useCallback } from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Pressable } from '../../buttons/Pressable';
import { Layer } from '../../containers/Layer';
import { getSwitchAccessibilityProps } from '../accessibility/getSwitchAccessibilityProps';
var styleVariants = {
    start: { translateX: 0, translateY: 0 },
    end: { translateX: 16, translateY: 0 }
};
export function BaseSwitch(_a) {
    var value = _a.value, onValueChange = _a.onValueChange;
    var _b = useTheme(), colors = _b.colors, shadows = _b.shadows;
    var onPress = useCallback(function () {
        if (onValueChange) {
            onValueChange(!value);
        }
    }, [onValueChange, value]);
    var backgroundVariants = {
        active: { backgroundColor: colors.mainInteractiveColor },
        inactive: { backgroundColor: colors.placeholder }
    };
    return (React.createElement(Pressable, __assign({ flexDirection: 'row', height: 24, width: 40, borderRadius: 12, paddingLeft: 2, paddingRight: 2, onPress: onPress, alignItems: 'center', initial: 'inactive', animate: value ? 'active' : 'inactive', variants: backgroundVariants }, getSwitchAccessibilityProps(value)),
        React.createElement(Layer, { initial: 'start', animate: value ? 'end' : 'start', variants: styleVariants, height: 20, width: 20, borderRadius: 10, backgroundColor: colors.white, boxShadow: shadows.mainShadow })));
}
//# sourceMappingURL=index.js.map