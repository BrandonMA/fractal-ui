import React from 'react';
import { PressableProps } from 'react-native';
import { CircularTabBarItemProps } from '../variants/CircularTabBarItem';
import { TabBarItemVariant } from '../types/TabBarItemVariant';
interface Props extends Omit<PressableProps, 'children'>, CircularTabBarItemProps {
    children: React.ReactNode;
}
export declare function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element;
export {};
