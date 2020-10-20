/// <reference types="react" />
import { ScreenStackHeaderConfigProps } from 'react-native-screens';
interface Props extends Omit<ScreenStackHeaderConfigProps, 'children'> {
    children?: JSX.Element | Array<JSX.Element>;
}
export declare function NavigationBar(props: Props): JSX.Element | null;
export {};
