import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
import { ScrollableTableContentProps } from './types';

const ScrollableHorizontalLayer = styled(Layer)`
    overflow-x: auto;
`;

export function ScrollableTableContent({ children }: ScrollableTableContentProps): JSX.Element {
    return <ScrollableHorizontalLayer>{children}</ScrollableHorizontalLayer>;
}
