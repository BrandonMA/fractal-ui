import React from 'react';
import { NavigationBarProps } from './NavigationBar';

export function PlarformBarConfig(props: NavigationBarProps): JSX.Element {
    const { children } = props;
    return <>{children}</>;
}
