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
import React, { forwardRef, useCallback, useState } from 'react';
import { ButtonTextField } from './ButtonTextField';
import { TrazadoIcon } from '../../assets/TrazadoIcon';
const MessageInput = forwardRef((_a, ref) => {
    var { onSend, onChangeText } = _a, others = __rest(_a, ["onSend", "onChangeText"]);
    const showButton = true;
    const [text, setText] = useState('');
    const renderIcon = useCallback((color, size) => React.createElement(TrazadoIcon, { height: size, width: size, fill: color }), []);
    const handleSend = () => {
        onSend(text);
    };
    const handleChangeText = (text) => {
        setText(text);
        onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(text);
    };
    return (React.createElement(ButtonTextField, Object.assign({ ref: ref, showButton: showButton, buttonVariant: 'success', image: renderIcon, onPress: handleSend, onChangeText: handleChangeText, textFieldProps: { onSubmitEditing: showButton ? undefined : handleSend } }, others)));
});
MessageInput.displayName = 'MessageInput';
export { MessageInput };
//# sourceMappingURL=MessageInput.js.map