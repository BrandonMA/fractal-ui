import React from 'react';
import { Product } from '../../models/Product';
import styled from 'styled-components/native';
import { Label } from '../Label';

interface ProductCellProps {
    value: Product;
}

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

export function ProductCellContent(props: ProductCellProps): JSX.Element {
    const { value } = props;

    return (
        <>
            <Title>{value.name}</Title>
            <Image resizeMode='contain' source={{ uri: value.imageURL }} />
            <StyledLabel>${value.price}</StyledLabel>
            <StyledLabel>{value.description}</StyledLabel>
        </>
    );
}
