import React from 'react';
import { PressableProps } from 'react-native';
import { BasicTabBarItem } from '../TabBarItemVariants/BasicTabBarItem';
import { CircularTabBarItem, CircularTabBarItemProps } from '../TabBarItemVariants/CircularTabBarItem';
import { TabBarItemVariant } from '../TabBarItemVariant';

interface Props extends Omit<PressableProps, 'children'>, CircularTabBarItemProps {
    children: React.ReactNode;
}

export function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
