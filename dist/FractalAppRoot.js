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
import React, { Fragment } from 'react';
import { FractalThemeIdentifierProvider } from './context/FractalThemeIdentifierProvider';
import { FractalThemeUpdater } from './FractalThemeUpdater';
export function FractalAppRoot(props) {
    var handleThemeManually = props.handleThemeManually;
    var Wrapper = handleThemeManually ? FractalThemeIdentifierProvider : Fragment;
    return (React.createElement(Wrapper, null,
        React.createElement(FractalThemeUpdater, __assign({}, props))));
}
//# sourceMappingURL=FractalAppRoot.js.map