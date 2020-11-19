import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentAddressAtom } from '../../../BusinessLogic/atoms/addresses/currentAddressAtom';
import { Address } from '../../../BusinessLogic/models/Address';
import { addressesAtom } from '../../../BusinessLogic/atoms/addresses/addressesAtom';
import { colors } from '../../../../src/Colors';
import { Picker, PickerItem } from '../Picker';
import { getHeight } from '../bills/util/getHeight';

const Container = styled.View`
    padding: 12px;
    background-color: ${colors.white.base};
    margin: 12px;
    border-radius: 8px;
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
            <Picker selectedValue={currentAddress.id} onValueChange={handleChangeAddress} itemStyle={{ height: getHeight() }}>
                {allAddresses.map((address) => {
                    const value = addressToString(address);
                    return <PickerItem label={value} value={address.id} key={address.id} />;
                })}
            </Picker>
        </Container>
    );
}
