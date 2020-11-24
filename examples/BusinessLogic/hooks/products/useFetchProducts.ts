import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentProductPageAtom } from '../../atoms/products/currentProductPageAtom';
import { productsAtom } from '../../atoms/products/productsAtom';
import { fetchProducts } from '../../networking/products/fetchProducts';

export function useFetchProducts() {
    const currentProductPage = useRecoilValue(currentProductPageAtom);
    const setProducts = useSetRecoilState(productsAtom);
    useEffect(() => {
        fetchProducts(currentProductPage)
            .then((products) => {
                setProducts((currentProducts) => [...currentProducts, ...products]);
            })
            .catch((error) => alert(error.message));
    }, [currentProductPage]);
}
