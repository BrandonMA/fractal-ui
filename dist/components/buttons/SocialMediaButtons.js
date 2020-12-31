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
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { PaddedContainer } from '../containers/PaddedContainer';
import { HorizontalView } from '../containers/HorizontalView';
import { BaseBox } from '../baseComponents/BaseBox';
export function SocialMediaButtons(props) {
    var onGooglePress = props.onGooglePress, onFacebookPress = props.onFacebookPress, onApplePress = props.onApplePress, appleText = props.appleText, others = __rest(props, ["onGooglePress", "onFacebookPress", "onApplePress", "appleText"]);
    return (React.createElement(PaddedContainer, __assign({}, others),
        React.createElement(HorizontalView, { marginBottom: 'm' },
            React.createElement(GoogleButton, { flexGrow: 1, onPress: onGooglePress }),
            React.createElement(BaseBox, { width: 16 }),
            React.createElement(FacebookButton, { flexGrow: 1, onPress: onFacebookPress })),
        React.createElement(AppleButton, { onPress: onApplePress, text: appleText })));
}
//# sourceMappingURL=SocialMediaButtons.js.map