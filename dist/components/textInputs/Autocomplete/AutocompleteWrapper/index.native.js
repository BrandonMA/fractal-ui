import React from 'react';
import { Layer } from '../../../containers/Layer';
import { SuggestionsList } from '../SuggestionsList';
export function AutocompleteWrapper({ children, suggestionsVisible, filteredData, getLabel, onItemPress, selectedIds, multiple }) {
    return (React.createElement(Layer, null,
        children,
        suggestionsVisible ? (React.createElement(SuggestionsList, { multiple: multiple, filteredData: filteredData, getLabel: getLabel, onItemPress: onItemPress, selectedIds: selectedIds })) : null));
}
//# sourceMappingURL=index.native.js.map