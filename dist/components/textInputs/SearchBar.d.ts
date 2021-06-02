import React from 'react';
import { ButtonTextFieldProps } from './ButtonTextField';
export interface SearchBarProps extends ButtonTextFieldProps {
    onSearch?: (query: string) => void;
    enableSearchButton?: boolean;
    searchAriaLabel?: string;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<unknown>>;
export { SearchBar };
