import React from 'react';
import { Popover } from '../../../Popover';
import { SuggestionsList } from '../SuggestionsList';
import { AutocompleteWrapperProps, IDEnabled } from '../types';

export function AutocompleteWrapper<T extends IDEnabled>({
    children,
    suggestionsVisible,
    hideSuggestions,
    filteredData,
    getLabel,
    onItemPress,
    selectedIds,
    multiple
}: AutocompleteWrapperProps<T>): JSX.Element {
    return (
        <Popover
            placement={'bottom'}
            active={suggestionsVisible}
            onRequestClose={hideSuggestions}
            popoverChildren={() => (
                <SuggestionsList
                    multiple={multiple}
                    filteredData={filteredData}
                    getLabel={getLabel}
                    onItemPress={onItemPress}
                    selectedIds={selectedIds}
                />
            )}
        >
            {children}
        </Popover>
    );
}
