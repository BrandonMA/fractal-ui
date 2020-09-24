import React, { useCallback } from 'react';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { Button, SafeAreaView } from 'react-native';
import { useHistory } from 'react-router-dom';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';

export function SecondStack(props: NavigationRouteProps): JSX.Element {
    const { path } = props;
    const history = useHistory();

    const handleGoToNextScreen = useCallback(() => {
        history.push(`${path}/2`);
    }, [path, history]);

    return (
        <StackScreen {...props} style={{ backgroundColor: 'white' }}>
            <ScreenStackHeaderConfig title='Detail' hidden={false} />
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={handleGoToNextScreen} title='Go to next screen' />
            </SafeAreaView>
        </StackScreen>
    );
}
