import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ProfileField } from '../profile/ProfileField';
import { useSetRecoilState } from 'recoil';
import { addressesAtom } from '../../../BusinessLogic/atoms/addresses/addressesAtom';
import { Address } from '../../../BusinessLogic/models/Address';
import { SafeAreaFullScreenScrollView, useHistory } from '../../../../src';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

const StyledSafeAreaFullScreenScrollView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f2f2f2;
`;

const Container = styled.KeyboardAvoidingView`
    flex-direction: column;
    margin: 12px;
`;

export function CreateAddressContent(): JSX.Element {
    const [street, setStreet] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [state, setState] = useState('');
    const setAddresses = useSetRecoilState(addressesAtom);
    const history = useHistory();

    const addAddress = () => {
        const newAddress: Address = {
            id: `${Date.now()}`,
            street,
            district,
            city,
            postalCode,
            state
        };
        setAddresses((currentState) => [...currentState, newAddress]);
        history.goBack();
    };

    return (
        <StyledSafeAreaFullScreenScrollView>
            <Container>
                <ProfileField title='Calle' onChangeText={setStreet} />
                <ProfileField title='Colonia' onChangeText={setDistrict} />
                <ProfileField title='Código Postal' onChangeText={setPostalCode} />
                <ProfileField title='Ciudad' onChangeText={setCity} />
                <ProfileField title='Estado' onChangeText={setState} />
                <Button onPress={addAddress}>
                    <ButtonText>Agregar dirección</ButtonText>
                </Button>
            </Container>
        </StyledSafeAreaFullScreenScrollView>
    );
}
