import { atom } from 'recoil';
import { mockOrders } from '../../data/mockOrders';

export const ordersAtom = atom({
    key: 'ordersAtom',
    default: mockOrders
});
