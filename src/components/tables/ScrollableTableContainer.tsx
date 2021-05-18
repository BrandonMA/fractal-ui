import React from 'react';
import { ScrollableTableContent } from './ScrollableTableContent';
import { TableContainer } from './TableContainer';
import { TableContainerProps } from './types';

export function ScrollableTableContainer({ children, ...others }: TableContainerProps): JSX.Element {
    return (
        <TableContainer {...others}>
            <ScrollableTableContent>{children}</ScrollableTableContent>
        </TableContainer>
    );
}
