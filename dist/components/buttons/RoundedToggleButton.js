import { ToggleButton } from './ToggleButton';
import { useTheme } from '../../context';
import React from 'react';
import { getRoundedToggleButtonAccessibilityProps } from './accessibility/getRoundedToggleButtonAccessibilityProps';
export function RoundedToggleButton(props) {
    const { sizes } = useTheme();
    return (React.createElement(ToggleButton, Object.assign({ height: sizes.interactiveItemHeight, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getRoundedToggleButtonAccessibilityProps(), props)));
}
//# sourceMappingURL=RoundedToggleButton.js.map