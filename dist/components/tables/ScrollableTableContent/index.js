import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
const ScrollableHorizontalLayer = styled(Layer) `
    overflow-x: auto;
`;
export function ScrollableTableContent({ children }) {
    return React.createElement(ScrollableHorizontalLayer, null, children);
}
//# sourceMappingURL=index.js.map