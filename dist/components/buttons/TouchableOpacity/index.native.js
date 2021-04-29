var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
const StyledTouchableOpacity = styled(Reanimated.createAnimatedComponent(RNTouchableOpacity)) `
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;
export const TouchableOpacity = forwardRef((_a, ref) => {
    var { style } = _a, others = __rest(_a, ["style"]);
    const animationStyles = useAnimationStyles(others);
    return React.createElement(StyledTouchableOpacity, Object.assign({ ref: ref, style: [animationStyles, style] }, others));
});
//# sourceMappingURL=index.native.js.map