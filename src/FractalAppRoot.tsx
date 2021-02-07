import React from 'react';
import { ThemeContextProvider } from './context/ThemeContext';
import { startFractalApp } from './startFractalApp';
import { FractalTheme } from './themes/FractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';

startFractalApp();
export interface FractalAppRootProps {
    theme?: FractalTheme;
    children: JSX.Element | Array<JSX.Element>;
}

export function FractalAppRoot({ theme = lightFractalTheme, children }: FractalAppRootProps): JSX.Element {
    return <ThemeContextProvider theme={theme}>{children}</ThemeContextProvider>;
}
