/// <reference types="react" />
import { ScreenStackProps as Props } from 'react-native-screens';
export interface ScreenStackProps extends Props {
    children: JSX.Element;
}
export declare function ScreenStack(props: ScreenStackProps): JSX.Element;
