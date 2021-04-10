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
import { CheckIcon } from '../assets/CheckIcon';
import { Square } from '../assets/Square/index.native';
import { useTheme } from '../hooks/useTheme';
import { TouchableOpacity } from './buttons/TouchableOpacity';
import { HorizontalLayer } from './containers/HorizontalLayer';
import { Text } from './text';
export function CheckBox(_a) {
    var value = _a.value, onValueChange = _a.onValueChange, label = _a.label, others = __rest(_a, ["value", "onValueChange", "label"]);
    var _b = useTheme(), colors = _b.colors, spacings = _b.spacings;
    var handleValueChange = function () {
        onValueChange(!value);
    };
    return (React.createElement(HorizontalLayer, __assign({ alignItems: 'center' }, others),
        React.createElement(TouchableOpacity, { width: 16, height: 16, padding: 0, borderRadius: 4, onPress: handleValueChange, backgroundColor: value ? colors.mainInteractiveColor : 'transparent' }, value ? (React.createElement(CheckIcon, { width: 16, height: 16, fill: colors.white })) : (React.createElement(Square, { width: 16, height: 16, fill: colors.placeholder }))),
        React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label)));
}
//# sourceMappingURL=CheckBox.js.map