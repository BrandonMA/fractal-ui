import { useState, useCallback } from 'react';
import { useCallbackRef } from './useCallbackRef';
const runIfFn = (value, ...args) => (typeof value === 'function' ? value(...args) : value);
export function useControllableState(props) {
    const { value: valueProp, defaultValue, onChange } = props;
    const onChangeProp = useCallbackRef(onChange);
    const [valueState, setValue] = useState(defaultValue);
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : valueState;
    const updateValue = useCallback((next) => {
        const nextValue = runIfFn(next, value);
        if (!isControlled) {
            setValue(nextValue);
        }
        onChangeProp(nextValue);
    }, [isControlled, onChangeProp, value]);
    return [value, updateValue];
}
//# sourceMappingURL=useControllableState.js.map