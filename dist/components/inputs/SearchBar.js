var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { memo, useCallback } from 'react';
import { IconTextField } from './IconTextField';
import { Ionicons as BaseIonicons } from '@expo/vector-icons';
var Ionicons = memo(BaseIonicons);
export function SearchBar(props) {
    var renderSearchIcon = useCallback(function (color, size) { return React.createElement(Ionicons, { selectable: false, name: 'search', size: size, color: color }); }, []);
    return React.createElement(IconTextField, __assign({}, props, { leftImage: renderSearchIcon }));
}
//# sourceMappingURL=SearchBar.js.map