import { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
// This is not performant at all when it comes to sizes that change constantly
// On a real app tho, it is not that common to change dimensions many times per second
// So you can use this hook freely
// Just be aware of not using it if resizing is too frequent.
export function useSizeValue(dimensionType) {
    var _a = useState(Dimensions.get('window')[dimensionType]), dimension = _a[0], setDimension = _a[1];
    var onChange = useCallback(function (dimensions) {
        setDimension(dimensions.window[dimensionType]);
    }, []);
    useEffect(function () {
        Dimensions.addEventListener('change', onChange);
        return function () {
            Dimensions.removeEventListener('change', onChange);
        };
    }, [onChange]);
    return dimension;
}
//# sourceMappingURL=useSizeValue.js.map