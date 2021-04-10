import React from 'react';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
import { RadioControlProps } from './RadioControlProps';

export function RadioControl({ active, children }: RadioControlProps): JSX.Element {
    const { colors, sizes } = useTheme();

    return (
        <Layer
            width={sizes.radioButtonSize}
            height={sizes.radioButtonSize}
            display={'flex'}
            flexShrink={0}
            borderRadius={sizes.radioButtonSize / 2}
            borderWidth={2}
            alignItems={'center'}
            justifyContent={'center'}
            borderColor={active ? colors.mainInteractiveColor : colors.placeholder}
        >
            {children}
        </Layer>
    );
}
