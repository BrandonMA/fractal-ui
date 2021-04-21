var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useRef, useEffect, useCallback } from 'react';
import { shuffleArray } from './utils/shuffleArray';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    var _this = this;
    var _a = useState(0), trackIndex = _a[0], setTrackIndex = _a[1];
    var _b = useState(0), duration = _b[0], setDuration = _b[1];
    var _c = useState(repeatPlayback !== null && repeatPlayback !== void 0 ? repeatPlayback : false), enableRepeatPlayback = _c[0], setEnableRepeatPlayback = _c[1];
    var _d = useState(shufflePlayback !== null && shufflePlayback !== void 0 ? shufflePlayback : false), enableShufflePlayback = _d[0], setEnableShufflePlayback = _d[1];
    var _e = useState(shufflePlayback ? shuffleArray(tracks) : tracks), playList = _e[0], setPlayList = _e[1];
    var _f = useState(0), currentTime = _f[0], setCurrentTime = _f[1];
    var _g = useState(false), isPlaying = _g[0], setIsPlaying = _g[1];
    var currentTrackInfo = playList[trackIndex];
    var audioSrc = currentTrackInfo.audioSrc;
    var audioRef = useRef(new Audio(audioSrc));
    var isReady = useRef(false);
    var setPositionManually = useCallback(function (positionMillis) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            audioRef.current.currentTime = positionMillis / 1000;
            setCurrentTime(positionMillis);
            return [2 /*return*/];
        });
    }); }, []);
    var toPreviousTrack = useCallback(function () {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        }
        else {
            setTrackIndex(trackIndex - 1);
        }
    }, [trackIndex, tracks.length]);
    var toNextTrack = useCallback(function () {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        }
        else {
            setTrackIndex(0);
        }
    }, [trackIndex, tracks.length]);
    var checkIfShouldToNextTrack = useCallback(function () {
        var isLastIndex = trackIndex == tracks.length - 1;
        if (enableRepeatPlayback) {
            toNextTrack();
        }
        else if (!isLastIndex) {
            toNextTrack();
        }
        else {
            audioRef.current.currentTime = 0;
            setCurrentTime(0);
            setIsPlaying(false);
        }
    }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length]);
    useEffect(function () {
        if (isReady.current) {
            if (enableShufflePlayback) {
                setPlayList(function (currentPlayList) { return shuffleArray(currentPlayList); });
            }
            else {
                setPlayList(tracks);
            }
        }
    }, [enableShufflePlayback, tracks]);
    useEffect(function () {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            setCurrentTime(0);
        }
        else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [audioSrc, trackIndex]);
    useEffect(function () {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying]);
    useEffect(function () {
        var audioCurrentRef = audioRef.current;
        var onLoadedData = function () {
            var duration = audioRef.current.duration;
            if (!isNaN(duration))
                setDuration(duration * 1000);
        };
        var onEnded = function () {
            checkIfShouldToNextTrack();
        };
        var onTimeUpdate = function () {
            setCurrentTime(audioRef.current.currentTime * 1000);
        };
        audioRef.current.addEventListener('loadeddata', onLoadedData);
        audioRef.current.addEventListener('ended', onEnded);
        audioRef.current.addEventListener('timeupdate', onTimeUpdate);
        // Pause and clean up on unmount
        return function () {
            audioCurrentRef.pause();
            audioCurrentRef.removeEventListener('loadeddata', onLoadedData);
            audioCurrentRef.removeEventListener('ended', onEnded);
            audioCurrentRef.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [audioRef, checkIfShouldToNextTrack]);
    return {
        currentTrackInfo: currentTrackInfo,
        currentTime: currentTime,
        duration: duration,
        isPlaying: isPlaying,
        enableShufflePlayback: enableShufflePlayback,
        enableRepeatPlayback: enableRepeatPlayback,
        setIsPlaying: setIsPlaying,
        setPositionManually: setPositionManually,
        toNextTrack: toNextTrack,
        toPreviousTrack: toPreviousTrack,
        setTrackIndex: setTrackIndex,
        setEnableShufflePlayback: setEnableShufflePlayback,
        setEnableRepeatPlayback: setEnableRepeatPlayback
    };
}
//# sourceMappingURL=index.js.map