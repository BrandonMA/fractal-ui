import React, { memo, useEffect, useState } from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { useParams } from '../../../../../../src';
import { fetchOrderDetails } from '../../../../../BusinessLogic/networking/products/fetchOrderDetails';
import { OrderItem } from '../../../../../BusinessLogic/models/OrderItem';
import { LoadingView } from '../../../../components/LoadingView';
import { OrderItemsList } from '../../../../components/orders/OrderItemsList';

interface Params {
    id: string;
}

interface Props {
    items: Array<OrderItem>;
}

const OrderDetailsContent = memo(
    (props: Props): JSX.Element => {
        return (
            <StackScreenContent>
                <OrderItemsList items={props.items} />
            </StackScreenContent>
        );
    }
);

export function OrderDetailsScreen(): JSX.Element {
    const { id } = useParams<Params>();
    const [orderItems, setOrderItems] = useState(Array<OrderItem>());

    useEffect(() => {
        fetchOrderDetails(Number(id)).then((items) => setOrderItems(items));
    }, [id]);

    return orderItems.length === 0 ? <LoadingView /> : <OrderDetailsContent items={orderItems} />;
}
