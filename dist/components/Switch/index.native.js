import React from 'react';
import { Switch as NativeSwitch, Platform } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
export function Switch(_a) {
    var value = _a.value, onValueChange = _a.onValueChange;
    var colors = useTheme().colors;
    var trueColor = Platform.OS === 'android' ? colors.mainInteractiveColor400 : colors.mainInteractiveColor;
    var thumbColor = Platform.OS === 'android' && value ? colors.mainInteractiveColor : colors.white;
    return (React.createElement(NativeSwitch, { trackColor: { "false": colors.placeholder, "true": trueColor }, thumbColor: thumbColor, value: value, onValueChange: onValueChange }));
}
//# sourceMappingURL=index.native.js.map