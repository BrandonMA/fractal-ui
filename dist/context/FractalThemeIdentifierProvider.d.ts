import React, { ReactNode, Dispatch, SetStateAction } from 'react';
export declare type ThemeIdentifierType = 'light' | 'dark';
export declare type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];
export declare const FractalThemeIdentifierContext: React.Context<ThemeIdentifierContextType>;
interface FractalThemeIdentifierProviderProps {
    children: ReactNode;
    handleThemeManually: boolean;
}
export declare function FractalThemeIdentifierProvider({ children, handleThemeManually }: FractalThemeIdentifierProviderProps): JSX.Element;
export {};
