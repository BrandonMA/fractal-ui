import React from 'react';
import styled from 'styled-components/native';
import { Title } from './Title';
import { colors } from '../../../src/Colors';

const Container = styled.View`
    width: 100%;
    background-color: ${colors.white.base};
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
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
