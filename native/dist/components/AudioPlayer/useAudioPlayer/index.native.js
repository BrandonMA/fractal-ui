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
import { useState, useCallback, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import { shuffleArray } from './utils/shuffleArray';
export function useAudioPlayer(tracks, shufflePlayback, repeatPlayback) {
    var _this = this;
    var _a = useState(0), duration = _a[0], setDuration = _a[1];
    var _b = useState(0), trackIndex = _b[0], setTrackIndex = _b[1];
    var _c = useState(repeatPlayback !== null && repeatPlayback !== void 0 ? repeatPlayback : false), enableRepeatPlayback = _c[0], setEnableRepeatPlayback = _c[1];
    var _d = useState(shufflePlayback !== null && shufflePlayback !== void 0 ? shufflePlayback : false), enableShufflePlayback = _d[0], setEnableShufflePlayback = _d[1];
    var _e = useState(shufflePlayback ? shuffleArray(tracks) : tracks), playList = _e[0], setPlayList = _e[1];
    var _f = useState(0), currentTime = _f[0], setCurrentTime = _f[1];
    var _g = useState(false), isPlaying = _g[0], setIsPlaying = _g[1];
    var soundRef = useRef();
    var sound = soundRef.current;
    var currentTrackInfo = playList[trackIndex];
    var audioSrc = currentTrackInfo.audioSrc;
    var playSound = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.playAsync())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [sound]);
    var pauseSound = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.pauseAsync())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [sound]);
    var setPositionManually = useCallback(function (positionMillis) { return __awaiter(_this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ((_a = soundRef.current) === null || _a === void 0 ? void 0 : _a.setPositionAsync(positionMillis))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
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
    var checkIfShouldToNextTrack = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var isLastIndex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isLastIndex = trackIndex == tracks.length - 1;
                    if (!(!isLastIndex && !enableRepeatPlayback)) return [3 /*break*/, 1];
                    toNextTrack();
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, (sound === null || sound === void 0 ? void 0 : sound.setPositionAsync(0))];
                case 2:
                    _a.sent();
                    setCurrentTime(0);
                    setIsPlaying(false);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [enableRepeatPlayback, toNextTrack, trackIndex, tracks.length]);
    useEffect(function () {
        if (sound != null) {
            if (enableShufflePlayback) {
                setPlayList(function (currentPlayList) { return shuffleArray(currentPlayList); });
            }
            else {
                setPlayList(tracks);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enableShufflePlayback, tracks]);
    var onPlaybackStatusUpdate = useCallback(function (status) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (status.positionMillis) {
                        setCurrentTime(status.positionMillis);
                    }
                    if (!status.didJustFinish) return [3 /*break*/, 2];
                    return [4 /*yield*/, checkIfShouldToNextTrack()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); }, [checkIfShouldToNextTrack]);
    useEffect(function () {
        var loadSoundAsync = function () { return __awaiter(_this, void 0, void 0, function () {
            var source, _a, audioSound, status_1, castedStatus, status_2, castedStatus;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        source = typeof audioSrc == 'string' ? { uri: audioSrc } : audioSrc;
                        if (!(sound === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Audio.setAudioModeAsync({
                                playsInSilentModeIOS: true
                            })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, Audio.Sound.createAsync(source)];
                    case 2:
                        _a = _c.sent(), audioSound = _a.sound, status_1 = _a.status;
                        soundRef.current = audioSound;
                        (_b = soundRef.current) === null || _b === void 0 ? void 0 : _b.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                        castedStatus = status_1;
                        if (castedStatus.durationMillis) {
                            setDuration(castedStatus.durationMillis);
                        }
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, sound.unloadAsync()];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, sound.loadAsync(source, { shouldPlay: true })];
                    case 5:
                        status_2 = _c.sent();
                        sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
                        setCurrentTime(0);
                        castedStatus = status_2;
                        if (!isPlaying) {
                            setIsPlaying(true);
                        }
                        if (castedStatus.durationMillis) {
                            setDuration(castedStatus.durationMillis);
                        }
                        _c.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        loadSoundAsync();
        return sound
            ? function () {
                sound.unloadAsync();
            }
            : undefined;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioSrc]);
    useEffect(function () {
        var handlePlayOrPause = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isPlaying) return [3 /*break*/, 2];
                        return [4 /*yield*/, playSound()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, pauseSound()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        handlePlayOrPause();
    }, [isPlaying, pauseSound, playSound]);
    return {
        currentTrackInfo: currentTrackInfo,
        currentTime: currentTime,
        duration: duration,
        isPlaying: isPlaying,
        enableShufflePlayback: enableShufflePlayback,
        enableRepeatPlayback: enableRepeatPlayback,
        setIsPlaying: setIsPlaying,
        setPositionManually: function (time) { return setPositionManually(time); },
        toNextTrack: toNextTrack,
        toPreviousTrack: toPreviousTrack,
        setTrackIndex: setTrackIndex,
        setEnableShufflePlayback: setEnableShufflePlayback,
        setEnableRepeatPlayback: setEnableRepeatPlayback
    };
}
//# sourceMappingURL=index.native.js.map