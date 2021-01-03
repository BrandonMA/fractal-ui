import React, { createContext, useState, useLayoutEffect } from 'react';
import { useColorScheme } from 'react-native';
var placeholderFunction = function () {
    return;
};
var defaultValue = ['light', placeholderFunction];
export var FractalThemeIdentifierContext = createContext(defaultValue);
export function FractalThemeIdentifierProvider(_a) {
    var children = _a.children, handleThemeManually = _a.handleThemeManually;
    var handleState = useState('light');
    var setThemeIdentifier = handleState[1];
    var systemColorScheme = useColorScheme();
    useLayoutEffect(function () {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme === 'light' || systemColorScheme == null ? 'light' : 'dark');
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);
    return React.createElement(FractalThemeIdentifierContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=FractalThemeIdentifierProvider.js.map