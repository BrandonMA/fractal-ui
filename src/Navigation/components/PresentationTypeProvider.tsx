import React, { createContext, ReactNode, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { StackPresentationTypes } from 'react-native-screens';

interface PresentationTypeContextType {
    presentationType: StackPresentationTypes;
    setPresentationType: Dispatch<SetStateAction<StackPresentationTypes>>;
}

export const PresentationTypeContext = createContext<PresentationTypeContextType>({
    presentationType: 'push',
    setPresentationType: () => {
        return;
    }
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode> | ReactNode;
}

export function PresentationTypeProvider(props: Props): JSX.Element {
    const [presentationType, setPresentationType] = useState<StackPresentationTypes>('push');

    const setPresentationTypeIfNeeded = useCallback((style: StackPresentationTypes) => {
        setPresentationType((currentType) => {
            return currentType !== style ? style : currentType;
        });
    }, []);

    return (
        <PresentationTypeContext.Provider value={{ presentationType, setPresentationType: setPresentationTypeIfNeeded }}>
            {props.children}
        </PresentationTypeContext.Provider>
    );
}
