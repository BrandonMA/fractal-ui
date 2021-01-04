/// <reference types="react" />
import { ButtonProps } from './types/ButtonProps';
export declare type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>>;
export declare function GoogleButton(props: GoogleButtonProps): JSX.Element;
