import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { MiddleTabBarShapeProps } from './types/MiddleTabBarShapeProps';

export function MiddleBottomShape(props: MiddleTabBarShapeProps) {
    const { backgroundColor, ...others } = props;
    return (
        <Svg width={76} height={52} viewBox='0 0 76 52' {...others}>
            <Path
                d='M76 0c-6.045 0-9.5 5-10.364 11.31C62.531 33.997 51.818 43 38 43s-24.531-9.004-27.636-31.69C9.5 5 6.045 0 0 0v52h76V0z'
                fill={backgroundColor}
                fillRule='evenodd'
            />
        </Svg>
    );
}
