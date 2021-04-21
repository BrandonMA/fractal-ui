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
import React from 'react';
import { ThemeIdentifierProvider } from './context/ThemeIdentifierContext';
import { ThemeContent } from '../components/ThemeContent';
export function FractalAppRoot(props) {
    var handleThemeManually = props.handleThemeManually;
    return (React.createElement(ThemeIdentifierProvider, { handleThemeManually: handleThemeManually !== null && handleThemeManually !== void 0 ? handleThemeManually : false },
        React.createElement(ThemeContent, __assign({}, props))));
}
//# sourceMappingURL=FractalAppRoot.js.map