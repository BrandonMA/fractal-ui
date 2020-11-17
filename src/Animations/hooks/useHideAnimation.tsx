import { Animated } from 'react-native';
import { useSpringAnimation } from './useSpringAnimation';

export function useHideAnimation(animatedValue: Animated.Value, callback?: () => void): () => void {
    return useSpringAnimation(animatedValue, 0, callback);
}
