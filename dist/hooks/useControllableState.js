import { useCallback, useState } from 'react';
export function useControllableState(props) {
    const { value: valueProp, defaultValue, onChange } = props;
    const [valueState, setValue] = useState(defaultValue);
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : valueState;
    const updateValue = useCallback((nextValue) => {
        if (!isControlled) {
            setValue(nextValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
    }, [isControlled, onChange]);
    return [value, updateValue];
}
//# sourceMappingURL=useControllableState.js.map