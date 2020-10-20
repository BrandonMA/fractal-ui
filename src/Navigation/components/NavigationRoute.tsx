import React, { useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const StyledScreen = styled(Screen)`
    background-color: white;
`;

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path: string;
    children?: Array<JSX.Element> | JSX.Element;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const [active] = useMatch(path);
    const renderChildren = useMemo(() => children, [children]);

    return (
        <StyledScreen
            {...others}
            active={active ? 1 : 0}
            stackPresentation={stackPresentation ?? 'push'}
            style={[StyleSheet.absoluteFill, style]}
        >
            <Route path={path}>{renderChildren}</Route>
        </StyledScreen>
    );
}
