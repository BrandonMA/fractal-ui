import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function PaddedContainer(props: BaseBoxProps): JSX.Element {
    return <BaseBox paddingTop='m' paddingRight='m' paddingLeft='m' {...props} />;
}
