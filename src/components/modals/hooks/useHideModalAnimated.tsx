import { useContext } from 'react';
import { DimmedModalContext } from '../context/DimmedModalContextProvider';

export function useHideModalAnimated(): () => void {
    return useContext(DimmedModalContext);
}
