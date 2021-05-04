import { useState, useRef, useEffect, useCallback } from 'react';
import { AudioPlayerReturnedObject, MinimalTrackData } from './types';
import { shuffleArray } from './utils/shuffleArray';

export function useAudioPlayer<T extends MinimalTrackData>(
    tracks: Array<T>,
    shufflePlayback?: boolean,
    repeatPlayback?: boolean
): AudioPlayerReturnedObject<T> {
    const [trackIndex, setTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState<boolean>(repeatPlayback ?? false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState<boolean>(shufflePlayback ?? false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const audioRef = useRef<HTMLAudioElement>();
    const isReady = useRef(false);

    const setPositionManually = async (positionMillis: number): Promise<void> => {
        if (audioRef.current) audioRef.current.currentTime = positionMillis / 1000;
        setCurrentTime(positionMillis);
    };

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

    const checkIfShouldGoToNextTrack = useCallback(() => {
        const isLastIndex = trackIndex == tracks.length - 1;
        if (enableRepeatPlayback) {
            toNextTrack();
        } else if (!isLastIndex) {
            toNextTrack();
        } else {
            if (audioRef.current) audioRef.current.currentTime = 0;
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length]);

    useEffect(() => {
        if (isReady.current) {
            if (enableShufflePlayback) {
                setPlayList((currentPlayList) => shuffleArray(currentPlayList));
            } else {
                setPlayList(tracks);
            }
        }
    }, [enableShufflePlayback, tracks]);

    useEffect(() => {
        if (audioRef.current) audioRef.current.pause();

        audioRef.current = new Audio(audioSrc as string);
        const audioCurrentRef = audioRef.current;

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }

        const onLoadedData = (): void => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!isNaN(duration)) setDuration(duration * 1000);
            }
        };

        const onEnded = (): void => {
            checkIfShouldGoToNextTrack();
        };

        const onTimeUpdate = (): void => {
            if (audioRef.current) setCurrentTime(audioRef.current.currentTime * 1000);
        };

        audioRef.current.addEventListener('loadeddata', onLoadedData);
        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('timeupdate', onTimeUpdate);

        return () => {
            audioCurrentRef?.pause();
            audioCurrentRef?.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef?.removeEventListener('ended', onEnded);
            audioCurrentRef?.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioSrc, checkIfShouldGoToNextTrack, trackIndex]);

    useEffect(() => {
        if (isPlaying) {
            if (audioRef.current) audioRef.current.play();
        } else {
            if (audioRef.current) audioRef.current.pause();
        }
    }, [isPlaying]);

    return {
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
        setTrackIndex,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    };
}
