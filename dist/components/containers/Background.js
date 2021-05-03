import React from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { Layer } from './Layer';
export function Background(props) {
    const { colors } = useTheme();
    return React.createElement(Layer, Object.assign({ backgroundColor: colors.background, flex: 1 }, props));
}
//# sourceMappingURL=Background.js.map