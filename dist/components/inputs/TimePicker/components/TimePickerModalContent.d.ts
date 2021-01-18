/// <reference types="react" />
interface DatePickerModalContentProps {
    date: Date;
    onPickerValueChange: (_: any, selectedDate: Date) => void;
    iosDoneText?: string;
    onFinalValueChange: (date: Date) => void;
    onChange?: (date: Date) => void;
}
export declare function TimePickerModalContent({ date, onPickerValueChange, iosDoneText, onFinalValueChange, onChange }: DatePickerModalContentProps): JSX.Element;
export {};
