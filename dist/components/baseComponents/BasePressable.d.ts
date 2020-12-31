import { ReactNode } from 'react';
import { PressableProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
export interface BasePressableProps extends Omit<BaseBoxProps, 'children'>, PressableProps {
    children?: ReactNode;
}
export declare function BasePressable(props: BasePressableProps): JSX.Element;
