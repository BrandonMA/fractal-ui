import { Dispatch, SetStateAction } from 'react';

export interface CustomAVPlaybackStatus {
    isLoaded: true;
    androidImplementation?: string;
    uri: string;
    progressUpdateIntervalMillis: number;
    durationMillis?: number;
    positionMillis: number;
    playableDurationMillis?: number;
    seekMillisToleranceBefore?: number;
    seekMillisToleranceAfter?: number;
    shouldPlay: boolean;
    isPlaying: boolean;
    isBuffering: boolean;
    rate: number;
    shouldCorrectPitch: boolean;
    volume: number;
    isMuted: boolean;
    isLooping: boolean;
    didJustFinish: boolean;
}

export interface MinimalTrackData {
    title: string;
    artist: string;
    audioSrc: string | number;
    image: string;
    color: string;
}

export interface AudioPlayerReturnedObject {
    currentTrackInfo: MinimalTrackData;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    enableShufflePlayback: boolean;
    enableRepeatPlayback: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    setManualTime: (time: number) => void;
    toNextTrack: () => void;
    toPreviousTrack: () => void;
    setTrackIndex: Dispatch<SetStateAction<number>>;
    setEnableShufflePlayback: Dispatch<SetStateAction<boolean>>;
    setEnableRepeatPlayback: Dispatch<SetStateAction<boolean>>;
}
