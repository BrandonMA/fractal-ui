import React from 'react';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { Order } from '../../models/Order';

const Container = styled.View`
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    width: 100%;
    padding: 12px 12px 0 12px;
    margin-bottom: 12px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 6px;
`;

const StyledLabel = styled(Label)`
    margin-bottom: 12px;
`;

interface Props {
    order: Order;
}

export function OrderCell(props: Props): JSX.Element {
    const { order } = props;
    return (
        <Container>
            <Title>Clave</Title>
            <StyledLabel>{order.id}</StyledLabel>
            <Title>Creado</Title>
            <StyledLabel>{order.creationDate.toISOString().slice(0, 10)}</StyledLabel>
            <Title>Distribuidor</Title>
            <StyledLabel>{order.distributor}</StyledLabel>
            <Title>Vendedor</Title>
            <StyledLabel>{order.vendor}</StyledLabel>
            <Title>Total</Title>
            <StyledLabel>${order.total}</StyledLabel>
            <Title>Clave SAP</Title>
            <StyledLabel>{order.key}</StyledLabel>
            <Title>Entrega</Title>
            <StyledLabel>{order.estimatedArrival.toISOString().slice(0, 10)}</StyledLabel>
            <Title>Estatus</Title>
            <StyledLabel>{order.status}</StyledLabel>
        </Container>
    );
}
