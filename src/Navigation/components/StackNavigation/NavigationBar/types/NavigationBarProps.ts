import { ScreenStackHeaderConfigProps } from 'react-native-screens';

export interface NavigationBarProps extends Omit<ScreenStackHeaderConfigProps, 'children'> {
    children?: JSX.Element | Array<JSX.Element>;
}
