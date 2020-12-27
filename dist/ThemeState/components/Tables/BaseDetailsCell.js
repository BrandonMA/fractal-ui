import React, { Fragment, memo } from 'react';
import { Spacer } from '../../../Layout/components/Spacer';
import { BaseCell } from '../Containers/BaseCell';
import { BaseColorText } from '../Text/BaseColorText';
import { BaseCompactRow } from './BaseCompactRow';
export var BaseDetailsCell = memo(function (props) {
    var isLastItem = props.isLastItem, title = props.title, details = props.details;
    return (React.createElement(BaseCell, { isLastItem: isLastItem },
        React.createElement(BaseColorText, { bold: true, textSize: 'xl', colorStyle: 'mainInteractiveColor' }, title),
        details.map(function (item) {
            return (React.createElement(Fragment, { key: item[0] },
                React.createElement(Spacer, { height: 16 }),
                React.createElement(BaseCompactRow, { title: item[0], details: item[1] })));
        })));
});
//# sourceMappingURL=BaseDetailsCell.js.map