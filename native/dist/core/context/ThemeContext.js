import React, { createContext } from 'react';
import { lightFractalTheme } from '../../themes/templates/lightFractalTheme';
export var ThemeContext = createContext(lightFractalTheme);
export function ThemeProvider(_a) {
    var children = _a.children, theme = _a.theme;
    return React.createElement(ThemeContext.Provider, { value: theme }, children);
}
//# sourceMappingURL=ThemeContext.js.map