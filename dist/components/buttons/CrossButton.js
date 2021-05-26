import React, { forwardRef } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { getCrossButtonAccessibilityProps } from './accessibility/getCrossButtonAccessibilityProps';
const CrossButton = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: 24, width: 24, justifyContent: 'center', alignItems: 'center' }, getCrossButtonAccessibilityProps(), props),
        React.createElement(CloseIcon, { height: 24, width: 24, fill: colors.text })));
});
CrossButton.displayName = 'CrossButton';
export { CrossButton };
//# sourceMappingURL=CrossButton.js.map