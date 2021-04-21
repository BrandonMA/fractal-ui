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
import React, { forwardRef } from 'react';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../buttons/TouchableOpacity';
import { Layer } from '../containers';
import { ChevronDown } from '../../assets/ChevronDown';
export var PickerButton = forwardRef(function (_a, ref) {
    var children = _a.children, others = __rest(_a, ["children"]);
    var _b = useTheme(), sizes = _b.sizes, spacings = _b.spacings, borderRadius = _b.borderRadius, colors = _b.colors;
    return (React.createElement(TouchableOpacity, __assign({ ref: ref, flexDirection: 'row', justifyContent: 'center', paddingLeft: spacings.s, paddingRight: spacings.s, borderRadius: borderRadius.s, height: sizes.textFieldHeight, backgroundColor: colors.textField }, others),
        React.createElement(Layer, { flexGrow: 1, height: '100%', justifyContent: 'center' },
            React.createElement(Text, { variant: 'normal', alignSelf: 'flex-start', fontSize: 14, fontWeight: 400 }, children)),
        React.createElement(Layer, { alignSelf: 'center' },
            React.createElement(ChevronDown, { width: 21, fill: colors.placeholder }))));
});
//# sourceMappingURL=PickerButton.js.map