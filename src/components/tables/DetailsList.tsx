import React, { Fragment, memo, useCallback } from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { TitleColorVariant } from '../buttons/types/TitleColorVariant';
import { Cell } from '../containers/Cell';
import { Separator } from '../Separator';
import { Text } from '../Text';
import { DetailsRow } from './DetailsRow';

export interface DetailsListProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleVariant: TitleColorVariant | 'subtitle';
}

export const DetailsList = memo(
    ({ title, details, titleVariant, ...others }: DetailsListProps): JSX.Element => {
        const renderItem = useCallback(
            (item: [string, string], index: number) => {
                const isLastItem = index === details.length - 1;
                return (
                    <Fragment key={item[0]}>
                        <DetailsRow title={item[0]} details={item[1]} marginBottom={isLastItem ? undefined : 's'} />
                        {isLastItem ? null : <Separator marginBottom='s' />}
                    </Fragment>
                );
            },
            [details.length]
        );

        return (
            <Cell {...others}>
                <Text variant={titleVariant} marginBottom='m'>
                    {title}
                </Text>
                {details.map(renderItem)}
            </Cell>
        );
    }
);
