import { useState, useCallback, useMemo, useEffect } from 'react';
import { getInitialPickerIndex } from '../util/getInitialPickerIndex';
export function usePickerState(initialValue, items, onChange, isReadOnly) {
    const initialIndex = getInitialPickerIndex(initialValue, items);
    const [currentValue, setCurrentValue] = useState(initialValue !== null && initialValue !== void 0 ? initialValue : items[0][0]);
    const [index, setIndex] = useState(initialIndex);
    useEffect(() => {
        if (isReadOnly && initialValue != null && initialValue != currentValue) {
            setCurrentValue(initialValue);
        }
    }, [currentValue, initialValue, isReadOnly]);
    const handleValueChange = useCallback((itemValue, index) => {
        setCurrentValue(itemValue.toString());
        setIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
    }, [setCurrentValue, setIndex, onChange, items]);
    return useMemo(() => [currentValue, handleValueChange, index], [currentValue, index, handleValueChange]);
}
//# sourceMappingURL=usePickerState.js.map