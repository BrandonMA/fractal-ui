/// <reference types="react" />
interface DatePickerModalContentProps {
    date: Date;
    minDate?: Date;
    maxDate?: Date;
    onPickerValueChange: (_: any, selectedDate: Date) => void;
    iosDoneText?: string;
    onFinalValueChange: (date: Date) => void;
    onChange?: (date: Date) => void;
}
export declare function DatePickerModalContent({ date, minDate, maxDate, onPickerValueChange, iosDoneText, onFinalValueChange, onChange }: DatePickerModalContentProps): JSX.Element;
export {};
