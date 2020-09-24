import React from 'react';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { SafeAreaView, Text } from 'react-native';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';
import { useParams } from '../../src/ReactRouter';

// Because of the way React is going to render everything
// you must create a Content(any name is ok) component to access params
// if you try to access directly on ThirdStack in this example params
// is going to be an empty object.

interface Params {
    two: string;
}

function Content(): JSX.Element {
    const params = useParams<Params>();
    return (
        <>
            <ScreenStackHeaderConfig title='Last' hidden={false} />
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{params.two}</Text>
            </SafeAreaView>
        </>
    );
}

export function ThirdStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StackScreen {...props} style={{ backgroundColor: 'white' }}>
            <Content />
        </StackScreen>
    );
}
