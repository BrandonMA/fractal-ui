/// <reference types="react" />
import { ButtonVariant } from './buttons/ButtonVariant';
interface BadgeProps {
    children?: string;
    variant: ButtonVariant;
}
export declare function Badge({ children, variant }: BadgeProps): JSX.Element;
export {};
