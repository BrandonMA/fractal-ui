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
import { BaseBox } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { TextField } from './TextField';
import { useTheme } from '@shopify/restyle';
export function IconTextField(props) {
    var leftImage = props.leftImage, rightImage = props.rightImage, value = props.value, placeholder = props.placeholder, onChangeText = props.onChangeText, textFieldProps = props.textFieldProps, others = __rest(props, ["leftImage", "rightImage", "value", "placeholder", "onChangeText", "textFieldProps"]);
    var theme = useTheme();
    var paddingLeft = leftImage != null ? 'xs' : undefined;
    var paddingRight = rightImage != null ? 'xs' : undefined;
    return (React.createElement(HorizontalView, __assign({ paddingLeft: paddingLeft, paddingRight: paddingRight, borderRadius: 'textFieldRadius', height: theme.interactiveItems.textFieldHeight, backgroundColor: 'textFieldColor', justifyContent: 'space-evenly', alignItems: 'center' }, others),
        leftImage != null ? (React.createElement(BaseBox, { flexShrink: 0, height: theme.textFields.iconSize, width: theme.textFields.iconSize }, leftImage(theme.colors.placeholderColor, theme.textFields.iconSize))) : null,
        React.createElement(TextField, __assign({ paddingLeft: paddingLeft, paddingRight: paddingRight, numberOfLines: 1, flex: 1, value: value, onChangeText: onChangeText, placeholder: placeholder }, textFieldProps)),
        rightImage != null ? (React.createElement(BaseBox, { flexShrink: 0, height: theme.textFields.iconSize, width: theme.textFields.iconSize }, rightImage(theme.colors.placeholderColor, theme.textFields.iconSize))) : null));
}
//# sourceMappingURL=IconTextField.js.map