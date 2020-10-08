import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getTabBarAbsolutePosition } from '../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../util/getValueBasedOnTabBarPosition';
import { TabBarProps } from '../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { applyTabBarInsets } from '../util/applyTabBarInsets';
import { applyDimensionBasedOnTabBarPosition } from '../util/applyDimensionBasedOnTabBarPosition';
import { getImageBasedOnPosition } from '../assets/getImageBasedOnPosition';
import { LayoutProps } from '../../../../../Layout/types/LayoutProps';

const Container = styled(View)`
    position: absolute;
    ${(props: LayoutProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyDimensionBasedOnTabBarPosition};
`;

const ItemsContainer = styled(View)`
    flex-direction: ${(props: TabBarProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    ${applyDimensionBasedOnTabBarPosition};
`;

const SideView = styled.View`
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
    flex-grow: 1;
    flex-direction: ${(props: LayoutProps) => getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition)};
    flex-basis: 0;
    ${applyTabBarInsets};
`;

// Middle button styles

const MiddleContainer = styled.View`
    position: absolute;
    ${(props: LayoutProps) => getTabBarAbsolutePosition(props.tabBarPosition, 0)};
    ${applyTabBarInsets};
    ${applyDimensionBasedOnTabBarPosition};
    z-index: 1000;
    flex-direction: ${(props: LayoutProps) => getValueBasedOnTabBarPosition('column', 'row', props.tabBarPosition)};
`;

const MiddleActionImageContainer = styled.View`
    z-index: 1000;
`;

const MiddleActionImageContainerFiller = styled.View`
    flex-grow: 1;
    background-color: white;
`;

const MiddleActionImage = styled.Image`
    width: ${(props: LayoutProps) => getValueBasedOnTabBarPosition('88px', '60px', props.tabBarPosition)};
    height: ${(props: LayoutProps) => getValueBasedOnTabBarPosition('60px', '88px', props.tabBarPosition)};
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    const insets = useSafeAreaInsets();

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
            <MiddleContainer tabBarPosition={props.tabBarPosition} insets={insets} pointerEvents='box-none'>
                {middleChild}
            </MiddleContainer>
            <Container {...others}>
                <ItemsContainer tabBarPosition={props.tabBarPosition}>
                    <SideView insets={insets} tabBarPosition={props.tabBarPosition}>
                        {leftChildren}
                    </SideView>
                    <MiddleActionImageContainer>
                        <MiddleActionImage tabBarPosition={props.tabBarPosition} source={getImageBasedOnPosition(props.tabBarPosition)} />
                        <MiddleActionImageContainerFiller />
                    </MiddleActionImageContainer>
                    <SideView insets={insets} tabBarPosition={props.tabBarPosition}>
                        {rightChildren}
                    </SideView>
                </ItemsContainer>
            </Container>
        </>
    );
}
