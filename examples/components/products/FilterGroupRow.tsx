import React from 'react';
import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { applyCursorStyle } from '../../util/applyCursorStyle';
import { FiltersGroup } from '../../data/FiltersGroup';
import { FilterItemRow } from './FilterItemRow';
import { useExpanded } from '../../hooks/products/useExpanded';

const Container = styled(Pressable)`
    background-color: #f6f6f6;
    height: 36px;
    border-radius: 8px;
    justify-content: center;
    width: 95%;
    padding: 0 12px;
    margin-bottom: 12px;
    ${applyCursorStyle}
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: #999;
`;

const ItemsContainer = styled.View`
    justify-content: center;
    align-items: flex-end;
    width: 100%;
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
                <ItemsContainer>
                    {props.value.values.map((filter) => {
                        return <FilterItemRow value={filter} key={filter} />;
                    })}
                </ItemsContainer>
            ) : null}
        </>
    );
}
