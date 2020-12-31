import { useContext } from 'react';
import { FractalThemeIdentifierContext, ThemeIdentifierContextType } from '../FractalThemeIdentifierProvider';

export function useThemeIdentifier(): ThemeIdentifierContextType {
    return useContext(FractalThemeIdentifierContext);
}
