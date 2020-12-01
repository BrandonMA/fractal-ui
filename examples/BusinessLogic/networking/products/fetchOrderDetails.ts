import { mainURL } from '../../mainURL';
import { OrderItem } from '../../models/OrderItem';

export async function fetchOrderDetails(id: number): Promise<Array<OrderItem>> {
    const url = mainURL + `/order_details?id=${id}`;
    const response = await fetch(url);
    return (await response.json()) as Array<OrderItem>;
}
