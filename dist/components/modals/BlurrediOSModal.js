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
import { Modal as NativeModal } from 'react-native';
import { BaseBox, BasePressable, BaseSafeAreaView } from '../baseComponents';
import { BlurView } from 'expo-blur';
import { useThemeIdentifier } from '../../context/hooks/useThemeIdentifier';
import { TextButton } from '../buttons/TextButton';
export function BlurrediOSModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, dismissText = _a.dismissText, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "dismissText", "visible"]);
    var themeIdentifier = useThemeIdentifier()[0];
    return (React.createElement(NativeModal, __assign({ visible: visible, transparent: true, animationType: 'slide' }, others),
        React.createElement(BasePressable, { flex: 1, onPress: onDismiss }),
        React.createElement(BlurView, { intensity: 100, tint: themeIdentifier },
            React.createElement(BaseBox, { backgroundColor: themeIdentifier === 'light' ? 'black' : 'white', opacity: 0.1, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }),
            React.createElement(BaseBox, { borderTopColor: 'placeholderColor', borderBottomColor: 'placeholderColor', justifyContent: 'center', alignItems: 'flex-end', borderTopWidth: 0.5, backgroundColor: 'background', height: 48, paddingRight: 'm' },
                React.createElement(TextButton, { onPress: onDismiss }, dismissText)),
            React.createElement(BaseSafeAreaView, null, children))));
}
//# sourceMappingURL=BlurrediOSModal.js.map