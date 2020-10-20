import React, { useMemo } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { getTabBarAbsolutePosition } from '../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../util/getValueBasedOnTabBarPosition';
import { TabBarProps } from '../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { applyTabBarInsets } from '../util/applyTabBarInsets';
import { applyDimensionBasedOnTabBarPosition } from '../util/applyDimensionBasedOnTabBarPosition';
import { getImageBasedOnPosition } from '../assets/getImageBasedOnPosition';
import { TabBarConfig, TabBarLayoutProps } from '../types';
import { useTabBarConfig } from '../hooks';

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
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
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
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
`;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: white;
`;

const MiddleActionImage = styled.Image`
    width: ${(props: TabBarConfig) => getValueBasedOnTabBarPosition('88px', '60px', props.tabBarPosition)};
    height: ${(props: TabBarConfig) => getValueBasedOnTabBarPosition('60px', '88px', props.tabBarPosition)};
`;

function BaseMiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style } = props;
    const { config } = useTabBarConfig();
    const tabBarInsets = useSafeAreaInsets();
    const layoutProps: TabBarLayoutProps = { ...config, tabBarInsets };

    const [leftChildren, middleChild, rightChildren] = useMemo(() => {
        const allChildren = React.Children.toArray(children);
        const leftChildren = [];
        const rightChildren = [];
        let middleChild: React.ReactNode = null;

        if (allChildren.length === 1) {
            middleChild = allChildren[0];
        } else if (allChildren.length === 3) {
            leftChildren.push(allChildren[0]);
            middleChild = allChildren[1];
            rightChildren.push(allChildren[2]);
        } else if (allChildren.length === 5) {
            leftChildren.push(allChildren[0]);
            leftChildren.push(allChildren[1]);
            middleChild = allChildren[2];
            rightChildren.push(allChildren[3]);
            rightChildren.push(allChildren[4]);
        } else {
            throw Error('The amount of items in a MiddleActionTabBar must be 1, 3 or 5');
        }
        return [leftChildren, middleChild, rightChildren];
    }, [children]);

    return (
        <>
            <MiddleContainer {...layoutProps} pointerEvents='box-none' style={style}>
                {middleChild}
            </MiddleContainer>
            <Container {...layoutProps} style={style}>
                <ItemsContainer {...layoutProps}>
                    <SideView {...layoutProps}>{leftChildren}</SideView>
                    <MiddleActionImageContainer>
                        <MiddleActionImage {...layoutProps} source={getImageBasedOnPosition(config.tabBarPosition)} />
                        <MiddleActionImageContainerFiller />
                    </MiddleActionImageContainer>
                    <SideView {...layoutProps}>{rightChildren}</SideView>
                </ItemsContainer>
            </Container>
        </>
    );
}

export const MiddleActionTabBar = React.memo(BaseMiddleActionTabBar);
