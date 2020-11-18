import React from 'react';
import styled from 'styled-components/native';
import { MonthPicker } from './MonthPicker';
import { YearPicker } from './YearPicker';
import { SearchButton } from './SearchButton';

const Container = styled.View`
    margin: 12px;
`;

export function BillsScreenContent(): JSX.Element {
    return (
        <Container>
            <YearPicker />
            <MonthPicker />
            <SearchButton />
        </Container>
    );
}
