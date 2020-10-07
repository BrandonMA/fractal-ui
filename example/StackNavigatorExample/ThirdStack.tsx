import React from 'react';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
import { Text } from 'react-native';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';
import { useParams } from '../../src/ReactRouter';
import styled from 'styled-components/native';
import { Fullscreen } from '../../src';

const StyledStack = styled(StackScreen)`
    background-color: white;
`;

const StyledFullScreen = styled(Fullscreen)`
    background-color: gray;
    justify-content: center;
    align-items: center;
`;

// Because of the way React is going to render everything
// you must create a Content(any name is ok) component to access params
// if you try to access directly on ThirdStack in this example params
// is going to be an empty object.

interface Params {
    two: string;
}

function Content(): JSX.Element {
    const params = useParams<Params>();
    return <Text>{params.two}</Text>;
}

export function ThirdStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StyledStack {...props}>
            <StyledFullScreen>
                <Content />
            </StyledFullScreen>
        </StyledStack>
    );
}
