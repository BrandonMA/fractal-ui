import React, { useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { mockFilters } from '../../data';
import { FilterSection } from '../../data/FiltersSection';
import styled from 'styled-components/native';
import { FilterRow } from './FilterRow';

const StyledFlatList = styled.FlatList`
    flex-grow: 1;
    width: 100%;
`;

export function FiltersList(): JSX.Element {
    const renderItem = useCallback((value: SectionListRenderItemInfo<FilterSection>) => {
        const { item } = value;
        return <FilterRow value={item} />;
    }, []);
    const keyExtractor = useCallback((_, index) => mockFilters[index].title, []);

    return <StyledFlatList data={mockFilters} renderItem={renderItem} keyExtractor={keyExtractor} />;
}
