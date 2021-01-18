import { BoxProps } from '../../../baseComponents/BaseBox';
import { PickerModalContentProps } from './PickerModalContentProps';

export interface PickerProps extends Partial<Omit<BoxProps, 'children'>>, Omit<PickerModalContentProps, 'onFinalIndexChange'> {
    disabled?: boolean;
}
