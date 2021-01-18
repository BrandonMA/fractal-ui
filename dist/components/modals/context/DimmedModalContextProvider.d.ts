import React from 'react';
export declare type DimmedModalContextType = () => void;
export declare const DimmedModalContext: React.Context<DimmedModalContextType>;
export interface DimmedModalContextProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}
export declare function DimmedModalContextProvider({ children, hideAnimated }: DimmedModalContextProviderProps): JSX.Element;
