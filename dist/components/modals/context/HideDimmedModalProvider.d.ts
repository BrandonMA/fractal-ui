import React from 'react';
export declare type HideDimmedModalContextType = () => void;
export declare const HideDimmedModalContext: React.Context<HideDimmedModalContextType>;
export interface HideDimmedModalProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}
export declare function HideDimmedModalProvider({ children, hideAnimated }: HideDimmedModalProviderProps): JSX.Element;
