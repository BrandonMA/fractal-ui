import { Dispatch, SetStateAction } from 'react';
import { Animated, TextStyle } from 'react-native';
export declare function useColorToggleAnimation(controlledActive?: boolean): [boolean, Dispatch<SetStateAction<boolean>>, Animated.AnimatedProps<TextStyle>];
