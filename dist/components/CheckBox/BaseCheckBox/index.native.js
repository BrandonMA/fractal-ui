import React, { useCallback } from 'react';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Check } from '../Check';
export function BaseCheckBox({ value, onValueChange, label }) {
    const handleValueChange = useCallback(() => {
        onValueChange(!value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (React.createElement(TouchableOpacity, { onPress: handleValueChange },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(Check, { value: value, label: label }))));
}
//# sourceMappingURL=index.native.js.map