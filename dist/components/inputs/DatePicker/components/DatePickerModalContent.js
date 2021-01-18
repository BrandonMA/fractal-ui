import { useTheme } from '@shopify/restyle';
import { useHideModalAnimated } from '../../../modals/hooks/useHideModalAnimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from '../../../buttons';
import React from 'react';
export function DatePickerModalContent(_a) {
    var date = _a.date, minDate = _a.minDate, maxDate = _a.maxDate, onPickerValueChange = _a.onPickerValueChange, iosDoneText = _a.iosDoneText, onFinalValueChange = _a.onFinalValueChange, onChange = _a.onChange;
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
        React.createElement(DateTimePicker, { value: date, mode: 'date', display: 'spinner', minimumDate: minDate, maximumDate: maxDate, onChange: onPickerValueChange, textColor: colors.textColor }),
        React.createElement(Button, { variant: 'mainInteractiveColor', text: iosDoneText, onPress: pickFinalValue })));
}
//# sourceMappingURL=DatePickerModalContent.js.map