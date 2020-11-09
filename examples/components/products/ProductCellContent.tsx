import React, { memo } from 'react';
import { Product } from '../../models/Product';
import styled from 'styled-components/native';
import { Label } from '../Label';
import { Image } from 'react-native-expo-image-cache';
import { Image as WebImage, Platform } from 'react-native';

interface ProductCellProps {
    value: Product;
}

const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 12px;
`;

const StyledImage: any = styled(Platform.OS === 'web' ? WebImage : Image)`
    width: 100%;
    height: 100px;
    padding-bottom: 12px;
`;

const StyledLabel = styled(Label)`
    text-align: center;
    padding-bottom: 12px;
`;

export const ProductCellContent = memo(
    (props: ProductCellProps): JSX.Element => {
        const { value } = props;

        return (
            <>
                <Title>{value.name}</Title>
                <StyledImage resizeMode='contain' uri={value.imageURL} defaultSource={{ uri: value.imageURL }} />
                <StyledLabel>${value.price}</StyledLabel>
                <StyledLabel>{value.description}</StyledLabel>
            </>
        );
    }
);
