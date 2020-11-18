import React from 'react';
import { FilterSection } from '../../../BusinessLogic/models/FiltersSection';
import styled from 'styled-components/native';
import { FilterGroupRow } from './FilterGroupRow';
import { useExpanded } from '../../hooks/useExpanded';
import { SharedFilterRowStyles } from './SharedFilterRowStyles';
import { FiltersRowItemsContainer } from './FiltersRowItemsContainer';
import { Title } from '../Title';

const Container = styled(SharedFilterRowStyles)`
    width: 100%;
`;

interface FilterSectionProps {
    value: FilterSection;
}

export function FilterSectionRow(props: FilterSectionProps): JSX.Element {
    const [expanded, toggleExpanded] = useExpanded();

    return (
        <>
            <Container onPress={toggleExpanded}>
                <Title>{props.value.title}</Title>
            </Container>
            {expanded ? (
                <FiltersRowItemsContainer>
                    {props.value.filters.map((filter) => {
                        return <FilterGroupRow value={filter} key={filter.title} />;
                    })}
                </FiltersRowItemsContainer>
            ) : null}
        </>
    );
}
