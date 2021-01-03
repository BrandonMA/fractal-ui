import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function HorizontalView(props: BaseBoxProps): JSX.Element {
    return <BaseBox {...props} flexDirection='row' />;
}
