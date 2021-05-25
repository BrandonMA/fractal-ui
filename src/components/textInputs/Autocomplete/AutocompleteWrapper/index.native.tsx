import React from 'react';
import { Layer } from '../../../containers/Layer';
import { SuggestionsList } from '../SuggestionsList';
import { AutocompleteWrapperProps, IDEnabled } from '../types';

export function AutocompleteWrapper<T extends IDEnabled>({
    children,
    suggestionsVisible,
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple
}: AutocompleteWrapperProps<T>): JSX.Element {
    return (
        <Layer>
            {children}
            {suggestionsVisible ? (
                <SuggestionsList
                    multiple={multiple}
                    filteredData={filteredData}
                    getLabel={getLabel}
                    onItemPress={onItemPress}
                    selectedIds={selectedIds}
                />
            ) : null}
        </Layer>
    );
}
