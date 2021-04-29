import { useCallback, useState } from 'react';

export interface UseControllableStateProps<T> {
    /**
     * The value to used in controlled mode
     */
    value?: T;
    /**
     * The initial value to be used, in uncontrolled mode
     */
    defaultValue?: T | (() => T);
    /**
     * The callback fired when the value changes
     */
    onChange?: (value: T) => void;
}

export function useControllableState<T>(props: UseControllableStateProps<T>): [T, (valu: T) => void] {
    const { value: valueProp, defaultValue, onChange } = props;

    const [valueState, setValue] = useState(defaultValue as T);

    const isControlled = valueProp !== undefined;
    const value = isControlled ? (valueProp as T) : valueState;

    const updateValue = useCallback(
        (nextValue: T) => {
            if (!isControlled) {
                setValue(nextValue);
            }
            onChange?.(nextValue);
        },
        [isControlled, onChange]
    );

    return [value, updateValue];
}
