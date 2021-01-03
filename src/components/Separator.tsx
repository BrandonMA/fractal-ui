import React from 'react';
import { BaseBox, BaseBoxProps } from './baseComponents/BaseBox';

export function Separator(props: Omit<BaseBoxProps, 'children'>): JSX.Element {
    return <BaseBox backgroundColor='separatorColor' {...props} height={1} />;
}
