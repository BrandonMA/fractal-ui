import React from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { TabBarProps } from '../types';
import { getTabBarSafeAreaPadding } from '../util/getTabBarSafeAreaPadding';
import { Color, useThemeColor } from '../../../../../ThemeState';
import { Animated, ViewProps } from 'react-native';

interface ContainerProps extends Animated.AnimatedProps<ViewProps> {
    tabBarColor: Color;
    safeAreaInsets: EdgeInsets;
}

const Container = styled(Animated.View)`
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    background-color: ${(props: ContainerProps) => props.tabBarColor.base};
    flex-direction: row;
    width: 100%;
    box-shadow: ${(props: ContainerProps) => props.tabBarColor.shadow};
    ${(props: ContainerProps) => getTabBarSafeAreaPadding(props)}
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const tabBarColor = useThemeColor('tabBarColor');
    const safeAreaInsets = useSafeAreaInsets();
    return <Container {...props} safeAreaInsets={safeAreaInsets} tabBarColor={tabBarColor} />;
}
