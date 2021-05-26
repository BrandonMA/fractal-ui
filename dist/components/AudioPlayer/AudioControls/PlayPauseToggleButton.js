import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { PlayPauseIcon } from './PlayPauseIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { getPlayPauseButtonAccessibilityProps } from '../accessibility/getPlayPauseButtonAccessibilityProps';
export function PlayPauseToggleButton({ active, onPress }) {
    const { sizes } = useTheme();
    return (React.createElement(RoundedToggleButton, Object.assign({ active: active, onPress: onPress, size: sizes.interactiveItemHeight }, getPlayPauseButtonAccessibilityProps()), (tintColor) => React.createElement(PlayPauseIcon, { tintColor: tintColor, isPlaying: !active })));
}
//# sourceMappingURL=PlayPauseToggleButton.js.map