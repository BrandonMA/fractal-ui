import React, { Children, useEffect, useMemo, useState } from 'react';
import { useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import styled from 'styled-components/native';
import { ScreenStack, ScreenStackProps } from '../ScreenStack';
import { NavigationBarInsetsProvider } from '../NavigationBarInsetsProvider';
import { injectModalContainers } from './util';
import { filterMatchingChildren } from './util/filterMatchingChildren';

const StyledScreenStack = styled(ScreenStack)`
    flex: 1;
`;

export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children, ...others } = props;
    const location = useLocation();
    const [active] = useMatch(path ?? '/');
    const [prevChildren, setPrevChildren] = useState<Array<JSX.Element>>([]);

    const childrenToRender = useMemo(() => {
        let arrayOfChildren = Children.toArray(children) as Array<JSX.Element>;
        arrayOfChildren = filterMatchingChildren(arrayOfChildren, location);
        arrayOfChildren = injectModalContainers(arrayOfChildren);
        return arrayOfChildren;
    }, [children, location]);

    useEffect(() => {
        if (active) {
            setPrevChildren(childrenToRender);
        }
    }, [childrenToRender, active]);

    return (
        <>
            <NavigationBarInsetsProvider>
                <StyledScreenStack {...others}>{active ? childrenToRender : prevChildren}</StyledScreenStack>
            </NavigationBarInsetsProvider>
        </>
    );
}
