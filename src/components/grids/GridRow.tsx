import React from 'react';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { GridItemProps, extractGridItemProps } from './types';
import { getGridRowAccessibilityProps } from './accessibility/getGridRowAccessibilityProps';

const StyledGrid = styled(Layer)`
    flex-direction: row;
    ${extractGridItemProps};
`;

export function GridRow(props: GridItemProps): JSX.Element {
    return <StyledGrid {...props} {...getGridRowAccessibilityProps()} />;
}
