import React, { memo } from 'react';
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
    filterGroup: FiltersGroup;
}

export const FilterGroupRow = memo(
    (props: FilterGroupRowProps): JSX.Element => {
        const [expanded, toggleExpanded] = useExpanded();

        return (
            <>
                <Container onPress={toggleExpanded}>
                    <Title>{props.filterGroup.title}</Title>
                </Container>
                {expanded ? (
                    <FiltersRowItemsContainer>
                        {props.filterGroup.filters.map((filter) => {
                            return <FilterItemRow filter={filter} key={filter} />;
                        })}
                    </FiltersRowItemsContainer>
                ) : null}
            </>
        );
    }
);
