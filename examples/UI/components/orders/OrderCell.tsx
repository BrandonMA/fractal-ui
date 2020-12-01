import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { Order } from '../../../BusinessLogic/models/Order';
import { BasicCellContainer } from '../BasicCellContainer';
import { Pressable } from 'react-native';
import { useHistory } from '../../../../src';

const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 6px;
`;

interface Props {
    order: Order;
    lastItem: boolean;
}

export function OrderCell(props: Props): JSX.Element {
    const { order, lastItem } = props;
    const history = useHistory();

    const handlePress = useCallback(() => {
        history.push(`/orders/${order.id}`);
    }, [history, order]);

    return (
        <Pressable onPress={handlePress}>
            <BasicCellContainer lastItem={lastItem}>
                <Title>Clave</Title>
                <Label>{order.clave}</Label>
            </BasicCellContainer>
        </Pressable>
    );
}
