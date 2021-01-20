import React, { createContext } from 'react';

export type HideDimmedModalContextType = () => void;

export const HideDimmedModalContext = createContext<HideDimmedModalContextType>(() => {
    return;
});

export interface HideDimmedModalProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}

export function HideDimmedModalProvider({ children, hideAnimated }: HideDimmedModalProviderProps): JSX.Element {
    return <HideDimmedModalContext.Provider value={hideAnimated}>{children}</HideDimmedModalContext.Provider>;
}
