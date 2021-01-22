import React, { useCallback } from 'react';
import { IconTextField, IconTextFieldProps } from './IconTextField';
import { SearchIcon } from '../assets/SearchIcon';

export function SearchBar(props: IconTextFieldProps): JSX.Element {
    const renderSearchIcon = useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

    return <IconTextField {...props} leftImage={renderSearchIcon} />;
}
