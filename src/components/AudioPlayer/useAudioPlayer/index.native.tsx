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
    const sound = soundRef.current;

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const playSound = useCallback(async (): Promise<void> => {
        await sound?.playAsync();
    }, [sound]);

    const pauseSound = useCallback(async (): Promise<void> => {
        await sound?.pauseAsync();
    }, [sound]);

    const setPositionManually = useCallback(async (positionMillis: number): Promise<void> => {
        await soundRef.current?.setPositionAsync(positionMillis);
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

    const checkIfShouldToNextTrack = useCallback(async () => {
        const isLastIndex = trackIndex == tracks.length - 1;

        if (!isLastIndex && !enableRepeatPlayback) {
            toNextTrack();
        } else {
            await sound?.setPositionAsync(0);
            setCurrentTime(0);
            setIsPlaying(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length]);

    useEffect(() => {
        if (sound != null) {
            if (enableShufflePlayback) {
                setPlayList((currentPlayList) => shuffleArray(currentPlayList));
            } else {
                setPlayList(tracks);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enableShufflePlayback, tracks]);

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

            if (sound === undefined) {
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
                await sound.unloadAsync();
                const status = await sound.loadAsync(source, { shouldPlay: true });
                sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
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

        loadSoundAsync();

        return sound
            ? (): void => {
                  sound.unloadAsync();
              }
            : undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioSrc]);

    useEffect(() => {
        const handlePlayOrPause = async () => {
            if (isPlaying) {
                await playSound();
            } else {
                await pauseSound();
            }
        };
        handlePlayOrPause();
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
