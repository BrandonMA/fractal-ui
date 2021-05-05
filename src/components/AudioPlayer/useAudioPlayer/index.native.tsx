import { useState, useCallback, useEffect } from 'react';
import { Audio } from 'expo-av';
import { AudioPlayerReturnedObject, MinimalTrackData, CustomAVPlaybackStatus } from './types';
import { useShufflePlaybackController } from './hooks/useShufflePlaybackController';
import { useEnableRepeatPlayback } from './hooks/useEnableRepeatPlayback';
import { useCheckIfShouldGoToNextTrack } from './hooks/useCheckIfShouldGoToNextTrack';

export function useAudioPlayer<T extends MinimalTrackData>(
    tracks: Array<T>,
    shufflePlayback?: boolean,
    repeatPlayback?: false
): AudioPlayerReturnedObject<T> {
    const [sound, setSound] = useState<Audio.Sound>();
    const [didJustFinish, setDidJustFinish] = useState(false);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { enableRepeatPlayback, toggleRepeatPlayback } = useEnableRepeatPlayback(repeatPlayback);
    const { enableShufflePlayback, toggleShufflePlayback, playList } = useShufflePlaybackController(tracks, trackIndex, shufflePlayback);

    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;

    const onPlaybackStatusUpdate = useCallback((status: CustomAVPlaybackStatus): void => {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            setDidJustFinish(status.didJustFinish);
        }
    }, []);

    const loadNewSoundAsync = useCallback(
        async (newTrackIndex: number, shouldPlay: boolean, positionMillis?: number): Promise<void> => {
            const { audioSrc } = playList[newTrackIndex];
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
            try {
                if (sound) {
                    await sound.unloadAsync();
                    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                    const status = await sound.loadAsync(source, { shouldPlay, positionMillis });
                    const castedStatus = status as CustomAVPlaybackStatus;
                    if (castedStatus.durationMillis) {
                        setDuration(castedStatus.durationMillis);
                    }
                    setCurrentTime(0);
                }
            } catch (error) {
                console.log(error);
            }
        },
        [onPlaybackStatusUpdate, playList, sound]
    );

    const pauseAsync = useCallback(async () => {
        if (sound) {
            const { isLoaded } = await sound.getStatusAsync();
            if (!isLoaded) {
                await loadNewSoundAsync(trackIndex, false);
            } else {
                await sound.pauseAsync();
            }
            setIsPlaying(false);
        }
    }, [loadNewSoundAsync, sound, trackIndex]);

    const playAsync = useCallback(async () => {
        if (sound) {
            const { isLoaded } = await sound.getStatusAsync();
            if (!isLoaded) {
                await loadNewSoundAsync(trackIndex, true, currentTime);
            } else {
                await sound.playAsync();
            }
            setIsPlaying(true);
        }
    }, [currentTime, loadNewSoundAsync, sound, trackIndex]);

    const handlePlayPause = useCallback(async () => {
        if (isPlaying) {
            await pauseAsync();
        } else {
            await playAsync();
        }
    }, [isPlaying, pauseAsync, playAsync]);

    const setPositionManually = useCallback(
        async (positionMillis: number): Promise<void> => {
            await sound?.setPositionAsync(positionMillis);
            if (!isPlaying) await playAsync();
        },
        [isPlaying, playAsync, sound]
    );

    const handleChangeSound = useCallback(
        async (newTrackIndex) => {
            setIsPlaying(true);
            await loadNewSoundAsync(newTrackIndex, true);
        },
        [loadNewSoundAsync]
    );

    const toPreviousTrack = useCallback(async () => {
        if (sound) {
            const newTrackIndex = trackIndex - 1 < 0 ? tracks.length - 1 : trackIndex - 1;
            setTrackIndex(newTrackIndex);
            await handleChangeSound(newTrackIndex);
        }
    }, [handleChangeSound, sound, trackIndex, tracks.length]);

    const toNextTrack = useCallback(async () => {
        if (sound) {
            const newTrackIndex = trackIndex < tracks.length - 1 ? trackIndex + 1 : 0;
            setTrackIndex(newTrackIndex);
            await handleChangeSound(newTrackIndex);
        }
    }, [handleChangeSound, sound, trackIndex, tracks.length]);

    const resetPosition = useCallback(async () => {
        await sound?.setPositionAsync(0);
    }, [sound]);

    const checkIfShouldGoToNextTrack = useCheckIfShouldGoToNextTrack(
        trackIndex,
        tracks.length,
        enableRepeatPlayback,
        toNextTrack,
        setCurrentTime,
        setIsPlaying,
        resetPosition
    );

    useEffect(() => {
        const loadInitialSoundAsync = async () => {
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
            try {
                if (!sound) {
                    await Audio.setAudioModeAsync({
                        playsInSilentModeIOS: true
                    });
                    const { sound: audioSound, status } = await Audio.Sound.createAsync(
                        source,
                        { shouldPlay: false },
                        onPlaybackStatusUpdate
                    );
                    const castedStatus = status as CustomAVPlaybackStatus;
                    setSound(audioSound);
                    if (castedStatus.durationMillis) {
                        setDuration(castedStatus.durationMillis);
                    }
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        loadInitialSoundAsync();
    }, [audioSrc, currentTrackInfo, isPlaying, onPlaybackStatusUpdate, sound]);

    useEffect(() => {
        if (didJustFinish) {
            setDidJustFinish(false);
            checkIfShouldGoToNextTrack();
        }
    }, [checkIfShouldGoToNextTrack, didJustFinish]);

    /*useEffect(() => {
        return () => {
            console.log('Unloading Sound');
            sound?.unloadAsync();
        };
    }, [sound]);*/

    return {
        currentTrackInfo,
        currentTime,
        duration,
        isPlaying,
        enableShufflePlayback,
        enableRepeatPlayback,
        handlePlayPause,
        setPositionManually: (time: number) => setPositionManually(time),
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        toggleShufflePlayback,
        toggleRepeatPlayback
    };
}
