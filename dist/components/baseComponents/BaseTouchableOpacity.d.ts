import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BoxProps } from './BaseBox';
export interface BaseTouchableOpacityProps extends Partial<Omit<BoxProps, 'children'>>, TouchableOpacityProps {
    children: ReactNode;
}
export declare function BaseTouchableOpacity(props: BaseTouchableOpacityProps): JSX.Element;
