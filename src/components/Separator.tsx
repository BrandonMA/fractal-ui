import React from 'react';
import { BaseBox, BaseBoxProps } from './baseComponents/BaseBox';

export type SeparatorProps = Partial<Omit<BaseBoxProps, 'children'>>;

export function Separator(props: SeparatorProps): JSX.Element {
    return <BaseBox backgroundColor='separatorColor' {...props} height={1} />;
}
