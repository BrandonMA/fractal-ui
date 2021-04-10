import { LayerProps } from '../../../containers/Layer/types';
export interface DatePickerProps extends Partial<Omit<LayerProps, 'children'>> {
    initialDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    iosDoneText: string;
    mode?: 'time' | 'date';
    onChange?: (date: Date) => void;
}
