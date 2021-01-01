import React from 'react';
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { HorizontalView } from '../containers/HorizontalView';
import { BaseBox } from '../baseComponents/BaseBox';

interface SocialMediaButtonsProps {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
}

export function SocialMediaButtons(props: SocialMediaButtonsProps): JSX.Element {
    const { onGooglePress, onFacebookPress, onApplePress, appleText } = props;
    return (
        <BaseBox padding='cell'>
            <HorizontalView marginBottom='m'>
                <GoogleButton flexGrow={1} onPress={onGooglePress} />
                <BaseBox width={16} />
                <FacebookButton flexGrow={1} onPress={onFacebookPress} />
            </HorizontalView>
            <AppleButton onPress={onApplePress} text={appleText} />
        </BaseBox>
    );
}
