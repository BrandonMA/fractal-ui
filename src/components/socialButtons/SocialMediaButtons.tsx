import React from 'react';
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { LayerProps } from '../containers/Layer/types';
import { Layer } from '../containers';
import { useTheme } from '../../core/context/hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';

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

export interface SocialMediaButtonsProps extends Partial<Omit<LayerProps, 'children'>>, SocialMediaButtonsEventsProps {}

export function SocialMediaButtons({
    onGooglePress,
    onFacebookPress,
    onApplePress,
    googleLoading,
    facebookLoading,
    appleLoading,
    appleText,
    removeAppleButton,
    ...others
}: SocialMediaButtonsProps): JSX.Element {
    const { spacings } = useTheme();
    return (
        <Layer padding={spacings.m} {...others}>
            <HorizontalLayer marginBottom={spacings.m}>
                <GoogleButton loading={googleLoading} flex={1} onPress={onGooglePress} />
                <Layer width={16} />
                <FacebookButton loading={facebookLoading} flex={1} onPress={onFacebookPress} />
            </HorizontalLayer>
            {removeAppleButton ? null : <AppleButton loading={appleLoading} onPress={onApplePress} text={appleText} />}
        </Layer>
    );
}
