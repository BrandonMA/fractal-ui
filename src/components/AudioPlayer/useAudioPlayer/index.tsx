import { useState, useRef, useEffect, useCallback } from 'react';
import { AudioPlayerReturnedObject, MinimalTrackData } from './types';
import { shuffleArray } from './utils/shuffleArray';

export function useAudioPlayer(
    tracks: Array<MinimalTrackData>,
    shufflePlayback?: boolean,
    repeatPlayback?: boolean
): AudioPlayerReturnedObject {
    const [trackIndex, setTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState<boolean>(repeatPlayback ?? false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState<boolean>(shufflePlayback ?? false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc as string));
    const isReady = useRef(false);

    audioRef.current.onloadeddata = (): void => {
        const { duration } = audioRef.current;
        if (!isNaN(duration)) setDuration(duration * 1000);
    };

    audioRef.current.onended = (): void => {
        checkIfShouldToNextTrack();
    };

    audioRef.current.ontimeupdate = (): void => {
        setCurrentTime(audioRef.current.currentTime * 1000);
    };

    const setPositionManually = useCallback(async (positionMillis: number): Promise<void> => {
        audioRef.current.currentTime = positionMillis / 1000;
        setCurrentTime(positionMillis);
    }, []);

    const toPreviousTrack = useCallback(() => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }, [trackIndex, tracks.length]);

    const toNextTrack = useCallback(() => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }, [trackIndex, tracks.length]);

    const checkIfShouldToNextTrack = useCallback(() => {
        const isLastIndex = trackIndex == tracks.length - 1;
        if (enableRepeatPlayback) {
            toNextTrack();
        } else if (!isLastIndex) {
            toNextTrack();
        } else {
            audioRef.current.currentTime = 0;
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
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc as string);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [audioSrc, trackIndex]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        const audioCurrentRef = audioRef.current;
        // Pause and clean up on unmount
        return () => {
            audioCurrentRef.pause();
        };
    }, [audioRef]);

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
