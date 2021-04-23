import React, { useCallback } from 'react';
import { SearchIcon } from '../../assets/SearchIcon';
import { IconTextField } from './IconTextField';
export function SearchBar(props) {
    const renderSearchIcon = useCallback((color, size) => React.createElement(SearchIcon, { height: size, width: size, fill: color }), []);
    return React.createElement(IconTextField, Object.assign({}, props, { leftImage: renderSearchIcon }));
}
//# sourceMappingURL=SearchBar.js.map