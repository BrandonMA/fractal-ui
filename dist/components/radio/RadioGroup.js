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
import React, { forwardRef, useCallback } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';
import { RadioButton } from './RadioButton';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';
export const RadioGroup = forwardRef((_a, ref) => {
    var { value, defaultValue, radioButtons, onValueChange } = _a, others = __rest(_a, ["value", "defaultValue", "radioButtons", "onValueChange"]);
    const { spacings } = useTheme();
    const [activeValue, setActiveValue] = useControllableState({ value, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', onChange: onValueChange });
    const handleChange = useCallback((value) => {
        setActiveValue(value);
    }, [setActiveValue]);
    const renderRadioButton = useCallback((item, index) => {
        const isLastItem = index === radioButtons.length - 1;
        const { flexDirection } = others;
        return (React.createElement(RadioButton, { marginBottom: flexDirection != 'row' && isLastItem ? 0 : spacings.s, marginRight: flexDirection == 'row' && isLastItem ? 0 : spacings.s, key: item.value, active: item.value == activeValue, label: item.label, value: item.value, onPress: () => handleChange(item.value) }));
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeValue, handleChange]);
    return (React.createElement(Layer, Object.assign({ ref: ref }, others, getRadioGroupAccessibilityProps()), radioButtons.map(renderRadioButton)));
});
//# sourceMappingURL=RadioGroup.js.map