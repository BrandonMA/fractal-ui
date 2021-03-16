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
import { BlurView } from 'expo-blur';
import { TextButton } from '../buttons/TextButton';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer/index.native';
import { Pressable } from '../buttons/Pressable';
import { SafeAreaLayer } from '../containers/SafeAreaLayer';
import { useThemeIdentifier } from '../../hooks/useThemeIdentifier';
import { Modal } from './Modal';
export function BlurrediOSModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, dismissText = _a.dismissText, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "dismissText", "visible"]);
    var _b = useTheme(), colors = _b.colors, spacings = _b.spacings;
    var themeIdentifier = useThemeIdentifier();
    return (React.createElement(Modal, __assign({ visible: visible }, others),
        React.createElement(Pressable, { flex: 1, onPress: onDismiss }),
        React.createElement(BlurView, { intensity: 100, tint: themeIdentifier },
            React.createElement(Layer, { top: 0, bottom: 0, left: 0, right: 0, position: 'absolute', style: { opacity: 0.1 }, backgroundColor: themeIdentifier === 'light' ? 'black' : 'white' }),
            React.createElement(Layer, { justifyContent: 'center', alignItems: 'flex-end', borderTopWidth: 0.5, borderColor: colors.placeholder, backgroundColor: colors.background, height: 48, paddingRight: spacings.m },
                React.createElement(TextButton, { variant: 'main', textProps: { variant: 'label', fontWeight: 600 }, onPress: onDismiss }, dismissText)),
            React.createElement(SafeAreaLayer, null, children))));
}
//# sourceMappingURL=BlurrediOSModal.js.map