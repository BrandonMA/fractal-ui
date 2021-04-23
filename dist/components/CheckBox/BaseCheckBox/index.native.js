import React from 'react';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { HorizontalLayer } from '../../containers/HorizontalLayer';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { Check } from '../Check';
export function BaseCheckBox({ value, onValueChange, label }) {
    const { colors, spacings, borderRadius, sizes } = useTheme();
    const handleValueChange = () => {
        onValueChange(!value);
    };
    return (React.createElement(TouchableOpacity, { onPress: handleValueChange },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(Layer, { width: sizes.checkBoxSize, height: sizes.checkBoxSize, borderWidth: 2, borderRadius: borderRadius.xs, borderColor: value ? colors.mainInteractiveColor : colors.placeholder, overflow: 'hidden', borderStyle: 'solid' },
                React.createElement(Check, { value: value })),
            label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label)))));
}
//# sourceMappingURL=index.native.js.map