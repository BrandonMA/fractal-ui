interface AudioProgressBarProps {
    duration: number;
    currentTime: number;
    isPlaying: boolean;
    onTimeUpdate: (time: number) => Promise<void>;
}
export declare function AudioProgressBar({ duration, currentTime, isPlaying, onTimeUpdate }: AudioProgressBarProps): JSX.Element;
export {};
