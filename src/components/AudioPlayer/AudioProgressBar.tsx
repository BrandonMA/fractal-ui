import React, { useState, useCallback, useEffect } from 'react';
import { Layer } from '../containers/Layer';
import { Text } from '../text';
import { Slider } from '../Slider';
import { formatNumberToTime } from './utils/formatNumberToTime';

interface AudioProgressBarProps {
    duration: number;
    currentTime: number;
    isPlaying: boolean;
    onTimeUpdate: (time: number) => void;
}

export function AudioProgressBar({ duration, currentTime, isPlaying, onTimeUpdate }: AudioProgressBarProps): JSX.Element {
    const [trackProgress, setTrackProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleSlidingStart = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleValueChange = useCallback((positionMillis: number) => {
        setTrackProgress(positionMillis);
    }, []);

    const handleSlidingComplete = useCallback(
        (time: number) => {
            setIsDragging(false);
            onTimeUpdate(time);
        },
        [onTimeUpdate]
    );

    useEffect(() => {
        if (isPlaying && !isDragging) {
            setTrackProgress(currentTime);
        }
    }, [currentTime, isDragging, isPlaying, trackProgress]);

    return (
        <>
            <Slider
                value={trackProgress}
                minimumValue={0}
                step={1}
                maximumValue={duration} //148035
                onSlidingStart={handleSlidingStart}
                onValueChange={handleValueChange}
                onSlidingComplete={handleSlidingComplete}
            />
            <Layer flexDirection={'row'} justifyContent={'space-between'}>
                <Text variant='smallLabel' fontSize={12}>{`${formatNumberToTime(trackProgress)}`}</Text>
                <Text variant='smallLabel' fontSize={12}>{`${formatNumberToTime(duration)}`}</Text>
            </Layer>
        </>
    );
}
