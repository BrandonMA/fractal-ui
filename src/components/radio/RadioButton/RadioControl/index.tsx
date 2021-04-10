import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
import { RadioControlProps } from './RadioControlProps';

const StyledLayer = styled(Layer)`
    box-sizing: border-box;
`;

export function RadioControl({ active, children }: RadioControlProps): JSX.Element {
    const { colors, sizes } = useTheme();

    return (
        <StyledLayer
            width={sizes.radioButtonSize}
            height={sizes.radioButtonSize}
            display={'flex'}
            flexShrink={0}
            borderRadius={sizes.radioButtonSize / 2}
            borderWidth={2}
            overflow={'hidden'}
            borderStyle={'solid'}
            alignItems={'center'}
            justifyContent={'center'}
            borderColor={active ? colors.mainInteractiveColor : colors.placeholder}
        >
            {children}
        </StyledLayer>
    );
}
