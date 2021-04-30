import { Dispatch, SetStateAction } from 'react';
import { UseControllableStateProps } from '../../../hooks/useControllableState';
export declare function useControllableState<T>(props: UseControllableStateProps<T>): [T, Dispatch<SetStateAction<T>>];
