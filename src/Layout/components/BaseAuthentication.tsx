import React, { useCallback, useState } from 'react';
import { BaseContainer } from './BaseContainer';
import { BaseButton } from './BaseButton';
import { BaseTextInput } from './BaseTextInput';
import { BaseLabel } from './BaseLabel';
import styled from 'styled-components/native';
import { BaseLabelButton } from './BaseLabelButton';
import { Spacer } from './Spacer';
import { FullScreen } from './FullScreen';
import { SafeAreaFullScreenScrollView } from './SafeAreaFullScreenScrollView';
import { colors } from '../../Colors';

interface BaseAuthenticationProps {
    email: string;
    password: string;
    signIn: string;
    signUp: string;
    swapToSignUp: string;
    swapToSignIn: string;
    onSignIn: () => void;
    onSignUp: () => void;
}

type AuthenticationType = 'signIn' | 'signUp';

function getValue<T>(signIn: T, signUp: T, type: AuthenticationType): T {
    if (type === 'signIn') {
        return signIn;
    } else {
        return signUp;
    }
}

const StyledFullScreen = styled(FullScreen)`
    background-color: ${colors.white.base400};
`;

const StyledContainer = styled(BaseContainer)`
    margin: 12px;
`;

const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export function BaseAuthentication(props: BaseAuthenticationProps): JSX.Element {
    const { onSignIn, onSignUp, signIn, signUp, swapToSignIn, swapToSignUp } = props;
    const [type, setType] = useState<AuthenticationType>('signIn');

    const toggleType = useCallback(() => {
        setType((currentType) => (currentType === 'signIn' ? 'signUp' : 'signIn'));
    }, [setType]);

    const handleButtonPress = getValue(onSignIn, onSignUp, type);

    return (
        <StyledFullScreen>
            <SafeAreaFullScreenScrollView>
                <StyledContainer>
                    <BaseTextInput placeholder={props.email} />
                    <Spacer height={12} width={1} />
                    <BaseTextInput placeholder={props.password} />
                    <Spacer height={12} width={1} />
                    <BaseButton text={getValue(signIn, signUp, type)} onPress={handleButtonPress} />
                    <Spacer height={12} width={1} />
                    <RowContainer>
                        <BaseLabel>{getValue(swapToSignUp, swapToSignIn, type)} </BaseLabel>
                        <BaseLabelButton onPress={toggleType}>{getValue(signUp, signIn, type)}</BaseLabelButton>
                    </RowContainer>
                </StyledContainer>
            </SafeAreaFullScreenScrollView>
        </StyledFullScreen>
    );
}
