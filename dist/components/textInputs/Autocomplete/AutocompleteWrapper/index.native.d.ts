/// <reference types="react" />
import { AutocompleteWrapperProps, IDEnabled } from '../types';
export declare function AutocompleteWrapper<T extends IDEnabled>({ children, suggestionsVisible, filteredData, getLabel, onItemPress, selectedIds, multiple }: AutocompleteWrapperProps<T>): JSX.Element;
