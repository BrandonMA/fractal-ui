import React from 'react';
import styled from 'styled-components';
import { Layer } from '../src/components/containers/Layer';
import { LayerProps } from '../src/components/containers/Layer/types';
import { ScrollableTableContainer } from '../src/components/tables/ScrollableTableContainer';
import { TextProps } from '../src/components/text/BaseText/types';
import { Text } from '../src/components/text';
import { TextProps as FractalTextProps } from '../src/sharedProps/TextProps';

const Table = styled(Layer)`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
`;

const TableCell = styled(Layer)`
    flex-direction: row;
    flex-wrap: nowrap;
    flex-grow: 1;
    flex-basis: 0;
    padding: 8px 0px;
    overflow: hidden;
`;

interface TableCellTextProps extends FractalTextProps, Omit<LayerProps, 'children'> {
    textVariant?: TextProps['variant'];
    children: TextProps['children'];
    textProps?: FractalTextProps;
}

const TableCellText = ({ children, textVariant = 'normal', textProps, ...layerProps }: TableCellTextProps): JSX.Element => {
    return (
        <TableCell {...layerProps}>
            <Text variant={textVariant} {...textProps}>
                {children}
            </Text>
        </TableCell>
    );
};

const TableRow = styled(Layer)`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    border-width: 0px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #f7f7f7;
`;

export function TableExample(): JSX.Element {
    return (
        <ScrollableTableContainer title={'Example'}>
            <Table>
                <TableRow>
                    <TableCellText textVariant='label' minWidth={220}>
                        NAME
                    </TableCellText>
                    <TableCellText textVariant='label' minWidth={200}>
                        LAST NAME
                    </TableCellText>
                    <TableCellText textVariant='label' minWidth={200}>
                        TOTAL
                    </TableCellText>
                </TableRow>
                <TableRow>
                    <TableCellText minWidth={220}>Juan</TableCellText>
                    <TableCellText minWidth={200}>Portillo</TableCellText>
                    <TableCellText minWidth={200}>$2,300</TableCellText>
                </TableRow>
                <TableRow>
                    <TableCellText minWidth={220}>Juan</TableCellText>
                    <TableCellText minWidth={200}>Portillo</TableCellText>
                    <TableCellText minWidth={200}>$2,300</TableCellText>
                </TableRow>
                <TableRow>
                    <TableCellText minWidth={220}>Juan</TableCellText>
                    <TableCellText minWidth={200}>Portillo</TableCellText>
                    <TableCellText minWidth={200}>$2,300</TableCellText>
                </TableRow>
            </Table>
        </ScrollableTableContainer>
    );
}
