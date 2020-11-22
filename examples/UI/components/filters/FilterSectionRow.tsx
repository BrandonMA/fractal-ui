import React, { memo } from 'react';
import { FilterSection } from '../../../BusinessLogic/models/FiltersSection';
import styled from 'styled-components/native';
import { FilterGroupRow } from './FilterGroupRow';
import { useExpanded } from '../../hooks/useExpanded';
import { SharedFilterRowStyles } from './SharedFilterRowStyles';
import { FiltersRowItemsContainer } from './FiltersRowItemsContainer';
import { Title } from '../Title';

const Container = memo(styled(SharedFilterRowStyles)`
    width: 100%;
`);

interface FilterSectionProps {
    filterSection: FilterSection;
}

export const FilterSectionRow = memo(
    (props: FilterSectionProps): JSX.Element => {
        const [expanded, toggleExpanded] = useExpanded();

        return (
            <>
                <Container onPress={toggleExpanded}>
                    <Title>{props.filterSection.title}</Title>
                </Container>
                {expanded ? (
                    <FiltersRowItemsContainer>
                        {props.filterSection.groups.map((group) => {
                            return <FilterGroupRow filterGroup={group} key={group.title} />;
                        })}
                    </FiltersRowItemsContainer>
                ) : null}
            </>
        );
    }
);
