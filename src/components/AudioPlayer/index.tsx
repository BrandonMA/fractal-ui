import React from 'react';
import { Button } from '../buttons';
import { Box } from '../containers';
import { Layer } from '../containers/Layer/index.native';
import { AudioPlayerProps } from './types';
import { useAudioPlayer } from './useAudioPlayer';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';

const strPadLeft = (string: number, pad: string, length: number): string => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
};

function convertNumberToTime(totalSeconds: number): string {
    if (totalSeconds < 0 || isNaN(totalSeconds)) {
        return '00:00';
    }
    totalSeconds = Number(totalSeconds.toFixed(0));
    const minutes = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds - minutes * 60;

    const finalTime = strPadLeft(minutes, '0', 2) + ':' + strPadLeft(secondsLeft, '0', 2);
    return finalTime;
}

export function SimpleAudioPlayer({ tracks }: AudioPlayerProps): JSX.Element {
    const { spacings } = useTheme();
    const {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        setIsPlaying,
        setManualTime,
        toNextTrack,
        toPreviousTrack,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    } = useAudioPlayer(tracks);

    console.log({ enableRepeatPlayback });

    const addTenSeconds = (): void => {
        const newTime = currentTime + 10;
        setManualTime(newTime);
    };

    const backTenSeconds = (): void => {
        const newTime = currentTime - 10;
        setManualTime(newTime);
    };

    const handleShufflePlayback = (): void => {
        setEnableShufflePlayback((currentValue) => !currentValue);
    };

    const handleRepeatPlayback = (): void => {
        console.log('Repeat');
        setEnableRepeatPlayback((currentValue) => !currentValue);
    };

    return (
        <Box>
            <Text variant='normal' marginBottom={spacings.m}>
                {currentTrackInfo.title}
            </Text>
            <Layer flexDirection={'row'} marginBottom={spacings.m} justifyContent={'space-between'}>
                <Button variant={'main'} marginRight={spacings.m} width={'30%'} text={'Previous'} onPress={toPreviousTrack} />
                <Button
                    variant={'main'}
                    marginRight={spacings.m}
                    text={isPlaying ? 'Pause' : 'Play'}
                    width={'30%'}
                    onPress={() => setIsPlaying((value) => !value)}
                />
                <Button variant={'main'} text={'Next'} width={'30%'} onPress={toNextTrack} />
            </Layer>
            <Layer flexDirection={'row'} marginBottom={spacings.m} justifyContent={'space-between'}>
                <Button variant={'alternative'} marginRight={spacings.m} width={'30%'} text={'- 10'} onPress={backTenSeconds} />
                <Button variant={'alternative'} text={'+ 10'} width={'30%'} onPress={addTenSeconds} />
            </Layer>
            <Layer flexDirection={'row'} marginBottom={spacings.m} justifyContent={'space-between'}>
                <Button
                    variant={enableShufflePlayback ? 'main' : 'warning'}
                    marginRight={spacings.m}
                    width={'30%'}
                    text={'Aleatorio'}
                    onPress={handleShufflePlayback}
                />
                <Button
                    variant={'warning'}
                    text={enableRepeatPlayback ? 'Repetir Activado' : 'Repetir'}
                    width={'30%'}
                    onPress={handleRepeatPlayback}
                />
            </Layer>
            <Layer flexDirection={'row'}>
                <Text variant='normal'>{`${convertNumberToTime(currentTime)} / ${convertNumberToTime(duration)}`}</Text>
            </Layer>
        </Box>
    );
}
