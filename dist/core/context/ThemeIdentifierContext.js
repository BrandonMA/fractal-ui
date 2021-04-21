import React, { createContext, useState, useLayoutEffect } from 'react';
import { usePlatformColorScheme } from '../../hooks/usePlatformColorScheme';
var placeholderFunction = function () {
    return;
};
var defaultValue = ['light', placeholderFunction];
export var ThemeIdentifierContext = createContext(defaultValue);
export function ThemeIdentifierProvider(_a) {
    var children = _a.children, handleThemeManually = _a.handleThemeManually;
    var handleState = useState('light');
    var setThemeIdentifier = handleState[1];
    var systemColorScheme = usePlatformColorScheme();
    useLayoutEffect(function () {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme);
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);
    return React.createElement(ThemeIdentifierContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=ThemeIdentifierContext.js.map