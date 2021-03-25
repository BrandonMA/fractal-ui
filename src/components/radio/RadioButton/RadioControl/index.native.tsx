import React from 'react';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
import { RadioControlProps } from './RadioControlProps';

export function RadioControl({ active, children }: RadioControlProps): JSX.Element {
    const { colors } = useTheme();

    return (
        <Layer
            width={20}
            height={20}
            display={'flex'}
            flexShrink={0}
            borderRadius={10}
            borderWidth={2}
            alignItems={'center'}
            justifyContent={'center'}
            borderColor={active ? colors.mainInteractiveColor : colors.placeholder}
        >
            {children}
        </Layer>
    );
}
