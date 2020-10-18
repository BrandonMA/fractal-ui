import React from 'react';
import { Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { FullScreen, StackNavigator, StackScreen, ScreenStackHeaderConfig, NavigationRouter } from './src';
import { registerRootComponent } from 'expo';

enableScreens();

function App(): JSX.Element {
    return (
        <NavigationRouter>
            <StackNavigator path='/'>
                <StackScreen path='/'>
                    <ScreenStackHeaderConfig hidden={false} title='Main' />
                    <FullScreen>
                        <Text>Hola</Text>
                    </FullScreen>
                </StackScreen>
            </StackNavigator>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
