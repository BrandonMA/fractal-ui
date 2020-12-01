import React from 'react';
import styled from 'styled-components/native';
import { Title } from './Title';
import { BaseContainer } from '../../../src/Layout/components';

const Container = styled(BaseContainer)`
    width: 100%;
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
