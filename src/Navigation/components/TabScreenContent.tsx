import React, { ReactElement } from 'react';
import { Screen, ScreenProps } from 'react-native-screens';
import { StyleSheet } from 'react-native';
import { Route } from '../../NavigationItems';
import { useMatch } from '../hooks/useMatch';

export interface TabScreenContentProps extends Omit<ScreenProps, 'stackPresentation'> {
    path?: string;
    children: JSX.Element;
}

export function TabScreenContent(props: TabScreenContentProps): ReactElement<TabScreenContentProps> {
    const { path, children, ...others } = props;
    const [active] = useMatch(path);

    return (
        <Screen {...others} active={active ? 1 : 0} stackPresentation='push' style={[StyleSheet.absoluteFill, { paddingBottom: 60 }]}>
            <Route path={path}>
                {() => {
                    return children;
                }}
            </Route>
        </Screen>
    );
}
