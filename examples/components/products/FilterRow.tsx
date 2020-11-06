import React from 'react';
import { FilterSection } from '../../data/FiltersSection';
import { FilterSectionRow } from './FilterSectionRow';
import { View } from 'react-native';

interface FilterRowProps {
    value: FilterSection;
}

export function FilterRow(props: FilterRowProps): JSX.Element {
    return (
        <View>
            <FilterSectionRow value={props.value} />
        </View>
    );
}
