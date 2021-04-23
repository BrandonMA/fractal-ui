import { useTheme } from '../../core';
import { Box } from '../containers';
import React from 'react';
import { useValueForLargeSizeType } from '@bma98/size-class';
function ModalCellDesktop(props) {
    const { borderRadius, colors } = useTheme();
    return (React.createElement(Box, Object.assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, maxWidth: 550, maxHeight: 550, width: '60%', height: '60%', initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
function ModalCellPhone(props) {
    const { borderRadius, spacings, colors } = useTheme();
    return (React.createElement(Box, Object.assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, alignSelf: 'stretch', flex: 1, margin: spacings.m, initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
export function ModalMiddleCell(props) {
    const Wrapper = useValueForLargeSizeType('width', ModalCellDesktop, ModalCellPhone);
    return React.createElement(Wrapper, Object.assign({}, props));
}
//# sourceMappingURL=ModalMiddleCell.js.map