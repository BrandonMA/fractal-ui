import { LayerProps } from '../containers/Layer/types';
export interface MessageProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    messageType?: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    icon?: (color: string) => JSX.Element;
    description: string;
}
export declare function Message({ messageType, title, icon, description, ...others }: MessageProps): JSX.Element;
