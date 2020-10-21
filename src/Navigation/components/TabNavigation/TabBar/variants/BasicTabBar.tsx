import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { applyTabBarInsets, getValueBasedOnTabBarPosition, getTabBarAbsolutePosition, applyDimensionBasedOnTabBarPosition } from '../util';
import { TabBarProps, TabBarLayoutProps } from '../types';
import { useTabBarConfig } from '../hooks';

const SharedStyles = styled(Animated.View)`
    justify-content: space-evenly;
    position: absolute;
    background-color: white;
    flex-direction: ${(props: TabBarLayoutProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    ${(props: TabBarLayoutProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyTabBarInsets};
    ${applyDimensionBasedOnTabBarPosition};
`;

const HorizontalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarLayoutProps) => (props.tabBarPosition === 'bottom' ? '0px -1px' : '0px 1px')} 4px rgba(0, 0, 0, 0.08);
`;

const VerticalContainer = styled(SharedStyles)`
    box-shadow: ${(props: TabBarLayoutProps) => (props.tabBarPosition === 'right' ? '-1px 0px' : '1px 0px')} 4px rgba(0, 0, 0, 0.08);
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { config } = useTabBarConfig();
    const insets = useSafeAreaInsets(); // Do not confuse this insets with the ones provided by the TabBar itself. This are only safe are insets.
    const Container = getValueBasedOnTabBarPosition(HorizontalContainer, VerticalContainer, config.tabBarPosition);

    return <Container {...props} {...config} tabBarInsets={insets} />;
}
