import React, { useCallback } from 'react';
import { Box } from '../containers';
import { Layer } from '../containers/Layer';
import { AudioPlayerProps } from './types';
import { useAudioPlayer } from './useAudioPlayer';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { Image } from '../Image';
import { AudioControls } from './AudioControls';
import { AudioProgressBar } from './AudioProgressBar';
import { getAudioPlayerAccessibilityProps } from './accessibility/getAudioPlayerAccessibilityProps';

export function AudioPlayer({ tracks, ...layerProps }: AudioPlayerProps): JSX.Element {
    const { spacings, borderRadius, colors } = useTheme();
    const {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        handlePlayPause,
        setPositionManually,
        toNextTrack,
        toPreviousTrack,
        toggleShufflePlayback,
        toggleRepeatPlayback
    } = useAudioPlayer(tracks);

    const { title, image } = currentTrackInfo;

    const handleUpdateTime = useCallback(
        async (positionMillis: number) => {
            await setPositionManually(positionMillis);
        },
        [setPositionManually]
    );

    return (
        <Box flexDirection={'row'} justifyContent={'center'} padding={spacings.s} {...layerProps} {...getAudioPlayerAccessibilityProps()}>
            <Image source={image} width={120} height={'100%'} resizeMode={'cover'} borderRadius={borderRadius.m} label={'Song Image'} />
            <Layer flex={1} marginLeft={spacings.s}>
                <Text variant='button' color={colors.text} marginBottom={spacings.s}>
                    {title}
                </Text>
                <AudioProgressBar isPlaying={isPlaying} duration={duration} currentTime={currentTime} onTimeUpdate={handleUpdateTime} />
                <AudioControls
                    isEnableShuffle={enableShufflePlayback}
                    isEnableRepeat={enableRepeatPlayback}
                    isPlaying={isPlaying}
                    onPlayPausePress={handlePlayPause}
                    onNextPress={toNextTrack}
                    onPreviousPress={toPreviousTrack}
                    onShufflePress={toggleShufflePlayback}
                    onRepeatPress={toggleRepeatPlayback}
                />
            </Layer>
        </Box>
    );
}
