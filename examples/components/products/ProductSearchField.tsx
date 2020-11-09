import { SearchField } from './SearchField';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { productsSearchAtom } from '../../atoms/products/productsSearchAtom';

export function ProductSearchField(): JSX.Element {
    const setText = useSetRecoilState(productsSearchAtom);
    return <SearchField placeholder='Buscar...' onChangeText={setText} />;
}
