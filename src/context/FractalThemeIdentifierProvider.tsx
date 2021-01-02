import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useLayoutEffect } from 'react';
import { useColorScheme } from 'react-native';

const placeholderFunction = () => {
    return;
};

export type ThemeIdentifierType = 'light' | 'dark';

export type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];

const defaultValue: ThemeIdentifierContextType = ['light', placeholderFunction];

export const FractalThemeIdentifierContext = createContext<ThemeIdentifierContextType>(defaultValue);

interface FractalThemeIdentifierProviderProps {
    children: ReactNode;
    handleThemeManually: boolean;
}

export function FractalThemeIdentifierProvider({ children, handleThemeManually }: FractalThemeIdentifierProviderProps): JSX.Element {
    const handleState = useState<ThemeIdentifierType>('light');
    const setThemeIdentifier = handleState[1];
    const systemColorScheme = useColorScheme();

    useLayoutEffect(() => {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme === 'light' || systemColorScheme == null ? 'light' : 'dark');
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);

    return <FractalThemeIdentifierContext.Provider value={handleState}>{children}</FractalThemeIdentifierContext.Provider>;
}
