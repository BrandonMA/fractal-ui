import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { useHistory } from '../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';

const Text = styled.Text`
    color: #005cb3;
    font-weight: bold;
    text-align: center;
`;

export function ChangeAddressButton(): JSX.Element {
    const history = useHistory();
    const navigateToAddressSelector = useCallback(() => {
        history.push(tabRoutes.addressPicker);
    }, [history]);
    return (
        <TouchableOpacity onPress={navigateToAddressSelector}>
            <Text>Cambiar dirección</Text>
        </TouchableOpacity>
    );
}
