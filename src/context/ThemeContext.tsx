import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { FractalTheme } from '../themes/FractalTheme';
import { lightFractalTheme } from '../themes/lightFractalTheme';

export type ThemeContextType = [FractalTheme, Dispatch<SetStateAction<FractalTheme>>];

export const ThemeContext = createContext<ThemeContextType>([
    lightFractalTheme,
    () => {
        return;
    }
]);

export interface ThemeContextProviderProps {
    children: JSX.Element | Array<JSX.Element>;
    theme: FractalTheme;
}

export function ThemeContextProvider({ children, theme }: ThemeContextProviderProps): JSX.Element {
    const themeState = useState(theme);
    return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>;
}
