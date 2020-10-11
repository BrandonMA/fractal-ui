import React from 'react';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
import List from '../DummyScreens/List';
import { NavigationRouteProps, StackScreen, StackScreenContent } from '../../src/Navigation';
import styled from 'styled-components/native';

const StyledStack = styled(StackScreen)`
    background-color: transparent;
`;

export function FirstStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StyledStack {...props}>
            {/* <ScreenStackHeaderConfig largeTitle title='Main' hidden={false} /> */}
            <StackScreenContent>
                <List />
            </StackScreenContent>
        </StyledStack>
    );
}
