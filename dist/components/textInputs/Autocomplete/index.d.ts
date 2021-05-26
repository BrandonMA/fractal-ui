/// <reference types="react" />
import { AutocompleteProps, IDEnabled } from './types';
export declare function Autocomplete<T extends IDEnabled>({ options, getOptionLabel, onSelect, controllableSelectedOptions, multiple, onChangeText, value, ...searchBarProps }: AutocompleteProps<T>): JSX.Element;
