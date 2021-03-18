import { AnimationProps, FractalSharedProps } from '../sharedProps';
interface CloseButtonProps extends FractalSharedProps, AnimationProps {
    onPress?: () => void;
}
export declare function CloseButton(props: CloseButtonProps): JSX.Element;
export {};
