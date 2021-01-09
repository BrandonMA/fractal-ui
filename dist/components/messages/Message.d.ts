/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
export interface MessageProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    messageType: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    title: string;
    icon?: (color: string) => JSX.Element;
    description: string;
}
export declare function Message({ messageType, title, icon, description, ...others }: MessageProps): JSX.Element;
