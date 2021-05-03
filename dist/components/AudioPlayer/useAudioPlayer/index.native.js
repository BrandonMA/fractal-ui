var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useCallback, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { shuffleArray } from './utils/shuffleArray';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState(repeatPlayback !== null && repeatPlayback !== void 0 ? repeatPlayback : false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState(shufflePlayback !== null && shufflePlayback !== void 0 ? shufflePlayback : false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const soundRef = useRef();
    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;
    const playSound = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield ((_a = soundRef.current) === null || _a === void 0 ? void 0 : _a.playAsync());
    }), [soundRef]);
    const pauseSound = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _b;
        yield ((_b = soundRef.current) === null || _b === void 0 ? void 0 : _b.pauseAsync());
    }), [soundRef]);
    const setPositionManually = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        var _c;
        yield ((_c = soundRef.current) === null || _c === void 0 ? void 0 : _c.setPositionAsync(positionMillis));
    }), [soundRef]);
    const toPreviousTrack = useCallback(() => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        }
        else {
            setTrackIndex(trackIndex - 1);
        }
    }, [trackIndex, tracks.length]);
    const toNextTrack = useCallback(() => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        }
        else {
            setTrackIndex(0);
        }
    }, [trackIndex, tracks.length]);
    const checkIfShouldToNextTrack = useCallback(() => __awaiter(this, void 0, void 0, function* () {
        var _d;
        const isLastIndex = trackIndex == tracks.length - 1;
        if (!isLastIndex && !enableRepeatPlayback) {
            toNextTrack();
        }
        else {
            yield ((_d = soundRef.current) === null || _d === void 0 ? void 0 : _d.setPositionAsync(0));
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }), [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length, soundRef]);
    useEffect(() => {
        if (soundRef.current != null) {
            if (enableShufflePlayback) {
                setPlayList((currentPlayList) => shuffleArray(currentPlayList));
            }
            else {
                setPlayList(tracks);
            }
        }
    }, [enableShufflePlayback, tracks, soundRef]);
    const onPlaybackStatusUpdate = useCallback((status) => __awaiter(this, void 0, void 0, function* () {
        if (status.positionMillis) {
            setCurrentTime(status.positionMillis);
        }
        if (status.didJustFinish) {
            yield checkIfShouldToNextTrack();
        }
    }), [checkIfShouldToNextTrack]);
    useEffect(() => {
        const loadSoundAsync = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
            if (soundRef.current === undefined) {
                yield Audio.setAudioModeAsync({
                    playsInSilentModeIOS: true
                });
                const { sound: audioSound, status } = yield Audio.Sound.createAsync(source);
                soundRef.current = audioSound;
                (_a = soundRef.current) === null || _a === void 0 ? void 0 : _a.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                const castedStatus = status;
                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis);
                }
            }
            else {
                yield ((_b = soundRef.current) === null || _b === void 0 ? void 0 : _b.unloadAsync());
                const status = yield ((_c = soundRef.current) === null || _c === void 0 ? void 0 : _c.loadAsync(source, { shouldPlay: true }));
                (_d = soundRef.current) === null || _d === void 0 ? void 0 : _d.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                setCurrentTime(0);
                const castedStatus = status;
                if (!isPlaying) {
                    setIsPlaying(true);
                }
                if (castedStatus.durationMillis) {
                    setDuration(castedStatus.durationMillis);
                }
            }
        });
        loadSoundAsync().catch((error) => alert(error.message));
        return soundRef.current
            ? () => {
                var _a;
                (_a = soundRef.current) === null || _a === void 0 ? void 0 : _a.unloadAsync();
            }
            : undefined;
    }, [audioSrc, soundRef, isPlaying, onPlaybackStatusUpdate]);
    useEffect(() => {
        const handlePlayOrPause = () => __awaiter(this, void 0, void 0, function* () {
            if (isPlaying) {
                yield playSound();
            }
            else {
                yield pauseSound();
            }
        });
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
        setPositionManually: (time) => setPositionManually(time),
        toNextTrack,
        toPreviousTrack,
        setTrackIndex,
        setEnableShufflePlayback,
        setEnableRepeatPlayback
    };
}
//# sourceMappingURL=index.native.js.map