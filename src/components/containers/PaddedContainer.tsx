import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function PaddedContainer(props: BaseBoxProps): JSX.Element {
    return <BaseBox paddingTop='paddedContainer' paddingRight='paddedContainer' paddingLeft='paddedContainer' {...props} />;
}
