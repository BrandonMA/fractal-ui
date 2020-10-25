import React from 'react';
import { CurrentPresentationTypeProvider } from './CurrentPresentationTypeProvider';
import { NavigationRouter } from '../../ReactRouter';

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}

export function NavigationRoot(props: Props): JSX.Element {
    return (
        <NavigationRouter>
            <CurrentPresentationTypeProvider>{props.children}</CurrentPresentationTypeProvider>
        </NavigationRouter>
    );
}
