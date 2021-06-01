import React, { forwardRef } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button, ButtonVariant } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { TextFieldProps } from './BaseTextField/types';
import { TextField } from './TextField';
import { LayerProps } from '../containers/Layer/types';
import { getSearchBarAccessibilityProps } from './accessibility/getSearchBarAccessibilityProps';

export interface SearchBarProps extends LayerProps {
    onSearch?: (query: string) => void;
    inputRef?: any;
    enableSearchButton?: boolean;
    buttonVariant?: ButtonVariant;
    buttonText?: string;
    textFieldProps?: TextFieldProps;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = forwardRef(
    (
        {
            inputRef,
            value,
            onChangeText,
            onSearch,
            enableSearchButton = false,
            buttonText,
            buttonVariant = 'main',
            textFieldProps,
            children,
            placeholder,
            ...others
        }: SearchBarProps,
        ref: any
    ): JSX.Element => {
        const { sizes, spacings } = useTheme();
        const [query, setQuery] = useControllableState(value, '', onChangeText);

        const handleChangeText = (text: string) => {
            if (!enableSearchButton) {
                onSearch?.(text);
            }
            setQuery(text);
        };

        const handleSearch = () => {
            onSearch?.(query);
        };

        return (
            <HorizontalLayer ref={ref} width={'100%'} alignItems={'center'} height={sizes.textFieldHeight} {...others}>
                <TextField
                    ref={inputRef}
                    flex={1}
                    value={query}
                    onChangeText={handleChangeText}
                    onSubmitEditing={enableSearchButton ? handleSearch : undefined}
                    {...getSearchBarAccessibilityProps()}
                    placeholder={placeholder}
                    {...textFieldProps}
                />
                {children}
                {enableSearchButton ? (
                    <Button text={buttonText} variant={buttonVariant} marginLeft={spacings.s} onPress={handleSearch}>
                        {buttonText == null ? <SearchIcon height={24} width={24} fill={'white'} /> : null}
                    </Button>
                ) : null}
            </HorizontalLayer>
        );
    }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
