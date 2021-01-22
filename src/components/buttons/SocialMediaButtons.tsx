import React from 'react';
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { HorizontalView } from '../containers/HorizontalView';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export interface SocialMediaButtonsEventsProps {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
    removeAppleButton?: boolean;
}

export interface SocialMediaButtonsProps extends Partial<Omit<BaseBoxProps, 'children'>>, SocialMediaButtonsEventsProps {}

export function SocialMediaButtons({
    onGooglePress,
    onFacebookPress,
    onApplePress,
    appleText,
    removeAppleButton,
    ...others
}: SocialMediaButtonsProps): JSX.Element {
    return (
        <BaseBox padding='cell' {...others}>
            <HorizontalView marginBottom='m'>
                <GoogleButton flex={1} onPress={onGooglePress} />
                <BaseBox width={16} />
                <FacebookButton flex={1} onPress={onFacebookPress} />
            </HorizontalView>
            {removeAppleButton ? null : <AppleButton onPress={onApplePress} text={appleText} />}
        </BaseBox>
    );
}
