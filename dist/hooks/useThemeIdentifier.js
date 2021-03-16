import { useContext } from 'react';
import { ThemeIdentifierContext } from '../context/ThemeIdentifierContext';
export function useThemeIdentifier() {
    var identifier = useContext(ThemeIdentifierContext)[0];
    return identifier;
}
//# sourceMappingURL=useThemeIdentifier.js.map