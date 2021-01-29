import { BoxProps } from '../../../baseComponents';

export interface DatePickerProps extends Partial<Omit<BoxProps, 'children'>> {
    initialDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    iosDoneText: string;
    mode?: 'time' | 'date';
    onChange?: (date: Date) => void;
}
