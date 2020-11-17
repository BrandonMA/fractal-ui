import { Dispatch, SetStateAction, useState } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { constants } from '../constants';

export function useInsets(defaultValue?: EdgeInsets): [EdgeInsets, Dispatch<SetStateAction<EdgeInsets>>] {
    return useState(defaultValue ?? constants.insetsZero);
}
