import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const FilterIcon = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg viewBox='0 0 30 30' width={20} height={20} fill='#005CB3' {...props}>
                <Path d='M18 15h-6L4 5h22zm0 9l-6 2v-9h6z' />
                <Path fill='none' stroke='#005CB3' strokeLinecap='round' strokeMiterlimit={10} strokeWidth={2} d='M4 5h22' />
                <Path d='M18.257 29.486a.257.257 0 100 .514.257.257 0 100-.514z' />
                <Path d='M18.593 28.022l-.574 1.623.326.34 1.634-.577zM28.971 21.6l.727-.727a1.027 1.027 0 000-1.454l-1.117-1.117a1.027 1.027 0 00-1.454 0l-.727.727 2.571 2.571zm-3.6-1.543l-5.828 5.829.771.257.257 1.286 1.286.257.257.771 5.829-5.828z' />
            </Svg>
        );
    }
);
