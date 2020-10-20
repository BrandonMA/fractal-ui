/// <reference types="react" />
import { Animated, ViewProps } from 'react-native';
export interface TabBarProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children?: Array<JSX.Element> | JSX.Element;
}
