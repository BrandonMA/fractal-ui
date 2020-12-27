import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types/FractalTheme';
import { InternalButtonProps } from './InternalButton/types/InternalButtonProps';
interface BaseButtonProps extends Omit<InternalButtonProps, 'textColor' | 'backgroundColor' | 'shadow'> {
    colorStyle: RequiredKeys<InteractiveColors>;
    useSoftBackground?: boolean;
}
export declare function BaseButton(props: BaseButtonProps): JSX.Element;
export {};
