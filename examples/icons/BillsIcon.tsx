import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function BillsIcon(props: SvgProps): JSX.Element {
    return (
        <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
            <Path d='M23 3l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1v24a2 2 0 002 2h16a2 2 0 002-2V2l-2 1zm-7 20h-6a1 1 0 010-2h6a1 1 0 010 2zm-7-5a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1zm7-3h-6a1 1 0 010-2h6a1 1 0 010 2zm4 8a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-6H10a1 1 0 010-2h10a1 1 0 010 2z' />
        </Svg>
    );
}
