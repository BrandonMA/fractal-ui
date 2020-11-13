import React from 'react';
import { Animated, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { applyTabBarInsets } from '../../util/applyTabBarInsets';
import { TabBarLayoutProps } from '../../types/TabBarLayoutProps';
import { useCurrentTabBarConfig } from '../../../TabBarConfigProvider/hooks/useCurrentTabBarConfig';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from '../../MiddleTabBarShape';

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
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor ?? 'white'};
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: row;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    ${applyTabBarInsets};
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
    ${applyTabBarInsets};
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    bottom: ${Platform.OS === 'ios' ? 20 : 32}px;
    align-items: center;
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style } = props;
    const { config } = useCurrentTabBarConfig();
    const tabBarInsets = useSafeAreaInsets();
    const layoutProps: TabBarLayoutProps = { ...config, tabBarInsets };
    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);

    return (
        <>
            <Container {...layoutProps} style={style}>
                <ItemsContainer {...layoutProps}>
                    <SideView {...layoutProps}>{leftChildren}</SideView>
                    <MiddleActionImageContainer {...layoutProps}>
                        <MiddleTabBarShape fill={config.tabBarBackgroundColor} />
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
