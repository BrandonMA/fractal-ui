import { useState, useCallback, useMemo } from 'react';
export function usePickerState(initialValue, items, onChange) {
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : items[0][0]), currentValue = _a[0], setCurrentValue = _a[1];
    var _b = useState(0), index = _b[0], setIndex = _b[1];
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