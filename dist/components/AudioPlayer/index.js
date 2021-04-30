var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback } from 'react';
import { Box } from '../containers';
import { Layer } from '../containers/Layer';
import { useAudioPlayer } from './useAudioPlayer';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Image } from '../Image';
import { AudioControls } from './AudioControls';
import { AudioProgressBar } from './AudioProgressBar';
import { getAudioPlayerAccessibilityProps } from './accessibility/getAudioPlayerAccessibilityProps';
export function AudioPlayer(_a) {
    var { tracks } = _a, layerProps = __rest(_a, ["tracks"]);
    const { spacings, borderRadius, colors } = useTheme();
    const { currentTrackInfo, currentTime, duration, isPlaying, enableShufflePlayback, enableRepeatPlayback, setIsPlaying, setPositionManually, toNextTrack, toPreviousTrack, setEnableShufflePlayback, setEnableRepeatPlayback } = useAudioPlayer(tracks);
    const { title, image } = currentTrackInfo;
    const handleUpdateTime = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        yield setPositionManually(positionMillis);
        if (!isPlaying) {
            setIsPlaying(true);
        }
    }), [isPlaying, setIsPlaying, setPositionManually]);
    const handlePlayPause = useCallback(() => {
        setIsPlaying((prevValue) => !prevValue);
    }, [setIsPlaying]);
    const handleShuffle = useCallback(() => setEnableShufflePlayback((currentValue) => !currentValue), [setEnableShufflePlayback]);
    const handleRepeat = useCallback(() => setEnableRepeatPlayback((currentValue) => !currentValue), [setEnableRepeatPlayback]);
    return (React.createElement(Box, Object.assign({ flexDirection: 'row', padding: spacings.s }, layerProps, getAudioPlayerAccessibilityProps()),
        React.createElement(Image, { source: image, width: 103, height: 103, resizeMode: 'cover', borderRadius: borderRadius.m, label: 'Song Image' }),
        React.createElement(Layer, { flex: 1, marginLeft: spacings.s },
            React.createElement(Text, { variant: 'button', color: colors.text }, title),
            React.createElement(AudioProgressBar, { isPlaying: isPlaying, duration: duration, currentTime: currentTime, onTimeUpdate: handleUpdateTime }),
            React.createElement(AudioControls, { isEnableShuffle: enableShufflePlayback, isEnableRepeat: enableRepeatPlayback, isPlaying: isPlaying, onPlayPausePress: handlePlayPause, onNextPress: toNextTrack, onPreviousPress: toPreviousTrack, onShufflePress: handleShuffle, onRepeatPress: handleRepeat }))));
}
//# sourceMappingURL=index.js.map