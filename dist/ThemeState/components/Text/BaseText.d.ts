import React from 'react';
import { TextType } from '../types';
import { InternalTextProps } from './InternalText';
interface BaseTextProps extends Omit<InternalTextProps, 'color'> {
    textType?: TextType;
}
export declare const BaseText: React.MemoExoticComponent<(props: BaseTextProps) => JSX.Element>;
export {};
