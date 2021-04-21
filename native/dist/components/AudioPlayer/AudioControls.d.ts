import React from 'react';
interface AudioControlsProps {
    isEnableShuffle: boolean;
    isEnableRepeat: boolean;
    isPlaying: boolean;
    onPlayPausePress: () => void;
    onPreviousPress: () => void;
    onNextPress: () => void;
    onShufflePress: () => void;
    onRepeatPress: () => void;
}
export declare const AudioControls: React.MemoExoticComponent<({ isPlaying, isEnableShuffle, isEnableRepeat, onPlayPausePress, onNextPress, onPreviousPress, onShufflePress, onRepeatPress }: AudioControlsProps) => JSX.Element>;
export {};
