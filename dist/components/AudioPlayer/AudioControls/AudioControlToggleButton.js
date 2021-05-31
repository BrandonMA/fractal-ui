import React from 'react';
import { RepeatIcon } from '../../../assets/RepeatIcon';
import { ShuffleIcon } from '../../../assets/ShuffleIcon';
import { getControlToggleButtonAccessibilityProps } from '../accessibility/getControlToggleButtonAccessibilityProps';
import { RoundedToggleButton } from '../../buttons/RoundedToggleButton';
import { useTheme } from '../../../context';
export function AudioControlToggleButton({ active, onPress, variant }) {
    const { sizes } = useTheme();
    return (React.createElement(RoundedToggleButton, Object.assign({ variant: 'main', useGrayVariant: true, active: active, onPress: onPress, width: sizes.audioControlToggleButtonSize, height: sizes.audioControlToggleButtonSize, borderRadius: sizes.audioControlToggleButtonSize / 2 }, getControlToggleButtonAccessibilityProps(variant)), (tintColor) => {
        if (variant === 'repeat') {
            return (React.createElement(RepeatIcon, { fill: tintColor, width: sizes.audioControlToggleButtonIconSize, height: sizes.audioControlToggleButtonIconSize }));
        }
        return (React.createElement(ShuffleIcon, { fill: tintColor, width: sizes.audioControlToggleButtonIconSize, height: sizes.audioControlToggleButtonIconSize }));
    }));
}
//# sourceMappingURL=AudioControlToggleButton.js.map