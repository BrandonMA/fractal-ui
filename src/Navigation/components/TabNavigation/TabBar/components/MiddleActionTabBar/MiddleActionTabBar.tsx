import React from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { TabBarProps } from '../../types/TabBarProps';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './MiddleTabBarShape';
import { getTabBarSafeAreaPadding } from '../../util/getTabBarSafeAreaPadding';
import { constants } from '../../../../../constants';
import { Color, useThemeColor } from '../../../../../../ThemeState';

interface StyledComponentsProps {
    tabBarColor: Color;
    safeAreaInsets: EdgeInsets;
}

const Container = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const ItemsContainer = styled(View)`
    position: relative;
    flex-direction: row;
    width: 100%;
`;

const SideView = styled.View`
    background-color: ${(props: StyledComponentsProps) => props.tabBarColor.base};
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: row;
    box-shadow: ${constants.shadowBottom};
    ${(props: StyledComponentsProps) => getTabBarSafeAreaPadding(props)}
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
    flex-direction: column;
`;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: ${(props: StyledComponentsProps) => props.tabBarColor.base};
    width: 100%;
`;

// Middle button styles

const MiddleContainer = styled(Animated.View)`
    position: absolute;
    ${getTabBarSafeAreaPadding};
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    bottom: ${constants.tabBarCircularButtonOffset}px;
    align-items: center;
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style } = props;
    const tabBarColor = useThemeColor('tabBarColor');
    const safeAreaInsets = useSafeAreaInsets();
    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);

    return (
        <>
            <Container style={style}>
                <ItemsContainer>
                    <SideView tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets}>
                        {leftChildren}
                    </SideView>
                    <MiddleActionImageContainer>
                        <MiddleTabBarShape fill={tabBarColor.base} />
                        <MiddleActionImageContainerFiller tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets} />
                    </MiddleActionImageContainer>
                    <SideView tabBarColor={tabBarColor} safeAreaInsets={safeAreaInsets}>
                        {rightChildren}
                    </SideView>
                </ItemsContainer>
            </Container>
            <MiddleContainer safeAreaInsets={safeAreaInsets} pointerEvents='box-none' style={style}>
                {middleChild}
            </MiddleContainer>
        </>
    );
}
