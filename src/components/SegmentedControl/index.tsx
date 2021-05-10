import React, { forwardRef, useCallback } from 'react';
import { SegmentedControlProps } from './types';
import { useControllableState } from '../../hooks/useControllableState';
import { BaseSegmentedControl } from './BaseSegmentedControl';

const SegmentedControl = forwardRef(
    (
        { onChange, onValueChange, selectedIndex: selectedIndexProp, defaultSelectedIndex, values, ...others }: SegmentedControlProps,
        ref: any
    ): JSX.Element => {
        const onIndexChange = useCallback(
            (index: number) => {
                onChange?.(values[index], index);
                onValueChange?.(values[index]);
            },
            [onChange, onValueChange, values]
        );
        const [selectedIndex, setSelectedIndex] = useControllableState(selectedIndexProp, defaultSelectedIndex ?? 0, onIndexChange);

        const handleIndexChange = useCallback(
            (index: number) => {
                setSelectedIndex(index);
            },
            [setSelectedIndex]
        );

        return <BaseSegmentedControl ref={ref} values={values} selectedIndex={selectedIndex} onTabPress={handleIndexChange} {...others} />;
    }
);

SegmentedControl.displayName = 'SegmentedControl';

export { SegmentedControl };
