var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ICON_SIZE = 20;
var SMALL_ICON_SIZE = 16;
var SMALL_BUTTON = 32;
var PlayPauseIcon = memo(function (_a) {
    var tintColor = _a.tintColor, isPlaying = _a.isPlaying;
    return (React.createElement(AnimatePresence, null, isPlaying ? (React.createElement(Layer, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(PauseIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE }))) : (React.createElement(Layer, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
        React.createElement(PlayIcon, { fill: tintColor, width: ICON_SIZE, height: ICON_SIZE })))));
});
export var AudioControls = memo(function (_a) {
    var isPlaying = _a.isPlaying, isEnableShuffle = _a.isEnableShuffle, isEnableRepeat = _a.isEnableRepeat, onPlayPausePress = _a.onPlayPausePress, onNextPress = _a.onNextPress, onPreviousPress = _a.onPreviousPress, onShufflePress = _a.onShufflePress, onRepeatPress = _a.onRepeatPress;
    var _b = useTheme(), colors = _b.colors, sizes = _b.sizes;
    return (React.createElement(React.Fragment, null,
        React.createElement(Layer, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(ToggleButton, __assign({ active: isEnableShuffle, variant: 'main', onPress: onShufflePress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getShuffleButtonAccessibilityProps(isEnableShuffle)), function (tintColor) { return React.createElement(ShuffleIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE }); }),
            React.createElement(BaseButton, __assign({ alignItems: 'center', justifyContent: 'center', width: 24, height: 24, onPress: onPreviousPress }, getPreviousButtonAccessibilityProps()),
                React.createElement(PreviousIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, __assign({ active: !isPlaying, variant: 'main', onPress: onPlayPausePress, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getPlayPauseButtonAccessibilityProps(isPlaying)), function (tintColor) { return React.createElement(PlayPauseIcon, { tintColor: tintColor, isPlaying: isPlaying }); }),
            React.createElement(BaseButton, __assign({ alignItems: 'center', justifyContent: 'center', width: 24, height: 24, onPress: onNextPress }, getNextButtonAccessibilityProps()),
                React.createElement(NextIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })),
            React.createElement(ToggleButton, __assign({ active: isEnableRepeat, variant: 'main', onPress: onRepeatPress, useGrayVariant: true, width: SMALL_BUTTON, height: SMALL_BUTTON, borderRadius: SMALL_BUTTON / 2 }, getRepeatButtonAccessibilityProps(isEnableRepeat)), function (tintColor) { return React.createElement(RepeatIcon, { fill: tintColor, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE }); }))));
});
//# sourceMappingURL=AudioControls.js.map