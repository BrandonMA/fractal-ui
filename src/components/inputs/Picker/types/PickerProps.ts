import { BaseBoxProps } from '../../../baseComponents/BaseBox';

export interface PickerProps extends Omit<BaseBoxProps, 'children'> {
    items: Array<[string, string]>;
    onChange?: (pair: [string, string]) => void;
    iosDoneText: string;
}
