import React from 'react';
import { Popover } from '../../../Popover';
import { SuggestionsList } from '../SuggestionsList';
export function AutocompleteWrapper({ children, suggestionsVisible, hideSuggestions, filteredData, getLabel, onItemPress, selectedIds, multiple }) {
    return (React.createElement(Popover, { placement: 'bottom', active: suggestionsVisible, onRequestClose: hideSuggestions, popoverChildren: () => (React.createElement(SuggestionsList, { multiple: multiple, filteredData: filteredData, getLabel: getLabel, onItemPress: onItemPress, selectedIds: selectedIds })) }, children));
}
//# sourceMappingURL=index.js.map