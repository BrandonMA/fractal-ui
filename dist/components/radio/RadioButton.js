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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { useTheme } from '../../hooks/useTheme';
import { Radio } from './Radio';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
export function RadioButton(_a) {
    var label = _a.label, onPress = _a.onPress, active = _a.active, others = __rest(_a, ["label", "onPress", "active"]);
    var _b = useTheme(), spacings = _b.spacings, colors = _b.colors;
    return (React.createElement(HorizontalLayer, __assign({ alignItems: 'center' }, others),
        React.createElement(TouchableOpacity, { onPress: onPress },
            React.createElement(Radio, { active: active, activeColor: colors.mainInteractiveColor, inactiveColor: colors.placeholder })),
        React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label)));
}
//# sourceMappingURL=RadioButton.js.map