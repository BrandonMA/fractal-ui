import React from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { TitleButtonVariant } from '../buttons/types/TitleButtonVariant';
interface DetailsListProps extends Omit<BaseBoxProps, 'children'> {
    title: string;
    details: Array<[string, string]>;
    titleVariant: TitleButtonVariant | 'subtitle';
}
export declare const DetailsList: React.MemoExoticComponent<(props: DetailsListProps) => JSX.Element>;
export {};
