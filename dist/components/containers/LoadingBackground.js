import React from 'react';
import { Background } from './Background';
import { ActivityIndicator } from '../ActivityIndicator';
import { useTheme } from '../../context/hooks/useTheme';
export function LoadingBackground(props) {
    const { colors } = useTheme();
    return (React.createElement(Background, Object.assign({}, props),
        React.createElement(ActivityIndicator, { color: colors.mainInteractiveColor })));
}
//# sourceMappingURL=LoadingBackground.js.map