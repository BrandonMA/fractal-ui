import { useState, useCallback } from 'react';
import { useCallbackRef } from './useCallbackRef';
var runIfFn = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return (typeof value === 'function' ? value.apply(void 0, args) : value);
};
export function useControllableState(props) {
    var valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange;
    var onChangeProp = useCallbackRef(onChange);
    var _a = useState(defaultValue), valueState = _a[0], setValue = _a[1];
    var isControlled = valueProp !== undefined;
    var value = isControlled ? valueProp : valueState;
    var updateValue = useCallback(function (next) {
        var nextValue = runIfFn(next, value);
        if (!isControlled) {
            setValue(nextValue);
        }
        onChangeProp(nextValue);
    }, [isControlled, onChangeProp, value]);
    return [value, updateValue];
}
//# sourceMappingURL=useControllableState.js.map