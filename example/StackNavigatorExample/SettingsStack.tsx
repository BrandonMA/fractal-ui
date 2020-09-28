import React from 'react';
// import { ScreenStackHeaderConfig } from 'react-native-screens';
import { SafeAreaView, Text } from 'react-native';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';
import styled from 'styled-components/native';

const StyledStack = styled(StackScreen)`
    background-color: white;
`;

export function SettingsStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StyledStack {...props}>
            {/* <ScreenStackHeaderConfig title='Settings' hidden={false} /> */}
            <SafeAreaView>
                <Text>We are on the settings page</Text>
            </SafeAreaView>
        </StyledStack>
    );
}
