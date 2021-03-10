import React from 'react';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { GridItemProps, extractGridItemProps } from './types';

const StyledGrid = styled(Layer)`
    flex-direction: column;
    ${extractGridItemProps};
`;

export function GridColumn(props: GridItemProps): JSX.Element {
    return <StyledGrid {...props} />;
}
