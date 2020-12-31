import React, { ReactNode, Dispatch, SetStateAction } from 'react';
export declare type ThemeIdentifierType = 'light' | 'dark';
export declare type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];
export declare const FractalThemeIdentifierContext: React.Context<ThemeIdentifierContextType>;
interface FractalThemeIdentifierProviderProps {
    children: ReactNode;
}
export declare function FractalThemeIdentifierProvider(props: FractalThemeIdentifierProviderProps): JSX.Element;
export {};
