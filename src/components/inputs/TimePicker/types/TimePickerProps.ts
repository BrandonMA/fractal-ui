import { BoxProps } from '../../../baseComponents';

export interface TimePickerProps extends Partial<Omit<BoxProps, 'children'>> {
    iosDoneText: string;
    initialDate?: Date;
    onChange?: (date: Date) => void;
}
