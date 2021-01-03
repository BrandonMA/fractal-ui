import { Animated } from 'react-native';
import { useSpringAnimation } from './useSpringAnimation';

export function useShowAnimation(animatedValue: Animated.Value, callback?: () => void): () => void {
    return useSpringAnimation(animatedValue, 1, undefined, undefined, callback);
}
