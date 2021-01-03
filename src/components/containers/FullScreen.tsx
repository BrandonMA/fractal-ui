import React from 'react';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function FullScreen(props: BaseBoxProps): JSX.Element {
    return <BaseBox {...props} flexGrow={1} />;
}
