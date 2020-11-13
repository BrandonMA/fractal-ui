import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { applyTabBarInsets } from '../util';
import { TabBarProps, TabBarLayoutProps } from '../types';
import { useCurrentTabBarConfig } from '../../TabBarConfigProvider/hooks';

const Container = styled(Animated.View)`
    justify-content: space-evenly;
    position: absolute;
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor ?? 'white'};
    flex-direction: row;
    bottom: 0;
    ${applyTabBarInsets};
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { config } = useCurrentTabBarConfig();
    const insets = useSafeAreaInsets(); // Do not confuse this insets with the ones provided by the TabBar itself. This are only safe are insets.

    return <Container {...props} {...config} tabBarInsets={insets} />;
}
