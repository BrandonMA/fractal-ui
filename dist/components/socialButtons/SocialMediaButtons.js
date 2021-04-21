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
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { Layer } from '../containers';
import { useTheme } from '../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';
export var SocialMediaButtons = forwardRef(function (_a, ref) {
    var onGooglePress = _a.onGooglePress, onFacebookPress = _a.onFacebookPress, onApplePress = _a.onApplePress, googleLoading = _a.googleLoading, facebookLoading = _a.facebookLoading, appleLoading = _a.appleLoading, appleText = _a.appleText, removeAppleButton = _a.removeAppleButton, others = __rest(_a, ["onGooglePress", "onFacebookPress", "onApplePress", "googleLoading", "facebookLoading", "appleLoading", "appleText", "removeAppleButton"]);
    var spacings = useTheme().spacings;
    return (React.createElement(Layer, __assign({ ref: ref, padding: spacings.m }, others),
        React.createElement(HorizontalLayer, { marginBottom: spacings.m },
            React.createElement(GoogleButton, { loading: googleLoading, flex: 1, onPress: onGooglePress }),
            React.createElement(Layer, { width: 16 }),
            React.createElement(FacebookButton, { loading: facebookLoading, flex: 1, onPress: onFacebookPress })),
        removeAppleButton ? null : React.createElement(AppleButton, { loading: appleLoading, onPress: onApplePress, text: appleText })));
});
//# sourceMappingURL=SocialMediaButtons.js.map