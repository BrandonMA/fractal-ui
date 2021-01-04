/// <reference types="react" />
import { BaseBoxProps } from './baseComponents/BaseBox';
export declare type SeparatorProps = Partial<Omit<BaseBoxProps, 'children'>>;
export declare function Separator(props: SeparatorProps): JSX.Element;
