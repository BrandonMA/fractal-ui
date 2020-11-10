import React from 'react';
import { useComponentBasedOnPosition } from './hooks/useComponentBasedOnPosition';
import { SvgProps } from 'react-native-svg';
import { TabBarPosition } from '../types';

interface MiddleTabBarShapeProps extends SvgProps {
    position: TabBarPosition;
}

export function MiddleTabBarShape(props: MiddleTabBarShapeProps): JSX.Element {
    const { position, ...others } = props;
    const Component = useComponentBasedOnPosition(position);
    return <Component {...others} />;
}
