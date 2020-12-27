var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useCallback } from 'react';
import { useState } from 'react';
import { Modal, Pressable } from 'react-native';
import { useThemeColor } from '../../../hooks/useThemeColor';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { BaseCell } from '../../Containers';
import { BaseButton } from '../../Interactive';
import { useBasePickerState } from './hooks/useBasePickerState';
var StyledContainer = styled(Pressable)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding: 12px;\n    justify-content: center;\n"], ["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding: 12px;\n    justify-content: center;\n"])), function (props) { return props.backgroundColor; });
var StyledText = styled.Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 14px;\n    color: ", ";\n"], ["\n    font-size: 14px;\n    color: ", ";\n"])), function (props) { return props.textColor; });
var StyledIconContainer = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    top: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    padding-right: 12px;\n"], ["\n    top: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    padding-right: 12px;\n"])));
var ModalContainer = styled.SafeAreaView(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex: 1;\n    justify-content: flex-end;\n"], ["\n    flex: 1;\n    justify-content: flex-end;\n"])));
var BackgroundModal = styled(Pressable)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n"], ["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n"])));
var CircularCloseButton = styled.TouchableOpacity(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    align-self: flex-end;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n"], ["\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    align-self: flex-end;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n"])), function (props) { return props.backgroundColor; });
export function BasePicker(props) {
    var items = props.items, onChange = props.onChange, iosDoneText = props.iosDoneText;
    var _a = useBasePickerState(items), currentValue = _a[0], handleValueChange = _a[1], index = _a[2];
    var _b = useState(0), finalIndex = _b[0], setFinalIndex = _b[1];
    var fieldColor = useThemeColor('fieldColor');
    var _c = useState(false), modalActive = _c[0], setModalActive = _c[1];
    var toggleModal = useCallback(function () { return setModalActive(function (current) { return !current; }); }, [setModalActive]);
    var pickFinalValue = useCallback(function () {
        setFinalIndex(index);
        if (onChange != null) {
            onChange(items[index]);
        }
        toggleModal();
    }, [setFinalIndex, index, toggleModal, onChange, items]);
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledContainer, { backgroundColor: fieldColor.base400, onPress: toggleModal },
            React.createElement(StyledText, { textColor: fieldColor.base900 }, items[finalIndex][1]),
            React.createElement(StyledIconContainer, null,
                React.createElement(Entypo, { name: 'chevron-down', size: 21, color: fieldColor.base300 }))),
        React.createElement(Modal, { visible: modalActive, animationType: 'fade', transparent: true },
            React.createElement(ModalContainer, null,
                React.createElement(BackgroundModal, { onPress: toggleModal }),
                React.createElement(BaseCell, null,
                    React.createElement(CircularCloseButton, { backgroundColor: fieldColor.base400, onPress: toggleModal },
                        React.createElement(Entypo, { name: 'cross', size: 21, color: fieldColor.base300 })),
                    React.createElement(Picker, { itemStyle: { height: 160 }, selectedValue: currentValue, onValueChange: handleValueChange }, items.map(function (item) { return (React.createElement(Picker.Item, { color: fieldColor.base900, label: item[1], value: item[0], key: item[0] })); })),
                    React.createElement(BaseButton, { colorStyle: 'mainInteractiveColor', text: iosDoneText, onPress: pickFinalValue, removeShadow: true }))))));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.ios.js.map