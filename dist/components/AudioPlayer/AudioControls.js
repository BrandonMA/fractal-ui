import { AnimatePresence } from 'framer-motion';
import React, { memo } from 'react';
import { useTheme } from '../../core';
import { BaseButton } from '../buttons/BaseButton';
import { ToggleButton } from '../buttons/ToggleButton';
import { Layer } from '../containers/Layer';
import { NextIcon } from './icons/Next';
import { PauseIcon } from './icons/Pause';
import { PlayIcon } from './icons/Play';
import { PreviousIcon } from './icons/Previous';
import { RepeatIcon } from './icons/Repeat';
import { ShuffleIcon } from './icons/Shuffle';
import { getShuffleButtonAccessibilityProps } from './accessibility/getShuffleButtonAccessibilityProps';
import { getPreviousButtonAccessibilityProps } from './accessibility/getPreviousButtonAccessibilityProps';
import { getPlayPauseButtonAccessibilityProps } from './accessibility/getPlayPauseButtonAccessibilityProps';
import { getNextButtonAccessibilityProps } from './accessibility/getNextButtonAccessibilityProps';
import { getRepeatButtonAccessibilityProps } from './accessibility/getRepeatButtonAccessibilityProps';
const ICON_SIZE = 20;
const SMALL_ICON_SIZE = 16;
const SMALL_BUTTON = 32;
const PlayPauseIcon = memo(({ tintColor, isPlaying }) => {
    return (React.createElement(AnimatePresence, null, isPlaying ? (React.createElement(Layer, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(PauseIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE }))) : (React.createElement(Layer, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(PlayIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE })))));
});
export const AudioControls = memo(({ isPlaying, isEnableShuffle, isEnableRepeat, onPlayPausePress, onNextPress, onPreviousPress, onShufflePress, onRepeatPress }) => {
    const { colors, sizes } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(ToggleButton, Object.assign({ active: isEnableShuffle, variant: 'main', onPress: onShufflePress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getShuffleButtonAccessibilityProps(isEnableShuffle)), (tintColor) => React.createElement(ShuffleIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(BaseButton, Object.assign({ alignItems: 'center', justifyContent: 'center', width: 24, height: 24, onPress: onPreviousPress }, getPreviousButtonAccessibilityProps()),
                React.createElement(PreviousIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, Object.assign({ active: !isPlaying, variant: 'main', onPress: onPlayPausePress, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getPlayPauseButtonAccessibilityProps(isPlaying)), (tintColor) => React.createElement(PlayPauseIcon, { tintColor: tintColor, isPlaying: isPlaying })),
            React.createElement(BaseButton, Object.assign({ alignItems: 'center', justifyContent: 'center', width: 24, height: 24, onPress: onNextPress }, getNextButtonAccessibilityProps()),
                React.createElement(NextIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, Object.assign({ active: isEnableRepeat, variant: 'main', onPress: onRepeatPress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getRepeatButtonAccessibilityProps(isEnableRepeat)), (tintColor) => React.createElement(RepeatIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })))));
});
//# sourceMappingURL=AudioControls.js.map