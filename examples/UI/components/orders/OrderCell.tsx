import React from 'react';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { Order } from '../../../BusinessLogic/models/Order';
import { BasicCellContainer } from '../BasicCellContainer';
import { useExpanded } from '../../hooks/useExpanded';
import { Pressable } from 'react-native';

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
    lastItem: boolean;
}

export function OrderCell(props: Props): JSX.Element {
    const { order, lastItem } = props;
    const [expanded, setExpanded] = useExpanded();
    return (
        <Pressable onPress={setExpanded}>
            <BasicCellContainer lastItem={lastItem}>
                <Title>Clave</Title>
                <StyledLabel>{order.id}</StyledLabel>
                {expanded ? (
                    <>
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
                    </>
                ) : null}
            </BasicCellContainer>
        </Pressable>
    );
}