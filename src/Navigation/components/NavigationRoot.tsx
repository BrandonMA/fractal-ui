import React from 'react';
import { PresentationTypeProvider } from './PresentationTypeProvider';
import { NavigationRouter } from '../../ReactRouter';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

export function NavigationRoot(props: Props): JSX.Element {
    return (
        <NavigationRouter>
            <PresentationTypeProvider>{props.children}</PresentationTypeProvider>
        </NavigationRouter>
    );
}
