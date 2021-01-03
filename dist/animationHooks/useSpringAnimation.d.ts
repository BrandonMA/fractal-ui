import { Animated } from 'react-native';
export declare function useSpringAnimation(animatedValue: Animated.Value, toValue: number | Animated.Value, speed?: number, bounciness?: number, callback?: () => void): () => void;
