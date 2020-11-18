import React from 'react';
import { enableScreens } from 'react-native-screens';
import { registerRootComponent } from 'expo';
import { Root } from './examples/UI/navigation/Root';

enableScreens();

function App(): JSX.Element {
    return <Root />;
}

export default registerRootComponent(App);
