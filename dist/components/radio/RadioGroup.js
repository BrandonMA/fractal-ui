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
import { Layer } from '../containers/Layer';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';
import { RadioGroupItem } from './RadioGroupItem';
export const RadioGroup = forwardRef((_a, ref) => {
    var { value, defaultValue, radioButtons, onValueChange } = _a, others = __rest(_a, ["value", "defaultValue", "radioButtons", "onValueChange"]);
    const [activeValue, setActiveValue] = useControllableState({ value, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : '', onChange: onValueChange });
    const { flexDirection } = others;
    const handleChange = useCallback((value) => {
        setActiveValue(value);
    }, [setActiveValue]);
    // Memoizing the callback is hard because it depends on the active value, to it will be re generated every time they change it.
    // It makes more sense to create a new component that depends only on primitives, and memoize that, that way when the value changes only 2 components will update.
    const renderRadioButton = (item, index) => {
        return (React.createElement(RadioGroupItem, { key: item.value, item: item, isLastItem: index === radioButtons.length - 1, flexDirection: flexDirection, active: item.value == activeValue, handleChange: handleChange }));
    };
    return (React.createElement(Layer, Object.assign({ ref: ref }, others, getRadioGroupAccessibilityProps()), radioButtons.map(renderRadioButton)));
});
//# sourceMappingURL=RadioGroup.js.map