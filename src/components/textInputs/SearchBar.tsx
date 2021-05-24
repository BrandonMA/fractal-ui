import React, { useCallback, forwardRef } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { IconTextField, IconTextFieldProps } from './IconTextField';

interface SearchBarprops extends IconTextFieldProps {
    onSearch: (query: string) => void;
    addEventBasedSearch?: boolean;
    buttonVariant?: ButtonVariant;
}

const SearchBar = forwardRef(
    (
        { value, onChangeText, onSearch, addEventBasedSearch = false, buttonVariant = 'main', ...others }: SearchBarprops,
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
            <HorizontalLayer width={'100%'} alignItems={'center'} height={sizes.textFieldHeight}>
                <IconTextField
                    ref={ref}
                    value={query}
                    onChangeText={handleChangeText}
                    textFieldProps={{ onSubmitEditing: addEventBasedSearch ? handleSearch : undefined }}
                    paddingLeft={spacings.xs}
                    leftImage={addEventBasedSearch ? undefined : renderSearchIcon}
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
