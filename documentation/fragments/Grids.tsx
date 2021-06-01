import React from 'react';
import { useTheme, Box, Text, GridList, Grid, GridColumn, GridRow } from '../../src';

function GridListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <GridList
            data={['One', 'Two', 'Three', 'Four']}
            numColumns={2}
            backgroundColor={colors.warningInteractiveColor}
            marginTop={spacings.s}
            marginBottom={spacings.xl}
            renderItem={() => <Box margin={4} height={60} minWidth={30} />}
        />
    );
}

function GridFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <Box height={300} marginTop={spacings.s} marginBottom={spacings.xl}>
            <Grid>
                <GridColumn backgroundColor={colors.dangerInteractiveColor300} />
                <GridColumn>
                    <GridRow backgroundColor={colors.warningInteractiveColor300} />
                    <GridRow backgroundColor={colors.mainInteractiveColor300} />
                </GridColumn>
            </Grid>
        </Box>
    );
}

export function GridsFragments(): JSX.Element {
    return (
        <>
            <Text variant={'title'}>Grid List Example</Text>
            <GridListFragment />
            <Text variant={'title'}>Grid Example</Text>
            <GridFragment />
        </>
    );
}
