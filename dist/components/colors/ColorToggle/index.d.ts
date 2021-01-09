/// <reference types="react" />
import { BasePressableProps } from '../../baseComponents/BasePressable';
export interface ColorToggleProps extends Partial<Omit<BasePressableProps, 'backgroundColor'>> {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}
export declare function ColorToggle({ onActiveChange, backgroundColor, active, ...others }: ColorToggleProps): JSX.Element;
