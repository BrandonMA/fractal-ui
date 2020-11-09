import React from 'react';
import { FilterSection } from '../../models/FiltersSection';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { applyCursorStyle } from '../../util/applyCursorStyle';
import { FilterGroupRow } from './FilterGroupRow';
import { useExpanded } from '../../hooks/products/useExpanded';

const Container = styled(Pressable)`
    background-color: #f6f6f6;
    height: 40px;
    border-radius: 8px;
    justify-content: center;
    width: 100%;
    padding: 0 12px;
    margin-bottom: 12px;
    ${applyCursorStyle}
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

const FilterGroupContainer = styled.View`
    justify-content: center;
    align-items: flex-end;
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
                <FilterGroupContainer>
                    {props.value.filters.map((filter) => {
                        return <FilterGroupRow value={filter} key={filter.title} />;
                    })}
                </FilterGroupContainer>
            ) : null}
        </>
    );
}
