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
import React, { useEffect, useCallback, forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { ColorToggle } from './ColorToggle';
import { getColorAccessibilityProps } from './accessibility/getColorAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';
export const ColorPicker = forwardRef((_a, ref) => {
    var { colors, onColorChange, defaultValue, value } = _a, others = __rest(_a, ["colors", "onColorChange", "defaultValue", "value"]);
    const finalDefaultValue = defaultValue ? defaultValue : colors[0];
    const [activeColor, setActiveColor] = useControllableState({ value, defaultValue: finalDefaultValue, onChange: onColorChange });
    const { spacings } = useTheme();
    useEffect(() => {
        //console.log({ activeColor });
    }, [activeColor]);
    const handleColorChange = useCallback((_active, color) => {
        setActiveColor(color);
    }, [setActiveColor]);
    const renderItem = (color) => {
        return (React.createElement(ColorToggle, Object.assign({ backgroundColor: color, key: color, onActiveChange: handleColorChange, active: activeColor === color, margin: spacings.xs }, getColorAccessibilityProps(activeColor === color, activeColor))));
    };
    return (React.createElement(HorizontalLayer, Object.assign({ ref: ref, justifyContent: 'space-around', flexWrap: 'wrap' }, others), colors.map(renderItem)));
});
//# sourceMappingURL=ColorPicker.js.map