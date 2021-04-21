import React from 'react';
import { Switch } from 'react-native';
import { useTheme } from '../../../core/context/hooks/useTheme';
export function BaseSwitch(_a) {
    var value = _a.value, onValueChange = _a.onValueChange;
    var colors = useTheme().colors;
    return (React.createElement(Switch, { trackColor: { "false": colors.placeholder, "true": colors.mainInteractiveColor }, thumbColor: colors.white, value: value, onValueChange: onValueChange, ios_backgroundColor: colors.placeholder }));
}
//# sourceMappingURL=index.native.js.map