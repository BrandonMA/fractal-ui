import React from 'react';
import { Table, TableRow, TableCellText } from '../src/components/tables';

export function TableExample(): JSX.Element {
    return (
        <Table>
            <TableRow>
                <TableCellText textVariant='label' flexGrow={2}>
                    NAME
                </TableCellText>
                <TableCellText textVariant='label'>LAST NAME</TableCellText>
                <TableCellText textVariant='label'>TOTAL</TableCellText>
            </TableRow>
            <TableRow>
                <TableCellText flexGrow={2}>Juan</TableCellText>
                <TableCellText>Portillo</TableCellText>
                <TableCellText>$2,300</TableCellText>
            </TableRow>
        </Table>
    );
}
