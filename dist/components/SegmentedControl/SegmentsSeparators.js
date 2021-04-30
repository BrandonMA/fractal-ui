import * as React from 'react';
import { useCallback } from 'react';
import { useTheme } from '../../core';
import { Layer } from '../containers/Layer';
export const SegmentsSeparators = ({ values, selectedIndex }) => {
    const { colors } = useTheme();
    const hide = useCallback((val) => {
        return selectedIndex === val || selectedIndex === val + 1;
    }, [selectedIndex]);
    return (React.createElement(Layer, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }, [...Array.from(new Array(values - 1).keys())].map((val) => {
        return React.createElement(Layer, { key: val, width: 1, height: '50%', backgroundColor: hide(val) ? 'transparent' : colors.placeholder });
    })));
};
//# sourceMappingURL=SegmentsSeparators.js.map