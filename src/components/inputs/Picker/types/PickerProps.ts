import { BoxProps } from '../../../baseComponents/BaseBox';

export interface PickerProps extends Omit<BoxProps, 'children'> {
    items: Array<[string, string]>;
    onChange?: (pair: [string, string]) => void;
    iosDoneText: string;
}
