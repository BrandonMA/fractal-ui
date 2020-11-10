import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useHistory } from '../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';

const Button = styled.TouchableOpacity`
    background-color: #005cb3;
    height: 44px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;

export function SearchButton(): JSX.Element {
    const history = useHistory();
    const search = useCallback(() => {
        history.push(`${tabRoutes.bills}/2020`);
    }, []);

    return (
        <Button onPress={search}>
            <Text>Buscar estados de cuenta</Text>
        </Button>
    );
}
