import React from 'react';
import { StackNavigator } from '../../src/Navigation';
import { SecondStack } from './SecondStack';
import { ThirdStack } from './ThirdStack';
import { FirstStack } from './FirstStack';
import { SettingsStack } from './SettingsStack';

interface Props {
    path?: string;
}

export function StackNavigatorExample(props: Props): JSX.Element {
    const finalPath = props.path != null ? `${props.path}/` : '/';
    return (
        <StackNavigator path={finalPath}>
            <FirstStack path={finalPath} />
            <SecondStack path={`${finalPath}one`} />
            <ThirdStack path={`${finalPath}one/:two`} />
            <SettingsStack path={`${finalPath}settings`} />
        </StackNavigator>
    );
}
