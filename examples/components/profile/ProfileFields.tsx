import React from 'react';
import styled from 'styled-components/native';
import { ProfileField } from './ProfileField';

const Container = styled.KeyboardAvoidingView`
    flex-direction: column;
    margin: 12px;
`;

export function ProfileFields(): JSX.Element {
    return (
        <Container>
            <ProfileField title='Nombre Completo' />
            <ProfileField title='Correo' autoCapitalize='none' />
            <ProfileField title='Tipo de Usuario' editable={false} />
            <ProfileField title='Celular' keyboardType='numeric' />
        </Container>
    );
}
