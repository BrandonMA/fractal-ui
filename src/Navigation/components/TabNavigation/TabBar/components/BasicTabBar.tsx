import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { TabBarProps } from '../types';
import { useThemeColor } from '../../../../../ThemeState';
import { Animated } from 'react-native';
import { usePositionValues } from '../hooks/usePositionValues';
import { StyledTabBarProps } from '../types/StyledTabBarProps';
import { getTabBarSafeAreaPadding } from '../util/getTabBarSafeAreaPadding';

const Container = styled(Animated.View)`
    justify-content: center;
    position: absolute;
    ${(props: StyledTabBarProps) => props.side}
    background-color: ${(props: StyledTabBarProps) => props.tabBarColor.base};
    flex-direction: ${(props: StyledTabBarProps) => props.flexDirection};
    width: ${(props: StyledTabBarProps) => props.tabBarWidth};
    height: ${(props: StyledTabBarProps) => props.tabBarHeight};
    box-shadow: ${(props: StyledTabBarProps) => props.tabBarColor.shadow};
    ${(props: StyledTabBarProps) => getTabBarSafeAreaPadding(props)}
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const tabBarColor = useThemeColor('tabBarColor');
    const safeAreaInsets = useSafeAreaInsets();
    const positionValues = usePositionValues(tabBarPosition);

    return <Container {...props} safeAreaInsets={safeAreaInsets} tabBarColor={tabBarColor} {...positionValues} />;
}
