import React from 'react';
import { ThemeIdentifierProvider } from './context/ThemeIdentifierContext';
import { ThemeContent } from '../components/ThemeContent';
export function FractalAppRoot(props) {
    const { handleThemeManually } = props;
    return (React.createElement(ThemeIdentifierProvider, { handleThemeManually: handleThemeManually !== null && handleThemeManually !== void 0 ? handleThemeManually : false },
        React.createElement(ThemeContent, Object.assign({}, props))));
}
//# sourceMappingURL=FractalAppRoot.js.map