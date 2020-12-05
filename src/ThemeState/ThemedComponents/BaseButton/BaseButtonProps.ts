import { StyledButtonProps, StyledTextProps } from './Styles';
import { InteractiveItemsTheme } from '../../FractalTheme';
import { RequiredKeys } from 'utility-types';

export interface BaseButtonProps extends Partial<StyledButtonProps>, Partial<StyledTextProps> {
    text?: string;
    removeShadow?: boolean;
    colorStyle: RequiredKeys<InteractiveItemsTheme>;
}
