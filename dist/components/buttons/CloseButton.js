import React, { forwardRef } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseButton } from './BaseButton';
export const CloseButton = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: 24, width: 24, justifyContent: 'center', alignItems: 'center' }, props),
        React.createElement(CloseIcon, { height: 24, width: 24, fill: colors.text })));
});
//# sourceMappingURL=CloseButton.js.map