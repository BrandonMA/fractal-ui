import React, { Fragment, memo } from 'react';
import { RequiredKeys } from 'utility-types';
import { Spacer } from '../../../Layout/components/Spacer';
import { InteractiveColors } from '../../types/FractalTheme';
import { BaseSeparator } from '../BaseSeparator';
import { BaseCell, BaseCellProps } from '../Containers';
import { BaseRow } from './BaseRow';

export interface BaseSummaryCellProps extends Omit<BaseCellProps, 'children'> {
    items: Array<[string, string, RequiredKeys<InteractiveColors>]>;
}

export const BaseSummaryCell = memo(
    (props: BaseSummaryCellProps): JSX.Element => {
        const { items, isLastItem } = props;
        return (
            <BaseCell isLastItem={isLastItem}>
                {items.map((item, index) => {
                    return (
                        <Fragment key={item[0]}>
                            <BaseRow colorStyle={item[2]} title={item[0]} details={item[1]} />
                            {index === items.length - 1 ? null : (
                                <>
                                    <Spacer height={16} />
                                    <BaseSeparator />
                                    <Spacer height={16} />
                                </>
                            )}
                        </Fragment>
                    );
                })}
            </BaseCell>
        );
    }
);
