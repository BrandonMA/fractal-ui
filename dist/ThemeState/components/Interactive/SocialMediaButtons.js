var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { HorizontalView, PaddingContainer, Spacer } from '../../../Layout';
import styled from 'styled-components/native';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { AppleButton } from './AppleButton';
var StyledGoogleButton = styled(GoogleButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
var StyledFacebookButton = styled(FacebookButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function SocialMediaButtons(props) {
    var onGooglePress = props.onGooglePress, onFacebookPress = props.onFacebookPress, onApplePress = props.onApplePress, appleText = props.appleText;
    return (React.createElement(PaddingContainer, null,
        React.createElement(HorizontalView, null,
            React.createElement(StyledGoogleButton, { onPress: onGooglePress }),
            React.createElement(Spacer, { width: 16 }),
            React.createElement(StyledFacebookButton, { onPress: onFacebookPress })),
        React.createElement(Spacer, { height: 16 }),
        React.createElement(AppleButton, { onPress: onApplePress, text: appleText })));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=SocialMediaButtons.js.map