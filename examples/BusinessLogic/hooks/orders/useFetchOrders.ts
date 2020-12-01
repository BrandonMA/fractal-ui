import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ordersPageAtom } from '../../atoms/orders/ordersPageAtom';
import { fetchOrders } from '../../networking/orders/fetchOrders';
import { ordersAtom } from '../../atoms/orders/ordersAtom';

export function useFetchOrders(): boolean {
    const page = useRecoilValue(ordersPageAtom);
    const setOrders = useSetRecoilState(ordersAtom);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        fetchOrders(page).then((orders) => {
            setOrders((currentOrders) => [...currentOrders, ...orders]);
            if (page === 1) {
                setReady(true);
            }
        });
    }, [page]);

    return ready;
}
