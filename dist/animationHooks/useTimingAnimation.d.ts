import { Animated } from 'react-native';
export declare function useTimingAnimation(animatedValue: Animated.Value, toValue: number | Animated.Value, duration?: number, callback?: () => void): () => void;
