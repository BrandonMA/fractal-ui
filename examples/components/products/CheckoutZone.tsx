import React from 'react';
import styled from 'styled-components/native';
import { CheckoutButton } from './CheckoutButton';
import { useCheckoutData } from '../../hooks/products/useCheckoutData';

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

export function CheckoutZone(): JSX.Element {
    const [total, iva, final] = useCheckoutData();
    return (
        <Container>
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
