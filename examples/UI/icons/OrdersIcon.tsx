import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const OrdersIcon = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
                <Path d='M23 2H7a2 2 0 00-2 2v22a2 2 0 002 2h11.5a1 1 0 00.707-.293l5.5-5.5A1 1 0 0025 21.5V4a2 2 0 00-2-2zM9 6a1 1 0 110 2 1 1 0 010-2zm4 0h8a1 1 0 010 2h-8a1 1 0 010-2zm-4 5a1 1 0 110 2 1 1 0 010-2zm4 0h8a1 1 0 010 2h-8a1 1 0 010-2zm-4 5a1 1 0 110 2 1 1 0 010-2zm4 0h8a1 1 0 010 2h-8a1 1 0 010-2zm-4 5a1 1 0 110 2 1 1 0 010-2zm4 0h3v2h-3a1 1 0 010-2zm5 5.096V22a1 1 0 011-1h4.096L18 26.096z' />
            </Svg>
        );
    }
);
