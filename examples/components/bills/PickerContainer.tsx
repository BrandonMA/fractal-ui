import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 8px;
`;

interface Props {
    children: JSX.Element;
    title: string;
}

export function PickerContainer(props: Props): JSX.Element {
    return (
        <Container>
            <Title>{props.title}</Title>
            {props.children}
        </Container>
    );
}
