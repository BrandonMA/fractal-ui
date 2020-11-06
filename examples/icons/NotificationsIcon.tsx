import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function NotificationsIcon(props: SvgProps): JSX.Element {
    return (
        <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
            <Path d='M22 23v4H8V3h3l.414.414A2 2 0 0012.828 4h4.343a2 2 0 001.414-.586L19 3h3v3h2V3a2 2 0 00-2-2H8a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2v-4h-2zM17.5 2a.5.5 0 110 1 .5.5 0 010-1zm-4 0h2a.5.5 0 010 1h-2a.5.5 0 010-1z' />
            <Path d='M27 8H13a2 2 0 00-2 2v9a2 2 0 002 2h1v3l4-3h9a2 2 0 002-2v-9a2 2 0 00-2-2zm-7 11a1 1 0 01-1-1h2a1 1 0 01-1 1zm-4-2a4.673 4.673 0 001.277-2.387l.33-1.652a2.435 2.435 0 011.433-1.757c-.013-.068-.04-.131-.04-.204a1 1 0 012 0c0 .073-.027.136-.041.205a2.431 2.431 0 011.433 1.757l.33 1.652A4.683 4.683 0 0024 17h-8z' />
        </Svg>
    );
}
