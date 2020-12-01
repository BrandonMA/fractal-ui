import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ProfileField } from '../profile/ProfileField';
import { useSetRecoilState } from 'recoil';
import { addressesAtom } from '../../../BusinessLogic/atoms/addresses/addressesAtom';
import { Address } from '../../../BusinessLogic/models/Address';
import { BaseButton, BaseContainer, useHistory } from '../../../../src';
import { BackgroundScrollView } from '../BackgroundScrollView';

const Form = styled(BaseContainer)`
    margin-bottom: 12px;
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
        <BackgroundScrollView>
            <Container>
                <Form>
                    <ProfileField title='Calle' onChangeText={setStreet} />
                    <ProfileField title='Colonia' onChangeText={setDistrict} />
                    <ProfileField title='Código Postal' onChangeText={setPostalCode} />
                    <ProfileField title='Ciudad' onChangeText={setCity} />
                    <ProfileField title='Estado' onChangeText={setState} />
                </Form>
                <BaseButton backgroundColor='#005cb3' text='Agregar dirección' onPress={addAddress} />
            </Container>
        </BackgroundScrollView>
    );
}
