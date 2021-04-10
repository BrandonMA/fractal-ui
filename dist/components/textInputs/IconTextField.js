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
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer';
import { BaseTextField } from './BaseTextField';
export function IconTextField(_a) {
    var leftImage = _a.leftImage, rightImage = _a.rightImage, value = _a.value, placeholder = _a.placeholder, onChangeText = _a.onChangeText, textFieldProps = _a.textFieldProps, others = __rest(_a, ["leftImage", "rightImage", "value", "placeholder", "onChangeText", "textFieldProps"]);
    var _b = useTheme(), spacings = _b.spacings, sizes = _b.sizes, colors = _b.colors, borderRadius = _b.borderRadius;
    var paddingLeft = leftImage != null ? spacings.xs : undefined;
    var paddingRight = rightImage != null ? spacings.xs : undefined;
    return (React.createElement(HorizontalLayer, __assign({ paddingLeft: paddingLeft, paddingRight: paddingRight, borderRadius: borderRadius.s, height: sizes.textFieldHeight, backgroundColor: colors.textField, justifyContent: 'space-evenly', alignItems: 'center' }, others),
        leftImage != null ? (React.createElement(Layer, { flexShrink: 0, height: sizes.textFieldIconSize, width: sizes.textFieldIconSize }, leftImage(colors.placeholder, sizes.textFieldIconSize))) : null,
        React.createElement(BaseTextField, __assign({ paddingLeft: paddingLeft, paddingRight: paddingRight, flex: 1, value: value, color: colors.text, placeholderTextColor: colors.placeholder, fontSize: 14, onChangeText: onChangeText, placeholder: placeholder }, textFieldProps)),
        rightImage != null ? (React.createElement(Layer, { flexShrink: 0, height: sizes.textFieldIconSize, width: sizes.textFieldIconSize }, rightImage(colors.placeholder, sizes.textFieldIconSize))) : null));
}
//# sourceMappingURL=IconTextField.js.map