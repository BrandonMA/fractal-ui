import React from 'react';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types/FractalTheme';
import { BaseCellProps } from '../Containers';
export interface BaseSummaryCellProps extends Omit<BaseCellProps, 'children'> {
    items: Array<[string, string, RequiredKeys<InteractiveColors>]>;
}
export declare const BaseSummaryCell: React.MemoExoticComponent<(props: BaseSummaryCellProps) => JSX.Element>;
