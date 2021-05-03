import React from 'react';
import { ThemeIdentifierProvider } from '../context/ThemeIdentifierContext';
import { ThemeContent } from '../components/ThemeContent';
export function FractalAppRoot(props) {
    const { handleThemeManually = false } = props;
    return (React.createElement(ThemeIdentifierProvider, { handleThemeManually: handleThemeManually },
        React.createElement(ThemeContent, Object.assign({}, props))));
}
//# sourceMappingURL=FractalAppRoot.js.map