import React from 'react';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
export function RadioControl(_a) {
    var active = _a.active, children = _a.children;
    var _b = useTheme(), colors = _b.colors, sizes = _b.sizes;
    return (React.createElement(Layer, { width: sizes.radioButtonSize, height: sizes.radioButtonSize, display: 'flex', flexShrink: 0, borderRadius: sizes.radioButtonSize / 2, borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderColor: active ? colors.mainInteractiveColor : colors.placeholder }, children));
}
//# sourceMappingURL=index.native.js.map