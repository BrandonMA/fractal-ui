/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
interface DetailsRowProps extends Omit<BaseBoxProps, 'children'> {
    title: string;
    details: string;
}
export declare function DetailsRow(props: DetailsRowProps): JSX.Element;
export {};
