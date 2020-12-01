import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productsPageAtom } from '../../atoms/products/productsPageAtom';
import { productsAtom } from '../../atoms/products/productsAtom';
import { fetchProducts } from '../../networking/products/fetchProducts';
import produce from 'immer';

export function useFetchProducts() {
    const currentProductPage = useRecoilValue(productsPageAtom);
    const setProducts = useSetRecoilState(productsAtom);
    useEffect(() => {
        const abortController = new AbortController();
        fetchProducts(currentProductPage)
            .then((newProducts) => {
                setProducts((currentProducts) =>
                    produce(currentProducts, (draft) => {
                        newProducts.forEach((value, key) => {
                            draft.set(key, value);
                        });
                    })
                );
            })
            .catch((error) => alert(error.message));

        return () => {
            abortController.abort();
        };
    }, [currentProductPage]);
}
