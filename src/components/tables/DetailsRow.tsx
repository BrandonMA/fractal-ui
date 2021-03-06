import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { Text } from '../Text';

export interface DetailsRowProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    details: string;
}

export function DetailsRow({ title, details, ...others }: DetailsRowProps): JSX.Element {
    return (
        <HorizontalView alignItems='center' {...others}>
            <BaseBox flexGrow={1}>
                <Text variant='smallText'>{title}</Text>
            </BaseBox>
            <Text variant='label'>{details}</Text>
        </HorizontalView>
    );
}
