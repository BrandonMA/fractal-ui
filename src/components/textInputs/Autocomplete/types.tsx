import { SearchBarProps } from '../SearchBar';

export interface IDEnabled {
    id: string;
}

export interface SuggestionsListProps<T> {
    filteredData: Array<T>;
    getLabel: (item: T) => string;
    onItemPress: (item: T, isSelected: boolean) => void;
    selectedIds: Array<string>;
    multiple?: boolean;
}

export interface AutocompleteProps<T> extends Omit<SearchBarProps, 'onSearch'> {
    options: Array<T>;
    getOptionLabel: (option: T) => string;
    onSelect: (value: T | Array<T>) => void;
    multiple?: boolean;
    controllableSelectedOptions?: Array<T>;
}

export interface BaseAutocompleteProps<T> extends Omit<SuggestionsListProps<T>, 'onItemPress'>, SearchBarProps {
    onItemPress: (item: T, isSelected: boolean, keepInput?: boolean) => void;
    suggestionsVisible: boolean;
    hideSuggestions: () => void;
    doneText?: string;
}

export interface AutocompleteModalProps<T> extends Omit<BaseAutocompleteProps<T>, 'suggestionsVisible'> {
    visible: boolean;
    hideModal: () => void;
}
