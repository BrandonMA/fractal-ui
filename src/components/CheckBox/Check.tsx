import React from 'react';
import { CheckIcon } from '../../assets/CheckIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';

interface Props {
    value: boolean;
}

const checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

export function Check({ value }: Props): JSX.Element {
    const { colors } = useTheme();
    return (
        <Layer
            backgroundColor={colors.mainInteractiveColor}
            initial={'hidden'}
            animate={value ? 'visible' : 'hidden'}
            variants={checkVariants}
            width={'100%'}
            height={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <CheckIcon width={16} height={16} fill={colors.white} />
        </Layer>
    );
}
