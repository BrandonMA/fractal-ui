import React, { memo } from 'react';
import { useTheme } from '../../core';
import { BaseButton } from '../buttons/BaseButton';
import { ToggleButton } from '../buttons/ToggleButton';
import { Layer } from '../containers/Layer';
import { NextIcon } from '../../assets/NextIcon';
import { PreviousIcon } from '../../assets/PreviousIcon';
import { RepeatIcon } from '../../assets/RepeatIcon';
import { ShuffleIcon } from '../../assets/ShuffleIcon';
import { getShuffleButtonAccessibilityProps } from './accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from './accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from './accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from './accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from './accessibility/getRepeatButtonAccessibilityProps';
import { PlayPauseIcon } from './PlayPauseIcon';
const SMALL_ICON_SIZE = 16;
const SMALL_BUTTON = 32;
const AudioControls = memo(({ isPlaying, isEnableShuffle, isEnableRepeat, onPlayPausePress, onNextPress, onPreviousPress, onShufflePress, onRepeatPress }) => {
    const { colors, sizes } = useTheme();
    return (React.createElement(Layer, null,
        React.createElement(Layer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(ToggleButton, Object.assign({ active: isEnableShuffle, variant: 'main', onPress: onShufflePress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getShuffleButtonAccessibilityProps()), (tintColor) => React.createElement(ShuffleIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(BaseButton, Object.assign({ alignItems: 'center', justifyContent: 'center', width: 36, height: 36, onPress: onPreviousPress }, getPreviousButtonAccessibilityProps()),
                React.createElement(PreviousIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, Object.assign({ active: !isPlaying, variant: 'main', onPress: onPlayPausePress, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getPlayPauseButtonAccessibilityProps()), (tintColor) => React.createElement(PlayPauseIcon, { tintColor: tintColor, isPlaying: isPlaying })),
            React.createElement(BaseButton, Object.assign({ alignItems: 'center', justifyContent: 'center', width: 36, height: 36, onPress: onNextPress }, getNextButtonAccessibilityProps()),
                React.createElement(NextIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, Object.assign({ active: isEnableRepeat, variant: 'main', onPress: onRepeatPress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getRepeatButtonAccessibilityProps()), (tintColor) => React.createElement(RepeatIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })))));
});
AudioControls.displayName = 'AudioControls';
export { AudioControls };
//# sourceMappingURL=AudioControls.js.map