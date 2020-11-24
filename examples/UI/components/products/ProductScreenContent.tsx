import React from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { ProductCellContent } from './ProductCellContent';
import { Label } from '../Label';
import { ProductCounter } from './ProductCounter';

interface ProductCellProps {
    value: Product;
}

const ScrollView = styled.ScrollView`
    margin: 12px 12px 0 12px;
`;

const Container = styled.View`
    background-color: white;
    border-radius: 8px;
    padding: 12px 12px 0 12px;
    margin-bottom: 12px;
`;

const Content = styled.View`
    justify-content: center;
    align-items: center;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6px;
`;

export function ProductScreenContent(props: ProductCellProps): JSX.Element {
    const { value } = props;
    const details: Array<JSX.Element> = [];

    value.details.forEach((value, key) => {
        details.push(
            <Row key={key}>
                <Label>{key}:</Label>
                <Label>{value}</Label>
            </Row>
        );
    });

    return (
        <ScrollView {...props}>
            <Container>
                <Content>
                    <ProductCellContent value={props.value} />
                </Content>
                <Content>{details}</Content>
                <ProductCounter value={props.value} />
            </Container>
        </ScrollView>
    );
}
