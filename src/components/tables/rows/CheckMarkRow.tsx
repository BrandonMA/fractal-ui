import React, { forwardRef } from 'react';
import { Layer } from '../../containers/Layer';
import { BaseRow, BaseRowProps } from './BaseRow';
import { useTheme } from '../../../context';
import { CheckBox } from '../../CheckBox';

export interface CheckMarkRowProps extends BaseRowProps {
    title: string;
    isSelected: boolean;
}

const CheckMarkRow = forwardRef(({ title, isSelected, ...others }: CheckMarkRowProps, ref: any): JSX.Element => {
    const { spacings } = useTheme();
    return (
        <BaseRow ref={ref} {...others}>
            <Layer flex={1} marginRight={spacings.s}>
                <CheckBox value={isSelected} label={title} />
            </Layer>
        </BaseRow>
    );
});

CheckMarkRow.displayName = 'CheckMarkRow';

export { CheckMarkRow };
