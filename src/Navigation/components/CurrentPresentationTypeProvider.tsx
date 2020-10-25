import React, { createContext, ReactNode, Dispatch, SetStateAction, useRef, useCallback } from 'react';
import { StackPresentationTypes } from 'react-native-screens';

interface CurrentPresentationTypeContextType {
    type: StackPresentationTypes;
    setType: Dispatch<SetStateAction<StackPresentationTypes>>;
}

export const CurrentPresentationTypeContext = createContext<CurrentPresentationTypeContextType>({
    type: 'push',
    setType: () => {
        return;
    }
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode>;
}

export function CurrentPresentationTypeProvider(props: Props): JSX.Element {
    const typeRef = useRef<StackPresentationTypes>('push');

    const setType = useCallback(
        (style: StackPresentationTypes) => {
            typeRef.current = style;
        },
        [typeRef]
    );

    return (
        <CurrentPresentationTypeContext.Provider value={{ type: typeRef.current, setType }}>
            {props.children}
        </CurrentPresentationTypeContext.Provider>
    );
}
