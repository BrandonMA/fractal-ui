import React, { Fragment, memo } from 'react';
import { Spacer } from '../../../Layout/components/Spacer';
import { BaseCell, BaseCellProps } from '../Containers/BaseCell';
import { BaseColorText } from '../Text/BaseColorText';
import { BaseCompactRow } from './BaseCompactRow';

interface BaseDetailsCellProps extends Omit<BaseCellProps, 'children'> {
    title: string;
    details: Array<[string, string]>;
}

export const BaseDetailsCell = memo(
    (props: BaseDetailsCellProps): JSX.Element => {
        const { isLastItem, title, details } = props;

        return (
            <BaseCell isLastItem={isLastItem}>
                <BaseColorText bold textSize='xl' colorStyle='mainInteractiveColor'>
                    {title}
                </BaseColorText>
                {details.map((item) => {
                    return (
                        <Fragment key={item[0]}>
                            <Spacer height={16} />
                            <BaseCompactRow title={item[0]} details={item[1]} />
                        </Fragment>
                    );
                })}
            </BaseCell>
        );
    }
);
