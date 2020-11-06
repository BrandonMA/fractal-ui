import React from 'react';
import { Product } from '../../data/Product';
import styled from 'styled-components/native';
import { Label } from '../Label';

interface ProductCellProps {
    value: Product;
    index: number;
}

const Container = styled.View`
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    flex-grow: 1;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    ${(props: ProductCellProps) => (props.index % 2 === 0 ? 'margin-right: 6px' : 'margin-left: 6px')}
`;

const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 12px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100px;
    padding-bottom: 12px;
`;

const StyledLabel = styled(Label)`
    text-align: center;
    padding-bottom: 12px;
`;

export function ProductCell(props: ProductCellProps): JSX.Element {
    const { value } = props;
    return (
        <Container {...props}>
            <Title>{value.name}</Title>
            <Image resizeMode='contain' source={{ uri: value.imageURL }} />
            <StyledLabel>${value.price}</StyledLabel>
            <StyledLabel>{value.description}</StyledLabel>
        </Container>
    );
}
