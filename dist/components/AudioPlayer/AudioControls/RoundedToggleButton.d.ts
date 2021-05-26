/// <reference types="react" />
import { ToggleButtonProps } from '../../buttons/ToggleButton';
interface RoundedToggleButtonProps extends Omit<ToggleButtonProps, 'variant'> {
    size?: number;
}
export declare function RoundedToggleButton({ size, ...others }: RoundedToggleButtonProps): JSX.Element;
export {};
