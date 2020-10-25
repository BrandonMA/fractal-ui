import React, { useCallback, useContext } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { CurrentPresentationTypeContext } from './CurrentPresentationTypeProvider';
import { usePrevValue } from '../../util/usePrevValue';

const StyledScreen = styled(Screen)`
    background-color: white;
`;

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
    const { type } = useContext(CurrentPresentationTypeContext);

    return (
        <StyledScreen
            {...others}
            active={active || (prevValue && type === 'modal') ? 1 : 0}
            stackPresentation={stackPresentation ?? 'push'}
            style={[StyleSheet.absoluteFill, style]}
        >
            <Route path={basepath}>{renderChildren}</Route>
        </StyledScreen>
    );
}
