import { atom } from 'recoil';
import { Order } from '../../models/Order';

export const ordersAtom = atom({
    key: 'ordersAtom',
    default: Array<Order>()
});
