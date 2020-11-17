import React from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarLayoutProps } from '../../types/TabBarLayoutProps';
import { useCurrentTabBarConfig } from '../../../TabBarConfigProvider/hooks/useCurrentTabBarConfig';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './MiddleTabBarShape';
import { getTabBarSafeAreaPadding } from '../../util/getTabBarSafeAreaPadding';
import { constants } from '../../../../../constants';
import { colors } from '../../../../../../Colors';

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
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor ?? colors.white.base};
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: row;
    box-shadow: ${constants.shadowBottom};
    ${getTabBarSafeAreaPadding};
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
    flex-direction: column;
`;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor};
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
    const { tabBarConfig } = useCurrentTabBarConfig();
    const safeAreaInsets = useSafeAreaInsets();
    const layoutProps: TabBarLayoutProps = { ...tabBarConfig, safeAreaInsets };
    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);

    return (
        <>
            <Container style={style}>
                <ItemsContainer>
                    <SideView {...layoutProps}>{leftChildren}</SideView>
                    <MiddleActionImageContainer>
                        <MiddleTabBarShape fill={tabBarConfig.tabBarBackgroundColor} />
                        <MiddleActionImageContainerFiller {...layoutProps} />
                    </MiddleActionImageContainer>
                    <SideView {...layoutProps}>{rightChildren}</SideView>
                </ItemsContainer>
            </Container>
            <MiddleContainer {...layoutProps} pointerEvents='box-none' style={style}>
                {middleChild}
            </MiddleContainer>
        </>
    );
}
