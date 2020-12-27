import { ViewProps } from 'react-native';
interface BaseCompactRowProps extends Omit<ViewProps, 'children'> {
    title: string;
    details: string;
}
export declare function BaseCompactRow(props: BaseCompactRowProps): JSX.Element;
export {};
