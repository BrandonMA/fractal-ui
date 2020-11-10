import React, { useCallback } from 'react';
import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentAddressAtom } from '../../atoms/products/currentAddressAtom';
import { Address } from '../../models/Address';
import { addressesAtom } from '../../atoms/products/addressesAtom';

const Container = styled.View`
    padding: 12px;
    background-color: white;
    margin: 12px;
    border-radius: 8px;
`;

const StyledPicker = styled(Picker)`
    width: 100%;
`;

function addressToString(address: Address) {
    return `${address.street}, ${address.district}, ${address.city}, ${address.state}, #${address.postalCode}`;
}

export function AddressPicker(): JSX.Element {
    const [currentAddress, setCurrentAddress] = useRecoilState(currentAddressAtom);
    const allAddresses = useRecoilValue(addressesAtom);
    const handleChangeAddress = useCallback(
        (itemValue) => {
            const item = allAddresses.find((address) => address.id === itemValue);
            if (item != null) {
                setCurrentAddress(item);
            }
        },
        [allAddresses]
    );

    return (
        <Container>
            <StyledPicker selectedValue={currentAddress.id} onValueChange={handleChangeAddress}>
                {allAddresses.map((address) => {
                    const value = addressToString(address);
                    return <Picker.Item label={value} value={address.id} key={address.id} />;
                })}
            </StyledPicker>
        </Container>
    );
}
