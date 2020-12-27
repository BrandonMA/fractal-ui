export interface BasePickerProps {
    items: Array<[string, string]>;
    onChange?: (pair: [string, string]) => void;
    iosDoneText?: string;
}
