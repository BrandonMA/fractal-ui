import { useState, useRef, useCallback } from 'react';
import { useEnableRepeatPlayback } from './hooks/useEnableRepeatPlayback';
import { useShufflePlaybackController } from './hooks/useShufflePlaybackController';
import { useCheckIfShouldGoToNextTrack } from './hooks/useCheckIfShouldGoToNextTrack';
import { AudioPlayerReturnedObject, MinimalTrackData } from './types';
import { useAudioEffect } from './hooks/useAudioEffect';

export function useAudioPlayer<T extends MinimalTrackData>(
    tracks: Array<T>,
    shufflePlayback?: boolean,
    repeatPlayback?: boolean
): AudioPlayerReturnedObject<T> {
    const [trackIndex, setTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { enableRepeatPlayback, toggleRepeatPlayback } = useEnableRepeatPlayback(repeatPlayback);
    const { enableShufflePlayback, toggleShufflePlayback, playList } = useShufflePlaybackController(tracks, trackIndex, shufflePlayback);

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const audioRef = useRef<HTMLAudioElement>();

    const play = useCallback(() => {
        if (audioRef.current) audioRef.current.play();
        setIsPlaying(true);
    }, []);

    const pause = useCallback(() => {
        if (audioRef.current) audioRef.current.pause();
        setIsPlaying(false);
    }, []);

    const handlePlayPause = useCallback(() => {
        console.log('handlePlayPause');
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }, [isPlaying, pause, play]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            if (audioRef.current) audioRef.current.currentTime = positionMillis / 1000;
            setCurrentTime(positionMillis);
            if (!isPlaying) play();
        },
        [isPlaying, play]
    );

    const toPreviousTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    };

    const toNextTrack = useCallback(() => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }, [trackIndex, tracks.length]);

    const resetPosition = useCallback(async () => {
        if (audioRef.current) audioRef.current.currentTime = 0;
    }, []);

    const checkIfShouldGoToNextTrack = useCheckIfShouldGoToNextTrack(
        trackIndex,
        tracks.length,
        enableRepeatPlayback,
        toNextTrack,
        setCurrentTime,
        setIsPlaying,
        resetPosition
    );

    useAudioEffect(audioRef, audioSrc as string, setIsPlaying, setCurrentTime, setDuration, checkIfShouldGoToNextTrack);

    return {
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
        setTrackIndex,
        toggleShufflePlayback,
        toggleRepeatPlayback
    };
}
