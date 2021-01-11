import React from 'react';
import { BaseBoxProps } from '../baseComponents/BaseBox';
import { TitleColorVariant } from '../buttons/types/TitleColorVariant';
export interface DetailsListProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    details: Array<[string, string]>;
    titleVariant: TitleColorVariant | 'subtitle';
}
export declare const DetailsList: React.MemoExoticComponent<({ title, details, titleVariant, ...others }: DetailsListProps) => JSX.Element>;
