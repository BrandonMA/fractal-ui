import { BoxProps } from '../../../baseComponents';

export interface TimePickerProps extends Partial<Omit<BoxProps, 'children'>> {
    iosDoneText: string;
    onChange?: (date: Date) => void;
}
