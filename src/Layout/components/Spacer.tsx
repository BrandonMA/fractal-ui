import styled from 'styled-components/native';
import { memo } from 'react';

interface SpacerProps {
    width: number;
    height: number;
}

export const Spacer = memo(styled.View`
    width: ${(props: SpacerProps) => props.width}px;
    height: ${(props: SpacerProps) => props.height}px;
`);
