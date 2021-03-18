import { LayerProps } from '../containers/Layer/types';
export interface ColorToggleProps extends LayerProps {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}
export declare function ColorToggle({ onActiveChange, backgroundColor, active, ...others }: ColorToggleProps): JSX.Element;
