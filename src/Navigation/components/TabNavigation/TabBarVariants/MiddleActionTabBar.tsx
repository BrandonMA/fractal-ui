import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import { TabBarPosition } from '../types/TabBarPosition';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { getTabBarPosition } from '../util/getTabBarPosition';
import { TabBarProps } from './TabBarProps';
import { applyInsets } from '../util/applyInsets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SharedStyles = styled(SafeAreaView)`
    position: absolute;
    ${(props: TabBarProps) => getAbsolutePosition(props.position, 0)};
`;

const HorizontalSafeView = styled(SharedStyles)`
    width: 100%;
`;

const VerticallSafeView = styled(SharedStyles)`
    height: 100%;
`;

const StyledContainerHorizontal = styled(View)`
    flex-direction: row;
    width: 100%;
`;

const StyledContainerVertical = styled(View)`
    flex-direction: column;
    height: 100%;
`;

function calculateWidthForMiddleAction(props: { position?: TabBarPosition }): string | undefined {
    return getTabBarPosition('88px', '60px', props.position);
}

function calculateHeightForMiddleAction(props: { position?: TabBarPosition }): string {
    return getTabBarPosition('60px', '88px', props.position);
}

const StyledMiddleAction = styled.Image`
    z-index: 1000;
    width: ${calculateWidthForMiddleAction};
    height: ${calculateHeightForMiddleAction};
`;

const StyledHelperViews = styled.View`
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
    flex-grow: 1;
`;

const MiddleContainer = styled.View`
    ${applyInsets};
    position: absolute;
    height: 100%;
    flex-direction: ${(props: TabBarProps) => getTabBarPosition('column', 'row', props.position)};
    width: 100%;
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    const allChildren = React.Children.toArray(children);
    const Container = getTabBarPosition(HorizontalSafeView, VerticallSafeView, props.position);
    const ItemsContainer = getTabBarPosition(StyledContainerHorizontal, StyledContainerVertical, props.position);
    const insets = useSafeAreaInsets();

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

    return (
        <Container {...others}>
            <ItemsContainer>
                <StyledHelperViews>{leftChildren}</StyledHelperViews>
                <StyledMiddleAction position={props.position} source={require(`../assets/middle-${props.position}.png`)} />
                <StyledHelperViews>{rightChildren}</StyledHelperViews>
            </ItemsContainer>
            <MiddleContainer position={props.position} insets={insets}>
                {middleChild}
            </MiddleContainer>
        </Container>
    );
}
