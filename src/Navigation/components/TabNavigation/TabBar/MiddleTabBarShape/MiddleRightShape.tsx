import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function MiddleRightShape(props: SvgProps) {
    return (
        <Svg width={52} height={76} viewBox='0 0 52 76' {...props}>
            <Path
                d='M0 0c0 6.045 5 9.5 11.31 10.364C33.997 13.469 43 24.182 43 38s-9.004 24.531-31.69 27.636C5 66.5 0 69.955 0 76h52V0H0z'
                fillRule='evenodd'
            />
        </Svg>
    );
}
