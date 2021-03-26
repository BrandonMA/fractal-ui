import React from 'react';
import { CheckIcon } from '../../assets/CheckIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';

const checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

export function Check({ value }: { value: boolean }): JSX.Element {
    const { colors } = useTheme();
    return (
        <Layer
            backgroundColor={colors.mainInteractiveColor}
            initial={'hidden'}
            animate={value ? 'visible' : 'hidden'}
            variants={checkVariants}
        >
            <CheckIcon width={16} height={16} fill={colors.white} />
        </Layer>
    );
}
