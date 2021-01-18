import { useTheme } from '@shopify/restyle';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../../../buttons';
import React from 'react';
export function TimePickerModalContent(_a) {
    var date = _a.date, onPickerValueChange = _a.onPickerValueChange, iosDoneText = _a.iosDoneText, onFinalValueChange = _a.onFinalValueChange, onChange = _a.onChange;
    var colors = useTheme().colors;
    var hideModalAnimated = useHideModalAnimated();
    var pickFinalValue = function () {
        onFinalValueChange(date);
        if (onChange != null) {
            onChange(date);
        }
        hideModalAnimated();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(DateTimePicker, { value: date, mode: 'time', is24Hour: true, display: 'spinner', onChange: onPickerValueChange, textColor: colors.textColor }),
        React.createElement(Button, { variant: 'mainInteractiveColor', text: iosDoneText, onPress: pickFinalValue })));
}
//# sourceMappingURL=TimePickerModalContent.js.map