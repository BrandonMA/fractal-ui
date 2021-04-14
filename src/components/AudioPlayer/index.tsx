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

export function AudioPlayer({ tracks }: AudioPlayerProps): JSX.Element {
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

    return (
        <Box flexDirection={'row'} maxWidth={768}>
            <Image source={image} width={104} height={104} resizeMode={'cover'} borderRadius={borderRadius.m} />
            <Layer flex={1} marginLeft={spacings.xs}>
                <Text variant='button' color={colors.text}>
                    {title}
                </Text>
                <AudioProgressBar isPlaying={isPlaying} duration={duration} currentTime={currentTime} onTimeUpdate={handleUpdateTime} />
                <AudioControls
                    isEnableShuffle={enableShufflePlayback}
                    isEnableRepeat={enableRepeatPlayback}
                    isPlaying={isPlaying}
                    onPlayPausePress={setIsPlaying}
                    onNextPress={toNextTrack}
                    onPreviousPress={toPreviousTrack}
                    onShufflePress={() => setEnableShufflePlayback((currentValue) => !currentValue)}
                    onRepeatPress={() => setEnableRepeatPlayback((currentValue) => !currentValue)}
                />
            </Layer>
        </Box>
    );
}
