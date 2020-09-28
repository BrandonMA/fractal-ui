import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface TabBarProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

const SafeView = styled.SafeAreaView`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const StyledContainer = styled(View)`
    flex-direction: row;
`;

const StyledMiddleAction = styled.Image`
    z-index: 1000;
    width: 88px;
    height: 60px;
`;

const StyledHelperViews = styled.View`
    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);
    background-color: white;
    flex-grow: 1;
`;

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
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

    return (
        <SafeView>
            <StyledContainer {...others}>
                <StyledHelperViews>{leftChildren}</StyledHelperViews>
                <StyledMiddleAction source={require('../assets/middle-action.png')} />
                <StyledHelperViews>{rightChildren}</StyledHelperViews>
            </StyledContainer>
            <View>{middleChild}</View>
        </SafeView>
    );
}
