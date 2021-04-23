import React, { forwardRef } from 'react';
import { FacebookIcon } from '../../assets/FacebookIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';
export const FacebookButton = forwardRef((props, ref) => {
    return (React.createElement(BaseMediaButton, Object.assign({ ref: ref, backgroundColor: '#3975EA', pressedBackgroundColor: '#295AC9' }, props, getFacebookButtonAccessibilityProps()),
        React.createElement(FacebookIcon, { height: 24, fill: 'white' })));
});
//# sourceMappingURL=FacebookButton.js.map