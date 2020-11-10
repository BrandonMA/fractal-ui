import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function MiddleBottomShape(props: SvgProps) {
    return (
        <Svg width={75} height={52} viewBox='0 0 76 52' {...props}>
            <Path
                d='M76 0c-6.045 0-9.5 5-10.364 11.31C62.531 33.997 51.818 43 38 43s-24.531-9.004-27.636-31.69C9.5 5 6.045 0 0 0v52h76V0z'
                fillRule='evenodd'
            />
        </Svg>
    );
}
