import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const HelpIcon = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg viewBox='0 0 30 30' width={60} height={60} {...props}>
                <Path d='M18 19v-2c.45-.223 1.737-1.755 1.872-2.952.354-.027.91-.352 1.074-1.635.088-.689-.262-1.076-.474-1.198 0 0 .528-1.003.528-2.214 0-2.428-.953-4.5-3-4.5 0 0-.711-1.5-3-1.5-4.242 0-6 2.721-6 6 0 1.104.528 2.214.528 2.214-.212.122-.562.51-.474 1.198.164 1.283.72 1.608 1.074 1.635C10.263 15.245 11.55 16.777 12 17v2c-1 3-9 1-9 8h24c0-7-8-5-9-8zm9.5-6a1.5 1.5 0 11-3.001-.001A1.5 1.5 0 0127.5 13zM26 0c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 .799-.49 1.292-1.289 2.03C25.949 6.735 25 7.611 25 9h2c0-.488.406-.889 1.068-1.5C28.929 6.704 30 5.715 30 4c0-2.206-1.794-4-4-4z' />
            </Svg>
        );
    }
);
