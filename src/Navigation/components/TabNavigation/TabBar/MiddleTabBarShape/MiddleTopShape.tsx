import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { MiddleTabBarShapeProps } from './types/MiddleTabBarShapeProps';

export function MiddleTopShape(props: MiddleTabBarShapeProps) {
    const { backgroundColor, ...others } = props;
    return (
        <Svg width={76} height={52} viewBox='0 0 76 52' {...others}>
            <Path
                d='M0 52c6.045 0 9.5-5 10.364-11.31C13.469 18.003 24.182 9 38 9s24.531 9.004 27.636 31.69C66.5 47 69.955 52 76 52V0H0v52z'
                fill={backgroundColor}
                fillRule='evenodd'
            />
        </Svg>
    );
}
