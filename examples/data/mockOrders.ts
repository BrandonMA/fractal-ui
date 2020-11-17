import { Order } from '../models/Order';

export const mockOrders: Array<Order> = [
    {
        id: '1',
        creationDate: new Date('Aug 9, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 300,
        key: 'laksdnlkndaldknalsknaldkno1hbodubhsdua',
        estimatedArrival: new Date(),
        status: 'En camino'
    },
    {
        id: '2',
        creationDate: new Date('Aug 8, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 100,
        key: 'dasdasdasdkmasldkma',
        estimatedArrival: new Date(),
        status: 'En camino'
    },
    {
        id: '3',
        creationDate: new Date('Aug 7, 2020'),
        distributor: 'Windsor',
        vendor: 'Windsor',
        total: 500,
        key: 'qiwejqowijeqoiwjeoqi',
        estimatedArrival: new Date('Aug 8, 2020'),
        status: 'Entregado'
    }
];
