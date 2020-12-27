import { ViewProps } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types/FractalTheme';
interface BaseRowProps extends Omit<ViewProps, 'children'> {
    title: string;
    details: string;
    colorStyle: RequiredKeys<InteractiveColors>;
}
export declare function BaseRow(props: BaseRowProps): JSX.Element;
export {};
