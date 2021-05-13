import React from 'react';
import { DropBoxProps } from './types';

export function Dropzone(props: DropBoxProps): JSX.Element {
    console.log(props);
    console.log('Dropzone should only be used on Web, not on iOS or Android');
    return <></>;
}
