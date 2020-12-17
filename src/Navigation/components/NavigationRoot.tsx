import React, { ReactNode } from 'react';
import { NavigationRouter } from '../../ReactRouter';

interface Props {
    children: JSX.Element | Array<JSX.Element> | ReactNode;
}

export function NavigationRoot(props: Props): JSX.Element {
    return <NavigationRouter>{props.children}</NavigationRouter>;
}
