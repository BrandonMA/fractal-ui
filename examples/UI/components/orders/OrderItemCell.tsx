import React from 'react';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { BasicCellContainer } from '../BasicCellContainer';
import { Pressable } from 'react-native';
import { OrderItem } from '../../../BusinessLogic/models/OrderItem';
import { Spacer } from '../../../../src/Layout/components';

const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 6px;
`;

interface Props {
    item: OrderItem;
    lastItem: boolean;
}

export function OrderItemCell(props: Props): JSX.Element {
    const { item, lastItem } = props;
    return (
        <Pressable>
            <BasicCellContainer lastItem={lastItem}>
                <Title>ID</Title>
                <Label>{item.id}</Label>
                <Spacer height={12} />
                <Title>Precio unitario</Title>
                <Label>{item.price_discount}</Label>
                <Spacer height={12} />
                <Title>Cantidad</Title>
                <Label>{item.quantity}</Label>
                <Spacer height={12} />
                <Title>Precio total</Title>
                <Label>{item.total_product}</Label>
            </BasicCellContainer>
        </Pressable>
    );
}
