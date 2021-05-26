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
import React, { forwardRef, useCallback } from 'react';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField } from './IconTextField';
const ButtonTextField = forwardRef((_a, ref) => {
    var { value, image, onChangeText, onPress, buttonVariant = 'main', showButton = false } = _a, others = __rest(_a, ["value", "image", "onChangeText", "onPress", "buttonVariant", "showButton"]);
    const { colors, sizes, spacings } = useTheme();
    const [text, setText] = useControllableState(value, '', onChangeText);
    const renderIcon = useCallback((color, size) => image === null || image === void 0 ? void 0 : image(color, size), [image]);
    const handleChangeText = (text) => {
        if (!showButton) {
            onPress(text);
        }
        setText(text);
    };
    const handleSend = () => {
        onPress(text);
    };
    return (React.createElement(HorizontalLayer, { width: '100%', alignItems: 'center', height: sizes.textFieldHeight },
        React.createElement(IconTextField, Object.assign({ ref: ref, flex: 1, value: text, paddingLeft: spacings.xs, onChangeText: handleChangeText, leftImage: showButton ? undefined : renderIcon }, others)),
        showButton ? (React.createElement(Button, { variant: buttonVariant, marginLeft: spacings.m, width: sizes.textFieldHeight, onPress: handleSend }, image === null || image === void 0 ? void 0 : image(colors.white, 24))) : null));
});
ButtonTextField.displayName = 'ButtonTextField';
export { ButtonTextField };
//# sourceMappingURL=ButtonTextField.js.map