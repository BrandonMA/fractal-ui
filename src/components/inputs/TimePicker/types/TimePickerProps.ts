import { BoxProps } from '../../../baseComponents';

export interface TimePickerProps extends Omit<BoxProps, 'children'> {
    iosDoneText: string;
    onChange?: (date: Date) => void;
}
