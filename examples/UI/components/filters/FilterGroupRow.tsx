import React from 'react';
import styled from 'styled-components/native';
import { FiltersGroup } from '../../../BusinessLogic/models/FiltersGroup';
import { FilterItemRow } from './FilterItemRow';
import { useExpanded } from '../../hooks/useExpanded';
import { Title } from '../Title';
import { SharedFilterRowStyles } from './SharedFilterRowStyles';
import { FiltersRowItemsContainer } from './FiltersRowItemsContainer';

const Container = styled(SharedFilterRowStyles)`
    width: 95%;
`;

interface FilterGroupRowProps {
    value: FiltersGroup;
}

export function FilterGroupRow(props: FilterGroupRowProps): JSX.Element {
    const [expanded, toggleExpanded] = useExpanded();

    return (
        <>
            <Container onPress={toggleExpanded}>
                <Title>{props.value.title}</Title>
            </Container>
            {expanded ? (
                <FiltersRowItemsContainer>
                    {props.value.values.map((filter) => {
                        return <FilterItemRow value={filter} key={filter} />;
                    })}
                </FiltersRowItemsContainer>
            ) : null}
        </>
    );
}
