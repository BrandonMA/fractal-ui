import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types/FractalTheme';
import { InternalTextProps } from './InternalText';
export interface BaseColorTextProps extends Omit<InternalTextProps, 'color'> {
    colorStyle: RequiredKeys<InteractiveColors>;
}
export declare function BaseColorText(props: BaseColorTextProps): JSX.Element;
