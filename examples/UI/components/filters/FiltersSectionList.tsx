import React, { useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { FilterSection } from '../../../BusinessLogic/models/FiltersSection';
import styled from 'styled-components/native';
import { useFilters } from '../../../BusinessLogic/hooks/filters/useFilters';
import { FilterSectionRow } from './FilterSectionRow';

const StyledFlatList = styled.FlatList`
    flex-grow: 1;
    width: 100%;
`;

export function FiltersSectionList(): JSX.Element {
    const filters = useFilters();
    const renderItem = useCallback((value: SectionListRenderItemInfo<FilterSection>) => {
        const { item } = value;
        return <FilterSectionRow value={item} />;
    }, []);
    const keyExtractor = useCallback((_, index) => filters[index].title, [filters]);

    return <StyledFlatList data={filters} renderItem={renderItem} keyExtractor={keyExtractor} />;
}
