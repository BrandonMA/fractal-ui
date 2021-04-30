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
import React, { forwardRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { getButtonAccessibilityProps } from '../accessibility/getButtonAccessibilityProps';
const StyledPressable = styled(motion.button) `
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;
const transition = { type: 'spring' };
export const Pressable = forwardRef((_a, ref) => {
    var { onPress, type } = _a, others = __rest(_a, ["onPress", "type"]);
    const [pressed, setPressed] = useState(false);
    const handleButtonPress = useCallback(() => {
        setPressed(true);
        onPress === null || onPress === void 0 ? void 0 : onPress();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement(StyledPressable, Object.assign({ ref: ref, transition: transition, onClick: handleButtonPress }, getButtonAccessibilityProps(pressed, type), others)));
});
//# sourceMappingURL=index.js.map