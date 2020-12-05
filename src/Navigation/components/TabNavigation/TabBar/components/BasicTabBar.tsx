import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { TabBarLayoutProps, TabBarProps } from '../types';
import { useCurrentTabBarConfig } from '../../TabBarConfigProvider/hooks';
import { getTabBarSafeAreaPadding } from '../util/getTabBarSafeAreaPadding';
import { constants } from '../../../../constants';
import { colors } from '../../../../../ThemeState/Colors';

const Container = styled(Animated.View)`
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor ?? colors.white.base};
    flex-direction: row;
    width: 100%;
    box-shadow: ${constants.shadowBottom};
    ${getTabBarSafeAreaPadding}
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { tabBarConfig } = useCurrentTabBarConfig();
    const safeAreaInsets = useSafeAreaInsets();
    return <Container {...props} {...tabBarConfig} safeAreaInsets={safeAreaInsets} />;
}
