/// <reference types="react" />
import { ActivityIndicatorProps as BaseActivityIndicatorProps } from 'react-native';
import { FractalThemeColors } from '../themes/FractalThemeColors';
import { RequiredKeys } from 'utility-types';
interface ActivityIndicatorProps extends Omit<BaseActivityIndicatorProps, 'color'> {
    color?: RequiredKeys<FractalThemeColors>;
}
export declare function ActivityIndicator({ color, ...others }: ActivityIndicatorProps): JSX.Element;
export {};
