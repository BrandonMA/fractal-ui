import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Layer } from './containers';
import { Text } from './text';
export function Badge(_a) {
    var children = _a.children, variant = _a.variant;
    var _b = useTheme(), colors = _b.colors, spacings = _b.spacings;
    var colorName100 = variant + "InteractiveColor100";
    var colorName800 = variant + "InteractiveColor800";
    var color = colors[colorName800];
    var backgroundColor = colors[colorName100];
    return (React.createElement(Layer, { backgroundColor: backgroundColor, alignSelf: 'flex-start', padding: spacings.xs / 2, borderRadius: spacings.xs / 2 },
        React.createElement(Text, { variant: 'normal', color: color, fontWeight: 'bold' }, children)));
}
//# sourceMappingURL=Badge.js.map