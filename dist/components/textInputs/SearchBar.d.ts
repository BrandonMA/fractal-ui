import React from 'react';
import { ButtonVariant } from '../buttons';
import { TextFieldProps } from './BaseTextField/types';
export interface SearchBarProps extends TextFieldProps {
    onSearch: (query: string) => void;
    inputRef?: any;
    addEventBasedSearch?: boolean;
    buttonVariant?: ButtonVariant;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<unknown>>;
export { SearchBar };
