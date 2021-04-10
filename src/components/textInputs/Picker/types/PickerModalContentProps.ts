export interface PickerModalContentProps {
    onFinalIndexChange: (index: number) => void;
    items: Array<[string, string]>;
    onChange?: (pair: [string, string]) => void;
    iosDoneText?: string;
    initialValue?: string;
}
