import React, { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SearchIcon = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg viewBox='0 0 30 30' width={30} height={30} {...props}>
                <Path d='M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 006.322-2.264l5.971 5.971a1 1 0 101.414-1.414l-5.97-5.97A9.947 9.947 0 0023 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z' />
            </Svg>
        );
    }
);