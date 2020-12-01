import { mainURL } from '../../mainURL';
import { Order } from '../../models/Order';

export async function fetchOrders(page: number): Promise<Array<Order>> {
    const hardCodedUser = 10;
    const url = mainURL + `/orders?page=${page}&user=${hardCodedUser}`;
    const response = await fetch(url);
    return (await response.json()) as Array<Order>;
}
