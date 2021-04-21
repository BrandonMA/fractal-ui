import { Dispatch, SetStateAction } from 'react';
export interface UseControllableStateProps<T> {
    /**
     * The value to used in controlled mode
     */
    value?: T;
    /**
     * The initial value to be used, in uncontrolled mode
     */
    defaultValue?: T | (() => T);
    /**
     * The callback fired when the value changes
     */
    onChange?: (value: T) => void;
}
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, Dispatch<SetStateAction<T>>];
