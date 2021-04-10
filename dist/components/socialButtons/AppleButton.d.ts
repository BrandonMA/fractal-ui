import { ButtonProps } from '../buttons/Button';
export declare type AppleButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
export declare function AppleButton(props: AppleButtonProps): JSX.Element;
