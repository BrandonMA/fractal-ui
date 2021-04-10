import { PressableProps } from '../components/buttons/Pressable/types';
import { ViewStyle } from 'react-native';
export declare function usePressableAnimationStyles({ opacity, whileTap, width, height, backgroundColor, onPressOut, onPressIn }: PressableProps): [ViewStyle, () => void, () => void];
