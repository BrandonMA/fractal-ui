import React from 'react';
import { AppleButton } from './AppleButton';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { PaddedContainer } from '../containers/PaddedContainer';
import { HorizontalView } from '../containers/HorizontalView';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

interface SocialMediaButtonsProps extends Omit<BaseBoxProps, 'children'> {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
}

export function SocialMediaButtons(props: SocialMediaButtonsProps): JSX.Element {
    const { onGooglePress, onFacebookPress, onApplePress, appleText, ...others } = props;
    return (
        <PaddedContainer {...others}>
            <HorizontalView marginBottom='m'>
                <GoogleButton flexGrow={1} onPress={onGooglePress} />
                <BaseBox width={16} />
                <FacebookButton flexGrow={1} onPress={onFacebookPress} />
            </HorizontalView>
            <AppleButton onPress={onApplePress} text={appleText} />
        </PaddedContainer>
    );
}
