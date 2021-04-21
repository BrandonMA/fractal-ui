import React from 'react';
import { HorizontalLayer } from '../../../containers/HorizontalLayer';
import { Text } from '../../../text';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { TouchableOpacity } from '../../../buttons/TouchableOpacity';
import { Radio } from '../Radio';
export function BaseRadioButton(_a) {
    var label = _a.label, onPress = _a.onPress, active = _a.active;
    var spacings = useTheme().spacings;
    return (React.createElement(TouchableOpacity, { onPress: onPress },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(Radio, { active: active }),
            label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label)))));
}
//# sourceMappingURL=index.native.js.map