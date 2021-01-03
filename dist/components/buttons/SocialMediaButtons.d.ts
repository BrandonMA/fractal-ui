/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
interface SocialMediaButtonsProps extends Omit<BaseBoxProps, 'children'> {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
}
export declare function SocialMediaButtons(props: SocialMediaButtonsProps): JSX.Element;
export {};
