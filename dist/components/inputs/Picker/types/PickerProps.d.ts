import { BoxProps } from '../../../baseComponents/BaseBox';
export interface PickerProps extends Partial<Omit<BoxProps, 'children'>> {
    items: Array<[string, string]>;
    onChange?: (pair: [string, string]) => void;
    iosDoneText?: string;
    disabled?: boolean;
    initialValue?: string;
}
