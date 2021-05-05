export interface AudioControlsProps {
    isEnableShuffle: boolean;
    isEnableRepeat: boolean;
    isPlaying: boolean;
    onPlayPausePress: () => void;
    onPreviousPress: () => void;
    onNextPress: () => void;
    onShufflePress: () => void;
    onRepeatPress: () => void;
}

export interface ToggleControlProps {
    active: boolean;
    onPress: () => void;
}
