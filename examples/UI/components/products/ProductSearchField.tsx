import { SearchField } from './SearchField';
import React, { memo } from 'react';
import { useSetRecoilState } from 'recoil';
import { productsSearchAtom } from '../../../BusinessLogic/atoms/products/productsSearchAtom';

export const ProductSearchField = memo(
    (): JSX.Element => {
        const setText = useSetRecoilState(productsSearchAtom);
        return <SearchField placeholder='Buscar...' onChangeText={setText} />;
    }
);
