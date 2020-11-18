import { useRecoilValue } from 'recoil';
import { ordersAtom } from '../../atoms/orders/ordersAtom';
import { Order } from '../../models/Order';

export function useOrders(): Array<Order> {
    return useRecoilValue(ordersAtom);
}
