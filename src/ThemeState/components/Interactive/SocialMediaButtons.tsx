import React from 'react';
import { HorizontalView, PaddingContainer, Spacer } from '../../../Layout';
import styled from 'styled-components/native';
import { GoogleButton } from './GoogleButton';
import { FacebookButton } from './FacebookButton';
import { AppleButton } from './AppleButton';

const StyledGoogleButton = styled(GoogleButton)`
    flex: 1;
`;

const StyledFacebookButton = styled(FacebookButton)`
    flex: 1;
`;

interface SocialMediaButtonsProps {
    onGooglePress?: () => void;
    onFacebookPress?: () => void;
    onApplePress?: () => void;
    appleText?: string;
}

export function SocialMediaButtons(props: SocialMediaButtonsProps): JSX.Element {
    const { onGooglePress, onFacebookPress, onApplePress, appleText } = props;
    return (
        <PaddingContainer>
            <HorizontalView>
                <StyledGoogleButton onPress={onGooglePress} />
                <Spacer width={16} />
                <StyledFacebookButton onPress={onFacebookPress} />
            </HorizontalView>
            <Spacer height={16} />
            <AppleButton onPress={onApplePress} text={appleText} />
        </PaddingContainer>
    );
}
