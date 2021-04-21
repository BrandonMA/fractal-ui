import { useContext } from 'react';
import { ThemeIdentifierContext } from '../ThemeIdentifierContext';
export function useSetThemeIdentifier() {
    var _a = useContext(ThemeIdentifierContext), setIdentifier = _a[1];
    return setIdentifier;
}
//# sourceMappingURL=useSetThemeIdentifier.js.map