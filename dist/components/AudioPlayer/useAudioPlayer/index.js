var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useRef, useEffect, useCallback } from 'react';
import { shuffleArray } from './utils/shuffleArray';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    const [trackIndex, setTrackIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [enableRepeatPlayback, setEnableRepeatPlayback] = useState(repeatPlayback !== null && repeatPlayback !== void 0 ? repeatPlayback : false);
    const [enableShufflePlayback, setEnableShufflePlayback] = useState(shufflePlayback !== null && shufflePlayback !== void 0 ? shufflePlayback : false);
    const [playList, setPlayList] = useState(shufflePlayback ? shuffleArray(tracks) : tracks);
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentTrackInfo = playList[trackIndex];
    const { audioSrc } = currentTrackInfo;
    const audioRef = useRef();
    const isReady = useRef(false);
    const setPositionManually = useCallback((positionMillis) => __awaiter(this, void 0, void 0, function* () {
        if (audioRef.current)
            audioRef.current.currentTime = positionMillis / 1000;
        setCurrentTime(positionMillis);
    }), []);
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
    const checkIfShouldGoToNextTrack = useCallback(() => {
        const isLastIndex = trackIndex == tracks.length - 1;
        if (enableRepeatPlayback) {
            toNextTrack();
        }
        else if (!isLastIndex) {
            toNextTrack();
        }
        else {
            if (audioRef.current)
                audioRef.current.currentTime = 0;
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length]);
    useEffect(() => {
        if (isReady.current) {
            if (enableShufflePlayback) {
                setPlayList((currentPlayList) => shuffleArray(currentPlayList));
            }
            else {
                setPlayList(tracks);
            }
        }
    }, [enableShufflePlayback, tracks]);
    useEffect(() => {
        if (audioRef.current)
            audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        const audioCurrentRef = audioRef.current;
        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        }
        else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
        const onLoadedData = () => {
            if (audioRef.current) {
                const { duration } = audioRef.current;
                if (!isNaN(duration))
                    setDuration(duration * 1000);
            }
        };
        const onEnded = () => {
            checkIfShouldGoToNextTrack();
        };
        const onTimeUpdate = () => {
            if (audioRef.current)
                setCurrentTime(audioRef.current.currentTime * 1000);
        };
        audioRef.current.addEventListener('loadeddata', onLoadedData);
        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('timeupdate', onTimeUpdate);
        return () => {
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.pause();
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('ended', onEnded);
            audioCurrentRef === null || audioCurrentRef === void 0 ? void 0 : audioCurrentRef.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioSrc, checkIfShouldGoToNextTrack, trackIndex]);
    useEffect(() => {
        if (isPlaying) {
            if (audioRef.current)
                audioRef.current.play();
        }
        else {
            if (audioRef.current)
                audioRef.current.pause();
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
//# sourceMappingURL=index.js.map