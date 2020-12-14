import { Animated, ViewProps } from 'react-native';
import { TabBarConfig } from './TabBarConfig';

export interface TabBarProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'>, TabBarConfig {
    children?: Array<JSX.Element> | JSX.Element;
}
