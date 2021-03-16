/// <reference types="react" />
import { LayerProps } from '../containers/Layer/types';
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
export interface SocialMediaButtonsProps extends Partial<Omit<LayerProps, 'children'>>, SocialMediaButtonsEventsProps {
}
export declare function SocialMediaButtons({ onGooglePress, onFacebookPress, onApplePress, googleLoading, facebookLoading, appleLoading, appleText, removeAppleButton, ...others }: SocialMediaButtonsProps): JSX.Element;
