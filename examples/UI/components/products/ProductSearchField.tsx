import React, { memo, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { productsSearchAtom } from '../../../BusinessLogic/atoms/filters/productsSearchAtom';
import { BaseTextInput } from '../../../../src/Layout/components/BaseTextInput';
import styled from 'styled-components/native';

const StyledTextInput = styled(BaseTextInput)`
    margin-bottom: 12px;
`;

export const ProductSearchField = memo(
    (): JSX.Element => {
        const [localText, setLocalText] = useState('');
        const setText = useSetRecoilState(productsSearchAtom);
        const handleSubmit = () => setText(localText);
        return <StyledTextInput placeholder='Buscar...' value={localText} onChangeText={setLocalText} onSubmitEditing={handleSubmit} />;
    }
);
