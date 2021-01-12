/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
export interface SocialMediaButtonsProps extends Partial<Omit<BaseBoxProps, 'children'>> {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
    removeAppleButton?: boolean;
}
export declare function SocialMediaButtons({ onGooglePress, onFacebookPress, onApplePress, appleText, removeAppleButton, ...others }: SocialMediaButtonsProps): JSX.Element;
