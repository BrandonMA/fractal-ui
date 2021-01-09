import React from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { TitleButtonVariant } from '../buttons/types/TitleButtonVariant';
export interface DetailsListProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleVariant: TitleButtonVariant | 'subtitle';
}
export declare const DetailsList: React.MemoExoticComponent<({ title, details, titleVariant, ...others }: DetailsListProps) => JSX.Element>;
