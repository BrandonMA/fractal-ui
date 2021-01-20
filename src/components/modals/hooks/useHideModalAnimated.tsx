import { useContext } from 'react';
import { HideDimmedModalContext } from '../context/HideDimmedModalProvider';

export function useHideModalAnimated(): () => void {
    return useContext(HideDimmedModalContext);
}
