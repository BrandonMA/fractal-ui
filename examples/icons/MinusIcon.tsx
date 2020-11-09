import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function MinusIcon(props: SvgProps): JSX.Element {
    return (
        <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
            <Path fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit={10} strokeWidth={4} d='M25 15H5' />
        </Svg>
    );
}
