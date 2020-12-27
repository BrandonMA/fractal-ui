import React from 'react';
import { PaddingContainer } from '../../../Layout';
import { BaseContainer } from './BaseContainer';
export function BaseCell(props) {
    var children = props.children, isLastItem = props.isLastItem;
    return (React.createElement(PaddingContainer, { isLastItem: isLastItem },
        React.createElement(BaseContainer, null, children)));
}
//# sourceMappingURL=BaseCell.js.map