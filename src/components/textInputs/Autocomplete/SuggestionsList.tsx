import React from 'react';
import { SuggestionItem } from './SuggestionItem';
import { IDEnabled, SuggestionsListProps } from './types';

export function SuggestionsList<T extends IDEnabled>({
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple
}: SuggestionsListProps<T>): JSX.Element | null {
    return (
        <>
            {filteredData.map((item) => {
                const label = getLabel(item);
                const isSelected = selectedIds.indexOf(item.id) > -1;

                const handleItemPress = () => {
                    onItemPress(item, isSelected);
                };

                return (
                    <SuggestionItem
                        key={`${item.id}`}
                        label={label}
                        isSelected={isSelected}
                        isMultiple={multiple}
                        onPress={handleItemPress}
                    />
                );
            })}
        </>
    );
}
