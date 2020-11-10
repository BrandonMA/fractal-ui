import React from 'react';
import styled from 'styled-components/native';
import { CheckoutButton } from './CheckoutButton';
import { useCheckoutData } from '../../hooks/products/useCheckoutData';
import { ChangeAddressButton } from './ChangeAdressButton';
import { Label } from '../Label';
import { useRecoilValue } from 'recoil';
import { currentAddressAtom } from '../../atoms/products/currentAddressAtom';

const Container = styled.View`
    flex-direction: column;
`;

const Row = styled.View`
    flex-direction: row;
    margin: 6px 12px;
    justify-content: space-between;
`;

const Text = styled.Text`
    font-weight: 700;
`;

const VerticalRow = styled.View`
    flex-direction: column;
    margin: 6px 12px;
    justify-content: flex-start;
    align-items: flex-start;
`;

export function CheckoutZone(): JSX.Element {
    const [total, iva, final] = useCheckoutData();
    const currentAddress = useRecoilValue(currentAddressAtom);
    return (
        <Container>
            <VerticalRow>
                <Label>
                    {currentAddress.street}, {currentAddress.district}, {currentAddress.city}, {currentAddress.state}, #
                    {currentAddress.postalCode}
                </Label>
                <ChangeAddressButton />
            </VerticalRow>
            <Row>
                <Text>SUBTOTAL</Text>
                <Text>${total}</Text>
            </Row>
            <Row>
                <Text>IVA 16%</Text>
                <Text>${iva}</Text>
            </Row>
            <Row>
                <Text>Total</Text>
                <Text>${final}</Text>
            </Row>
            <CheckoutButton />
        </Container>
    );
}
