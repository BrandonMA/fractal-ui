import React from 'react';
import { useTheme } from '../../../context';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { Check } from '../../CheckBox/Check';
import { Box } from '../../containers/Box';
import { Text } from '../../text/Text';
export function SuggestionsList({ filteredData, getLabel, onItemPress, selectedIds, multiple }) {
    const { spacings } = useTheme();
    const activeBackground = 'rgba(128, 128, 128, 0.2)';
    if (filteredData.length == 0) {
        return null;
    }
    return (React.createElement(Box, { padding: 0, paddingTop: spacings.xs, paddingBottom: spacings.xs, maxHeight: 240, overflow: 'scroll' }, filteredData.map((item) => {
        const label = getLabel(item);
        const isSelected = selectedIds.indexOf(item.id) > -1;
        const handleItemPress = () => {
            onItemPress(item, isSelected);
        };
        return (React.createElement(TouchableOpacity, { key: `${item.id}`, paddingTop: spacings.xs, paddingBottom: spacings.xs, paddingRight: spacings.m, flexDirection: 'row', backgroundColor: isSelected && !multiple ? activeBackground : undefined, paddingLeft: spacings.m, whileHover: { backgroundColor: activeBackground }, onPress: handleItemPress }, multiple ? (React.createElement(Check, { value: isSelected, label: label })) : (React.createElement(Text, { variant: 'normal', width: '100%', style: { textAlign: 'left' } }, label))));
    })));
}
//# sourceMappingURL=SuggestionsList.js.map