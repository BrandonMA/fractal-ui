import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function CartIcon(props: SvgProps): JSX.Element {
    return (
        <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
            <Path d='M22 23a2 2 0 100 4 2 2 0 100-4zm-10 0a2 2 0 100 4 2 2 0 100-4zm12-3H10.5L7 9h20z' />
            <Path
                fill='none'
                stroke='#fff'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
                strokeWidth={2}
                d='M2 3h1.878a1.5 1.5 0 011.439 1.077l4.261 14.488A2 2 0 0011.496 20h10.976c.902 0 1.692-.604 1.93-1.474L27 9H7'
            />
        </Svg>
    );
}
