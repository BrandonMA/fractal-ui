import { BaseButtonProps } from '../buttons/BaseButton/types';
export declare type BaseMediaButtonProps = Partial<Omit<BaseButtonProps, 'variant'>> & {
    loading?: boolean;
    activityIndicatorColor?: string;
};
export declare function BaseMediaButton({ loading, children, activityIndicatorColor, ...others }: BaseMediaButtonProps): JSX.Element;
