import { TextInputProps } from 'react-native';
interface BaseIconTextFieldProps extends TextInputProps {
    leftImage: (color: string, size: number) => JSX.Element;
}
export declare function BaseIconTextField(props: BaseIconTextFieldProps): JSX.Element;
export {};
