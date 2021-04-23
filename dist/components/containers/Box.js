import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { PaddingLayer } from './PaddingLayer';
export const Box = forwardRef((props, ref) => {
    const { colors, borderRadius, shadows } = useTheme();
    return (React.createElement(PaddingLayer, Object.assign({ ref: ref, backgroundColor: colors.foreground, borderRadius: borderRadius.m, boxShadow: shadows.mainShadow }, props)));
});
//# sourceMappingURL=Box.js.map