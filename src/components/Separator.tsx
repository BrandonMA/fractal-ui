import React from 'react';
import { BaseBox, BaseBoxProps } from './baseComponents/BaseBox';

export function Separator(props: Omit<BaseBoxProps, 'children'>): JSX.Element {
    return <BaseBox backgroundColor='background' {...props} height={1} />;
}
