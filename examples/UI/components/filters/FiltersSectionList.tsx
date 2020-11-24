import React, { memo, useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { FiltersSection } from '../../../BusinessLogic/models/FiltersSection';
import styled from 'styled-components/native';
import { useFiltersSections } from '../../../BusinessLogic/hooks/filters/useFiltersSections';
import { FilterSectionRow } from './FilterSectionRow';

const StyledFlatList = styled.FlatList`
    flex-grow: 1;
    width: 100%;
`;

export const FiltersSectionList = memo(
    (): JSX.Element => {
        const filters = useFiltersSections();
        const renderItem = useCallback((value: SectionListRenderItemInfo<FiltersSection>) => {
            const { item } = value;
            return <FilterSectionRow filterSection={item} key={item.title} />;
        }, []);
        const keyExtractor = useCallback((item) => item.title, []);

        return <StyledFlatList data={filters} renderItem={renderItem} keyExtractor={keyExtractor} />;
    }
);
