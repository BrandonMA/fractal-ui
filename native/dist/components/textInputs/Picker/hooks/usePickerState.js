import { useState, useCallback, useMemo, useEffect } from 'react';
import { getInitialPickerIndex } from '../util/getInitialPickerIndex';
export function usePickerState(initialValue, items, onChange, isReadOnly) {
    var initialIndex = getInitialPickerIndex(initialValue, items);
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : items[0][0]), currentValue = _a[0], setCurrentValue = _a[1];
    var _b = useState(initialIndex), index = _b[0], setIndex = _b[1];
    useEffect(function () {
        if (isReadOnly && initialValue != null && initialValue != currentValue) {
            setCurrentValue(initialValue);
        }
    }, [currentValue, initialValue, isReadOnly]);
    var handleValueChange = useCallback(function (itemValue, index) {
        setCurrentValue(itemValue.toString());
        setIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
    }, [setCurrentValue, setIndex, onChange, items]);
    return useMemo(function () { return [currentValue, handleValueChange, index]; }, [currentValue, index, handleValueChange]);
}
//# sourceMappingURL=usePickerState.js.map