import { useState, useCallback, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { AudioPlayerReturnedObject, MinimalTrackData, CustomAVPlaybackStatus } from './types';
import { shuffleArray } from './utils/shuffleArray';

export function useAudioPlayer<T extends MinimalTrackData>(
    tracks: Array<T>,
    shufflePlayback?: boolean,
    repeatPlayback?: false
): AudioPlayerReturnedObject<T> {
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState<boolean>(repeatPlayback ?? false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState<boolean>(shufflePlayback ?? false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const soundRef = useRef<Audio.Sound>();

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const playSound = useCallback(async (): Promise<void> => {
        await soundRef.current?.playAsync();
    }, [soundRef]);

    const pauseSound = useCallback(async (): Promise<void> => {
        await soundRef.current?.pauseAsync();
    }, [soundRef]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            await soundRef.current?.setPositionAsync(positionMillis);
        },
        [soundRef]
    );

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

    const checkIfShouldToNextTrack = useCallback(async () => {
        const isLastIndex = trackIndex == tracks.length - 1;

        if (!isLastIndex && !enableRepeatPlayback) {
            toNextTrack();
        } else {
            await soundRef.current?.setPositionAsync(0);
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length, soundRef]);

    useEffect(() => {
        if (soundRef.current != null) {
            if (enableShufflePlayback) {
                setPlayList((currentPlayList) => shuffleArray(currentPlayList));
            } else {
                setPlayList(tracks);
            }
        }
    }, [enableShufflePlayback, tracks, soundRef]);

    const onPlaybackStatusUpdate = useCallback(
        async (status: CustomAVPlaybackStatus): Promise<void> => {
            if (status.positionMillis) {
                setCurrentTime(status.positionMillis);
            }
            if (status.didJustFinish) {
                await checkIfShouldToNextTrack();
            }
        },
        [checkIfShouldToNextTrack]
    );

    useEffect(() => {
        const loadSoundAsync = async (): Promise<void> => {
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;

            if (soundRef.current === undefined) {
                await Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true
                });
                const { sound: audioSound, status } = await Audio.Sound.createAsync(source);
                soundRef.current = audioSound;
                soundRef.current?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                const castedStatus = status as CustomAVPlaybackStatus;

                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis);
                }
            } else {
                await soundRef.current?.unloadAsync();
                const status = await soundRef.current?.loadAsync(source, { shouldPlay: true });
                soundRef.current?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                setCurrentTime(0);
                const castedStatus = status as CustomAVPlaybackStatus;

                if (!isPlaying) {
                    setIsPlaying(true);
                }

                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis);
                }
            }
        };

        loadSoundAsync().catch((error) => alert(error.message));

        return soundRef.current
            ? (): void => {
                  soundRef.current?.unloadAsync();
              }
            : undefined;
    }, [audioSrc, soundRef, isPlaying, onPlaybackStatusUpdate]);

    useEffect(() => {
        const handlePlayOrPause = async () => {
            if (isPlaying) {
                await playSound();
            } else {
                await pauseSound();
            }
        };

        handlePlayOrPause().catch((error) => alert(error.message));
    }, [isPlaying, pauseSound, playSound]);

    return {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        setIsPlaying,
        setPositionManually: (time: number) => setPositionManually(time),
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    };
}
