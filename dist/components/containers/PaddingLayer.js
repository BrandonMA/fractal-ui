import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from './Layer';
export const PaddingLayer = forwardRef((props, ref) => {
    const { spacings } = useTheme();
    return React.createElement(Layer, Object.assign({ ref: ref, padding: spacings.m }, props));
});
//# sourceMappingURL=PaddingLayer.js.map