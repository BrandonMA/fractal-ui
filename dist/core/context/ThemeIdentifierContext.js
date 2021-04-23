import React, { createContext, useState, useLayoutEffect } from 'react';
import { usePlatformColorScheme } from '../../hooks/usePlatformColorScheme';
const placeholderFunction = () => {
    return;
};
const defaultValue = ['light', placeholderFunction];
export const ThemeIdentifierContext = createContext(defaultValue);
export function ThemeIdentifierProvider({ children, handleThemeManually }) {
    const handleState = useState('light');
    const setThemeIdentifier = handleState[1];
    const systemColorScheme = usePlatformColorScheme();
    useLayoutEffect(() => {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme);
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);
    return React.createElement(ThemeIdentifierContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=ThemeIdentifierContext.js.map