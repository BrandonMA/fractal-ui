import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
const StyledLayer = styled(Layer) `
    box-sizing: border-box;
`;
export function RadioControl({ active, children }) {
    const { colors, sizes } = useTheme();
    return (React.createElement(StyledLayer, { width: sizes.radioButtonSize, height: sizes.radioButtonSize, display: 'flex', flexShrink: 0, borderRadius: sizes.radioButtonSize / 2, borderWidth: 2, overflow: 'hidden', borderStyle: 'solid', alignItems: 'center', justifyContent: 'center', borderColor: active ? colors.mainInteractiveColor : colors.placeholder }, children));
}
//# sourceMappingURL=index.js.map