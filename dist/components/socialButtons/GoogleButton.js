import React, { forwardRef } from 'react';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';
export const GoogleButton = forwardRef((props, ref) => {
    return (React.createElement(BaseMediaButton, Object.assign({ ref: ref, backgroundColor: 'white', pressedBackgroundColor: '#F4F4F4', activityIndicatorColor: 'black' }, props, getGoogleButtonAccessibilityProps()),
        React.createElement(GoogleIcon, { height: 24 })));
});
//# sourceMappingURL=GoogleButton.js.map