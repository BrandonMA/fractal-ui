import React from 'react';
import { CheckIcon } from '../../assets/CheckIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from '../containers/Layer';
var checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};
export function Check(_a) {
    var value = _a.value;
    var colors = useTheme().colors;
    return (React.createElement(Layer, { backgroundColor: colors.mainInteractiveColor, initial: 'hidden', animate: value ? 'visible' : 'hidden', variants: checkVariants, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
        React.createElement(CheckIcon, { width: 16, height: 16, fill: colors.white })));
}
//# sourceMappingURL=Check.js.map