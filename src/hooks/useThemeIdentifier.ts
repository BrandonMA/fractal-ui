import { useContext } from 'react';
import { ThemeIdentifierContext, ThemeIdentifierType } from '../context/ThemeIdentifierContext';

export function useThemeIdentifier(): ThemeIdentifierType {
    const [identifier] = useContext(ThemeIdentifierContext);
    return identifier;
}
