import React, { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

export type ThemeIdentifierType = 'light' | 'dark';

export type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];

const defaultValue: ThemeIdentifierContextType = [
    'light',
    () => {
        return;
    }
];

export const FractalThemeIdentifierContext = createContext<ThemeIdentifierContextType>(defaultValue);

interface FractalThemeIdentifierProviderProps {
    children: ReactNode;
}

export function FractalThemeIdentifierProvider(props: FractalThemeIdentifierProviderProps): JSX.Element {
    const { children } = props;
    const handleState = useState<ThemeIdentifierType>('light');

    return <FractalThemeIdentifierContext.Provider value={handleState}>{children}</FractalThemeIdentifierContext.Provider>;
}
