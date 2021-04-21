import { useEffect } from 'react';
import { useTheme } from '../core/context/hooks/useTheme';
export function WebBackground() {
    var colors = useTheme().colors;
    useEffect(function () {
        document.body.style.backgroundColor = colors.background;
    }, [colors.background]);
    return null;
}
//# sourceMappingURL=WebBackground.js.map