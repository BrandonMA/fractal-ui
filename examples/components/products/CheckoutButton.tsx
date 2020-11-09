import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { Alert, Platform } from 'react-native';

const Button = styled.TouchableOpacity`
    background-color: #005cb3;
    height: 44px;
    margin: 12px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;

export function CheckoutButton(): JSX.Element {
    const showAlert = useCallback(() => {
        const title = 'Confirmación del pedido';
        const message = 'Al confirmar el pedido usted acepta las condiciones de compra.\n¿Desea continuar?';
        if (Platform.OS === 'web') {
            alert(title);
        } else {
            Alert.alert(
                title,
                message,
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                        onPress: () => {}
                    },
                    {
                        text: 'Confirmar',
                        style: 'default',
                        onPress: () => {}
                    }
                ],
                {
                    cancelable: false
                }
            );
        }
    }, []);

    return (
        <Button onPress={showAlert}>
            <Text>Generar Pedido</Text>
        </Button>
    );
}
