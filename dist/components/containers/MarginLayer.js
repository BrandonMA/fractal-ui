import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from './Layer';
export const MarginLayer = forwardRef((props, ref) => {
    const { spacings } = useTheme();
    return React.createElement(Layer, Object.assign({ ref: ref, margin: spacings.m }, props));
});
//# sourceMappingURL=MarginLayer.js.map