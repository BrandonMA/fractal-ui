import * as React from 'react';
import { useTheme } from '../../core';
import { Layer } from '../containers/Layer';

interface Props {
    values: number;
    selectedIndex?: number;
}

export const SegmentsSeparators = ({ values, selectedIndex }: Props): JSX.Element => {
    const { colors } = useTheme();
    const hide = (val: number) => {
        return selectedIndex === val || selectedIndex === val + 1;
    };

    return (
        <Layer
            position={'absolute'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
        >
            {[...Array.from(new Array(values - 1).keys())].map((val) => {
                return <Layer key={val} width={1} height={'50%'} backgroundColor={hide(val) ? 'transparent' : colors.placeholder} />;
            })}
        </Layer>
    );
};