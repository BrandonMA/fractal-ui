import React, { forwardRef } from 'react';
import { AppleIcon } from '../../assets/AppleIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getAppleButtonAccessibilityProps } from './accessibility/getAppleButtonAccessibilityProps';
const AppleButton = forwardRef((props, ref) => {
    const { text } = props;
    return (React.createElement(BaseMediaButton, Object.assign({ ref: ref, backgroundColor: 'black', pressedBackgroundColor: '#111111' }, props, getAppleButtonAccessibilityProps()),
        React.createElement(AppleIcon, { height: text != null ? 18 : 24, fill: 'white' })));
});
AppleButton.displayName = 'AppleButton';
export { AppleButton };
//# sourceMappingURL=AppleButton.js.map