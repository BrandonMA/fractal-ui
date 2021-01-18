import { Button } from '../../../buttons';
import React, { useCallback } from 'react';
import { BaseBox, BasePicker } from '../../../baseComponents';
import { useTheme } from '@shopify/restyle';
import { Picker as NativePicker } from '@react-native-picker/picker';
import { usePickerState } from '../hooks/usePickerState';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
export function PickerModalContent(_a) {
    var items = _a.items, onFinalIndexChange = _a.onFinalIndexChange, onChange = _a.onChange, initialValue = _a.initialValue, _b = _a.iosDoneText, iosDoneText = _b === void 0 ? 'OK' : _b;
    var _c = usePickerState(initialValue, items), currentValue = _c[0], handleValueChange = _c[1], index = _c[2];
    var colors = useTheme().colors;
    var hideMoldalAnimated = useHideModalAnimated();
    var pickFinalValue = function () {
        onFinalIndexChange(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        hideMoldalAnimated();
    };
    var renderItem = useCallback(function (item) {
        var value = item[0];
        var label = item[1];
        return React.createElement(NativePicker.Item, { color: colors.textColor, label: label, value: value, key: value });
    }, [colors.textColor]);
    return (React.createElement(BaseBox, null,
        React.createElement(BasePicker, { selectedValue: currentValue, onValueChange: handleValueChange }, items.map(renderItem)),
        React.createElement(Button, { variant: 'mainInteractiveColor', onPress: pickFinalValue, text: iosDoneText })));
}
//# sourceMappingURL=PickerModalContent.js.map