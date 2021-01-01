import React from 'react';
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { HorizontalView } from '../containers/HorizontalView';
import { BaseBox } from '../baseComponents/BaseBox';
export function SocialMediaButtons(props) {
    var onGooglePress = props.onGooglePress, onFacebookPress = props.onFacebookPress, onApplePress = props.onApplePress, appleText = props.appleText;
    return (React.createElement(BaseBox, { padding: 'cell' },
        React.createElement(HorizontalView, { marginBottom: 'm' },
            React.createElement(GoogleButton, { flexGrow: 1, onPress: onGooglePress }),
            React.createElement(BaseBox, { width: 16 }),
            React.createElement(FacebookButton, { flexGrow: 1, onPress: onFacebookPress })),
        React.createElement(AppleButton, { onPress: onApplePress, text: appleText })));
}
//# sourceMappingURL=SocialMediaButtons.js.map