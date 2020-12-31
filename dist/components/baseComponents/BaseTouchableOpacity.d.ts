import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
export interface BaseTouchableOpacityProps extends Omit<BaseBoxProps, 'children'>, TouchableOpacityProps {
    children: ReactNode;
}
export declare function BaseTouchableOpacity(props: BaseTouchableOpacityProps): JSX.Element;
