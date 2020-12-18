import React, { useCallback } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route } from '../../../ReactRouter';
import { StyleSheet } from 'react-native';
import { usePresentationState } from './hooks/usePresentationState';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | React.ReactNode;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const basepath = path ?? '/';
    const renderChildren = useCallback(() => children, [children]);
    const show = usePresentationState(basepath, stackPresentation);

    return (
        <Screen {...others} activityState={show} stackPresentation={stackPresentation ?? 'push'} style={[StyleSheet.absoluteFill, style]}>
            <Route path={basepath}>{renderChildren}</Route>
        </Screen>
    );
}
