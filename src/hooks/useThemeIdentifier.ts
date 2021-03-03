import { useContext } from 'react';
import { ThemeIdentifierContext } from '../context/ThemeIdentifierContext';

export function useThemeIdentifier(): 'light' | 'dark' {
    const [identifier] = useContext(ThemeIdentifierContext);
    return identifier;
}
