import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { MiddleTabBarShapeProps } from './types/MiddleTabBarShapeProps';

export function MiddleRightShape(props: MiddleTabBarShapeProps) {
    const { backgroundColor, ...others } = props;
    return (
        <Svg width={52} height={76} viewBox='0 0 52 76' {...others}>
            <Path
                d='M0 0c0 6.045 5 9.5 11.31 10.364C33.997 13.469 43 24.182 43 38s-9.004 24.531-31.69 27.636C5 66.5 0 69.955 0 76h52V0H0z'
                fill={backgroundColor}
                fillRule='evenodd'
            />
        </Svg>
    );
}
