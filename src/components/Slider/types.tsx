export type EventSource = 'mouse' | 'touch' | 'keyboard';

export interface SliderProps {
    maximumValue?: number;
    minimumValue?: number;
    onSlidingComplete?: (value: number) => void;
    onSlidingStart?: (value: number) => void;
    onValueChange?: (value: number) => void;
    step?: number;
    initialValue?: number;
    name?: string;
}
