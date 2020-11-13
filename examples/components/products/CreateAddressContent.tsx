import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ProfileField } from '../profile/ProfileField';
import { useSetRecoilState } from 'recoil';
import { addressesAtom } from '../../atoms/products/addressesAtom';
import { Address } from '../../models/Address';
import { SafeAreaFullScreenScrollView, useHistory } from '../../../src';

const StyledSafeAreaFullScreenScrollView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f2f2f2;
`;

const Container = styled.KeyboardAvoidingView`
    flex-direction: column;
    margin: 12px;
`;

const Button = styled.TouchableOpacity`
    background-color: #005cb3;
    height: 44px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
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
                    <Text>Agregar dirección</Text>
                </Button>
            </Container>
        </StyledSafeAreaFullScreenScrollView>
    );
}
