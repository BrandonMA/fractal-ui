/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
export interface MessageProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    title: string;
    messageType?: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    icon?: (color: string) => JSX.Element;
    description: string;
}
export declare function Message({ messageType, title, icon, description, ...others }: MessageProps): JSX.Element;
