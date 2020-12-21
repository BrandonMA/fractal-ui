import React, { Children, useEffect, useMemo, useRef } from 'react';
import { useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import styled from 'styled-components/native';
import { ScreenStack, ScreenStackProps } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { injectModalContainers } from './util/injectModalContainer';
import { getInsetsStyle, InsetsStyleConfig } from '../../../../Layout/util/getInsetsStyle';
import { useTabBarInsets } from '../../../hooks';

const StyledScreenStack = styled(ScreenStack)`
    flex: 1;
    ${getInsetsStyle}
`;

export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}

const insetsStyleConfig: InsetsStyleConfig = { type: 'margin', removeVertical: true };

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children, ...others } = props;
    const { pathname } = useLocation();
    const [active] = useMatch(path ?? '/');
    const prevChildrenRef = useRef<Array<JSX.Element>>([]);
    const tabBarInsets = useTabBarInsets();

    const childrenToRender = useMemo(() => {
        let arrayOfChildren = Children.toArray(children) as Array<JSX.Element>;
        arrayOfChildren = filterMatchingChildren(arrayOfChildren, pathname);
        arrayOfChildren = injectModalContainers(arrayOfChildren);
        return arrayOfChildren;
    }, [children, pathname]);

    useEffect(() => {
        if (active) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, active]);

    return (
        <StyledScreenStack {...others} insets={tabBarInsets} insetsStyleConfig={insetsStyleConfig}>
            {active ? childrenToRender : prevChildrenRef.current}
        </StyledScreenStack>
    );
}
