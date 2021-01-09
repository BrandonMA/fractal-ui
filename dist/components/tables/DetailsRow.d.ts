/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
export interface DetailsRowProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    details: string;
}
export declare function DetailsRow({ title, details, ...others }: DetailsRowProps): JSX.Element;
