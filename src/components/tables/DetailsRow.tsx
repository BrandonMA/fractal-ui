import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { Text } from '../Text';

interface DetailsRowProps extends Omit<BaseBoxProps, 'children'> {
    title: string;
    details: string;
}

export function DetailsRow(props: DetailsRowProps): JSX.Element {
    const { title, details, ...others } = props;
    return (
        <HorizontalView alignItems='center' {...others}>
            <BaseBox flexGrow={1}>
                <Text variant='smallText'>{title}</Text>
            </BaseBox>
            <Text variant='label'>{details}</Text>
        </HorizontalView>
    );
}
