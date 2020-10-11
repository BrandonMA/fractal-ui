import React from 'react';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
import { Text } from 'react-native';
import { NavigationRouteProps, StackScreen, StackScreenContent } from '../../src/Navigation';
import styled from 'styled-components/native';
import { SafeAreaFullScreen } from '../../src';

const StyledStack = styled(StackScreen)`
    background-color: white;
`;

const GrayView = styled.View`
    background-color: gray;
    flex-grow: 1;
`;

export function SettingsStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StyledStack {...props}>
            {/* <ScreenStackHeaderConfig title='Settings' hidden={false} /> */}
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <GrayView>
                        <Text>We are on the settings page</Text>
                    </GrayView>
                </SafeAreaFullScreen>
            </StackScreenContent>
        </StyledStack>
    );
}
