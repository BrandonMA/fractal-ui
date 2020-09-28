import React from 'react';
import { PressableProps } from 'react-native';
import { BasicTabBarItem } from '../TabBarItemVariants/BasicTabBarItem';
import { CircularTabBarItem } from '../TabBarItemVariants/CircularTabBarItem';
import { TabBarItemVariant } from '../types/TabBarItemVariant';

interface Props extends Omit<PressableProps, 'children'> {
    bg?: string;
    children: React.ReactNode;
}

export function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
