import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';
const GoogleButton = forwardRef((props, ref) => {
    return (React.createElement(BaseMediaButton, Object.assign({ ref: ref, backgroundColor: 'white', pressedBackgroundColor: '#F4F4F4', activityIndicatorColor: 'black' }, props, getGoogleButtonAccessibilityProps()),
        React.createElement(GoogleIcon, { height: 24 })));
});
GoogleButton.displayName = 'GoogleButton';
export { GoogleButton };
//# sourceMappingURL=GoogleButton.js.map