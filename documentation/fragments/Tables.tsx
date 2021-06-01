import React from 'react';
import { useTheme, Text, TableContainer, DetailsRow } from '../../src';

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

function DetailsListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <TableContainer
            label='2'
            title='Title'
            titleColorVariant='warning'
            labelColorVariant='warning'
            marginTop={spacings.s}
            marginBottom={spacings.xl}
        >
            {detailsCardContent.map((item, index) => {
                const isLastItem = index === detailsCardContent.length - 1;
                return <DetailsRow key={item[0]} title={item[0]} details={item[1]} addSeparator={!isLastItem} />;
            })}
        </TableContainer>
    );
}

export function TablesFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Details List Example</Text>
            <DetailsListFragment />
        </>
    );
}
