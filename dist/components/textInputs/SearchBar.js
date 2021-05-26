var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, forwardRef } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { useTheme } from '../../context';
import { useControllableState } from '../../hooks/useControllableState';
import { Button } from '../buttons';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { TextField } from './TextField';
const SearchBar = forwardRef((_a, ref) => {
    var { value, onChangeText, onSearch, addEventBasedSearch = false, buttonVariant = 'main' } = _a, others = __rest(_a, ["value", "onChangeText", "onSearch", "addEventBasedSearch", "buttonVariant"]);
    const { sizes, spacings } = useTheme();
    const [query, setQuery] = useControllableState(value, '', onChangeText);
    const renderSearchIcon = useCallback((color, size) => React.createElement(SearchIcon, { height: size, width: size, fill: color }), []);
    const handleChangeText = (text) => {
        if (!addEventBasedSearch) {
            onSearch(text);
        }
        setQuery(text);
    };
    const handleSearch = () => {
        onSearch(query);
    };
    return (React.createElement(HorizontalLayer, { width: '100%', alignItems: 'center', height: sizes.textFieldHeight },
        React.createElement(TextField, Object.assign({ ref: ref, value: query, onChangeText: handleChangeText, onSubmitEditing: addEventBasedSearch ? handleSearch : undefined }, others, { flex: 1 })),
        addEventBasedSearch ? (React.createElement(Button, { variant: buttonVariant, marginLeft: spacings.m, width: sizes.textFieldHeight, onPress: handleSearch }, renderSearchIcon('white', 24))) : null));
});
SearchBar.displayName = 'SearchBar';
export { SearchBar };
//# sourceMappingURL=SearchBar.js.map