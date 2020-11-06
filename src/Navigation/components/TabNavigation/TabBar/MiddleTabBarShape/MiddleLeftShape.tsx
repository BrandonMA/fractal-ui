import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function MiddleLeftShape(props: SvgProps) {
    return (
        <Svg width={52} height={76} viewBox='0 0 52 76' {...props}>
            <Path
                d='M52 76c0-6.045-5-9.5-11.31-10.364C18.003 62.531 9 51.818 9 38s9.004-24.531 31.69-27.636C47 9.5 52 6.045 52 0H0v76h52z'
                fillRule='evenodd'
            />
        </Svg>
    );
}
