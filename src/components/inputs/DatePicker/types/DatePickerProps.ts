import { BoxProps } from '../../../baseComponents';

export interface DatePickerProps extends Omit<BoxProps, 'children'> {
    initialDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    iosDoneText: string;
    onChange?: (date: Date) => void;
}
