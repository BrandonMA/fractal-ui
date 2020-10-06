import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { getValueBasedOnPosition } from '../util/getValueBasedOnPosition';
import { TabBarProps } from '../types/TabBarProps';
import { applyInsets, applyDimension } from '../util/applyInsets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../types/TabBarPosition';

const Container = styled(View)`
    position: absolute;
    ${(props: TabBarProps) => getAbsolutePosition(props.position, 0)};
    ${applyInsets}
    ${(props: TabBarProps) => applyDimension(props)};
`;

const ItemsContainer = styled(View)`
    flex-direction: ${(props: TabBarProps) => getValueBasedOnPosition('row', 'column', props.position)};
    ${(props: TabBarProps) => applyDimension(props)};
`;

const SideView = styled.View`
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
    flex-grow: 1;
    flex-direction: ${(props: TabBarProps) => getValueBasedOnPosition('row', 'column', props.position)};
    flex-basis: 0;
`;

// Middle button styles

const MiddleContainer = styled.View`
    position: absolute;
    ${(props: TabBarProps) => getAbsolutePosition(props.position, 0)};
    ${(props: TabBarProps) => applyDimension(props)};
    ${applyInsets};
    flex-direction: ${(props: TabBarProps) => getValueBasedOnPosition('column', 'row', props.position)};
`;

const MiddleActionImage = styled.Image`
    z-index: 1000;
    width: ${(props: TabBarProps) => getValueBasedOnPosition('88px', '60px', props.position)};
    height: ${(props: TabBarProps) => getValueBasedOnPosition('60px', '88px', props.position)};
`;

function getImageBasedOnPosition(position?: TabBarPosition) {
    if (position === 'top') {
        return require(`../assets/middle-top.png`);
    } else if (position === 'right') {
        return require(`../assets/middle-right.png`);
    } else if (position === 'left') {
        return require(`../assets/middle-left.png`);
    } else {
        return require(`../assets/middle-bottom.png`);
    }
}

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
            <MiddleContainer position={props.position} insets={insets}>
                {middleChild}
            </MiddleContainer>
            <Container {...others} insets={insets}>
                <ItemsContainer position={props.position}>
                    <SideView position={props.position}>{leftChildren}</SideView>
                    <MiddleActionImage position={props.position} source={getImageBasedOnPosition(props.position)} />
                    <SideView position={props.position}>{rightChildren}</SideView>
                </ItemsContainer>
            </Container>
        </>
    );
}
