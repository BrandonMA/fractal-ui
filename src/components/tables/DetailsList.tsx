import React, { Fragment, memo } from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { TitleButtonVariant } from '../buttons/types/TitleButtonVariant';
import { Cell } from '../containers/Cell';
import { Separator } from '../Separator';
import { Text } from '../Text';
import { DetailsRow } from './DetailsRow';

interface DetailsListProps extends Omit<BaseBoxProps, 'children'> {
    title: string;
    details: Array<[string, string]>;
    titleVariant: TitleButtonVariant | 'subtitle';
}

export const DetailsList = memo(
    (props: DetailsListProps): JSX.Element => {
        const { title, details, titleVariant, ...others } = props;

        return (
            <Cell {...others}>
                <Text variant={titleVariant} marginBottom='m'>
                    {title}
                </Text>
                {details.map((item, index) => {
                    const isLastItem = index === details.length - 1;
                    return (
                        <Fragment key={item[0]}>
                            <DetailsRow title={item[0]} details={item[1]} marginBottom={isLastItem ? undefined : 's'} />
                            {isLastItem ? null : <Separator marginBottom='s' />}
                        </Fragment>
                    );
                })}
            </Cell>
        );
    }
);
