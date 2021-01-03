/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
interface MessageProps extends Omit<BaseBoxProps, 'children'> {
    messageType: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    title: string;
    icon?: (color: string) => JSX.Element;
    description: string;
}
export declare function Message(props: MessageProps): JSX.Element;
export {};
