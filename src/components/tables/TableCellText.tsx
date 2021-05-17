import React from 'react';
import { TableCell } from './TableCell';
import { Text } from '../text';
import { TableCellTextProps } from './types';

export function TableCellText({ children, textVariant = 'normal', textProps, ...layerProps }: TableCellTextProps): JSX.Element {
    return (
        <TableCell {...layerProps}>
            <Text variant={textVariant} {...textProps}>
                {children}
            </Text>
        </TableCell>
    );
}
