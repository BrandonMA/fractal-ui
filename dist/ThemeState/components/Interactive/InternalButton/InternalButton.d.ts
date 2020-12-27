import { InternalButtonProps } from './types/InternalButtonProps';
import { Animated, PressableProps } from 'react-native';
export interface StyledButtonProps extends Animated.AnimatedProps<PressableProps> {
    backgroundColor: string;
    backgroundShadow: string;
}
export interface StyledTextProps {
    textColor: string;
}
export declare function InternalButton(props: InternalButtonProps): JSX.Element;
