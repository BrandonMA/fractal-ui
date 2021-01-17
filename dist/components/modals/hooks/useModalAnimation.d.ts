import { Animated, ViewStyle } from 'react-native';
export declare function useModalAnimation(onDismiss: (() => void) | undefined): [Animated.AnimatedProps<ViewStyle>, () => void, () => void];
