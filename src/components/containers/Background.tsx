import React from 'react';
import { FullScreen } from './FullScreen';
import { BaseBoxProps } from '../baseComponents/BaseBox';

export function Background(props: BaseBoxProps): JSX.Element {
    return <FullScreen backgroundColor='background' {...props} />;
}
