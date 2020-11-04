import React from 'react';
import { MiddleTabBarShapeProps } from './types/MiddleTabBarShapeProps';
import { useComponentBasedOnPosition } from './hooks/useComponentBasedOnPosition';

export function MiddleTabBarShape(props: MiddleTabBarShapeProps): JSX.Element {
    const Component = useComponentBasedOnPosition(props.position);
    return <Component {...props} />;
}
