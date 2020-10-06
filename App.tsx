import React from 'react';
import { enableScreens } from 'react-native-screens';
import { MiddleActionTabNavigatorExample, TabNavigatorExample } from './example';
import { NavigationRouter } from './src/ReactRouter';
import { registerRootComponent } from 'expo';

enableScreens();

interface Props {
    children: JSX.Element;
}

// This component is only to check that routing is working as expected.
function LocationListener(props: Props): JSX.Element {
    // const location = useLocation();
    // console.log(location.pathname);
    return props.children;
}

function App(): JSX.Element {
    return (
        <NavigationRouter>
            <LocationListener>
                <MiddleActionTabNavigatorExample />
            </LocationListener>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
