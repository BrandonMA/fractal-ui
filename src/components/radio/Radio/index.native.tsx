import React from 'react';
import styled from 'styled-components/native';
import { Layer } from '../../containers/Layer';
import { RadioProps } from './RadioProps';

const StyledRadio = styled(Layer)`
    width: 16px;
    height: 16px;
    border-radius: 8px;
`;

export function Radio({ active, activeColor, inactiveColor }: RadioProps): JSX.Element {
    return <StyledRadio borderWidth={active ? 6 : 2} borderColor={active ? activeColor : inactiveColor} />;
}
