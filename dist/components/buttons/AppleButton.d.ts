/// <reference types="react" />
import { ButtonProps } from './types/ButtonProps';
export declare type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>>;
export declare function AppleButton(props: AppleButtonProps): JSX.Element;
