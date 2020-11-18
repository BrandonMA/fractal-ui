import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
    margin: 12px;
`;

export function HelpContent(): JSX.Element {
    return (
        <Container>
            <Text>
                Bienvenido a la página de soporte, aquí encontrará información relacionada a nuestra aplicación para la creación de pedidos
                en línea. En cada página se describen las acciones que puede realizar dependiendo de la sección donde se encuentre y los
                permisos que tenga. Si no encuentra información relacionada a su duda, por favor contáctenos al siguiente correo:
                soporteapp@windsor.com.mx
            </Text>
        </Container>
    );
}
