import React from 'react';
import { BaseCellProps } from '../Containers/BaseCell';
interface BaseDetailsCellProps extends Omit<BaseCellProps, 'children'> {
    title: string;
    details: Array<[string, string]>;
}
export declare const BaseDetailsCell: React.MemoExoticComponent<(props: BaseDetailsCellProps) => JSX.Element>;
export {};
