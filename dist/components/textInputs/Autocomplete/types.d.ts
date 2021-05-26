import { ReactNode } from 'react';
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
export interface AutocompleteWrapperProps<T> extends SuggestionsListProps<T> {
    children: ReactNode;
    suggestionsVisible: boolean;
    hideSuggestions: () => void;
}
