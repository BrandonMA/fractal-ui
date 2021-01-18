import React, { createContext } from 'react';

export type DimmedModalContextType = () => void;

export const DimmedModalContext = createContext<DimmedModalContextType>(() => {
    return;
});

export interface DimmedModalContextProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}

export function DimmedModalContextProvider({ children, hideAnimated }: DimmedModalContextProviderProps): JSX.Element {
    return <DimmedModalContext.Provider value={hideAnimated}>{children}</DimmedModalContext.Provider>;
}
