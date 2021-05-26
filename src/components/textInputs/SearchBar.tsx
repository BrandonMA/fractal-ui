import React, { useCallback, forwardRef } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { TextFieldProps } from './BaseTextField/types';
import { TextField } from './TextField';

export interface SearchBarProps extends TextFieldProps {
    onSearch: (query: string) => void;
    inputRef?: any;
    addEventBasedSearch?: boolean;
    buttonVariant?: ButtonVariant;
}

const SearchBar = forwardRef(
    (
        { inputRef, value, onChangeText, onSearch, addEventBasedSearch = false, buttonVariant = 'main', ...others }: SearchBarProps,
        ref: any
    ): JSX.Element => {
        const { sizes, spacings } = useTheme();
        const [query, setQuery] = useControllableState(value, '', onChangeText);

        const renderSearchIcon = useCallback((color: string, size: number) => <SearchIcon height={size} width={size} fill={color} />, []);

        const handleChangeText = (text: string) => {
            if (!addEventBasedSearch) {
                onSearch(text);
            }
            setQuery(text);
        };

        const handleSearch = () => {
            onSearch(query);
        };

        return (
            <HorizontalLayer ref={ref} width={'100%'} alignItems={'center'} height={sizes.textFieldHeight}>
                <TextField
                    ref={inputRef}
                    value={query}
                    onChangeText={handleChangeText}
                    onSubmitEditing={addEventBasedSearch ? handleSearch : undefined}
                    {...others}
                    flex={1}
                />
                {addEventBasedSearch ? (
                    <Button variant={buttonVariant} marginLeft={spacings.m} width={sizes.textFieldHeight} onPress={handleSearch}>
                        {renderSearchIcon('white', 24)}
                    </Button>
                ) : null}
            </HorizontalLayer>
        );
    }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
