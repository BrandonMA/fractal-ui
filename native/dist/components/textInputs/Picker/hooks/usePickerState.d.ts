export declare function usePickerState(initialValue: string | undefined, items: Array<[string, string]>, onChange?: (pair: [string, string]) => void, isReadOnly?: boolean): [string, (value: string, index: number) => void, number];
