import React from 'react';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import List from '../DummyScreens/List';
import { StackScreen } from '../../src/Navigation';

export function FirstStack(): JSX.Element {
    return (
        <StackScreen path='' style={{ backgroundColor: 'white' }}>
            <ScreenStackHeaderConfig largeTitle title='Main' hidden={false} />
            <List />
        </StackScreen>
    );
}
