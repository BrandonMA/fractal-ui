import React, { useCallback, useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route } from '../../../ReactRouter';
import { StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useThemeColor } from '../../../ThemeState/hooks/useThemeColor';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | React.ReactNode;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const basepath = path ?? '/';
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(basepath, stackPresentation);
    const containerColor = useThemeColor('containerColor');
    const styles = useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: containerColor.base400 }, style], [style, containerColor]);

    return (
        <Screen
            {...others}
            activityState={activityState} // This prop only works on native.
            active={activityState as never} // This prop only works on web.
            stackPresentation={stackPresentation ?? 'push'}
            style={styles}
        >
            <Route path={basepath}>{renderChildren}</Route>
        </Screen>
    );
}
