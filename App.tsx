import React from 'react';
import { enableScreens } from 'react-native-screens';
import { TabNavigatorExample } from './example';
import { NavigationRouter, useLocation } from './src/ReactRouter';

enableScreens();

interface Props {
    children: JSX.Element;
}

// This component is only to check that routing is working as expected.
function LocationListener(props: Props): JSX.Element {
    const location = useLocation();
    console.log(location.pathname);
    return props.children;
}

export default function App(): React.ReactNode {
    return (
        <NavigationRouter>
            <LocationListener>
                <TabNavigatorExample />
            </LocationListener>
        </NavigationRouter>
    );
}
