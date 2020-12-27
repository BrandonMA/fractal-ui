import React, { Fragment, memo } from 'react';
import { Spacer } from '../../../Layout/components/Spacer';
import { BaseSeparator } from '../BaseSeparator';
import { BaseCell } from '../Containers';
import { BaseRow } from './BaseRow';
export var BaseSummaryCell = memo(function (props) {
    var items = props.items, isLastItem = props.isLastItem;
    return (React.createElement(BaseCell, { isLastItem: isLastItem }, items.map(function (item, index) {
        return (React.createElement(Fragment, { key: item[0] },
            React.createElement(BaseRow, { colorStyle: item[2], title: item[0], details: item[1] }),
            index === items.length - 1 ? null : (React.createElement(React.Fragment, null,
                React.createElement(Spacer, { height: 16 }),
                React.createElement(BaseSeparator, null),
                React.createElement(Spacer, { height: 16 })))));
    })));
});
//# sourceMappingURL=BaseSummaryCell.js.map