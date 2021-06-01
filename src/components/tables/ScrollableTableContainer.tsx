import React, { ReactNode } from 'react';
import { ScrollableTableContent } from './ScrollableTableContent';
import { TableContainer } from './TableContainer';
import { TableContainerProps } from './types';

interface ScrollableTableContainerProps extends TableContainerProps {
    nonScrollableChildren: ReactNode | Array<ReactNode>;
}

export function ScrollableTableContainer({ children, nonScrollableChildren, ...others }: ScrollableTableContainerProps): JSX.Element {
    return (
        <TableContainer {...others}>
            {nonScrollableChildren}
            <ScrollableTableContent>{children}</ScrollableTableContent>
        </TableContainer>
    );
}
