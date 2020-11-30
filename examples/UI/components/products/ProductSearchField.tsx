import { SearchField } from './SearchField';
import React, { memo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { productsSearchAtom } from '../../../BusinessLogic/atoms/filters/productsSearchAtom';

export const ProductSearchField = memo(
    (): JSX.Element => {
        const [localText, setLocalText] = useState('');
        const setText = useSetRecoilState(productsSearchAtom);
        const handleSubmit = () => setText(localText);
        return <SearchField placeholder='Buscar...' value={localText} onChangeText={setLocalText} onSubmitEditing={handleSubmit} />;
    }
);
