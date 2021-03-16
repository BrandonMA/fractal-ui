/// <reference types="react" />
import { ButtonProps } from '../buttons/Button';
export declare type GoogleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
export declare function GoogleButton(props: GoogleButtonProps): JSX.Element;
