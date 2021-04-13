import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import { useCallbackRef } from './useCallbackRef';

const runIfFn = (value: any, ...args: any[]) => (typeof value === 'function' ? value(...args) : value);

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

export function useControllableState<T>(props: UseControllableStateProps<T>): [T, Dispatch<SetStateAction<T>>] {
    const { value: valueProp, defaultValue, onChange } = props;
    const onChangeProp = useCallbackRef(onChange);

    const [valueState, setValue] = useState(defaultValue as T);

    const isControlled = valueProp !== undefined;
    const value = isControlled ? (valueProp as T) : valueState;

    const updateValue = useCallback(
        (next: SetStateAction<T>) => {
            const nextValue = runIfFn(next, value);

            if (!isControlled) {
                setValue(nextValue);
            }

            onChangeProp(nextValue);
        },
        [isControlled, onChangeProp, value]
    );

    return [value, updateValue];
}
