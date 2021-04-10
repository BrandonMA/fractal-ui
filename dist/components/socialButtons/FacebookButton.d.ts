import { ButtonProps } from '../buttons/Button';
export declare type FacebookButtonProps = Partial<Omit<ButtonProps, 'variant'>> & {
    loading?: boolean;
};
export declare function FacebookButton(props: FacebookButtonProps): JSX.Element;
