import React, { useCallback, useContext } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
import { CurrentPresentationTypeContext } from './PresentationTypeProvider';
import { usePrevValue } from '../../hooks/usePrevValue';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const basepath = path ?? '/';
    const [active] = useMatch(basepath);
    const renderChildren = useCallback(() => children, [children]);
    const prevValue = usePrevValue(active);
    const { presentationType } = useContext(CurrentPresentationTypeContext);

    return (
        <Screen
            {...others}
            active={active || (prevValue && presentationType === 'modal') ? 1 : 0}
            stackPresentation={stackPresentation ?? 'push'}
            style={[StyleSheet.absoluteFill, style]}
        >
            <Route path={basepath}>{renderChildren}</Route>
        </Screen>
    );
}
