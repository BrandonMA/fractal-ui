import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
import { RadioProps } from './RadioProps';

const StyledRadio = styled(Layer)`
    border-style: solid;
`;

export function Radio({ active, activeColor, inactiveColor }: RadioProps): JSX.Element {
    return (
        <StyledRadio
            width={active ? 6 : 14}
            height={active ? 6 : 14}
            borderRadius={active ? 12 : 8}
            borderWidth={active ? 6 : 2}
            borderColor={active ? activeColor : inactiveColor}
        />
    );
}
