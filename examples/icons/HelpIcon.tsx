import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function HelpIcon(props: SvgProps): JSX.Element {
    return (
        <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
            <Path d='M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm0 19.5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0115 22.5zm2.068-7C16.406 16.111 16 16.512 16 17h-2c0-1.389.949-2.265 1.711-2.97C16.51 13.292 17 12.799 17 12c0-1.103-.897-2-2-2s-2 .897-2 2h-2c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.715-1.071 2.704-1.932 3.5z' />
        </Svg>
    );
}
