import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
    color: #005cb3;
    text-align: right;
    font-size: 16px;
`;

export function SaveButton(): JSX.Element {
    return (
        <TouchableOpacity>
            <Text>Guardar</Text>
        </TouchableOpacity>
    );
}
