import React, { useCallback, useContext, useEffect } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
import { PresentationTypeContext } from './PresentationTypeProvider';
import { usePrevValue } from '../../hooks/usePrevValue';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const { presentationType, setPresentationType } = useContext(PresentationTypeContext);
    const prevPresentationType = usePrevValue(presentationType);
    const basepath = path ?? '/';
    const [active] = useMatch(basepath);
    const renderChildren = useCallback(() => children, [children]);
    const prevActiveValue = usePrevValue(active);
    const prevPrevActiveValue = usePrevValue(prevActiveValue);
    const show = active || ((prevActiveValue || prevPrevActiveValue) && presentationType === 'modal') ? 1 : 0;

    useEffect(() => {
        setPresentationType(stackPresentation ?? 'push');
        return () => {
            setPresentationType(prevPresentationType);
        };
    }, [stackPresentation, setPresentationType, prevPresentationType]);

    return (
        <Screen {...others} active={show} stackPresentation={stackPresentation ?? 'push'} style={[StyleSheet.absoluteFill, style]}>
            <Route path={basepath}>{renderChildren}</Route>
        </Screen>
    );
}
