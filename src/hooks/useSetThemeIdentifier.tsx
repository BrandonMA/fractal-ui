import { Dispatch, SetStateAction, useContext } from 'react';
import { ThemeIdentifierContext, ThemeIdentifierType } from '../context/ThemeIdentifierContext';

export function useSetThemeIdentifier(): Dispatch<SetStateAction<ThemeIdentifierType>> {
    const [, setIdentifier] = useContext(ThemeIdentifierContext);
    return setIdentifier;
}
