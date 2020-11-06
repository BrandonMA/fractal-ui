import React from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { getTabBarAbsolutePosition } from '../../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../../util/getValueBasedOnTabBarPosition';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { applyTabBarInsets } from '../../util/applyTabBarInsets';
import { applyDimensionBasedOnTabBarPosition } from '../../util/applyDimensionBasedOnTabBarPosition';
import { TabBarLayoutProps } from '../../types/TabBarLayoutProps';
import { useCurrentTabBarConfig } from '../../../TabBarConfigProvider/hooks/useCurrentTabBarConfig';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from '../../MiddleTabBarShape';

const Container = styled(Animated.View)`
    position: absolute;
    ${(props: TabBarLayoutProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyDimensionBasedOnTabBarPosition};
`;

const ItemsContainer = styled(View)`
    flex-direction: ${(props: TabBarLayoutProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    ${applyDimensionBasedOnTabBarPosition};
`;

const SideView = styled.View`
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor};
    flex-grow: 1;
    flex-direction: ${(props: TabBarLayoutProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    flex-basis: 0;
    ${applyTabBarInsets};
`;

// Middle button styles

const MiddleContainer = styled(Animated.View)`
    position: absolute;
    ${(props: TabBarLayoutProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyTabBarInsets};
    ${applyDimensionBasedOnTabBarPosition};
    z-index: 1000;
    flex-direction: ${(props: TabBarLayoutProps) => getValueBasedOnTabBarPosition('column', 'row', props.tabBarPosition)};
    background-color: transparent;
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
`;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: ${(props: TabBarLayoutProps) => props.tabBarBackgroundColor};
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style } = props;
    const { config } = useCurrentTabBarConfig();
    const tabBarInsets = useSafeAreaInsets();
    const layoutProps: TabBarLayoutProps = { ...config, tabBarInsets };
    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);

    return (
        <>
            <MiddleContainer {...layoutProps} pointerEvents='box-none' style={style}>
                {middleChild}
            </MiddleContainer>
            <Container {...layoutProps} style={style}>
                <ItemsContainer {...layoutProps}>
                    <SideView {...layoutProps}>{leftChildren}</SideView>
                    <MiddleActionImageContainer>
                        <MiddleTabBarShape position={config.tabBarPosition} fill={config.tabBarBackgroundColor} />
                        <MiddleActionImageContainerFiller {...layoutProps} />
                    </MiddleActionImageContainer>
                    <SideView {...layoutProps}>{rightChildren}</SideView>
                </ItemsContainer>
            </Container>
        </>
    );
}
