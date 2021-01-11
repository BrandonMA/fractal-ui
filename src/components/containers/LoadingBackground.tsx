import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { ActivityIndicator } from '../ActivityIndicator';

export type LoadingBackgroundProps = Partial<Omit<BaseBoxProps, 'children'>>;

export function LoadingBackground(props: LoadingBackgroundProps): JSX.Element {
    return (
        <BaseBox justifyContent={'center'} alignItems={'center'} flex={1} {...props}>
            <ActivityIndicator size={'large'} color={'textColor'} />
        </BaseBox>
    );
}
