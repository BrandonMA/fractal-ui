import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
import { RadioControlProps } from './RadioControlProps';

const StyledLayer = styled(Layer)`
    -webkit-box-align: center;
    -webkit-box-pack: center;
    border-style: solid;
`;

export function RadioControl({ active, children }: RadioControlProps): JSX.Element {
    const { colors } = useTheme();

    return (
        <StyledLayer
            width={16}
            height={16}
            display={'flex'}
            flexShrink={0}
            borderRadius={16}
            borderWidth={2}
            alignItems={'center'}
            justifyContent={'center'}
            borderColor={active ? colors.mainInteractiveColor : colors.placeholder}
        >
            {children}
        </StyledLayer>
    );
}
