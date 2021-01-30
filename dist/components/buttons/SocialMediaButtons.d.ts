/// <reference types="react" />
import { BaseBoxProps } from '../baseComponents/BaseBox';
export interface SocialMediaButtonsEventsProps {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    googleLoading?: boolean;
    facebookLoading?: boolean;
    appleLoading?: boolean;
    appleText?: string;
    removeAppleButton?: boolean;
}
export interface SocialMediaButtonsProps extends Partial<Omit<BaseBoxProps, 'children'>>, SocialMediaButtonsEventsProps {
}
export declare function SocialMediaButtons({ onGooglePress, onFacebookPress, onApplePress, googleLoading, facebookLoading, appleLoading, appleText, removeAppleButton, ...others }: SocialMediaButtonsProps): JSX.Element;
