import React, { createContext, ReactNode, Dispatch, SetStateAction, useRef, useCallback, useMemo } from 'react';
import { StackPresentationTypes } from 'react-native-screens';

interface CurrentPresentationTypeContextType {
    presentationType: StackPresentationTypes;
    setPresentationType: Dispatch<SetStateAction<StackPresentationTypes>>;
}

export const CurrentPresentationTypeContext = createContext<CurrentPresentationTypeContextType>({
    presentationType: 'push',
    setPresentationType: () => {
        return;
    }
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode>;
}

export function PresentationTypeProvider(props: Props): JSX.Element {
    const presentationTypeRef = useRef<StackPresentationTypes>('push');

    const setPresentationType = useCallback(
        (style: StackPresentationTypes) => {
            presentationTypeRef.current = style;
        },
        [presentationTypeRef]
    );

    const value = useMemo(() => {
        return { presentationType: presentationTypeRef.current, setPresentationType };
    }, [presentationTypeRef, setPresentationType]);

    return <CurrentPresentationTypeContext.Provider value={value}>{props.children}</CurrentPresentationTypeContext.Provider>;
}
