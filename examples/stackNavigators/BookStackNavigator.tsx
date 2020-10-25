import { StackNavigator, StackScreen } from '../../src';
import { Book } from '../components/Book';
import React from 'react';

export function BookStackNavigator(): JSX.Element {
    return (
        <StackNavigator path='/book'>
            <StackScreen>
                <Book />
            </StackScreen>
        </StackNavigator>
    );
}
