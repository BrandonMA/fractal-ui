import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { BoxProps } from './BaseBox';
export interface BasePressableProps extends Partial<Omit<BoxProps, 'children'>>, PressableProps {
    children?: ReactNode;
}
export declare function BasePressable(props: BasePressableProps): JSX.Element;
