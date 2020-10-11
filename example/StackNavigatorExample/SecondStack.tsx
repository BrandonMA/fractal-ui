import React, { useCallback } from 'react';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { Button } from 'react-native';
import { useHistory } from '../../src/ReactRouter';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';
import styled from 'styled-components/native';
import { SafeAreaFullScreen, StackScreenContent } from '../../src';

const StyledStack = styled(StackScreen)`
    background-color: white;
`;

export function SecondStack(props: NavigationRouteProps): JSX.Element {
    const { path } = props;
    const history = useHistory();

    const handleGoToNextScreen = useCallback(() => {
        history.push(`${path}/2`);
    }, [path, history]);

    return (
        <StyledStack {...props}>
            <ScreenStackHeaderConfig title='Detail' hidden={false} />
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <Button onPress={handleGoToNextScreen} title='Go to next screen' />
                </SafeAreaFullScreen>
            </StackScreenContent>
        </StyledStack>
    );
}
