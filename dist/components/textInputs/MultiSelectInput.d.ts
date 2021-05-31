import { IDEnabled } from './AutoComplete/types';
interface MultiSelectInputProps<T> {
    options: Array<T>;
    getOptionLabel: (option: T) => string;
    onSelect: (values: Array<T>) => void;
    onDeletePress: (item: T) => void;
    onClearPress: () => void;
    clearButtonText?: string;
    inputValue?: string;
    controllableSelectedOptions: Array<T>;
    onChangeText: (text: string) => void;
    onSubmitEditing: () => void;
    placeholder?: string;
}
export declare function MultiSelectInput<T extends IDEnabled>({ options, getOptionLabel, clearButtonText, onSelect, onClearPress, onDeletePress, inputValue, controllableSelectedOptions, onChangeText, onSubmitEditing, placeholder }: MultiSelectInputProps<T>): JSX.Element;
export {};
