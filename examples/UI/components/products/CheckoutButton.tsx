import React, { useCallback } from 'react';
import { Alert, Platform } from 'react-native';
import { BaseButton } from '../../../../src/Layout/components';

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

    return <BaseButton backgroundColor='#005cb3' text='Generar Pedido' onPress={showAlert} />;
}
