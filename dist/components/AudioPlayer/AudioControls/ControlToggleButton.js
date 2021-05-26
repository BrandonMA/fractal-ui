import React from 'react';
import { RepeatIcon } from '../../../assets/RepeatIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { SMALL_ICON_SIZE } from './sizes';
import { ShuffleIcon } from '../../../assets/ShuffleIcon';
import { getControlToggleButtonAccessibilityProps } from '../accessibility/getControlToggleButtonAccessibilityProps';
export function ControlToggleButton({ active, onPress, variant }) {
    return (React.createElement(RoundedToggleButton, Object.assign({ useGrayVariant: true, active: active, onPress: onPress }, getControlToggleButtonAccessibilityProps(variant)), (tintColor) => {
        if (variant === 'repeat') {
            return React.createElement(RepeatIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE });
        }
        return React.createElement(ShuffleIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE });
    }));
}
//# sourceMappingURL=ControlToggleButton.js.map