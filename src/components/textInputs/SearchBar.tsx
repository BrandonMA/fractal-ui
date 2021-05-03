import React, { useCallback, forwardRef } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { IconTextField, IconTextFieldProps } from './IconTextField';

const SearchBar = forwardRef(
    (props: IconTextFieldProps, ref: any): JSX.Element => {
        const renderSearchIcon = useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

        return <IconTextField ref={ref} {...props} leftImage={renderSearchIcon} />;
    }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
