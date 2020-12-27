import { useState, useCallback, useMemo } from 'react';

export function useBasePickerState(
    items: Array<[string, string]>,
    onChange?: (pair: [string, string]) => void
): [string, (value: string, index: number) => void, number] {
    const [currentValue, setCurrentValue] = useState(items[0][0]);
    const [index, setIndex] = useState(0);

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
