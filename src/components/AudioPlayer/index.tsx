import React, { useCallback } from 'react';
import { Box } from '../containers';
import { Layer } from '../containers/Layer/index.native';
import { AudioPlayerProps } from './types';
import { useAudioPlayer } from './useAudioPlayer';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';
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
        setIsPlaying,
        setPositionManually,
        toNextTrack,
        toPreviousTrack,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    } = useAudioPlayer(tracks);

    const { title, image } = currentTrackInfo;

    const handleUpdateTime = useCallback(
        async (positionMillis: number) => {
            await setPositionManually(positionMillis);
            if (!isPlaying) {
                setIsPlaying(true);
            }
        },
        [isPlaying, setIsPlaying, setPositionManually]
    );

    const handlePlayPause = useCallback(() => {
        setIsPlaying((prevValue) => !prevValue);
    }, [setIsPlaying]);

    const handleShuffle = useCallback(() => setEnableShufflePlayback((currentValue) => !currentValue), [setEnableShufflePlayback]);

    const handleRepeat = useCallback(() => setEnableRepeatPlayback((currentValue) => !currentValue), [setEnableRepeatPlayback]);

    return (
        <Box flexDirection={'row'} maxWidth={768} {...layerProps} {...getAudioPlayerAccessibilityProps()}>
            <Image source={image} width={104} height={104} resizeMode={'cover'} borderRadius={borderRadius.m} label={'Song Image'} />
            <Layer flex={1} marginLeft={spacings.xs}>
                <Text variant='button' color={colors.text}>
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
                    onShufflePress={handleShuffle}
                    onRepeatPress={handleRepeat}
                />
            </Layer>
        </Box>
    );
}
