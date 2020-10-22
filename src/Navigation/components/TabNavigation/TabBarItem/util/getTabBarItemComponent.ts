import React from 'react';
import { PressableProps } from 'react-native';
import { BasicTabBarItem, BasicTabBarItemProps } from '../variants/BasicTabBarItem';
import { CircularTabBarItem, CircularTabBarItemProps } from '../variants/CircularTabBarItem';
import { TabBarItemVariant } from '../types/TabBarItemVariant';

interface Props extends Omit<PressableProps, 'children'>, CircularTabBarItemProps, BasicTabBarItemProps {
    children: React.ReactNode;
}

export function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
