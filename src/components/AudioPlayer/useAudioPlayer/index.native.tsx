import { useState, useCallback, useEffect } from 'react';
import { Audio } from 'expo-av';
import { AudioPlayerReturnedObject, MinimalTrackData, CustomAVPlaybackStatus } from './types';
import { shuffleArray } from './utils/shuffleArray';

export function useAudioPlayer(
    tracks: Array<MinimalTrackData>,
    shufflePlayback?: boolean,
    repeatPlayback?: false
): AudioPlayerReturnedObject {
    const [sound, setSound] = useState<Audio.Sound | undefined>(undefined);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState<boolean>(repeatPlayback ?? false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState<boolean>(shufflePlayback ?? false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const playSound = useCallback(async (): Promise<void> => {
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true
        });
        await sound?.playAsync();
        setIsPlaying(true);
    }, [sound]);

    const pauseSound = useCallback(async (): Promise<void> => {
        await sound?.pauseAsync();
        setIsPlaying(false);
    }, [sound]);

    const setManualTime = useCallback(
        async (timeInSeconds: number): Promise<void> => {
            const positionMillis = timeInSeconds * 1000;
            await sound?.playFromPositionAsync(positionMillis);
            setIsPlaying(true);
        },
        [sound]
    );

    const toPreviousTrack = useCallback(() => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }, [trackIndex, tracks.length]);

    const toNextTrack = useCallback(() => {
        setCurrentTime(0);
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
            setIsPlaying(false);
            await sound?.setPositionAsync(0);
            setCurrentTime(0);
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
                setCurrentTime(status.positionMillis / 1000);
            }
            if (status.didJustFinish) {
                checkIfShouldToNextTrack();
            }
        },
        [checkIfShouldToNextTrack]
    );

    useEffect(() => {
        const loadSoundAsync = async (): Promise<void> => {
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;

            if (sound == null) {
                const { sound, status } = await Audio.Sound.createAsync(source);
                await sound?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                setSound(sound);
                const castedStatus = status as CustomAVPlaybackStatus;

                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis / 1000);
                }
            } else {
                await sound.unloadAsync();
                const status = await sound.loadAsync(source, { shouldPlay: true });
                await sound?.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                const castedStatus = status as CustomAVPlaybackStatus;

                if (!isPlaying) {
                    setIsPlaying(true);
                }

                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis / 1000);
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
        if (isPlaying) {
            playSound();
        } else {
            pauseSound();
        }
    }, [isPlaying, pauseSound, playSound]);

    return {
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
        setTrackIndex,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    };
}
