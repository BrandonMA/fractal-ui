import { NavigationBar, FullScreenScrollView, StackScreenContent, useHistory } from '../../src';
import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { ToggleTabBar } from './ToggleTabBar';
import styled from 'styled-components/native';

const StyledScrollView = styled(FullScreenScrollView)`
    background-color: red;
`;

const StyledPressable = styled(Pressable)`
    height: 400px;
    background-color: white;
    margin-bottom: 10px;
`;

export function Home(): JSX.Element {
    const history = useHistory();
    const goToSettings = useCallback(() => history.push('/home/settings'), []);
    const goToProfile = useCallback(() => history.push('/profile'), []);

    return (
        <>
            <NavigationBar hidden={false} title='Home' />
            <StackScreenContent>
                <StyledScrollView>
                    <StyledPressable onPress={goToSettings}>
                        <Text>Settings</Text>
                    </StyledPressable>
                    <StyledPressable onPress={goToProfile}>
                        <Text>Profile</Text>
                    </StyledPressable>
                    <ToggleTabBar />
                </StyledScrollView>
            </StackScreenContent>
        </>
    );
}
