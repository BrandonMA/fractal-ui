import { useState, useCallback, useMemo } from 'react';
import { getInitialPickerIndex } from '../util/getInitialPickerIndex';

export function usePickerState(
    initialValue: string | undefined,
    items: Array<[string, string]>,
    onChange?: (pair: [string, string]) => void
): [string, (value: string, index: number) => void, number] {
    const initialIndex = getInitialPickerIndex(initialValue, items);
    const [currentValue, setCurrentValue] = useState(initialValue ?? items[0][0]);
    const [index, setIndex] = useState(initialIndex);

    const handleValueChange = useCallback(
        (itemValue, index) => {
            setCurrentValue(itemValue.toString());
            setIndex(index);

            if (onChange != null) {
                onChange(items[index]);
            }
        },
        [setCurrentValue, setIndex, onChange, items]
    );

    return useMemo(() => [currentValue, handleValueChange, index], [currentValue, index, handleValueChange]);
}
