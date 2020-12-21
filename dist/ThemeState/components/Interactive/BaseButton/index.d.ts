import { BaseButtonProps } from './types/BaseButtonProps';
import { Animated, PressableProps } from 'react-native';
export interface StyledButtonProps extends Animated.AnimatedProps<PressableProps> {
    backgroundColor: string;
    backgroundShadow: string;
}
export interface StyledTextProps {
    textColor: string;
}
export declare function BaseButton(props: BaseButtonProps): JSX.Element;
